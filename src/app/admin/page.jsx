import Dashboard from "@/components/AdminComponents/Dashboard/Dashboard";
import SignOut from "@/components/Auth/SignOut";
import React from "react";

const page = () => {
  return (
    <>
      <Dashboard />
      <SignOut />
    </>
  );
};

export default page;
