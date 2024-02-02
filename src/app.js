import React ,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import BodySection from "./component/BodySection";
import {createBrowserRouter,RouterProvider,Outlet,} from "react-router-dom";
import AboutUs from "./component/AboutUs";
import ContactUs from "./component/ContactUs";
import Error from "./component/Error";
import RestoMenu from "./component/RestoMenu";
import Shimmerui from "./component/ShimmerUi";
// import Grocery from "./component/Grocery";



const MyAppLayout = () => {
  return (
    <div className="app-container">
      <Header />
      <Outlet/>
    </div>
  );
};

const Grocery =lazy(()=>import ("./component/Grocery"))

const appRouter = createBrowserRouter([
  {
  path:"/",
  element:<MyAppLayout />,
  errorElement:<Error/> ,
  children:[
    {
      path:"/",
      element:<BodySection/>,
    },
    {
      path:"/aboutus",
      element:<AboutUs/>,
    },
    {
      path:"/contactus",
      element:<ContactUs/>,
    },
    {
      path:"/grocery",
      element:<Suspense fallback={<Shimmerui/>  }><Grocery/></Suspense>,
    },
    {
      path:"/restomenu/:resId",
      element:<RestoMenu/>,
    },


  ]

},

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
