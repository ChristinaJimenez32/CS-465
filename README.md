# CS-465

Architecture

Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
Why did the backend use a NoSQL MongoDB database?

For the Travlr project, I used both traditional Express with HTML/JavaScriptand SPA built with Angular for the frontend, this allowed user to interact with the page, and enabled actions to be sent as requests. The Express approach involved server rendered HTML pages and required full reloads for navigation. In contrast, the Angular SPA provided a smoother, more interactive experience by handling routing and updates on the client side without reloading the page, but maybe was bit slower during inital load times. For the backend, I used a NoSQL MongoDB database becaus it was good for the data stored, such as user info and trip info.







Functionality

How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

JSON is a data format used to structure and exchange information, whereas JavaScript is a programming language used to create dynamic web applications. JSON is used to tie the frontend and backend together by serving as the format for data sent in API requests and responses.For example, in the Travlr app the frontend requests trip data, the backend responds with that data in JSON. In my project, I refactored backend routes to remove duplicated logic and improved the frontend by turning repeated UI elements into reusable Angular components, which in turn made the code more efficient, easier to maintain, and consistent across the application.


Testing

Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

In a full stack application, methods like GET, POST, PUT, and DELETE define how data is requested or modified through API endpoints. Endpoints are specific paths on the backend server that handle these requests, such as /api/trips or /api/users. Testing these endpoints is essential to ensure they return the correct data and handle errors properly. I tested on the page itself but also usinh Postman.


Reflection

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course has helped me grow both technically and professionally. I’ve learned how to build and connect the frontend and backend of a web application, work with databases like MongoDB, and use tools like Postman for testing. I also improved my ability to write clean, maintainable code and gained confidence in using frameworks like Angular and Express. These skills make me a stronger candidate for roles in web development, although I specialize in data analytics, this has sharpened my problem solving skills, which will in turn benefit my career.
