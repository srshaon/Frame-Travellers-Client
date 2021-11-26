import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuth from '../Firebase/firebase.init'
import { useHistory } from "react-router";

initializeAuth();
const useFirebase = () => {
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [history, setHistory] = useState('');

    const [isLoading, setIsLoading] = useState(true);

    const history2 = useHistory();


    const collectHistory = page => {
        setHistory(page);
    }
    const handleRegistration = rf => {
        // e.preventDefault();
        if (password.length < 6) {
            setError('password must be 6 character long');
            return;
        }
        createNewUser(email, password, rf);
        // console.log(email, password);

    }

    const createNewUser = (email, password, rf) => {
        // const userName = name;
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                // const user = result.user;
                console.log('clicked', result.user.displayName);
                setError('');
                // verifyEmail();
                setUserName();
                rf();

            })
            .catch(error => {
                setError("Already Registered");
            })
    }
    const setUserName = () => {
        console.log(name);
        console.log(email);
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {
                setError('');
                console.log(auth.currentUser.displayName);
            })
            .catch((error) => {
                setError('')
                // setError(error.message)
                // setError("Already registered")
            });

    }


    const googleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)

    }
    const handleNameChange = e => {
        console.log('hit')
        // e.preventDefault();
        setName(e.target.value);
        setError('');
        // e.preventDefault();
        console.log(e.target.value);
    }
    const handleEmailChange = e => {
        // e.preventDefault();
        setEmail(e.target.value);
        // e.preventDefault();
    }

    const handlePasswordChange = e => {
        // e.preventDefault();
        setPassword(e.target.value);
        // e.preventDefault();
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {

                // Sign-out successful.
                setUser({});
                setError('');
            }).catch((error) => {
                // An error happened.
            })
            .finally(() => setIsLoading(false));
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                // const uid = user.uid;
                // ...

                setUser(user);
                // setUserName();
                setError('');
            } else {
                // User is signed out
                // ...
            }
            setIsLoading(false);
        });
    });
    return {
        user,
        name,
        error,
        email,
        password,
        setName,
        setError,
        googleSignIn,
        logOut,
        handleRegistration,
        // processLogIn,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        // handleSignIn,
        auth,
        setHistory,
        collectHistory,
        isLoading
    }
}

export default useFirebase;