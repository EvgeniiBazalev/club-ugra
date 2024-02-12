"use client";

import { useReducer, useState } from "react";
import StudentsList from "./StudentsList";
import FormAddStudents from "./FormAddStudents";

export default function AddStudents() {
  const [studentsArrow, dispatch] = useReducer(reducer, initialArg);

  function handleAddStudent(event, student) {
    event.preventDefault(); // Предотвращаем стандартное поведение отправки формы
    dispatch({
      type: "addNewStudent",
      student: {
        ...student,
        id: studentsArrow.length, // Создаем новый идентификатор для нового студента
      },
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
    case "changedStudent": {
      return {
        studentsArrow,
      };
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
