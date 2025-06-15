import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TripData } from '../services/trip-data';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.html',
  styleUrls: ['./edit-trip.css']
})
export class EditTripComponent implements OnInit {
  public editForm!: FormGroup;
  trip!: Trip;
  submitted = false;
  message: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripDataService: TripData
  ) {}

  ngOnInit(): void {
    // Retrieve stashed trip ID
    const tripCode = localStorage.getItem('tripCode');
    if (!tripCode) {
      alert("Something went wrong, couldn't find where I stashed tripCode!");
      this.router.navigate(['']);
      return;
    }

    console.log('EditTripComponent::ngOnInit');
    console.log('tripCode: ' + tripCode);

    // Initialize the form
    this.editForm = this.formBuilder.group({
      _id: [], // optional if you use id for backend
      code: [tripCode, Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });

    // Fetch trip data to populate form
    this.tripDataService.getTrip(tripCode).subscribe({
      next: (value: any) => {
        this.trip = value;
        if (!value || value.length === 0) {
          this.message = 'No Trip Retrieved!';
        } else {
          // patchValue expects an object, value[0] if backend returns array
          this.editForm.patchValue(value[0]);
          this.message = 'Trip: ' + tripCode + ' retrieved';
        }
        console.log(this.message);
      },
      error: (error: any) => {
        console.error('Error retrieving trip:', error);
      }
    });
  }

  get f() {
    return this.editForm.controls;
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.editForm.valid) {
      this.tripDataService.updateTrip(this.editForm.value).subscribe({
        next: (value: any) => {
          console.log('Update success:', value);
          this.router.navigate(['']);
        },
        error: (error: any) => {
          console.error('Update error:', error);
        }
      });
    }
  }
}
