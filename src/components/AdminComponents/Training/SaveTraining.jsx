"use client";

import React, { useEffect, useState } from "react";
import StudentsTrainingList from "./StudentsTrainingList";

const SaveTraining = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Получение текущей даты и времени по Екатеринбургу
    const now = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Yekaterinburg",
    });
    const date = new Date(now);

    // Форматирование текущей даты и времени
    const formatDate = (date) => {
      const pad = (n) => (n < 10 ? "0" + n : n);
      const year = date.getFullYear();
      const month = pad(date.getMonth() + 1);
      const day = pad(date.getDate());
      return `${year}-${month}-${day}`;
    };

    const formatTime = (date) => {
      const pad = (n) => (n < 10 ? "0" + n : n);
      const hours = pad(date.getHours());
      const minutes = pad(date.getMinutes());
      return `${hours}:${minutes}`;
    };

    setCurrentDate(formatDate(date));
    setCurrentTime(formatTime(date));
  }, []);

  return (
    <>
      <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-3">
        <label
          htmlFor="trainingDate"
          className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
        >
          Дата Тренировки
        </label>
        <div className="mt-2 sm:col-span-2 sm:mt-0">
          <input
            type="date"
            name="trainingDate"
            id="trainingDate"
            value={currentDate}
            onChange={(e) => setCurrentDate(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-3">
        <label
          htmlFor="trainingTime"
          className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
        >
          Время Тренировки
        </label>
        <div className="mt-2 sm:col-span-2 sm:mt-0">
          <input
            type="time"
            name="trainingTime"
            id="trainingTime"
            value={currentTime}
            onChange={(e) => setCurrentTime(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <StudentsTrainingList
        currentDate={currentDate}
        currentTime={currentTime}
      />
    </>
  );
};

export default SaveTraining;
