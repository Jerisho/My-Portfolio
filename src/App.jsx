import NavBar from "./scenes/Navbar.jsx"
import DotGroup from "./scenes/DotGroup.jsx";
import { useEffect, useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import Landing from "./scenes/Landing.jsx";
import MySkills from "./scenes/MySkills.jsx";
import DivSeparator from "./components/DivSeparator.jsx";


function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  return ( 
  <div className="app bg-deep-blue">
    <NavBar 
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage = {setSelectedPage}/>
      </div>
      <DivSeparator/>
      <div className="w-5/6 mx-auto md:h-full flex items-center justify-center">
        <MySkills />
      </div>
      <DivSeparator/>
  </div>
  );
}

export default App;
