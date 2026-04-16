import React, { Suspense } from "react";
import FriendsIntro from "../../Components/Friends/FriendsIntro/FriendsIntro";
import FriendsCarts from "../../Components/Friends/FriendsCarts/FriendsCarts";

const friendsRes = () => fetch("/Data/Friends.json").then((res) => res.json());
const Home = () => {
  const callFriendRes = friendsRes();
  return (
    <div className="bg-[#F8FAFC] my-10">
      <Suspense
        fallback={
          <div className="flex justify-center">
            <span className=" loading loading-ring loading-xl"></span>
          </div>
        }
      >
        <FriendsIntro callFriendRes={callFriendRes}></FriendsIntro>
      </Suspense>

      <Suspense>
        <FriendsCarts callFriendRes={callFriendRes}></FriendsCarts>
      </Suspense>
    </div>
  );
};

export default Home;
