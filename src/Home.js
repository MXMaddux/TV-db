import React from "react";
import Form from "./SearchForm";
import Movies from "./Movies";
const Home = () => {
  return (
    <div className="bg-gray-200">
      <main className=" main-div flex  bg-gray-200">
        <div className="gray-div p-4 w-full ">
          <div className="flex items-center">
            <h1 className="logo mb-3 w-3/5">
              TV Show <span className="logo-span mb-3">Database!</span>
            </h1>
            <h3>Search any TV Show!</h3>
          </div>
          <Form />
          <Movies />
        </div>
      </main>
    </div>
  );
};

export default Home;
