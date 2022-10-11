import { ITask } from '../../types/task';
import Item from './Item';
import style from './List.module.scss';

export interface IProp {
  tasks: ITask[],
  selectTask: (selectedTask: ITask) => void
}

export default function List({ tasks, selectTask }: IProp) {
  return (
    <aside className={style.taskList}>
      <h2> Estudos do dia </h2>
      <ul>
        {tasks.map((item => (
          <Item 
            selectTask={ selectTask }
            key={ item.id }
            {...item}
          />
        )))}
      </ul>
    </aside>
  )
}