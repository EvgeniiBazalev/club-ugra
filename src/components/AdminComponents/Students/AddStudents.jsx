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

  function handleUpdateStudent(student) {
    dispatch({
      type: "updateStudent",
      student,
    });
  }

  function handleDeleteStudent(id) {
    dispatch({
      type: "deleteStudent",
      id,
    });
  }

  return (
    <>
      <FormAddStudents
        handleAddStudent={handleAddStudent}
        studentsArrow={studentsArrow}
      />
      <StudentsList
        students={studentsArrow}
        handleUpdateStudent={handleUpdateStudent}
        handleDeleteStudent={handleDeleteStudent}
      />
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
    case "updateStudent": {
      return studentsArrow.map((student) => {
        if (student.id === action.student.id) {
          return action.student;
        }
        return student;
      });
    }
    case "deleteStudent": {
      return studentsArrow.filter((student) => student.id !== action.id);
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
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
