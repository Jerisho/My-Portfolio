
import SocialMediIcons from '../components/SocialMediaIcons';
import useMediaQuery from '../hooks/useMediaQuery';

const Footer = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");


    return (
        <div className='w-5/6 flex flex-row items-center justify-center'>
          <SocialMediIcons/>
          <div className='w-5/6'>
            <p className='text-center text-xl text-white'>Thanks for watching 👍</p>
          </div>
          <div className='w-1/6'>
            <p>I see you 👀</p>
          </div>
        </div>
    )
} 

export default Footer;