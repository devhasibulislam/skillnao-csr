import "./App.css";
import Header from "./shared/Header";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Footer from "./shared/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
