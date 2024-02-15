"use client";

import { useEffect, useState } from "react";
import getUser from "@/supabase/getUser";
import insertDataForStudents from "@/supabase/insertDataForStudents";
import getUniqueID from "@/support/getUniqueID";

export default function FormAddStudents(props) {
  const [enableButton, setEnableButton] = useState(false);
  let startID = getUniqueID();
  const [student, setStudent] = useState({
    id: startID,
    firstName: "Вася",
    patronymic: "Петрович",
    lastName: "Иванов",
    birthday: "01.01.2000",
    email: "a@a.ru",
    phone: "+7 999 999 99 99",
    gender: "Мужской",
    streetAddress: "ул. Пушкина",
    trainer: "Тренер неопознан",
  });

  useEffect(() => {
    const fetchAndSetUserData = async () => {
      try {
        const user = await getUser();
        if (user) {
          setStudent({ ...student, trainer: user.email });
          setEnableButton(true);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchAndSetUserData(); // Вызываем функцию загрузки данных
  }, [student]);

  async function handleSubmit(e) {
    e.preventDefault();
    setEnableButton(false);

    setStudent({ ...student, id: getUniqueID() });
    console.log(student);
    props.handleAddStudent(student);
    await insertDataForStudents(student);
    setEnableButton(true);
  }

  return (
    <>
      <form>
        <div className="space-y-6 sm:space-y-8">
          <a
            className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            href="/admin"
          >
            Панель управления
          </a>
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Персональные данные
            </h2>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
              Заполните данные ученика для внесения его в список.
            </p>
            <div className="mt-4 space-y-4 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Имя
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    value={student.firstName}
                    onChange={(e) =>
                      setStudent({ ...student, firstName: e.target.value })
                    }
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-3">
                <label
                  htmlFor="patronymic"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Отчество
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    value={student.patronymic}
                    onChange={(e) =>
                      setStudent({ ...student, patronymic: e.target.value })
                    }
                    type="text"
                    name="patronymic"
                    id="patronymic"
                    autoComplete="additional-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Фамилия
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    value={student.lastName}
                    onChange={(e) =>
                      setStudent({ ...student, lastName: e.target.value })
                    }
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-3">
                <label
                  htmlFor="birthdate"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Дата рождения
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    // value={student.birthday}
                    onChange={(e) =>
                      setStudent({ ...student, birthday: e.target.value })
                    }
                    type="date"
                    name="birthdate"
                    id="birthdate"
                    autoComplete="bday"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Электронная почта
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    value={student.email}
                    onChange={(e) =>
                      setStudent({ ...student, email: e.target.value })
                    }
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-3">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Номер телефона
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    value={student.phone}
                    onChange={(e) =>
                      setStudent({ ...student, phone: e.target.value })
                    }
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-3">
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Пол
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <select
                    value={student.gender}
                    onChange={(e) =>
                      setStudent({ ...student, gender: e.target.value })
                    }
                    id="gender"
                    name="gender"
                    autoComplete="sex"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Мужской</option>
                    <option>Женский</option>
                  </select>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-3">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Адрес
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    value={student.streetAddress}
                    onChange={(e) =>
                      setStudent({ ...student, streetAddress: e.target.value })
                    }
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Отмена
            </button>
            <button
              onClick={(event) => {
                handleSubmit(event);
              }}
              disabled={!enableButton}
              type="submit"
              className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Добавить
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
