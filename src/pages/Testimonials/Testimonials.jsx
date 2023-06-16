
import s1 from '../../assets/testimonials/s1.svg'
import s2 from '../../assets/testimonials/s2.svg'
import s3 from '../../assets/testimonials/s3.svg'

import s5 from '../../assets/testimonials/s5.svg'
import t1 from '../../assets/testimonials/t1.svg'


const Testimonials = () => {
    return (
       <>
        <div className='mt-10 grid grid-cols-12 px-10'>
            <div className='col-span-4  '>
                <div className='flex items-center'>
                    <img className='mt-16' src={s2} alt="" />
                    <img src={s3} alt="" />
                    <img className='mt-16' src={s1} alt="" />
                </div>
                <img className='ml-5' src={s5} alt="" />
            </div>
            <div className='col-span-8 '>

                <div className='flex justify-between items-center'>
                    <div>
                        <h3 className='text-[#4C696D] text-2xl font-bold'>Testimonials</h3>
                        <p><small>Words from our clients</small></p>
                    </div>
                    <div className='flex gap-3'>
                        <button className='px-3 py-1 bg-[#4E99A4] font-bold text-white rounded-2xl'>Google</button>
                        <button className='px-3 py-1  font-bold border rounded-2xl'>Facebook</button>
                        <button className='px-3 py-1  font-bold border rounded-2xl'>Weddingwire</button>
                        <button className='px-3 py-1  font-bold border rounded-2xl'>WedmeGood</button>


                    </div>
                </div>
                {/* card */}
                <div className='flex'>
                    <img src={t1} alt="" />
                    <img src={t1} alt="" />
                    <img src={t1} alt="" />
                    <img src={t1} alt="" />
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