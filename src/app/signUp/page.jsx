"use client";

import React from "react";
import signUp from "@/supabase/signUp";

const page = () => {
  return (
    <>
      <div>page</div>
      <div>page</div>
      <div>page</div>
      <button onClick={signUp}>Sign Up</button>
    </>
  );
};

export default page;
