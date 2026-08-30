/**
 * Firebase initialization and configuration
 *
 * Firebase config values come from Vite environment variables.
 * These are PUBLIC values (safe to expose in frontend code) —
 * security is enforced by Firebase Authentication + Firestore Security Rules.
 *
 * Setup: Copy .env.example → .env, fill in your Firebase project's config.
 */
import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Check if Firebase is configured (all values present and non-placeholder)
function isFirebaseConfigured(): boolean {
  const required = [
    firebaseConfig.apiKey,
    firebaseConfig.authDomain,
    firebaseConfig.projectId,
    firebaseConfig.appId,
  ];
  return required.every(
    (v) =>
      typeof v === "string" &&
      v.length > 0 &&
      !v.startsWith("YOUR_") &&
      v !== "undefined"
  );
}

export const FIREBASE_ENABLED = isFirebaseConfigured();

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;

if (FIREBASE_ENABLED) {
  try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
  } catch (err) {
    console.error("Firebase initialization failed:", err);
  }
}

export { app, auth, db };
