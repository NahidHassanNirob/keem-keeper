"use client";
import { createContext, useState } from "react";
export const FriendsContext = createContext()
const FriendsProvider = ({ children }) => {
    const[timeLine,setTimeLine]=useState([])
    const [allTimeLine,setAllTimeLine]=useState([])
   
    const data={
        timeLine,
        setTimeLine,
        allTimeLine,
        setAllTimeLine
    }
  return <FriendsContext.Provider value={data} > {children} </FriendsContext.Provider>;
};

export default FriendsProvider;
