import supabase from "./supabase";

const signUp = async () => {
  const { data, error } = await supabase.auth.signUp({
    email: "example@email.com",
    password: "example-password",
  });
  return data;
};

export default signUp;
