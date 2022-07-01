
import './App.css';
import {useState} from "react";
import axios from "axios"

function App() {
  const[rollno,setrollno]=useState("");
  const[data,setpercent]=useState("");

  const attendance=()=>{
    axios.get("https://meme-api.herokuapp.com/gimme/wholesomememes").then(response=>{
     setpercent (response.data)})

  return (
   <>
 <input type="text" required size={10}  onChange={(event)=>{
  setrollno(event.target.value.toLowerCase());
}} /> 
   <button onClick={attendance}> click</button>
   {data.percent}
   </>
  );
}}

export default App;
