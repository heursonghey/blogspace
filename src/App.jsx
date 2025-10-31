import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Creat from "./components/Creat";
import Register from "./components/Register";
import Login from "./components/Login";
import WriteCreat from "./components/WriteCreat";
import Homepage from "./page/Homepage";
import Footer from "./components/Footer";
import Registerpage from "./page/Registerpage";
import Card from "./components/Card";
import CardDetail from "./components/CardDetail";
import { getData } from "./layout/api";
import CardDefault from "./components/CardDefault";
import Categories from "./components/Categories";
import { useNavigate } from "react-router-dom";
import Component from "./components/Card";
import ProfilePictureUploader from"./components/Profile"
import EventCard from "./layout/CardforPost";
function App() {
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const getProducts = async () => {
    let data = await getData("/blogs?page_size=15&page=1&sort_by=created_at");
    let category = await getData("/categories");

    // console.log(data.blogs);
    setProduct(data.blogs);
    setCategories(category);
    console.log(category);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleGetCategory = (categories)=> {
    navigate("/blogs",{state:categories})
  }
  return (
    <>
      {/* <EventCard /> */}
      <CardDefault  />
      <section>
        <div className=" lg:ml-70 md:ml-60 sm:ml-50  grid grid-cols-2 gap-x-50 w-40 ml-8  lg:grid-cols-5 md:grid-cols-3 md:gap-x-70  lg:gap-x-70 sm:gap-x-70 sm:grid-cols-2   ">
          {categories.map((categories, index) => (
            <Categories key={index}  getCategory={()=>handleGetCategory(categories.name)} categories={categories.name} />
          ))}
        </div>
      </section>

      <div className="grid lg:grid-cols-4 grid-cols-1 w-90 ml-10  gap-8 lg:ml-60 sm:ml-60 md:ml-50 p-8   mt-10 md:grid-cols-2  md:w-200 sm:w-100 lg:w-350 sm:ml- sm:grid-cols-1  ">
        {product.map((blogs, index) => (
          <Component
            key={index}
            title={blogs.title}
            id={blogs.id}
            // content={blogs.content}
            thumbnail={blogs.thumbnail}
            author_id={blogs.author_id}
            username={blogs.author.username}
            profileUrl={blogs.author.profileUrl}
            bio={blogs.author.bio}
            number_of_likes={blogs.number_of_likes}
            number_of_bookmarks={blogs.number_of_bookmarks}
            categories={blogs.categories.map((c) => c.name)}
          />
        ))}
      </div>
    
    </>
  );

  // useEffect(() => {
  //   console.log("called");
  //   getProducts();
  //   },[]);
}

export default App;
