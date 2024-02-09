"use client";
import Image from "next/image";
import { Button, Card, Label, TextInput } from "flowbite-react";
import passwordValidator from "password-validator";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const router = useRouter();
  const supabase = createClientComponentClient();

  const schema = new passwordValidator();

  // Устанавливаем требования для пароля
  schema
    .is()
    .min(6) // Минимум 6 символов
    .is()
    .max(15); // Максимум 15 символов
  // .has()
  // .uppercase() // Должна содержать заглавные буквы
  // .has()
  // .lowercase() // Должна содержать строчные буквы
  // .has()
  // .digits() // Должна содержать цифры
  // .has()
  // .symbols() // Должна содержать спецсимволы
  // .has()
  // .not()
  // .spaces() // Не должна содержать пробелы
  // .is()
  // .not()
  // .oneOf(["Passw0rd", "Password123"]); // Не должна быть одной из этих популярных комбинаций

  const handleSignUp = async () => {
    const isValidPassword = schema.validate(password);

    if (!isValidPassword) {
      setPasswordError(
        "Пароль не соответствует требованиям - нужно от 6 до 15 символов"
      );
      return;
    }

    try {
      await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${location.origin}/admin/auth/callback`,
        },
      });
      router.push("/admin");
    } catch (error) {
      console.error("Произошла ошибка при регистрации пользователя:", error);
      alert("Произошла ошибка при регистрации пользователя");
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
              Зарегистрируйтесь
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <Label htmlFor="email" className="mb-2 block dark:text-white">
                  Электронная почта
                </Label>
                <TextInput
                  id="email"
                  placeholder="name@company.com"
                  required
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div>
                <Label
                  htmlFor="password"
                  className="mb-2 block dark:text-white"
                >
                  Пароль
                </Label>
                <TextInput
                  id="password"
                  placeholder="••••••••"
                  required
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError(""); // Сброс ошибки при изменении пароля
                  }}
                  value={password}
                />
                {passwordError && (
                  <p className="text-red-500 text-xs mt-1">{passwordError}</p>
                )}
              </div>
              <Button className="w-full" onClick={handleSignUp}>
                Зарегистрироваться
              </Button>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                У Вас есть аккаунт?&nbsp;
                <a
                  href="/admin/SignIn"
                  className="font-medium text-blue-600 hover:underline dark:text-primary-500"
                >
                  Войти
                </a>
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
