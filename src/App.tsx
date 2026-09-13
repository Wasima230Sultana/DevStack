
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import type { devStackTypes } from './types/type'
import Categories from './components/Categories'
import Footer from './components/Footer'

const categoriesFetch = async():Promise<devStackTypes[]>=>{
const res = await fetch('/data.json')
const data = res.json();
return data;
}
function App() {
 const [categoriesPromise] = useState(()=>categoriesFetch());

  return (

    <div className='container mx-auto max-w-7xl mt-3 p-2'>
    <Navbar></Navbar>
    <Banner></Banner>
    <Suspense fallback={<span className="loading loading-dots loading-md"></span>
}>
    <Categories categoriesPromise={categoriesPromise}></Categories>
    </Suspense>
    <Footer></Footer>
    </div>
  )
}

export default App
