import style from './Clock.module.scss';

interface IProp {
  time: number | undefined
}

export default function Clock({ time = 0 }: IProp) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minutesTen, minutesOne] = String(minutes).padStart(2, '0');
  const [secondsTen, secondsOne] = String(seconds).padStart(2, '0');

  return (
    <>
      <span className={style.clockNumber}>{minutesTen}</span>
      <span className={style.clockNumber}>{minutesOne}</span>
      <span className={style.clockDivision}>:</span>
      <span className={style.clockNumber}>{secondsTen}</span>
      <span className={style.clockNumber}>{secondsOne}</span>
    </>
  )
}