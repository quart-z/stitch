import logo from './logo.svg';
import './App.css';

import Content from "./components/content";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="App">

      <header className="">
        <div className = "container">
          <nav className="">
            {/* Nav section , <NavBar /> */}
            <img src="/logo512.png" href="index.html" className="App-logo logo logo_box hue-shift">
            </img>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Case Study
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className = "landing_page">
        <Content />

      </section>
    </div>
  );
}

export default App;
