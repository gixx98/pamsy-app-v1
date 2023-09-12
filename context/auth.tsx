import { router, useRootNavigationState, useSegments } from 'expo-router';
import { onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { FIREBASE_AUTH, db } from '../firebaseConfig';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';

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
		console.log("useProtectedRoute useEffect called");

		if (navigationState != null) {
			console.log("Navigation state is null")
			if (!navigationState.key) return;
		}

		const inAuthGroup = segments[0] === "(auth)";
		console.log("inAuthGroup is " + inAuthGroup);

		if (!user.uid && !inAuthGroup) {
			console.log("Navigating to login");
			router.replace("/(auth)/login");
			setHasNavigated(true);
		} else if (user.uid && inAuthGroup) {
			// onBoardingCompleted ? router.replace("/(tabs)/home") : router.replace("/(onboarding)/welcome")
			// router.replace("/home")
			console.log("Not doing anything");
		}
	}, [user.uid, segments, navigationState, hasNavigated])
}

export function AuthProvider({ children }: React.PropsWithChildren): JSX.Element {
	const navigation = useNavigation();
	const [user, setUser] = useState<User>(initialState);
	
	let isLoading = true;

	//every time that we change the user useProtectedRoute function will be called
	//the program will validate if we still have a user
	useProtectedRoute(user);

	//this hook will make a subscription to the firebase function onAuthStateChange
	//and will watch every changes and at the same time set the collected 
	useEffect(() => {
		console.log("AuthProvider useEffect called");
		const unsubscribeAuth = onAuthStateChanged(FIREBASE_AUTH, async (user) => {
			let onboardingCompleted;
			console.log("onAuthStateChange called")
			if (user) {
				const userDocRef = doc(db, 'users', user.uid);
				try {
					const userDocSnapshot = await getDoc(userDocRef);
				
					if (userDocSnapshot.exists()) {
						const userDataFromFirestore = userDocSnapshot.data();
						onboardingCompleted = userDataFromFirestore.onboardingCompleted;
						
						isLoading = false;
					}
				} catch (error) {
					// Handle the error here
					console.error("Error fetching user document from Firestore:", error);
				}

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

				if (isLoading) {
					console.log("Loading");
				} else {
					console.log("onboardingCompleted before navigation " + onboardingCompleted);
					if (onboardingCompleted) {
						console.log("AuthProviderből navigálok a homera")
						router.replace("/(tabs)/home");
					} else {
						console.log("AuthProviderből navigálok a welcomra")
						router.replace("/(onboarding)/welcome")
					}
				}

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