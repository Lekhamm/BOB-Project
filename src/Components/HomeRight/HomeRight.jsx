import React from "react";
import { BsDot } from "react-icons/bs";
import { useSelector } from "react-redux";
import SuggestionsUserCard from "./SuggestionsUserCard";

const HomeRight = ({ suggestedUser }) => {
  const { user } = useSelector((store) => store);
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center ">
            <img
              className="w-12 h-12 rounded-full"
              src={
                user.reqUser?.image ||
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              alt=""
            />
            <div className="ml-3">
              <p className="font-semibold text-lg">{user.reqUser?.username}</p>
              <p className="text-sm text-gray-500">{user.reqUser?.username}</p>
            </div>
          </div>
          <button className="text-blue-600 font-semibold">Switch</button>
        </div>
        <div className="flex justify-between py-2 items-center border-b border-gray-300 mb-4">
          <p className="font-semibold text-sm text-gray-700">Suggestions for you</p>
          <button className="text-xs font-semibold text-gray-600">View All</button>
        </div>

        <div className="space-y-5">
          {suggestedUser.map((item, index) => (
            <SuggestionsUserCard
              key={index}
              image={item.userImage || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
              username={item.username}
              description={"Follows you"}
            />
          ))}
        </div>
        <div className="opacity-60 text-xs flex items-center flex-wrap mt-4">
          <span>About</span>
          <BsDot />
          <span>Help</span>
          <BsDot />
          {/* Add more items here */}
        </div>
      </div>
    </div>
  );
};

export default HomeRight;
