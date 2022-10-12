import Button from "../Button";
import Clock from "./Clock";
import style from './Timer.module.scss';
import { timeToSeconds } from "../../common/utillity/time";
import { ITask } from "../../types/task";
import { useEffect, useState } from "react";

interface IProp {
  selected: ITask | undefined
  endTask: () => void
}

export default function Timer({ selected, endTask }: IProp) {
  const [time, setTime] = useState<number>();
  
  useEffect(() => {
    if(selected?.time)
    setTime(timeToSeconds(selected.time))
  },[selected])

  function countdown(counter: number = 0) {
    setTimeout(() => {
      if(counter > 0) {
        setTime(counter - 1);
        return countdown(counter -1);
      }
      endTask();
    }, 1000)
  }

  return (
    <div className={style.timer}>
      <p className={style.title}>Escolha um card e inicie o timer</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => countdown(time)}>
        Começar
      </Button>
    </div>
  )
}