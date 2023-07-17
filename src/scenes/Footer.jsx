
import SocialMediIcons from '../components/SocialMediaIcons';
import useMediaQuery from '../hooks/useMediaQuery';

const Footer = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");


    return (
        <div className='w-5/6'>
          <SocialMediIcons/>
          <div className='w-[40px]'>
            <p className='text-white text-xl'>Thanks for watching</p>
          </div>
        </div>
    )
} 

export default Footer;