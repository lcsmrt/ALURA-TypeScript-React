import { useState } from 'react';
import Item from './Item/item';
import style from './List.module.scss';

export default function List() {
  const [tasks, setTasks] = useState([{
    task: 'React',
    time: '02:00:00'
  }, {
    task: 'JavaScript',
    time: '01:00:00'
  }, {
    task: 'TypeScript',
    time: '00:45:00'
  }])
  return (
    <aside className={style.taskList}>
      <h2 onClick={() => {
        setTasks([...tasks, { task: "Conceito de state", time: "00:45:00"}]);
      }}> Estudos do dia </h2>
      <ul>
        {tasks.map((item, index) => (
          <Item 
            key={index}
            task={item.task}
            time={item.time}
          />
        ))}
      </ul>
    </aside>
  )
}