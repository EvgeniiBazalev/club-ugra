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
      <div>TrainingStats</div>
    </>
  );
};

export default TrainingStats;
