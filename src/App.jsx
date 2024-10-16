
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Hero from './pages/Home/Hero';
import Signup from './pages/Users-Venders/Signup';
import Login from './pages/Users-Venders/Login';
import PostingForm from './pages/Posting-Form/PostingForm';
import DashboardLayout from './Layouts/DashboardLayout';
// import Overview from './pages/dashboard/Overview'
import Settings from './pages/dashboard/Settings';
import Customers from './pages/dashboard/Customers';
import Orders from './pages/dashboard/Orders';
import Products from './pages/dashboard/Products';
import Transactions from './pages/dashboard/Transactions';
import Todos from './pages/dashboard/Todos';

function App() {
  const router = createBrowserRouter([

    //path: "index",
    //element: "<GoBack/>"

    {
      path: "/",
      element: <Hero />,
    },

    {
      path: "/signup",
      element: <Signup />,
    },

    {
      path: "/login",
      element: <Login />,

    },

    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          // path: "overview",
          index: true,
          element: <Todos/>,
        },

        {
          path: "postingform",
          element: <PostingForm />,
    
        },

        {
          path: "products",
          element: <Products/>,
        },

        {
          path: "orders",
          element: <Orders/>,
        },

        {
          path: "customers",
          element: <Customers/>,
        },
       
        {
          path: "transactions",
          element: <Transactions/>,
        },

        {
          path: "settings",
          element: <Settings/>,
        },
        
      ],
    },




  ])

  return (<RouterProvider router={router} />
  )
}

export default App
