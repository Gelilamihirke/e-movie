🎬 e-movie

A fully responsive e-movie application built using React, Firebase for authentication, and Vite as the build tool. The app allows users to browse movie lists, view details, and log in via email authentication.

📌 Features


Responsive UI: Adjusts seamlessly across various screen sizes and devices.
Browse Movies: Displays a list of movies fetched from a movie API.
Movie Details: Shows detailed information about a selected movie, including description, ratings, etc.
User Authentication: Powered by Firebase (Email sign-in, sign-out).
React Router: Dynamic routing between pages.


🛠️ Tech Stack


Frontend: React, React Router, CSS/Bootstrap
Backend: Firebase (Authentication)
Build Tool: Vite
API: TMDB API


📂 Project Structure


bash
Copy code
├── public               # Public assets
├── src
│   ├── components       # Reusable UI components
│   ├── pages            # Pages like Home, Movie Details, Login
│   ├── context          # Firebase & auth context
│   ├── hooks            # Custom hooks
│   ├── App.js           # Main component
│   └── index.js         # React entry point
├── .env                 # Environment variables (API keys, Firebase config)
├── .eslintrc.js         # Linting configuration
├── package.json         # Project metadata and dependencies
├── vite.config.js       # Vite build configuration
└── README.md            # Project overview
🚀 Getting Started
Prerequisites
Node.js (v14 or above)
Firebase Account (for authentication)
TMDB API Key (for fetching movies)
Installation
Clone the repository

bash
Copy code
git clone https://github.com/Gelilamihirke/e-movie.git
Navigate to the project directory

bash
Copy code
cd e-movie
Install dependencies

bash
Copy code
npm install
Set up Firebase

Create a project in Firebase.
Enable Email/Password Authentication.
Grab your Firebase config from the Firebase Console and create a .env file:
bash
Copy code
REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
Add TMDB API Key

Sign up for a TMDB API key from TMDB.
Add your key to the .env file:
bash
Copy code
REACT_APP_TMDB_API_KEY=your-tmdb-api-key
Run the Project
Development mode

bash
Copy code
npm run dev
Build for production

bash
Copy code
npm run build
Preview the production build

bash
Copy code
npm run preview


🔑 Firebase Configuration


You need to add your Firebase credentials in .env as mentioned above. Here's an example Firebase setup inside your app:

js
Copy code
// src/context/Firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

📦 Deployment

Netlify
Push your code to GitHub.
Connect your repository to Netlify.
Set the build command as npm run build.
Set the publish directory to dist/.
Firebase Hosting
Install Firebase CLI globally:
bash
Copy code
npm install -g firebase-tools
Initialize Firebase hosting:
bash
Copy code
firebase init
Deploy the app:
bash
Copy code
firebase deploy

🛠️ Future Enhancements

Add payment gateway (Stripe) for subscription models.
Implement more user-friendly features like watchlists, movie recommendations, and profile settings.
Use Firebase Firestore for saving user data.

📄 License

This project is licensed under the MIT License.
