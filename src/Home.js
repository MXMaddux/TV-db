import React from "react";
import Form from "./SearchForm";
import Movies from "./Movies";
const Home = () => {
  return (
    <div className="flex bg-gray-200">
      <main className=" main-div flex  bg-gray-200">
        <div className="gray-div p-4 w-full ">
            <h1 className="logo mb-3 w-3/5">
              TV Show <span className="logo-span mb-3">Database!</span>
            </h1>
          <Form />
          <Movies />
        </div>
      </main>
    </div> 
  );
};

export default Home;
