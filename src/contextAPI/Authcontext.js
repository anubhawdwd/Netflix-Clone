import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { arrayUnion, doc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";


const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [movieFetchList, setMovieFetchList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [trailerID, setTrailerID] = useState(null);
  
  const signUp = (email, password) =>{
    createUserWithEmailAndPassword(auth, email, password)
    setDoc(doc(db, 'users', email ),{
      savedShows:[],
    })
  }

  const logIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
    
  const logOut = () => signOut(auth);
  // check and save current user details
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  // fetch movies list from Firebase Firestore Database
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovieFetchList(doc.data()?.savedShows);
    });
  }, [ user?.email]);

  const AddToMyList = async (item) => {
    try {
      await updateDoc(doc(db, "users", `${user?.email}`), {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.poster_path,
          overview: item.overview,
        }),
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const removeFromMyList = async (removedID) => {

    try {
      const newShow = movieFetchList.filter((item) => item.id !== removedID);
      await updateDoc(doc(db, "users", `${user?.email}`), {
        savedShows: newShow,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

const slideLeft = () => {
  var slider = document.getElementById("slider");
  slider.scrollLeft = slider.scrollLeft - 500;
};
const slideRight = () => {
  var slider = document.getElementById("slider");
  slider.scrollLeft = slider.scrollLeft + 500;
};
const handleMovieID = (item) => {
  console.log("my list", item);
  setShowModal(true);
  setTrailerID(item);
};
    

  return (
    <AuthContext.Provider
      value={{
        signUp,
        logIn,
        logOut,
        user,
        movieFetchList,
        showModal,
        setShowModal,
        trailerID,
        setTrailerID,
        AddToMyList,
        removeFromMyList,
        slideLeft,
        slideRight,
        handleMovieID,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
