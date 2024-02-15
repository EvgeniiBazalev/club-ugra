"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

export default function Page() {
  const [user, setUser] = useState();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.auth.getUser();
      setUser(data.user);
    };

    getData();
  }, [supabase.auth]);

  return (
    <>
      {user ? <pre>{user.email}</pre> : <p>Loading user...</p>}
      <></>
    </>
  );
}
