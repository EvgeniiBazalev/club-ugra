const getCurrentWeekDays = () => {
  const daysOfWeek = [1, 2, 3, 4, 5, 6, 7];
  const currentDate = new Date();

  // Находим первый день текущей недели (понедельник)
  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(
    currentDate.getDate() -
      currentDate.getDay() +
      (currentDate.getDay() === 0 ? -6 : 1)
  );

  const currentWeekDays = daysOfWeek.map((day) => {
    const dayIndex = daysOfWeek.indexOf(day);
    const currentDay = new Date(startOfWeek);
    currentDay.setDate(startOfWeek.getDate() + dayIndex);

    const options = {
      weekday: "long",
      day: "2-digit",
      month: "numeric",
      year: "numeric",
    };
    const formattedDate = currentDay
      .toLocaleDateString("ru-RU", options)
      .replace(/\sг\.$/, "");

    return {
      id: day,
      date: formattedDate,
      isCurrentDate: currentDay.toDateString() === currentDate.toDateString(),
    };
  });

  return currentWeekDays;
};

const getCurrentWeekDaysTest = getCurrentWeekDays();
console.log(getCurrentWeekDaysTest);

export default getCurrentWeekDays;
