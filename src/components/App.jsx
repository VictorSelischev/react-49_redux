import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Routes, Route, NavLink } from 'react-router-dom';
// import styled from 'styled-components';

import { Layout } from './Layout/Layout';
// import { NotFound } from 'pages/NotFound';

import { fetchTasks } from 'redux/operations';
// import { selectTasks } from 'redux/selectors';
import { selectError, selectIsLoading } from 'redux/selectors';

import { AppBar } from './AppBar/AppBar';
import { TaskForm } from './TaskForm/TaskForm';
import { TaskList } from './TaskList/TaskList';

// const HomePage = lazy(() => import('../pages/Home'));
// const LoginPage = lazy(() => import('../pages/Login'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const TasksPage = lazy(() => import('../pages/Tasks'));

// const StyledLink = styled(NavLink)`
//   color: black;
//   margin-right: 20px;

//   &.active {
//     color: orange;
//   }
// `;

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      {/* <nav>
        <StyledLink to='/home' end >Home</StyledLink>
        <StyledLink to='/tasks' >Tasks</StyledLink>
        <StyledLink to='/register' end >Register</StyledLink>
        <StyledLink to='/login' end >Login</StyledLink>
      </nav>


    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/home' element={<HomePage/>} />
        <Route path='/tasks' element={<TasksPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/login' element={<LoginPage/>} />
      </Route>
      <Route path='*' element={<NotFound/>} />
    </Routes> */}

      <Layout>
        <AppBar />
        <TaskForm />
        {isLoading && !error && <b>Request in progress...</b>}
        <TaskList />
      </Layout>

      {/*// <div>
    //   {isLoading && <p>Loading tasks...</p>}
    //   {error && <p>{error}</p>}
    //   <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
    // </div> */}
    </div>
  );
};
