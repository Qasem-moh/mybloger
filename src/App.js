import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Pending from "./Components/Pending";
import Header from "./Components/Header";

function App() {
  return (<div className="app">
          <NavBar/>
    <div className="container">
        {/*<Header/>*/}
        <Home/>

    </div>


      </div>
  );
}

export default App;
