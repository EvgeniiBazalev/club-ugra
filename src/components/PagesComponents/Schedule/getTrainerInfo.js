const getTrainerInfo = (trainerId, trainerArrow) => {
  const trainerInfo = trainerArrow.find((item) => item.id === trainerId);
  return trainerInfo;
};

export default getTrainerInfo;
