"use client";

import { Button } from "flowbite-react";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { useEffect, useState } from "react";

export default function SignOut() {
  const [user, setUser] = useState();

  const supabase = createClientComponentClient();

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.auth.getUser();
      setUser(data.user);
    };

    getData();
  }, [supabase.auth]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    location.reload();
  };

  return user ? (
    <Button className="w-full" onClick={handleSignOut}>
      Выйти
    </Button>
  ) : null;
}
