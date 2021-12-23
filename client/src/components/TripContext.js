import React, { useState, createContext, useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';

export const TripContext = createContext(null);

const TripProvider = ({children}) => {
    const [tripPlan, setTripPlan] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
const {user, isAuthenticated} = useAuth0();

useEffect(()=>{
const userFunc = async ()=>{
    const check = await fetch(`/checkUser/${user?.email}`);
    const check1 = await check.json()
console.log(check1)
    if (!check1.data && user) {
       const addUser = await fetch("/addUser", {
        method: "POST",
        body: JSON.stringify({ user, _id: user?.email }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((userData) => {
          console.log(userData);
          setCurrentUser(userData.data)
        })
        .catch((err) => {
          console.log(err);
        });
    
    } else {
        setCurrentUser(check1.data)
        console.log(check1.data)
    }
}; userFunc(); 
}, [user])

return (
<TripContext.Provider
value={{
    tripPlan, setTripPlan, currentUser
}}
>
    {children}
</TripContext.Provider>
)
}

export default TripProvider;
