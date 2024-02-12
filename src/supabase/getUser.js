import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const getUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.error(error);
    return;
  }
  if (data) {
    return data.user;
  }
};

export default getUser;
