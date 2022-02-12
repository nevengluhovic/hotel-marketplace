import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Profile = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  return user ? <h1>{user.displayName}</h1> : "Not logged in";
};

export default Profile;
