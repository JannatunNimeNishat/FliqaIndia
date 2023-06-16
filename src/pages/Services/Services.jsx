
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import s1 from '../../assets/Services/s1.png'
import s2 from '../../assets/Services/s2.png'
import s3 from '../../assets/Services/s3.png'
import s4 from '../../assets/Services/s4.png'

const Services = () => {
    return (
        <div className="mt-10">
            <div className='px-10 py-10'>
                <h3 className='text-[#4C696D] text-2xl font-bold'>Our Featured Services </h3>
                <p><small>Discover the range of services provided by FliqaIndia</small></p>
            </div>

            <div className='lg:flex items-center px-3  gap-3'>
                <AiOutlineLeft className=' hidden lg:flex  bg-[#DDF8F3] h-10 w-10 p-2 rounded-full' />

                <div className='lg:w-[328px]  lg:h-[432px] rounded-lg shadow-2xl text-center flex flex-col'>
                    <img src={s1} alt="" />
                    <div className='text-center space-y-1'>
                        <h3 className='font-bold text-xl'>Pre Wedding Photoshoot</h3>
                        <hr className='w-[299px] mx-auto' />
                        <p className='text-[#4C696D] font-semibold'>Starting at 25,000 (One Day)</p>
                    </div>
                    <div className='mt-auto pb-5'>
                        <button className='w-[202px] h-[28px] bg-[#4E99A4] rounded-2xl  text-white'>Know more</button>
                    </div>
                </div>

                <div className='lg:w-[328px] lg:h-[432px] mt-5 lg:mt-0 rounded-lg shadow-2xl text-center flex flex-col'>
                    <img src={s2} alt="" />
                    <div className='text-center space-y-1'>
                        <h3 className='font-bold text-xl'>Wedding Photoshoot</h3>
                        <hr className='w-[299px] mx-auto' />
                        <p className='text-[#4C696D] font-semibold'>Starting at 65,000 (Two days)</p>
                    </div>
                    <div className='mt-auto pb-5'>
                        <button className='w-[202px] h-[28px] bg-[#4E99A4] rounded-2xl  text-white'>Know more</button>
                    </div>
                </div>
                <div className='lg:w-[328px] mt-5 lg:mt-0 lg:h-[432px] rounded-lg shadow-2xl text-center flex flex-col'>
                    <img src={s3} alt="" />
                    <div className='text-center space-y-1'>
                        <h3 className='font-bold text-xl'>Portfolio Shoot</h3>
                        <hr className='w-[299px] mx-auto' />
                        <p className='text-[#4C696D] font-semibold'>Starting at 25,000 (Standard price for 6-8 hours)</p>
                    </div>
                    <div className='mt-auto pb-5'>
                        <button className='w-[202px] h-[28px] bg-[#4E99A4] rounded-2xl  text-white'>Know more</button>
                    </div>
                </div>
                <div className='lg:lg:w-[328px] mt-5 lg:mt-0 lg:lg:h-[432px] rounded-lg shadow-2xl text-center flex flex-col'>
                    <img src={s4} alt="" />
                    <div className='text-center space-y-1'>
                        <h3 className='font-bold text-xl'>Birthday Baby Folio</h3>
                        <hr className='w-[299px] mx-auto' />
                        <p className='text-[#4C696D] font-semibold'>Starting at 5,000 (One days)</p>
                    </div>
                    <div className='mt-auto pb-5'>
                        <button className='w-[202px] h-[28px] bg-[#4E99A4] rounded-2xl  text-white'>Know more</button>
                    </div>
                </div>



                <AiOutlineRight className=' hidden lg:flex bg-[#DDF8F3] h-10 w-10 p-2 rounded-full' />

            </div>

        </div>
    );
};

export default Services;