
import bg from '../../assets/Associate/bg.png'
import { AiOutlineRight, AiFillStar } from "react-icons/ai";

import c1 from '../../assets/Associate/c1.png'
import c2 from '../../assets/Associate/c2.png'
import c3 from '../../assets/Associate/c3.png'
import c4 from '../../assets/Associate/c4.png'
import logo from '../../assets/Associate/logo.png'

const Associate = () => {
    return (
        <div className='h-[451px] mt-20  bg-cover bg-center ' style={{ backgroundImage: `url("${bg}")` }}>
            <div className='px-10 py-10'>
                <div className='flex justify-between'>
                    <div>
                        <h3 className='text-[#4C696D] text-2xl font-bold'>Find Trusted Associate</h3>
                        <p><small>Find the best Fliqa Associate for your special day.</small></p>
                    </div>
                    <h3 className='flex items-center '>
                        See More <AiOutlineRight /> <AiOutlineRight />

                    </h3>
                </div>
            </div>
            {/* card */}
            <div className='mt-10 flex gap-3 justify-between px-8'>

                <div className='w-[304px] h-[175px]  shadow-xl shadow-black'>
                    <img src={c1} alt="" />
                    <div className='flex justify-between bg-[#2c2c2c] text-white rounded-b-2xl p-3 shadow-xl shadow-black'>
                        <div>
                            <h3 className='text-xl'>Name Title</h3>
                            <p><small>Location</small></p>
                        </div>
                        <img src={logo} alt="" />
                    </div>
                </div>

                <div className='w-[304px] h-[175px]  shadow-xl shadow-black'>
                    <img src={c2} alt="" />
                    <div className='flex justify-between bg-[#2c2c2c] text-white rounded-b-2xl p-3 shadow-xl shadow-black'>
                        <div>
                            <h3 className='text-xl'>Name Title</h3>
                            <p><small>Location</small></p>
                        </div>
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className='w-[304px] h-[175px]  shadow-xl shadow-black'>
                    <img src={c3} alt="" />
                    <div className='flex justify-between bg-[#2c2c2c] text-white rounded-b-2xl p-3 shadow-xl shadow-black'>
                        <div>
                            <h3 className='text-xl'>Name Title</h3>
                            <p><small>Location</small></p>
                        </div>
                        <p className='flex '>
                            5.0<AiFillStar className='mt-1' />
                        </p>
                    </div>
                </div>
                <div className='w-[304px] h-[175px] bg-[#2c2c2c]  shadow-xl shadow-black'>
                    <img src={c4} alt="" />
                    <div className='flex justify-between bg-black text-white rounded-b-2xl p-3 shadow-xl shadow-black'>
                        <div>
                            <h3 className='text-xl'>Name Title</h3>
                            <p><small>Location</small></p>
                        </div>
                        <img src={logo} alt="" />
                    </div>
                </div>





            </div>


        </div>
    );
};

export default Associate;