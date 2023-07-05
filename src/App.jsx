import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Card from "./Card";
import trips from "./data.js"

function App() {

  return (
    <>
      <Navbar />
      {trips.map((el)=>{
        return (<Card {...el} />)
      })}
    </>
  );
}

export default App;
