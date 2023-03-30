import React from "react";
import Form from "./SearchForm";
import Movies from "./Movies";
const Home = () => {
  return (
    <div className="block bg-gray-200 items-center m-auto">
      <main className="flex w-3/4 m-auto bg-gray-200 items-center">
        <div className="m-auto p-4 w-full h-3/4 items-center overflow-auto">
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
