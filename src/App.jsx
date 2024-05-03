import { useState } from"react";
import "./App.css";
import workData from "./work";
import Movie from "./Movies";

function App() {
const [quote, setQuote] = useState("Click the button for a quote!");

async function makeRequest(){
const something = await fetch(URL)
const data = await something.json();

setQuote(data.quote);
}






  return (
   <div className="contanier">
    <Movie />
   </div>
  )
}

export default App;