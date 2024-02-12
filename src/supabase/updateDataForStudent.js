import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

const updateDataForStudent = async (student) => {
  const { data, error } = await supabase
    .from("students")
    .update({
      firstName: student.firstName,
      patronymic: student.patronymic,
      lastName: student.lastName,
      birthday: student.birthday,
      email: student.email,
      phone: student.phone,
      gender: student.gender,
      streetAddress: student.streetAddress,
    })
    .eq("id", student.id);
  if (error) {
    console.error(error);
    return;
  } else {
    return data;
  }
};

export default updateDataForStudent;
