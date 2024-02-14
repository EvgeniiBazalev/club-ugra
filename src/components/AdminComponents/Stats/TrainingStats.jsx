"use client";

import { useEffect, useState } from "react";
import getUser from "@/supabase/getUser";
import fetchDataForStudents from "@/supabase/fetchDataForStudents";
import getDataForTraining from "@/supabase/getDataForTraining";

const TrainingStats = () => {
  const [data, setData] = useState();
  const [user, setUser] = useState();
  const [training, setTraining] = useState();
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
      setTraining(trainingData);

      console.log(trainingData);
      console.log(filteredData);
      console.log(userData);
    };
    fetchData();
  }, []);
  return (
    <>
      {data && training && user && (
        <>
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                {training.map((training) => (
                  <th
                    key={training.id}
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    {training.date}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {training.map((person) => {
                return (
                  <tr key={person.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {`${person.lastName} ${person.firstName} ${person.patronymic}`}
                    </td>
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
