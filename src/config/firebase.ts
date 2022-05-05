import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Player } from "../types/Player";

// firebase app configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY6rljcIXevotV6_cDhsomkcOi6IJS-5U",
  authDomain: "major-wordle.firebaseapp.com",
  databaseURL: "https://major-wordle-default-rtdb.firebaseio.com",
  projectId: "major-wordle",
  storageBucket: "major-wordle.appspot.com",
  messagingSenderId: "242240938964",
  appId: "1:242240938964:web:3cc00f856a1fdde3f22c41",
  measurementId: "G-VB6TWTSX23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore();

const document = doc(firestore, 'siteConfig/correctPlayer')

export const fetchCorrectPlayer = async () => {
    let data;
    let newCorrectPlayer: Player = {
        id: 312,
        name: "FalleN",
        link: "https://liquipedia.net/counterstrike/FalleN",
        nationality: "Brazil",
        photoURL:
        "https://liquipedia.net/commons/images/thumb/7/7b/FalleN_%40_PGL_Major_Stockholm_2021.jpg/600px-FalleN_%40_PGL_Major_Stockholm_2021.jpg",
        role: "In-game leader",
        totalWinnings: "$1,125,229",
    };

    const mySnapshot = await getDoc(document)
    if (mySnapshot.exists()) {
        data = mySnapshot.data()
    }

    if (data) {
        newCorrectPlayer = {
            id: data.id,
            name: data.name,
            link: data.link,
            nationality: data.nationality,
            photoURL: data.photoURL,
            role: data.role,
            totalWinnings: data.totalWinnings,
        }
    }
    
    return newCorrectPlayer
}