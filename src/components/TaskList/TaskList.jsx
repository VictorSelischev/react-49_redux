import css from './TaskList.module.css';
import { Task } from 'components/Task/Task';

export const TaskList = () => {
  return (
    <ul className={css.list}>
      {[].map(task => (
        <li key={task.id} className={css.listItem}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
