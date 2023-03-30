import React from "react";
import Form from "./SearchForm";
import Movies from "./Movies";
const Home = () => {
  return (
    <div className="flex bg-gray-200 items-center">
      <main className="flex h-3/4 w-3/4 m-auto">
        <div className="m-auto p-4 w-3/4 sm:w-auto">
          <article className="flex">
            <h1 className="logo mb-3 w-3/5">
              TV Show <span className="logo-span mb-3">Database!</span>
            </h1>
          </article>
          <Form />
          <Movies />
        </div>
      </main>
    </div>
  );
};

export default Home;
