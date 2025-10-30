import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default function RootLayout() {
  return (
    <div className="  ">
      <Navbar />
      <main className="grow ">  
         <Outlet />
      </main>
      
       <Sidebar />
      <Footer />
     
    </div>
  );
}
