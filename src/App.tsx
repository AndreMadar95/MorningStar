import {  useQuery } from "@tanstack/react-query"

const fetchData = async (term = '') => {
  if(term){
    return fetch(`http://localhost:3000/api/v1/funds/?term=${term}`).then((resp)=>resp.json());
  }
  return fetch('http://localhost:3000/api/v1/funds/').then((resp)=>resp.json());
}


function App() {
  const {data} = useQuery(['morningstar-data'], ()=>fetchData("ABC") );
  console.log({data})
  return (
    <div className="App">
      <h1 className="text-blue-200">Hello</h1>
    </div>
  )
}

export default App
