import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Project from "../components/Project";
import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.png";
import FBlogo from "../assets/FBlogo.png";
import RClogo from "../assets/REACTlogo.png";
import HTMLlogo from "../assets/HTMLlogo.png";
import CSSlogo from "../assets/CSS3logo.png";
import JSlogo from "../assets/JSlogo.png";

const Projects = () => {
	const IsAboutMediumScreen = useMediaQuery("(min-width: 1060px)");
	const container = {
		hidden: {},
		visible: {
			transition: { staggerChildren: 0.2 },
		},
	};

	return (
		<section
			id="projects"
			className="flex flex-col h-full items-center justify-center py-[45px]"
		>
			{IsAboutMediumScreen ? (
				<>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 1 }}
						variants={{
							hidden: { opacity: 0, x: 0 },
							visible: { opacity: 1, x: 0 },
						}}
						className="flex md:w-[640px] h-[0.5px] mb-[100px] justify-center items-center border border-aqua border-dashed"
					>
						<div className="flex h-full justify-center items-center bg-deep-blue">
							<h2 className="font-yellowtail text-6xl px-[20px] pr-[30px] bg-deep-blue">
								Projects
							</h2>
						</div>
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.8 }}
						transition={{ duration: 0.8 }}
						variants={container}
						className="flex h-4/6 justify-center items-center"
					>
						<div className="flex flex-wrap justify-center items-center w-full h-full mb-5 gap-5">
							<Project
								title={"Lucian Vice - Noticias"}
								img={Project1}
								alt="Project_LoL"
								link="https://jerisho.github.io/HTML-CSS-LOL-PAGE-VICE/"
								technology={[
									{
										id: 0,
										img: `${HTMLlogo}`,
										alt: "bg-amber",
										wd: "w-[35px]",
									},
									{ id: 1, img: `${CSSlogo}`, alt: "bg-amber", wd: "w-[25px]" },
								]}
								detail={
									"This is my first project. Is a League of Legends news portal. His was make with tech HTML and CSS."
								}
							/>
							<Project
								title={"E-commerce Gamer"}
								img={Project2}
								alt="Project_EcommerceJS"
								link="https://jerisho.github.io/E-commerce-manual-automatic/"
								technology={[
									{
										id: 0,
										img: `${HTMLlogo}`,
										alt: "bg-amber",
										wd: "w-[35px]",
									},
									{ id: 1, img: `${CSSlogo}`, alt: "bg-amber", wd: "w-[25px]" },
									{ id: 2, img: `${JSlogo}`, alt: "bg-amber", wd: "w-[35px]" },
								]}
								detail={
									"My second project is an e-commerce. My first experience with used Javascript. I used function, jquery, localstorage, arrays, in others methods and functions."
								}
							/>
							<Project
								title={"Smartphone Store"}
								img={Project3}
								alt="Project_EcommerceReact"
								link="https://jerisho.github.io/Ecommerce-REACT/"
								technology={[
									{
										id: 0,
										img: `${HTMLlogo}`,
										alt: "bg-amber",
										wd: "w-[35px]",
									},
									{ id: 1, img: `${CSSlogo}`, alt: "bg-amber", wd: "w-[25px]" },
									{ id: 2, img: `${JSlogo}`, alt: "bg-amber", wd: "w-[35px]" },
									{ id: 3, img: `${FBlogo}`, alt: "bg-amber", wd: "w-[27px]" },
									{ id: 4, img: `${RClogo}`, alt: "bg-amber", wd: "w-[40px]" },
								]}
								detail={
									"My third project is another e-commerce. My first experience with React and Firebase. In this case is about for Smartphone Store."
								}
							/>
						</div>
					</motion.div>
				</>
			) : (
				<>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 1 }}
						variants={{
							hidden: { opacity: 0, x: 0 },
							visible: { opacity: 1, x: 0 },
						}}
						className="flex w-full h-[0.5px]  mt-[25px] mb-[80px] justify-center items-center border border-aqua border-dashed "
					>
						<h2 className="font-yellowtail text-5xl px-[20px] pr-[30px] bg-deep-blue">
							Projects
						</h2>
					</motion.div>
					<div>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.4 }}
							transition={{ duration: 0.8 }}
							variants={container}
							className="flex flex-wrap justify-center w-full h-full mb-5 gap-5"
						>
							<Project
								title={"Lucian Vice - Noticias"}
								img={Project1}
								alt="Project_LoL"
								link="https://jerisho.github.io/HTML-CSS-LOL-PAGE-VICE/"
								technology={[
									{
										id: 0,
										img: `${HTMLlogo}`,
										alt: "bg-amber",
										wd: "w-[35px]",
									},
									{ id: 1, img: `${CSSlogo}`, alt: "bg-amber", wd: "w-[25px]" },
								]}
								detail={
									"This is my first project. Is a League of Legends news portal. His was make with tech HTML and CSS."
								}
							/>
							<Project
								title={"E-commerce Gamer"}
								img={Project2}
								alt="Project_EcommerceJS"
								link="https://jerisho.github.io/E-commerce-manual-automatic/"
								technology={[
									{
										id: 0,
										img: `${HTMLlogo}`,
										alt: "bg-amber",
										wd: "w-[35px]",
									},
									{ id: 1, img: `${CSSlogo}`, alt: "bg-amber", wd: "w-[25px]" },
									{ id: 2, img: `${JSlogo}`, alt: "bg-amber", wd: "w-[35px]" },
								]}
								detail={
									"My second project is an e-commerce. My first experience with used Javascript. I used function, jquery, localstorage, arrays, in others methods and functions."
								}
							/>
							<Project
								title={"Smartphone Store"}
								img={Project3}
								alt="Project_EcommerceReact"
								link="https://jerisho.github.io/Ecommerce-REACT/"
								technology={[
									{
										id: 0,
										img: `${HTMLlogo}`,
										alt: "bg-amber",
										wd: "w-[35px]",
									},
									{ id: 1, img: `${CSSlogo}`, alt: "bg-amber", wd: "w-[25px]" },
									{ id: 2, img: `${JSlogo}`, alt: "bg-amber", wd: "w-[35px]" },
									{ id: 3, img: `${FBlogo}`, alt: "bg-amber", wd: "w-[27px]" },
									{ id: 4, img: `${RClogo}`, alt: "bg-amber", wd: "w-[40px]" },
								]}
								detail={
									"My third project is another e-commerce. My first experience with React and Firebase. In this case is about for Smartphone Store."
								}
							/>
						</motion.div>
					</div>
				</>
			)}
		</section>
	);
};

export default Projects;
