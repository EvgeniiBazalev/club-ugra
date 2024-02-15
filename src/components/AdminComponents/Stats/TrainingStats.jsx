"use client";

import { useEffect, useState } from "react";
import getUser from "@/supabase/getUser";
import fetchDataForStudents from "@/supabase/fetchDataForStudents";
import getDataForTraining from "@/supabase/getDataForTraining";

const TrainingStats = () => {
  const [data, setData] = useState();
  const [user, setUser] = useState();
  const [training, setTraining] = useState();
  const [month, setMonth] = useState(new Date().toISOString().slice(0, 7));

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUser();
      setUser(userData);
      const studentsData = await fetchDataForStudents();
      const filteredData = studentsData.filter(
        (student) => student.trainer === userData.email
      );
      setData(filteredData);
      const trainingData = await getDataForTraining();

      setTraining(
        trainingData.filter((item) => item.date.slice(0, 7) === month)
      );

      console.log(month);
    };
    fetchData();
  }, [month]);

  const onChangeMonthHandler = (event) => {
    setMonth(event.target.value);
    setTraining(
      training.filter((item) => item.date.slice(0, 7) === event.target.value)
    );
  };

  return (
    <>
      <a
        className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        href="/admin"
      >
        Панель управления
      </a>

      <input
        className="mt-6 block w-1/6 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        type="month"
        value={month}
        onChange={(event) => setMonth(event.target.value)}
      />
      {data && training && user && (
        <>
          <table className="mt-3 min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  key={0}
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Фамилия имя отчество
                </th>
                {training.map((training) => (
                  <th
                    key={training.created_at}
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    {training.date}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td
                  key={0}
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                ></td>
                {training.map((training) => (
                  <td
                    key={training.created_at}
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    {training.time}
                  </td>
                ))}
              </tr>
              {data.map((person) => {
                return (
                  <tr key={person.idPrimary}>
                    <td
                      className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
                      key={person.created_at}
                    >
                      {`${person.lastName} ${person.firstName} ${person.patronymic}`}
                    </td>
                    {training.map((training) => (
                      <td
                        key={`${training.idPrimaryTraining} + ${person.id}`}
                        className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
                      >
                        {JSON.parse(training.trainingArrow).find(
                          (arrow) => arrow.studentIdPrimary === person.idPrimary
                        )?.checked
                          ? "✅"
                          : "❌"}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default TrainingStats;
