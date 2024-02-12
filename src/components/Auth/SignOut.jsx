"use client";

import { Button } from "flowbite-react";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SignOut() {
  const [user, setUser] = useState();

  const supabase = createClientComponentClient();
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data, error } = await supabase.auth.getUser();

        if (data) {
          setUser(data.user);
        }

        if (error) {
          console.error(
            "Произошла ошибка при получении данных пользователя:",
            error
          );
          router.push("/");
          return; // Остановить выполнение, если возникла ошибка
        }
      } catch (error) {
        console.error(
          "Произошла ошибка при получении данных пользователя:",
          error
        );
      }
    };

    getData(); // Вызов функции получения данных
  }, [supabase.auth, router]);

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
