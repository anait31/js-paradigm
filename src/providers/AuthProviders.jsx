import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();

const AuthProviders = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google Login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // GitHub Login
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider);
    }

    // Twitter Login
    const twitterLogin = () => {
        return signInWithPopup(auth, twitterProvider);
    }

    const logoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {
        user,
        createUser,
        loginUser,
        logoutUser,
        loading,
        googleLogin,
        githubLogin,
        twitterLogin
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('Current User Observer', currentUser)
            setLoading(false)
        });
        return () => unSubscribe();
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;

AuthProviders.propTypes = {
    children: PropTypes.node
}