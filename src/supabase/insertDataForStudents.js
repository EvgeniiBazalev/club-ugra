import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

const insertDataForStudents = async (data) => {
  const { error } = await supabase.from("students").insert(data);
  if (error) {
    console.error(error);
    return;
  } else {
    console.log("Данные успешно добавлены");
  }
};

export default insertDataForStudents;
