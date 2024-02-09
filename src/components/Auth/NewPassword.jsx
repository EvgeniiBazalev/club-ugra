"use client";
import Image from "next/image";
import { Button, Card, Label, TextInput } from "flowbite-react";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewPassword() {
  const [password, setPassword] = useState("");

  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleUpdateUser = async () => {
    try {
      const { data, error } = await supabase.auth.updateUser({
        password: password,
      });
      if (error) {
        console.error("Произошла ошибка при получении данных пользователя:");
        alert("Произошла ошибка при обновлении пароля");
      }
      if (data) {
        alert("Пароль обновлен");
        router.push("/admin");
      }
    } catch (error) {
      console.error("Произошла ошибка при получении данных пользователя:");
      alert("Произошла ошибка при обновлении пароля");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <a
          href="#"
          className="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image
            className="mr-2 h-18 w-18"
            src="/main/logo2.svg"
            alt="logo"
            width="100"
            height="100"
          />
          Клуб Югра
        </a>
        <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <Card className="shadow-none">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Новый пароль
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <Label
                  htmlFor="password"
                  className="mb-2 block dark:text-white"
                >
                  Введите новый пароль
                </Label>
                <TextInput
                  id="password"
                  placeholder="••••••••"
                  required
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>

              <Button className="w-full" onClick={handleUpdateUser}>
                Обновить пароль
              </Button>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                У Вас нет аккаунта?&nbsp;
                <a
                  href="/admin/SignUp"
                  className="font-medium text-blue-600 hover:underline dark:text-primary-500"
                >
                  Зарегистрироваться
                </a>
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
