import css from './TaskList.module.css';
import { Task } from 'components/Task/Task';
import { statusFilters } from 'redux/constants';
import { useSelector } from 'react-redux';

console.log(statusFilters);

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const statusFilter = useSelector(state => state.filters.status);
  const tasks = useSelector(state => state.tasks);

  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li key={task.id} className={css.listItem}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
