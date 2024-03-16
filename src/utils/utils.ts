export const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const remainingSeconds = seconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  const remainingSecondsAfterMinutes = Math.floor(remainingSeconds % 60);

  const hoursStr = hours < 10 ? `0${hours}` : `${hours}`;
  const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const secondsStr =
    remainingSecondsAfterMinutes < 10
      ? `0${remainingSecondsAfterMinutes}`
      : `${remainingSecondsAfterMinutes}`;

  if (hours > 0) {
    return `${hoursStr}:${minutesStr}:${secondsStr}`;
  } else {
    return `${minutesStr}:${secondsStr}`;
  }
};
