import React from "react";
import Navbar from "../Navbar";
import SupportContent from "./SupportContent";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";

const UserSupportLayout = ({ children, isLoading }) => {
  return (
    <div>
      <Navbar />
      {isLoading ? <Loading /> : <SupportContent />}
      {isLoading ? <Loading /> : <FrequentlyAskedQuestions />}
      <div className="bg-mainColor font-unbounded font-bold text-center py-3 text-white">
        2024 BuildHub.All Rights Reserved.
      </div>
    </div>
  );
};

export default UserSupportLayout;
