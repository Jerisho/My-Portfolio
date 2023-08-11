import { useEffect, useState } from "react";
import menuIcon from "../assets/menu-icon.svg";
import closeIcon from "../assets/close-icon.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({
	page,
	top,
	selectedPage,
	isTopOfPage,
	isAboveSmallScreens,
}) => {
	const lowerCasePage = page.toLowerCase();
	const changeColor = () => {
		if (isAboveSmallScreens) {
			if (selectedPage === lowerCasePage && isTopOfPage === true) {
				return "text-amber hover:text-orange-600 transition duration-200";
			}
			if (selectedPage === lowerCasePage && isTopOfPage === false) {
				return "text-cyan-600 hover:text-orange-600 transition duration-200";
			}
			if (selectedPage !== lowerCasePage && isTopOfPage === true) {
				return "text-white hover:text-orange-600 transition duration-200";
			}
			if (selectedPage !== lowerCasePage && isTopOfPage === false) {
				return "hover:text-orange-600 transition duration-200";
			}
		} else {
			if (selectedPage === lowerCasePage && isTopOfPage === true) {
				return "text-cyan-600";
			}
			if (selectedPage === lowerCasePage && isTopOfPage === false) {
				return "text-cyan-600";
			}
		}
	};
	return (
		<AnchorLink offset={`${top}`} href={`#${lowerCasePage}`}>
			<p
				className={`${changeColor()} ${
					isAboveSmallScreens ? "text-xl" : "textl"
				}`}
			>
				{" "}
				{page}{" "}
			</p>
		</AnchorLink>
	);
};
const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
	const [isMenuToggled, setIsMenuToggled] = useState(false);
	const isAboveSmallScreens = useMediaQuery("(min-width:786px)");
	const navbarBackground = isTopOfPage ? "" : "bg-amber text-deep-blue ";

	return (
		<nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
			<div className="flex intems-center justify-between mx-auto w-5/6">
				<h4 className="text-3xl font-yellowtail">JG</h4>

				{/* DESKTOP NAV */}
				{isAboveSmallScreens ? (
					<div className="flex justify between gap-16 text-sm font-semibold">
						<Link
							page="Home"
							selectedPage={selectedPage}
							isTopOfPage={isTopOfPage}
							isAboveSmallScreens={isAboveSmallScreens}
						/>
						<Link
							page="Skills"
							top="80px"
							selectedPage={selectedPage}
							isTopOfPage={isTopOfPage}
							isAboveSmallScreens={isAboveSmallScreens}
						/>
						<Link
							page="Projects"
							top="70px"
							selectedPage={selectedPage}
							isTopOfPage={isTopOfPage}
							isAboveSmallScreens={isAboveSmallScreens}
						/>
						<Link
							page="Certificates"
							top="80px"
							selectedPage={selectedPage}
							isTopOfPage={isTopOfPage}
							isAboveSmallScreens={isAboveSmallScreens}
						/>
						<Link
							page="Contact"
							top="80px"
							selectedPage={selectedPage}
							isTopOfPage={isTopOfPage}
							isAboveSmallScreens={isAboveSmallScreens}
						/>
					</div>
				) : (
					<div>
						<button
							className="rounded-full bg-amber p-2"
							onClick={() => setIsMenuToggled(!isMenuToggled)}
						>
							<img alt="menu-icon" src={menuIcon} />
						</button>
					</div>
				)}

				{/* MOBILE MENU POPUP */}
				{!isAboveSmallScreens && isMenuToggled && (
					<div className="fixed right-[-1px] bottom-0 h-full bg-amber w-[300px]">
						{/* CLOSE ICON */}
						<div className="flex justify-end p-[20px]">
							<button
								className="pt-[13px] pr-[46px]"
								onClick={() => setIsMenuToggled(!isMenuToggled)}
							>
								<img src={closeIcon} alt="" />
							</button>
						</div>
						{/* MENU ITEMS */}
						<div className="flex flex-col gap-10 w-auto ml-[33%] text-center text-2xl font-bold text-deep-blue">
							<Link
								page="Home"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
								isTopOfPage={isTopOfPage}
								isAboveSmallScreens={isAboveSmallScreens}
							/>
							<Link
								page="Skills"
								top="80px"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
								isTopOfPage={isTopOfPage}
								isAboveSmallScreens={isAboveSmallScreens}
							/>
							<Link
								page="Projects"
								top="70px"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
								isTopOfPage={isTopOfPage}
								isAboveSmallScreens={isAboveSmallScreens}
							/>
							<Link
								page="Certificates"
								top="80px"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
								isTopOfPage={isTopOfPage}
								isAboveSmallScreens={isAboveSmallScreens}
							/>
							<Link
								page="Contact"
								top="80px"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
								isTopOfPage={isTopOfPage}
								isAboveSmallScreens={isAboveSmallScreens}
							/>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
