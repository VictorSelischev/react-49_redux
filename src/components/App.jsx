import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './Layout/Layout';
// import { NotFound } from 'pages/NotFound';

import { fetchTasks } from 'redux/operations';
import { selectTasks } from 'redux/selectors';
import { selectError, selectIsLoading } from 'redux/selectors';


import { AppBar } from './AppBar/AppBar';
import { TaskForm } from './TaskForm/TaskForm';
import { TaskList } from './TaskList/TaskList';



const HomePage = lazy(() => import('../pages/Home'));
const LoginPage = lazy(() => import('../pages/Login'));
const RegisterPage = lazy(() => import('../pages/Register'));
const TasksPage = lazy(() => import('../pages/Tasks'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
   }, [dispatch]);

  return (

    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route />
        <Route />
        <Route />
        <Route />
      </Route>
      <Route path='*' element={<NotFoundPage/>} />
    </Routes>

    // <Layout>
    //   <AppBar />
    //   <TaskForm />
    //   {isLoading && !error && <b>Request in progress...</b>}
    //   <TaskList />
    // </Layout>

    
    // <div>
    //   {isLoading && <p>Loading tasks...</p>}
    //   {error && <p>{error}</p>}
    //   <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
    // </div>
  );
};
