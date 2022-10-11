import { ITask } from '../../../types/task'
import style from '../List.module.scss'

interface IProp extends ITask {
  selectTask: (selectedTask: ITask) => void
}

export default function Item({
  task, 
  time, 
  selected, 
  completed, 
  id, 
  selectTask 
}: IProp) {
  return (
    <li 
      className={ `${ style.item } ${ selected ? style.selectedItem : '' }` } 
      onClick={() => selectTask(
        {
          task,
          time,
          selected,
          completed,
          id
        }
      )}
    >
      <h3> { task } </h3>
      <span> {time} </span>
    </li>
  )
}