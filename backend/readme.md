# Miragelancer Backend

This is the backend repository for Miragelancer, a MERN stack freelancing platform.

## Technologies Used

- Node.js
- Express.js
- MongoDB (via Mongoose)
- Firebase Authentication

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your local machine
- MongoDB Atlas account (or local MongoDB setup)
- Firebase project for authentication setup

## Getting Started

To get a local copy up and running, follow these simple steps:

### Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Configuration

1. Create a `.env` file in the `backend/` directory and add your environment variables:

   ```plaintext
   PORT=3001
   MONGODB_URI=<your_mongodb_uri>
   FIREBASE_API_KEY=<your_firebase_api_key>
   FIREBASE_AUTH_DOMAIN=<your_firebase_auth_domain>
   FIREBASE_PROJECT_ID=<your_firebase_project_id>
   ```

   Replace `<your_mongodb_uri>`, `<your_firebase_api_key>`, `<your_firebase_auth_domain>`, and `<your_firebase_project_id>` with your actual MongoDB connection URI and Firebase project credentials.

2. Modify `index.js` or `config/` files as necessary for additional configuration.

### Running the Server

- To start the server in development mode with `nodemon`:

  ```bash
  npm run dev
  ```

- To start the server in production mode:

  ```bash
  npm start
  ```

The server will start running on `http://localhost:3001` (or the port specified in your `.env` file).

### Folder Structure

```
backend/
├── controllers/
├── models/
├── routes/
├── config/
├── middleware/
├── index.js
├── .env
└── package.json
```

- **controllers/**: Contains logic to handle different routes.
- **models/**: MongoDB schemas defined using Mongoose.
- **routes/**: Express Router for API endpoints.
- **config/**: Configuration files (e.g., MongoDB connection setup, Firebase configuration).
- **middleware/**: Custom middleware functions.
- **server.js**: Entry point for your Node.js server.
- **.env**: Environment variables for configuration.

### API Endpoints

Document your API endpoints here with example requests and responses:

#### Authentication

- `POST /api/auth/signup`
  - Description: Register a new user (freelancer or client)
  - Request body:
    ```json
    {
      "email": "user@example.com",
      "password": "password123"
    }
    ```
  - Response:
    ```json
    {
      "success": true,
      "message": "User registered successfully"
    }
    ```

#### Jobs

- Include endpoints for job postings, applications, messaging, payments, ratings, etc.

### Deployment

- Deploy your backend to a hosting platform (e.g., Heroku, AWS) following their deployment instructions.

### License

This project is licensed under the MIT License - see the LICENSE file for details.