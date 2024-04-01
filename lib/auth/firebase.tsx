// Import the functions you need from the SDKs you need
"use client";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  Auth,
  UserCredential,
  User,
} from "firebase/auth";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { GenericIconProps } from "@/components/Icons/IconGeneric";
import {
  Provider,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6q7IVdAD74n4HN-_kNf0zlY43h3L1Khc",
  authDomain: "readingtracker-13dfa.firebaseapp.com",
  projectId: "readingtracker-13dfa",
  storageBucket: "readingtracker-13dfa.appspot.com",
  messagingSenderId: "655788769547",
  appId: "1:655788769547:web:464feec2a10692074d220e",
  measurementId: "G-Y9XL2MV5TC",
};

// Initialize Firebase

type FirebaseAuthClass = {
  signInWithGoogle: () => void;
  GoogleSignIn: React.FC;
  AuthProvider: React.FC<AuthProviderProps>;
};

type AuthProviderProps = {
  children: React.ReactNode;
};
type AuthServiceType = {
  auth: Auth;
  provider: GoogleAuthProvider;
  user: User | null;
};
type AuthStateType = {
  AuthService: AuthServiceType | null;
  setAuthService: React.Dispatch<React.SetStateAction<AuthServiceType>> | null;
};
const AuthContext = createContext<AuthStateType>({
  AuthService: null,
  setAuthService: null,
});

function FirebaseAuthProvider(props: AuthProviderProps) {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const [current_state, set_state] = useState<AuthServiceType>({
    auth: auth,
    provider: new GoogleAuthProvider(),
    user: auth.currentUser,
  });

  useEffect(() => {
    const MainPage = document.getElementById("main-page") as HTMLDivElement;
    const LoginPage = document.getElementById("login-page") as HTMLDivElement;

    current_state.auth.onAuthStateChanged(function (user) {
      const new_state = { ...current_state };
      if (user) {
        new_state.user = user;
        LoginPage.style.transform = "translateX(-100%)";
        LoginStatus.set(true);
        MainPage.style.display = "flex";
      } else {
        new_state.user = null;
        LoginStatus.set(false);
        LoginPage.style.display = "flex";
        setTimeout(() => {
          MainPage.style.display = "none";
        }, 1000);

        LoginPage.style.transform = "translateX(0%)";
      }
      set_state(new_state);
    });
  }, []);

  const AuthState: AuthStateType = {
    AuthService: current_state,
    setAuthService: set_state,
  };

  return (
    <AuthContext.Provider value={AuthState}>
      {props.children}
    </AuthContext.Provider>
  );
}

export const LoginStatus = {
  set: (status: boolean) => {
    if (localStorage) localStorage.setItem("is_logged_in", `${status}`);
  },
  get: () => {
    if (localStorage) return localStorage.getItem("is_logged_in") === "true";
    else false;
  },
};
async function signInWithGoogle(
  AuthService: AuthServiceType | null,
  setAuthService: React.Dispatch<React.SetStateAction<AuthServiceType>> | null
) {
  const LoginPage = document.getElementById("login-page") as HTMLDivElement;
  if (AuthService) {
    const { auth, provider } = AuthService;

    try {
      const UserCredential = await signInWithPopup(auth, provider);
      const credential =
        GoogleAuthProvider.credentialFromResult(UserCredential);
      if (credential) {
        const token = credential.accessToken;
        const user = UserCredential.user;

        if (setAuthService && user) {
          setAuthService({ ...AuthService, user: user });
        }
      }
    } catch (error: any) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    } finally {
    }
  }
}

type SignInProps = GenericIconProps & {};
function GoogleSignIn(props: SignInProps) {
  const { AuthService, setAuthService } = useContext(AuthContext);
  return (
    <button
      style={{
        background: "none",
        border: "none",
        height: props.height,
        width: props.width,
      }}
      onClick={() => signInWithGoogle(AuthService, setAuthService)}
    >
      <GoogleIcon height={"100%"} width={"auto"} />
    </button>
  );
}
async function signOut(auth: Auth) {
  if (auth) {
    LoginStatus.set(false);

    return auth.signOut();
  }
  return null;
}
function GoogleIcon(props: GenericIconProps) {
  return (
    <svg
      height={props.height}
      width={props.width}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ display: "block" }}
    >
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      ></path>
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      ></path>
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      ></path>
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      ></path>
      <path fill="none" d="M0 0h48v48H0z"></path>
    </svg>
  );
}

export { signOut, GoogleSignIn, FirebaseAuthProvider, AuthContext };
