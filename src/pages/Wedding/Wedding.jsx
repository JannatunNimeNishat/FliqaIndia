
import w1 from '../../assets/wedding/w1.png'
import w2 from '../../assets/wedding/w2.png'
import w3 from '../../assets/wedding/w3.png'
import w4 from '../../assets/wedding/w4.png'
import w1_1 from '../../assets/wedding/w1.1.png'
import w1_2 from '../../assets/wedding/w1.2.png'
import { AiOutlineArrowRight } from "react-icons/ai";

const Wedding = () => {
    return (
        <div className="mt-10  ">
            <div className='px-10 pt-10'>
                <h3 className='text-[#4C696D] text-2xl font-bold'>Real Wedding</h3>
                <p><small>List your wedding and browse portfolio</small></p>
            </div>
            <div className=" mt-3 flex gap-5 px-20">

                <div className="  bg-[#DDF8F3] px-2 py-3">
                    <img src={w1} alt="" />
                    <div className='flex overflow-hidden'>
                        <img src={w1_1} alt="" />
                        <img src={w1_2} alt="" />
                        <img src={w1_2} alt="" />
                    </div>
                    <div className='mt-4'>
                        <h3 className='font-bold text-xl'>Danielle & Ronnie </h3>
                        <p className='text-[#4C696D]'>38 photos. Kittery,Polland</p>
                    </div>
                </div>
                <div className=" bg-[#FBDADA] px-2 py-3">
                    <img src={w2} alt="" />
                    <div className='flex  overflow-hidden'>
                        <img src={w1_1} alt="" />
                        <img src={w1_2} alt="" />
                        <img src={w1_2} alt="" />
                    </div>
                    <div className='mt-4'>
                        <h3 className='font-bold text-xl'>Danielle & Ronnie </h3>
                        <p className='text-[#4C696D]'>38 photos. Kittery,Polland</p>
                    </div>
                </div>
                <div className=" bg-[#FFF9D9] px-2 py-3">
                    <img src={w3} alt="" />
                    <div className='flex  overflow-hidden'>
                        <img src={w1_1} alt="" />
                        <img src={w1_2} alt="" />
                        <img src={w1_2} alt="" />
                    </div>
                    <div className='mt-4'>
                        <h3 className='font-bold text-xl'>Danielle & Ronnie </h3>
                        <p className='text-[#4C696D]'>38 photos. Kittery,Polland</p>
                    </div>
                </div>
                <div className=" bg-[#DDE4FF] px-2 py-3">
                    <img src={w4} alt="" />
                    <div className='flex  overflow-hidden'>
                        <img src={w1_1} alt="" />
                        <img src={w1_2} alt="" />
                        <img src={w1_2} alt="" />
                    </div>
                    <div className='mt-4'>
                        <h3 className='font-bold text-xl'>Danielle & Ronnie </h3>
                        <p className='text-[#4C696D]'>38 photos. Kittery,Polland</p>
                    </div>
                </div>


            </div>
            <div className='text-center'>
                <button className='bg-[#DDF9FF] px-5 font-extrabold  rounded-xl mt-5 border  py-5 shadow-black shadow-sm '>View more wedding
                    <AiOutlineArrowRight className='ml-3  inline' />
                </button>
            </div>
        </div>
    );
};

export default Wedding;