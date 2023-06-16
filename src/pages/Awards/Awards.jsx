
import a1 from '../../assets/Awards/a1.png'
import a2 from '../../assets/Awards/a2.png'
import a3 from '../../assets/Awards/a3.png'
import a4 from '../../assets/Awards/a4.png'
import a5 from '../../assets/Awards/a5.png'
import a6 from '../../assets/Awards/a6.png'
import a7 from '../../assets/Awards/a7.png'
import a8 from '../../assets/Awards/a8.png'

const Awards = () => {
    return (
        <div className="lg:h-[401px] bg-[#DDF8F3] mt-10 flex justify-center items-center px-10">
            <div className='lg:flex gap-8' >
                <div className='  lg:w-[780px] lg:h-[271px]  bg-[#4E99A4] p-5 lg:p-10 lg:flex gap-5 rounded-2xl' >
                    <img className='w-full  rounded-lg overflow-hidden object-cover' src={a1} alt="" />
                    <img className='w-full  rounded-lg overflow-hidden object-cover' src={a2} alt="" />
                </div>
                <div className='w-1/2 grid grid-cols1 lg:grid-cols-2'>
                    <div className='bg-white text-black w-[255px] h-[76px] flex items-center justify-between px-3'>
                        <img src={a3} alt="" />
                        <h3>4.5/5</h3>
                    </div>
                    <div className=' mt-2 lg:mt-0 bg-white text-black w-[255px] h-[76px] flex items-center justify-between px-3'>
                        <img src={a6} alt="" />
                        <h3>4.9/5</h3>
                    </div>
                    <div className=' mt-2 lg:mt-0 bg-white text-black w-[255px] h-[76px] flex items-center justify-between px-3'>
                        <img src={a4} alt="" />
                        <h3>4.9/5</h3>
                    </div>
                    <div className=' mt-2 lg:mt-0 bg-white text-black w-[255px] h-[76px] flex items-center justify-between px-3'>
                        <img src={a7} alt="" />
                        <h3>4.8/5</h3>
                    </div>
                    <div className=' mt-2 lg:mt-0 bg-white text-black w-[255px] h-[76px] flex items-center justify-between px-3'>
                        <img src={a5} alt="" />
                        <h3>5.0/5</h3>
                    </div>
                    <div className=' mt-2 lg:mt-0 bg-white text-black w-[255px] h-[76px] flex items-center justify-between px-3'>
                        <img src={a8} alt="" />
                        <h3>5.0/5</h3>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Awards;