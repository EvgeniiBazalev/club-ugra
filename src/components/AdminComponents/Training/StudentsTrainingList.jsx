"use client";

import React, { useEffect, useState, useReducer } from "react";
import getUser from "@/supabase/getUser";
import fetchDataForStudents from "@/supabase/fetchDataForStudents";

const StudentsTrainingList = () => {
  const consoleTraining = () => {
    console.log(trainingArrow);
  };

  const [user, setUser] = useState(null);
  const [data, setData] = useState(null);
  const [trainingArrow, dispatch] = useReducer(reducer, []);

  function reducer(trainingArrow, action) {
    switch (action.type) {
      case "changeChecked": {
        return trainingArrow.map((student) => {
          if (student.studentIdPrimary === action.id) {
            return {
              ...student,
              checked: !student.checked,
            };
          } else {
            return student;
          }
        });
      }

      case "createInitial": {
        return action.data;
      }
      default: {
        return trainingArrow;
      }
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUser();
        setUser(userData);
        const fetchedData = await fetchDataForStudents();
        const filteredData = fetchedData.filter(
          (student) => student.trainer === userData.email
        );
        const newInitialData = filteredData.map((student) => ({
          studentIdPrimary: student.idPrimary,
          checked: false,
        }));
        console.log(filteredData);
        setData(filteredData);
        dispatch({ type: "createInitial", data: newInitialData });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (user === null) {
      fetchData();
    }
  }, [user]);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Фамилия Имя Отчество
                  </th>

                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Факт посещения
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data &&
                  data.map((person) => (
                    <tr key={person.idPrimary}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        {`${person.lastName} ${person.firstName} ${person.patronymic}`}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <input
                          type="checkbox"
                          value={false}
                          onChange={() =>
                            dispatch({
                              type: "changeChecked",
                              id: person.idPrimary,
                            })
                          }
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <button
        className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={consoleTraining}
      >
        Сохранить
      </button>
    </div>
  );
};

export default StudentsTrainingList;
