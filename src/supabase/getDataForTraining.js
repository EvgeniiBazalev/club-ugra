import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

const getDataForTraining = async () => {
  const { data, error } = await supabase
    .from("trainingTable")
    .select("*")
    .order("id", { ascending: true });
  if (error) {
    console.error(error);
    return;
  } else {
    return data;
  }
};

export default getDataForTraining;
