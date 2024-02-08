"use client";
import Image from "next/image";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SignOut() {
  const [user, setUser] = useState();
  const router = useRouter();
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
    router.refresh();
  };

  return user ? (
    <Button className="w-full" onClick={handleSignOut}>
      Выйти
    </Button>
  ) : null;
}
