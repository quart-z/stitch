import logo from './logo.svg';
import './App.css';

import Content from "./components/content";
import NavBar from "./components/navbar";

function App() {
  return (
    <body className="">

      <header className="">
        <div className = "container">
          <nav className="">
            {/* Nav section , <NavBar /> */}
            <img src="/logo512.png" href="index.html" className="logo_box hue-shift">
            </img>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="https://www.woodyard.dev/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Docs
                </a>
              </li>
              <li className="nav-item">
                <a href="https://github.com/quart-z/stitch" className="nav-link">
                  Github
                </a>
              </li>
              <img src="/sun.png" href="index.html" className=" sun_logo sun_logo_box">
              </img>
              
            </ul>
          </nav>
          {/* End of navbar section */}
        </div>
      </header>
      <div className = "landing_page">
      {/* Content section , <Content /> */}

        {/* Background gradients */}
        <div className="gradient1">
        </div>
        <div className="gradient2">
        </div>

        {/* Title, description boxes and items */}
        <div className = "title_box">
          <h1 className= "title_item">
          Style your components with confidence
          </h1>
          <h2 className= "title_item">
          CSS-in-JS with near-zero runtime, SSR, multi-variant support, and a best in class developer experience
          </h2>
        </div>

        {/* Version Box, and items */}
        <div className = "version_content_box">
          <div className = "version_box">
            <img src="/logo512.png" href="index.html" className="App-logo version_item version_item_logo">
            </img>
            <p className = "version_item"> Stitches v10.0829 </p>
            <p className = "version_item"> I </p>
            <p className = "version_item"> See what's new -> </p>
          </div>
          <div className = "version_box_glow">
          </div>
        </div>

        <div className="section_divider">
          
        </div>

        {/* Stats Box, and items */}
        <div className = "stats_content_box">
          <div className = "stats_box">

            <div className = "stats_item">
              <h1 className= "stats_title"> Bundle Size (Core) </h1>
              <h2 className = "stats_title"> 5.9kb </h2>
            </div>

            <div className = "stats_item">
              <h1 className= "stats_title"> Bundle Size (React) </h1>
              <h2 className = "stats_title"> 6.1kb </h2>
            </div>

            <div className = "stats_item">
              <h1 className= "stats_title"> Runtime Interpolations </h1>
              <h2 className = "stats_title"> Zero </h2>
            </div>

            <div className = "stats_item">
              <h1 className= "stats_title"> Variants </h1>
              <h2 className = "stats_title"> ∞ </h2>
            </div>

          </div>
        </div>

      </div>
    </body>
  );
}

export default App;
