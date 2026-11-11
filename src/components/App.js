import React from "react";
import * as ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About";
import ContactUs from "./ContactUs";
import Error from "./Error";




const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout/>,
    errorElement : <Error/>
  },
  {
   path : "/about",
   element : <About/>
  },
  {
    path : "/contactUs",
    element : <ContactUs/>
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
