import { initializeApp } from "firebase/app";
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import toast from "react-hot-toast";
import { userHandle } from "utils";

const firebaseConfig = {
  apiKey: "AIzaSyAlCBpKllmpdDYTBfW77uE5RAqayfKD4es",
  authDomain: "instagram-clone-react-25f4b.firebaseapp.com",
  projectId: "instagram-clone-react-25f4b",
  storageBucket: "instagram-clone-react-25f4b.appspot.com",
  messagingSenderId: "879757438926",
  appId: "1:879757438926:web:d0efa67012a247ab5ac59f",
  measurementId: "G-5VVZMLN6V7",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app)

onAuthStateChanged(auth, async user => {
	if (user) {
		const dbUser = await getDoc(doc(db, "users", user.uid))
		let data = {
			uid: user.uid,
			fullName: user.displayName,
			email: user.email,
			emailVerified: user.emailVerified,
			...dbUser.data()
		}
		userHandle(data)
	} else {
		userHandle(false)
	}
})

export const login = async (email, password) => {
	try {
		return await signInWithEmailAndPassword(auth, email, password)
	} catch (err) {
		toast.error(err.code)
	}
}

export const register = async ({email, password, full_name, username}) => {
	try {
		const user = await getDoc(doc(db, "usernames", username))
		if (user.exists()) {
			toast.error(`${username} kullanıcı adı başkası tarafından kullanılıyor.`)
		} else {
			const response = await createUserWithEmailAndPassword(auth, email, password)
			if (response.user) {

				await setDoc(doc(db, "usernames", username), {
					user_id: response.user.uid
				})

				await setDoc(doc(db, "users", response.user.uid), {
					fullName: full_name,
					username: username,
					followers: [],
					following: [],
					notifications: []
				})

				await updateProfile(auth.currentUser, {
					displayName: full_name
				})

				return response.user

			}
		}
	} catch (err) {
		toast.error(err.code)
	}
}

export const logout = async () => {
	try {
		await signOut(auth)
	} catch (err) {
		toast.error(err.code)
	}
}