import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Contact from "./containers/contact/Contact";
import Features from "./containers/features/Features";
import Header from "./containers/header/Header";
import Pages from "./containers/pages/Pages";
import Pricing from "./containers/pricing/Pricing";
import Screenshots from "./containers/screenshots/Screenshots";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Features />
      <Pages />
      <Screenshots />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;
