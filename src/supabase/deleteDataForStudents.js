import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

const deleteDataForStudents = async (id) => {
  const { data, error } = await supabase.from("students").delete().eq("id", id);
  if (error) {
    console.error(error);
    return;
  } else {
    return data;
  }
};

export default deleteDataForStudents;
