import App from '@/App';
import ErrorPage from '@/pages/errorPage/ErrorPage';
import Home from '@/pages/home/Home';
import Quiz from '@/pages/quiz/Quiz';
import Tasks from '@/pages/tasks/Tasks';
import Users from '@/pages/users/Users';
import Works from '@/pages/works/Works';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/users",
                element: <Users />
            },
            {
                path: "/tasks",
                element: <Tasks />
            },
            {
                path: "/works",
                element: <Works/>
            },
            {
                path: "/quiz",
                element: <Quiz />
            },
        ]
    }
])