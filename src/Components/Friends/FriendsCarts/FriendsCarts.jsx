import React from "react";
import { use } from "react";
import Card from "../Card/Card";

const FriendsCarts = ({ callFriendRes }) => {
  const friends = use(callFriendRes);
  // console.log(friends);
  return (
    <div className="container mx-auto px-5 py-8 shadow-lg rounded-2xl">
      <h1 className="text-[#1F2937] text-3xl font-bold my-8">Your Friends</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 ">
        {friends.map((friend) => (
          <Card key={friend.id} friend={friend}></Card>
        ))}
      </div>
    </div>
  );
};

export default FriendsCarts;
