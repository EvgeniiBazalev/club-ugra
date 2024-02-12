import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

const fetchDataForStudents = async () => {
  const { data, error } = await supabase
    .from("students")
    .select("*")
    .order("id", { ascending: true });
  if (error) {
    console.error(error);
    return;
  } else {
    return data;
  }
};

export default fetchDataForStudents;
