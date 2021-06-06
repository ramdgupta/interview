import React, { useState, useEffect } from 'react'
import Card from "./components/Card";
import Filter from "./components/Filter";
const mainUrl = `https://api.spacexdata.com/v3/launches?limit=100`
const yearFilter = `${mainUrl}?limit=100&launch_success=true&land_success=true&launch_year=`
const launchTrue = `${mainUrl}?limit=100&launch_success=`
const landTrue = `${mainUrl}?limit=100&land_success=`

function App() {
  const [loading, setLoading]= useState(true);
  const [launches, setLaunches] = useState([]);
  const [url, setUrl] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [isMessage, setMessage] = useState(false);
  const [value, setValue] = useState('');


  //Fetch data function
  const fetchYear= async () => {
    setLoading(true)
    try {
      const response = await fetch(url);
      let data = await response.json();
      if(data.length){
        setMessage(false)
        setLaunches(data)
        console.log('DATA')
      }
      else{
        setMessage(true)
        console.log('abc')
      }
      
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  //Fetch data at first laod
  useEffect(() => {
    setUrl(mainUrl)
  }, [])
  //Fetch data at filter option
   useEffect(() => {
    fetchYear();
  },[url]) 

// Filter event listner
  const filterYear = (e, stateValue) => {
    let filterTag = e.target.dataset.filter;
    let filterValue = e.target.dataset.value;
    console.log(filterValue)
    setIsActive(stateValue)
    setValue(filterValue)
    if(filterTag === 'year'){
      setUrl(`${yearFilter}${filterValue}`)
    }
    if(filterTag === 'launch'){
      setUrl(`${launchTrue}${filterValue}`)
    }
    if(filterTag === 'land'){
      setUrl(`${landTrue}${filterValue}`)
    }
  } 
  return (
    <>
      <header className="App-header">
       <h1> Specex Launch Program</h1>
      </header>
        <Filter filterYear={filterYear} isActive={isActive}/>
        <section className="content grid">
          {launches.map((launch, index)=>{
            return(
              <Card {...launch} key={index} count={index}/>
            )
          })}
        </section>
        {loading && <h2 className='loading grid'>Loading...</h2>}
        {!loading && isMessage && <h2 className='loading grid alert'>Data is not avilable {value}</h2>}

    </>
  );
}

export default App;
