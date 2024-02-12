"use client";

import { useReducer, useEffect } from "react";
import StudentsList from "./StudentsList";
import FormAddStudents from "./FormAddStudents";
import fetchDataForStudents from "@/supabase/fetchDataForStudents";

export default function AddStudents() {
  const [studentsArrow, dispatch] = useReducer(reducer, initialArg);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDataForStudents();
      if (!data) return;
      handleFetchStudent(data);
    };
    fetchData();
  }, []);
  function handleAddStudent(student) {
    dispatch({
      type: "addNewStudent",
      student,
    });
  }

  function handleFetchStudent(data) {
    dispatch({
      type: "fetchStudent",
      data,
    });
  }

  return (
    <>
      <FormAddStudents handleAddStudent={handleAddStudent} />
      <StudentsList students={studentsArrow} />
    </>
  );
}

function reducer(studentsArrow, action) {
  switch (action.type) {
    case "addNewStudent": {
      return [...studentsArrow, action.student];
    }
    case "fetchStudent": {
      return action.data;
    }
  }
  throw Error("Unknown action: " + action.type);
}

const initialArg = [
  {
    id: 0,
    firstName: "Вася",
    patronymic: "Петрович",
    lastName: "Иванов",
    birthday: "01.01.2000",
    email: "a@a.ru",
    phone: "+7 999 999 99 99",
    gender: "Мужской",
    streetAddress: "ул. Пушкина",
    trainer: "Тренер",
  },
];
