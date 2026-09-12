
import { RxHamburgerMenu } from 'react-icons/rx';
import logo from '../assets/logo-text.png'
const Navbar = () => {
    return (
        <div className='sticky top-0 z-50 bg-white'>
            <div className=' flex justify-between items-center'>
                <div className=' flex justify-between items-center'>
                    <div>
                        <button  className="md:hidden mr-20 text-2xl">
                        <RxHamburgerMenu />
                        </button>
                    </div>
                    
                        <div>
                            <img className='' src={logo} alt="" />
                        </div>
                    
                    
                </div>
                <div className='hidden md:flex items-center'>
                    <a className='mr-4 text-pink-600' href="">Home</a>
                    <a className='mr-4' href="">Technologies</a>
                    <a className='mr-4' href="">Projects</a>
                    <a className='mr-4' href="">About</a>
                    <a className='mr-4' href="">Contact</a>

                </div>
                <div className=' flex items-center'>
                    <button className='mr-3'>Sign in</button>
                    <button className='btn btn-active btn-secondary rounded-3xl'>Sign up</button>

                </div>
            </div>

        </div>
    );
};

export default Navbar;