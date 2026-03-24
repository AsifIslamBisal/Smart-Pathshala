import {
  createBrowserRouter,
  
} from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home";
import Tutorial from "../components/Tutorial";
import TeamMembers from "../components/TeamMembers";
import Services from "../components/Services.jsx";
import Pricing from "../components/Pricing";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import Clients from "../components/Clients.jsx";
import Documentation from "../components/Documentation.jsx";
import PrivacyPolicy from "../components/PrivacyPolicy.jsx";




export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
      <ScrollToTop/>
      <MainLayout></MainLayout>
      </>
    ),
    errorElement:<ErrorPage/>,
    children: [
        {
            path: '/',
            element:<Home></Home>,
        },
        {
            path: '/services',
            element:<Services/>,
        },
        {
            path: '/pricing',
            element:<Pricing/>,
        },
        {
            path: '/about',
            element:<AboutUs/>,
        },
        {
            path: '/team',
            element:<TeamMembers/>,
        },
        {
            path: '/tutorial',
            element:<Tutorial/>,
        },
        {
            path: '/contact',
            element:<Contact/>,
        },
        {
            path: '/Clients',
            element:<Clients/>,
        },
        {
            path: '/documentation',
            element:<Documentation/>,
        },
        {
            path: '/privacy-policy',
            element:<PrivacyPolicy/>,
        },
    ]
  },
]);