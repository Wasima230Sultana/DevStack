
import stack from '../assets/banner-stack.png'
const Banner = () => {
    return (
        <div>
            <div className='flex justify-between flex-col md:flex-row items-center my-6'>
                <div className=' text-center md:text-start'>
                    <h1 className='text-6xl md:text-7xl font-bold my-2'>Build Your Ideal <br></br>
                         <span className='bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>
                             Development Stack</span>
                    </h1>
                    <p className='my-2 text-[#64748B]'>Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.</p>
                    <div className='mt-6'>
                        <button className="btn bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] text-white">Explore Technologies</button>
                        <button className="btn bg-white ml-2 text-gray-500 px-10">Learn More</button>

                    </div>
                </div>
                <div className=''>
                    <img src={stack} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;