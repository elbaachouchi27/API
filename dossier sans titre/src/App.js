import React, {useState,useEffect} from 'react';
import axios from "axios"
import Header from '../src/components/ui/Header'
import CharactersGrid from '../src/components/characters/CharactersGrid'
import Search from "../src/components/ui/Search"

import '../src/App.css'


const App = ()=>{
  const [items,setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query,setQuery]=useState("")

useEffect(()=> {
const fetchItems= async()=> {
        setIsLoading(true)

        const result = await axios(
          `https://www.breakingbadapi.com/api/characters?name=${query}`
        )

  console.log(result.data)
  setItems(result.data)
  setIsLoading(false)
}
fetchItems()
},[query])
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)}/>
      
      <CharactersGrid isLoading={isLoading} items={items} />
      </div>
  );
}

export default App;
