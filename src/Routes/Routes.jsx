import {
  createBrowserRouter,
} from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Authentication/Login/Login";
import SignUp from "../Authentication/SignUp/SignUp";
import ContactPage from "../Pages/Contact/ContactPage";
import About from "../Pages/About/About";
import AllFaq from "../Pages/FAQ/AllFaq";
// import Register from "../Authentication/Register";
import Dashboard from "../Layout/Dashboard";
// import PrivateRoute from "../Providers/PrivateRoute"
// import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
// import AddCamp from "../Pages/Dashboard/AddCamp/AddCamp";
// import CampDetails from "../Pages/Home/Camp/CampDetails";
// import JoinCamp from "../Pages/Home/Camp/JoinCamp";
// import ManageCamp from "../Pages/Dashboard/ManageCamp/ManageCamp";
// import ManageRegisteredCamp from "../Pages/Dashboard/ManageRegisteredCamp/ManageRegisteredCamp";
// import UpdateCamp from "../Pages/Dashboard/UpdateCamp/UpdateCamp";
import Profile from "../Pages/Dashboard/Profile/Profile";
import AllService from "../Pages/Service/AllService";
// import UpdateProfile from "../Pages/Dashboard/UpdateProfile/UpdateProfile";
// import RegisteredCamp from "../Pages/Dashboard/RegisteredCamp/RegisteredCamp";
// import Payment from "../Pages/Dashboard/Payment/Payment";
// // import AvailableCamp from "../Pages/AvailableCamp/AvailableCamp";
// import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
// import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:'',
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <SignUp/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/service',
        element: <AllService/>
      },
      {
        path: '/faq',
        element: <AllFaq/>
      },
      {
        path: '/contact',
        element: <ContactPage/>
      }
      // {
      //   path: '/campDetails/:id',
      //   element: <PrivateRoute> <CampDetails></CampDetails></PrivateRoute>,
      //   loader: ({params}) => fetch(`https://server-site-lilac.vercel.app/singleCamp/${params.id}`)
      // },
      // {
      //   path: '/joinCamp/:id',
      //   element: <JoinCamp></JoinCamp>,
      //   loader: ({params}) => fetch(`https://server-site-lilac.vercel.app/joinCamp/${params.id}`)
      // }
    ]
  },
  {
    path: 'dashboard',
    // element:  <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>,
    element: <Dashboard></Dashboard>,
    children: [
      // general user can access
      
      {
        path: 'profile',
        // element: <PrivateRoute> <Profile></Profile> </PrivateRoute>
        element:  <Profile></Profile> 
      },
  //     {
  //       path: 'registeredCamp',
  //       element: <PrivateRoute> <RegisteredCamp></RegisteredCamp> </PrivateRoute>
  //     },
      
  //     {
  //       path: 'paymentHistory',
  //       element: <PrivateRoute> <PaymentHistory></PaymentHistory> </PrivateRoute>
  //     },
  //     {
  //       path: 'payment/:id',
  //       element: <PrivateRoute> <Payment></Payment> </PrivateRoute>,
  //       loader: ({params}) => fetch(`https://server-site-lilac.vercel.app/camp/${params.id}`)
  //     },

  //     // Only Admin can access
  //     {
  //       path: 'adminHome',
  //       element: <AdminHome></AdminHome>
  //     },
  //     {
  //       path: 'allUsers',
  //       element: <AllUsers></AllUsers>
  //     },
  //     {
  //       path: 'addCamp',
  //       element: <AddCamp></AddCamp>
  //     },
  //     {
  //       path: 'manageCamp',
  //       element: <ManageCamp></ManageCamp>
  //     },
  //     {
  //       path: 'manageRegisteredCamp',
  //       element: <ManageRegisteredCamp></ManageRegisteredCamp>
  //     },
  //     {
  //       path: 'profile',
  //       element: <Profile></Profile>
  //     },
  //     {
  //       // updateCamp
  //       path: 'updateCamp/:id',
  //       element: <UpdateCamp></UpdateCamp>,
  //       loader: ({params}) => fetch(`https://server-site-lilac.vercel.app/updateCamp/${params.id}`)
  //     },
  //     {
  //       // updateCamp
  //       path: 'updateProfile/:email',
  //       element: <UpdateProfile></UpdateProfile>,
  //       loader: ({params}) => fetch(`https://server-site-lilac.vercel.app/updateProfile/${params.email}`)
  //     }
   ]
   }
]);