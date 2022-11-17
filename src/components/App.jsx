import { Layout } from './Layout/Layout';
import { AppBar } from './AppBar/AppBar';
import { TaskForm } from './TaskForm/TaskForm';

export const App = () => {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
    </Layout>
  );
};
