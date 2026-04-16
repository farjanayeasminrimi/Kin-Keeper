import React from "react";
import { use } from "react";
import "../../../App.css";
import { Plus } from "lucide-react";

const FriendsIntro = ({ callFriendRes }) => {
  const friends = use(callFriendRes);

  const totalFriends = friends.length;
  const onTrack = friends.filter((friend) => friend.status === "on-track").length;
  const needAttention = friends.filter((friend) => friend.status === "overdue").length;
  const interactions = friends.filter((friend) => friend.status === "almost due").length;

  return (
    <>
      {/* Intro */}

      <div className="hero ">
        <div className="hero-content text-center">
          <div>
            <h1 className="primary-color text-5xl font-extrabold">
              Friends to keep close in your life
            </h1>
            <div className="max-w-[550px] mx-auto">
              <p className="py-6 secondary-color ">
                Your personal shelf of meaningful connections. Browse, tend, and nurture the
                relationships that matter most.
              </p>
            </div>
            <button className="btn primary-bg text-white">
              {" "}
              <Plus></Plus> Add a Friend
            </button>
          </div>
        </div>
      </div>

      {/* Intro Stats */}
      <div className="my-9 px-4 md:px-0 grid grid-cols-2 md:grid-cols-4 gap-6 container mx-auto">
        <div className="text-center bg-white shadow-lg rounded-lg p-8">
          <h2 className="primary-color font-bold text-3xl">{totalFriends}</h2>
          <span className="secondary-color">Total Friends</span>
        </div>
        <div className="text-center bg-white shadow-lg rounded-lg p-8">
          <h2 className="primary-color font-bold text-3xl">{onTrack}</h2>
          <span className="secondary-color">On Track</span>
        </div>
        <div className="text-center bg-white shadow-lg rounded-lg p-8">
          <h2 className="primary-color font-bold text-3xl">{needAttention}</h2>
          <span className="secondary-color">Need Attention</span>
        </div>
        <div className="text-center bg-white shadow-lg rounded-lg p-8">
          <h2 className="primary-color font-bold text-3xl">{interactions}</h2>
          <span className="secondary-color">Interactions This Month</span>
        </div>
      </div>
    </>
  );
};

export default FriendsIntro;
