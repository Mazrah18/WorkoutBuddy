# Workout Buddy

## Functionality
- **Signin:** Allows users to sign in to their accounts.
- **Signup:** Enables users to create new accounts with a randomly assigned amount between 1 and 10,000.
- **Add Workouts:** Provides a feature to add workouts for each user using the form provided.
- **Delete Workouts:** Allows users to delete workouts.
- **Authentication and Session Management using JWT:** Utilizes JSON Web Tokens for authentication and managing user sessions.
- **Persistent Login:** Stores access tokens in memory and refresh tokens in HttpOnly cookies.
- **Automatic Access Token Renewal:** Refreshes the access token automatically upon expiry.

## Tech Stack

### Frontend:
- Built with React and Hosted on netlify at [app.digitaldime.win](https://app.digitaldime.win).
- Hosted on Vercel at [app.digitaldime.win](https://app.digitaldime.win).

### Backend:
- Developed using Express.js and Node.js, with MongoDB for data storage.
- Hosted on Vercel at [https://parth-workout-app.netlify.app/](https://parth-workout-app.netlify.app/).

## Running Locally

- clone the `repo`
- cd `repo`
- cd backend
- npm i
- npm run build
- open new terminal
- cd ../frontend
- npm i
- npm run start
- frontend runs on `localhost:3000`
- backend runs on `localhost:4000`

# Environment Variables

Ensure to add the following environment variables in a `.env` file within the `backend` directory:

- `MONGO_URI`: MongoDB connection string.
- `SECRET`: random key needed for JWT authentication.
- `PORT`: Port number for the backend server (default: 4000).

