# URL Shortener Service

Design a URL Shortener service that takes a valid URL as input and returns a shortened URL, allowing users to easily share and access long URLs. The service also tracks the total number of visits/clicks on each shortened URL.

## Features

- Generate Short URLs: Convert long URLs into short, easy-to-share URLs.
- Redirect Functionality: Users are redirected to the original URL when accessing short URLs.
- Analytics Tracking: Track and display analytics for each shortened URL, including total visits/clicks.


## Technologies Used

- Node.js: Backend runtime environment
- Express.js: Web application framework for building APIs
- MongoDB: NoSQL database for storing URL entries and analytics data
- Mongoose: ODM library for MongoDB
- Short-Unique-ID: Library for generating unique short IDs


## Getting Started

To get started with the URL Shortener service, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the server using `npm start`.

## API Endpoints
- POST /url: Generate a new short URL from a provided long URL.
- GET /:shortId: Redirect to the original URL associated with the provided short ID.
- GET /url/analytics/:shortId: Retrieve analytics data for the specified short URL.

## Contributing
Contributions to the URL Shortener service are welcome! If you find any bugs, have feature requests, or want to contribute improvements, please open an issue or submit a pull request.