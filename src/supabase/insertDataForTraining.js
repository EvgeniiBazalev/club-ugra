import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

const insertDataForTraining = async (data) => {
  const { error } = await supabase.from("trainingTable").insert(data);
  if (error) {
    console.error(error);
    return;
  } else {
    console.log("Данные успешно добавлены");
  }
};

export default insertDataForTraining;
