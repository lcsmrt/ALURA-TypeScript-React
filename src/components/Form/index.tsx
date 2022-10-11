import React from 'react';
import Button from '../Button';
import style from './Form.module.scss';


class Form extends React.Component {
  state = {
    task: "",
    time: "00:00"
  }

  addTask(formEvent: React.FormEvent<HTMLFormElement>) {
    formEvent.preventDefault();
  }

  render() {
    return (
      <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="task">
            Adicione um novo estudo
          </label>
          <input
            type="text"
            name="task"
            value={this.state.task}
            onChange={formEvent => this.setState({ ...this.state, task: formEvent.target.value })}
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
            value={this.state.time}
            onChange={formEvent => this.setState({ ...this.state, time: formEvent.target.value })}
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
}

export default Form;