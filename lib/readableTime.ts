export default function readableTime(time: number) {
  let hours: number | string = Math.floor(time / 3600);
  time %= 3600;
  let minutes: number | string = Math.floor(time / 60);
  let seconds: number | string = time % 60;

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  return hours === "00"
    ? `${minutes}:${seconds}`
    : `${hours}:${minutes}:${seconds}`;
}
