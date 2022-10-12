import React, { useState } from 'react';
import { ITask } from '../../types/task';
import Button from '../Button';
import style from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface IProp {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

export default function Form({ setTasks }: IProp) {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00");
  function addTask(formEvent: React.FormEvent<HTMLFormElement>) {
    formEvent.preventDefault();
    setTasks(oldTasks => 
      [
        ...oldTasks, 
        {
          task,
          time,
          selected: false,
          completed: false,
          id: uuidv4()
        }
      ]
    );
    setTask("");
    setTime("00:00")
  }

  return (
    <form className={ style.newTask } onSubmit={ addTask }>
      <div className={ style.inputContainer }>
        <label htmlFor="task">
          Adicione um novo estudo
        </label>
        <input
          type="text"
          name="task"
          value={task}
          onChange={formEvent => setTask(formEvent.target.value )}
          id="task"
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">
            Tempo
        </label>
        <input
          type="time"
          step="1"
          name="time"
          value={time}
          onChange={formEvent => setTime(formEvent.target.value )}
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit">
        Adicionar
      </Button>
    </form>
  )  
}