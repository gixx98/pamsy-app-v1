import { router, useRootNavigationState, useSegments } from 'expo-router';
import { onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { FIREBASE_AUTH } from '../firebaseConfig';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { addDoc, collection, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const initialState = {
	uid: "",
	createdAt: "",
	displayName: "",
	lastLoginAt: "",
	photoURL: "",
	email: ""
}
interface User {
	uid: string,
	displayName: string,
	photoURL: string,
	createdAt: string,
	lastLoginAt: string,
	email: string
}

interface ContextInterface {
	user: User | null;
	signIn: React.Dispatch<React.SetStateAction<User>>;
	signOut: () => void
}

const contextInitialState: ContextInterface = {
	user: initialState,
	signIn: () => { },
	signOut: () => { }
}



export const AuthContext = createContext(contextInitialState);

export function useAuth(): ContextInterface {
	const context = useContext<ContextInterface>(AuthContext);
	if (context == undefined) {
		throw new Error("useAuth must be used within a provider")
	}

	return context;
}

function useProtectedRoute(user: User) {
	const segments = useSegments();
	const navigationState = useRootNavigationState();

	const [hasNavigated, setHasNavigated] = useState(false);

	useEffect(() => {
		if (navigationState != null) {
			if (!navigationState.key) return;
		}

		const inAuthGroup = segments[0] === "(auth)";

		if (user) console.log("user", user)

		if (!user.uid && !inAuthGroup) {
			router.replace("/(auth)/login");
			setHasNavigated(true);
		} else if (user.uid && inAuthGroup) {
			router.replace("/(tabs)/home")
		}
	}, [user.uid, segments, navigationState, hasNavigated])
}

export function AuthProvider({ children }: React.PropsWithChildren): JSX.Element {
	const [user, setUser] = useState<User>(initialState);

	//every time that we change the user useProtectedRoute function will be called
	//the program will validate if we still have a user
	useProtectedRoute(user);

	//this hook will make a subscription to the firebase function onAuthStateChange
	//and will watch every changes and at the same time set the collected 
	useEffect(() => {
		const unsubscribeAuth = onAuthStateChanged(FIREBASE_AUTH, async (user) => {
			if (user) {
				const userData: User = {
					uid: user.providerData[0].uid,
					email: user.providerData[0].email!,
					displayName: user.providerData[0].displayName ?? "",
					photoURL: user.providerData[0].photoURL ?? "",
					createdAt: user.metadata.creationTime!,
					lastLoginAt: user.metadata.lastSignInTime!
				};
				console.log("user:" + user);
				setUser(userData);
				router.replace("/(tabs)/home");
			} else {
				console.log("user is not authenticated");
				router.replace("/(auth)/login")
			}

			return () => unsubscribeAuth();
		})
	}, [])

	return (
		<AuthContext.Provider
			value={{
				user,
				signIn: setUser,
				signOut: () => {
					setUser(initialState);
					signOut(FIREBASE_AUTH);
				}
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}