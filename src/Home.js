import React from 'react'
import Form from './SearchForm'
import Movies from './Movies'
const Home = () => {
  return <main className='h-2/3 w-2/3 mx-auto p-4'>
    <Form />
    <Movies />
  </main>
}

export default Home
