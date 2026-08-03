import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries/Countries'

const countriesFetch=async()=>{
 const res= await fetch('https://openapi.programming-hero.com/api/all');
return res.json();
}

function App() {
  const countriesPromiss = countriesFetch()

  return (
    <>
      <h1> Welocome to React workd</h1>
      <Suspense fallback={<p>loadding....</p>}>
      <Countries countriesPromiss={countriesPromiss}></Countries>
      </Suspense>
      
      
    </>
  )
}

export default App
