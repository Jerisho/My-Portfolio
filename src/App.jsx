import NavBar from "./scenes/Navbar.jsx";
import DotGroup from "./scenes/DotGroup.jsx";
import { useEffect, useRef, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Landing from "./scenes/Landing.jsx";
import MySkills from "./scenes/MySkills.jsx";
import Projects from "./scenes/Projects.jsx";
import Contact from "./scenes/Contact.jsx";
import DivSeparator from "./components/DivSeparator.jsx";
import Certificates from "./scenes/Certificates.jsx";
import Footer from "./scenes/Footer.jsx";
import useObserver from "./hooks/useObserver.jsx";

function App() {
	const [selectedPage, setSelectedPage] = useState("home");
	const [isTopOfPage, setIsTopOfPage] = useState(true);
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
	//Refs xd
	const refLading = useRef();
	const refSkills = useRef();
	const refProjects = useRef();
	const refCerficates = useRef();
	const refContact = useRef();
	const observer = useObserver();
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) setIsTopOfPage(true);
			if (window.scrollY !== 0) setIsTopOfPage(false);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		observer(
			[refLading, refSkills, refProjects, refCerficates, refContact],
			(e) => {
				setSelectedPage(e.id);
			}
		);
	}, [selectedPage]);

	return (
		<div className="app bg-deep-blue ">
			<NavBar
				isTopOfPage={isTopOfPage}
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
			<div
				id="home"
				ref={refLading}
				className="w-5/6 mx-auto md:h-full relative"
			>
				{isAboveMediumScreens && (
					<DotGroup
						selectedPage={selectedPage}
						setSelectedPage={setSelectedPage}
					/>
				)}
				<Landing setSelectedPage={setSelectedPage} />
			</div>
			<DivSeparator />
			<div
				id="skills"
				ref={refSkills}
				className="w-5/6 mx-auto md:min-h-full flex items-center justify-center relative"
			>
				<MySkills
					selectedPage={selectedPage}
					setSelectedPage={setSelectedPage}
				/>
			</div>
			<DivSeparator />
			{/*Change to "h-full" for "h-auto" when add more projects*/}
			<div
				id="projects"
				ref={refProjects}
				className="w-5/6 mx-auto  md:min-h-full flex items-center justify-center relative"
			>
				<Projects />
			</div>
			<DivSeparator />
			<div
				id="certificates"
				ref={refCerficates}
				className="w-5/6 mx-auto  md:min-h-full flex items-center justify-center relative"
			>
				<Certificates />
			</div>
			<DivSeparator />
			<div
				id="contact"
				ref={refContact}
				className="w-5/6 mx-auto  md:min-h-full flex items-center justify-center relative"
			>
				<Contact />
			</div>
			<div className="w-6/6 mx-auto  md:m-full flex items-center justify-center relative  bg-opaque-black">
				<Footer />
			</div>
		</div>
	);
}

export default App;
