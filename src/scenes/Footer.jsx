
import SocialMediIcons from '../components/SocialMediaIcons';

const Footer = () => {
    return (
        <div className='w-5/6 flex flex-row items-center justify-center'>
          <div className='flex flex-col'>
            <SocialMediIcons/>
          </div>
          <div className='w-5/6'>
            <p className='text-center text-xl text-white'>Thanks for watching 👍</p>
          </div>
          <div className='w-1/6'>
            <p>Rosario, Santa Fe, Argentina.</p>
          </div>
        </div>
    )
} 

export default Footer;