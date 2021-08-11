export function readableTime(time: number) {
  let hours = Math.floor(time / 3600);
  time %= 3600;
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  return hours > 0 ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;
}
