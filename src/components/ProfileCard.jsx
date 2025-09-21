import { CheckBadgeIcon } from "@heroicons/react/16/solid";
import React from "react";

const ProfileCard = ({user, title="default"}) => {
  return (
    <div className=" flex items-center p-8 g-9 w-110 h-50 bg-white border-gray-400 rounded-2xl shadow-lg ">
        <h1>{title || <h6> Default title</h6>}</h1>
      <div className="flex  bg-white gap-4">
        <div className="flex flex-col rounded-full size-28 relative ">
          <img src={user.pic} className="rounded-full size-28" />
          <div className="rounded-full size-9 absolute bottom-0 right-2  "><CheckBadgeIcon className=""  /></div>
        </div>
        <div className="flex-col text-left p-4">
          <h1 className="text-black font-bold text-xl ">{user.name??"Name"}</h1>
          <h2 className="text-gray-500 text-base">{(user.title?.toUpperCase()??"in case of null")||"in case of empty"}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
