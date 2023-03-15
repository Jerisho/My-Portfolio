import {useState} from 'react';
import menuIcon from '../assets/menu-icon.svg'
import closeIcon from '../assets/close-icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';

const Link = ({ page, top, selectedPage, setSelectedPage}) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
        className={`${
            selectedPage === lowerCasePage ? "text-amber" : ""}
            hover:text-orange-600 transition duration-500`}
        offset = {`${top}`}
        href={`#${lowerCasePage}`} 
        onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}
const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width:786px)");
    const navbarBackground = isTopOfPage ? "" : "bg-amber text-deep-blue";

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
            <div className="flex intems-center justify-between mx-auto w-5/6">
                <h4 className='text-3xl font-bold'>JG</h4>

                {/* DESKTOP NAV */ }
                {isAboveSmallScreens ? (
                    <div className='flex justify between gap-16 text-sm font-semibold'>
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Skills"
                            top="100px"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Projects"
                            top="100px"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                ) : (
                <div>
                    <button
                        className='rounded-full bg-amber p-2'
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <img alt="menu-icon" src={menuIcon} />
                    </button>
                </div>
                )}

                {/* MOBILE MENU POPUP */}
                {!isAboveSmallScreens && isMenuToggled && (
                    <div className='fixed right-0 bottom-0 h-full bg-blue w-[300px]'>
                        {/* CLOSE ICON */}
                        <div className='flex justify-end p-12'>
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>

                            <img src={closeIcon} alt="" />

                            </button>
                        </div>
                        {/* MENU ITEMS */}
                        <div className='flex flex-col gap-10 ml-[33%] text-2xl font-bold text-deep-blue'>
                            <Link
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Skills"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Projects"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar; 
