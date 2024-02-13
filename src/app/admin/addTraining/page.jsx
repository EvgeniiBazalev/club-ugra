import SaveTraining from "@/components/AdminComponents/Training/SaveTraining";
import StudentsTrainingList from "@/components/AdminComponents/Training/StudentsTrainingList";
import React from "react";

const page = () => {
  return (
    <>
      <a
        className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        href="/admin"
      >
        Панель управления
      </a>
      <SaveTraining />
    </>
  );
};

export default page;
