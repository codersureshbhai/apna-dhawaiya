// Firebase initialize karna zaroori hai
const firebaseConfig = {
    apiKey: "AIzaSyDxBXchuAv8px0ZlziNWVGkYJyE5uMfelI",
    authDomain: "auth-form-89a5e.firebaseapp.com",
    projectId: "auth-form-89a5e",
    storageBucket: "auth-form-89a5e.appspot.com",
    messagingSenderId: "800339173862",
    appId: "1:800339173862:web:4f1783d50b3843a6937627"
};
firebase.initializeApp(firebaseConfig);

// Logout function
const logout = () => {
    firebase.auth().signOut()
        .then(() => {
            window.location.href = "../authentication/signIn.html";
        })
        .catch((error) => {
            console.error("Logout Error:", error);
        });
}