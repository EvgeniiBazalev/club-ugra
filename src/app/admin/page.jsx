import React from "react";

const page = () => {
  const user = supabase.auth.getUser();
  console.log(user);
  return <div>page</div>;
};

export default page;
