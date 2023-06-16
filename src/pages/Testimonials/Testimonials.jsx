
import s1 from '../../assets/testimonials/s1.svg'
import s2 from '../../assets/testimonials/s2.svg'
import s3 from '../../assets/testimonials/s3.svg'

import s5 from '../../assets/testimonials/s5.svg'
import t1 from '../../assets/testimonials/t1.svg'


const Testimonials = () => {
    return (
       <>
        <div className='mt-10 grid grid-cols-1 lg:grid-cols-12  px-20'>
            <div className='col-span-4  '>
                <div className=' hidden lg:flex  items-center lg:w-[150px]'>
                    <img className='  mt-16' src={s2} alt="" />
                    <img className='mt-20' src={s3} alt="" />
                    <img className='mt-16' src={s1} alt="" />
                </div>
                <img className=' hidden lg:flex  ml-10 lg:w-[330px]' src={s5} alt="" />
            </div>
            <div className='col-span-7 lg:ml-20'>

                <div className='lg:flex justify-between items-center'>
                    <div>
                        <h3 className='text-[#4C696D] text-2xl font-bold'>Testimonials</h3>
                        <p><small>Words from our clients</small></p>
                    </div>
                    <div className='lg:flex gap-3 lg:ml-10'>
                        <button className='px-3 py-1 bg-[#4E99A4] font-bold text-white rounded-2xl'>Google</button>
                        <button className='px-3 py-1  font-bold border rounded-2xl'>Facebook</button>
                        <button className='px-3 py-1  font-bold border rounded-2xl'>Weddingwire</button>
                        <button className='px-3 py-1  font-bold border rounded-2xl'>WedmeGood</button>


                    </div>
                </div>
                {/* card */}
                <div className='lg:flex   mt-10'>
                    <img className='w-[250px] h-[250px]' src={t1} alt="" />
                    <img className='w-[250px] h-[250px]'  src={t1} alt="" />
                    <img className='w-[250px] h-[250px]' src={t1} alt="" />
                    <img className='w-[250px] h-[250px]' src={t1} alt="" />
                </div>
                <div>

                </div>
            </div>
           
        </div>
        <hr className='mt-8'/>
       </>
    );
};

export default Testimonials;