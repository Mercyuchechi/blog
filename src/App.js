import Display from "./display";
import Navbar from "./Navbar";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <div>
          <Display />
        <h1>This is my first react app</h1>
          
        </div>
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
