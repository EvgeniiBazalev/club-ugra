"use client";
import Image from "next/image";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/admin/auth/callback`,
      },
    });
    router.refresh();
  };

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
    router.refresh();
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <>
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
                Войдите в Ваш аккаунт
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
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    {/* <div className="flex h-5 items-center">
                      <Checkbox id="remember" required />
                    </div> */}
                    {/* <div className="ml-3 text-sm">
                      <Label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Запомнить меня
                      </Label>
                    </div> */}
                  </div>
                  {/* <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Забыли пароль?
                  </a> */}
                </div>
                <Button className="w-full" onClick={handleSignIn}>
                  Войти
                </Button>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  У Вас нет аккаунта?&nbsp;
                  <a
                    href="#"
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

      <input
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handleSignUp}>Sign up</button>
      <button onClick={handleSignIn}>Sign in</button>
      <button onClick={handleSignOut}>Sign out</button>
      {user ? <pre>{user.email}</pre> : <p>Loading user...</p>}
    </>
  );
}
