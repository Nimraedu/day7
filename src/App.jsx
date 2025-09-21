import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProfileCard from "./components/ProfileCard";

function App() {
  const user1 = {
    name: "Talan Dania",
    title: "UX Designer",
    pic: "https://placehold.co/400",
  };

  const user2 = {
    name: "Talan Dania",
    title: "",
    pic: "https://placehold.co/400",
  };

  const user3 = {
    name: "Talan Dania",
   
    pic: "https://placehold.co/400",
  };

  return (
    <>
      {/* 
    <ProfileCard name="Talan Dias" title="UX Designer" pic="https://placehold.co/400 " 
    // verified={true}
     /> */}
      <div className="flex flex-col  md:flex-row  gap-3">
        <ProfileCard user={user1} title=""/>
        <ProfileCard user={user2} />
        <ProfileCard user={user3} title="Heading 3"/>
      </div>
    </>
  );
}

export default App;
