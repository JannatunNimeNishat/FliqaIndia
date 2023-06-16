
import s1 from '../../assets/success/s1.png'
import s2 from '../../assets/success/s2.png'
import s3 from '../../assets/success/s3.png'
import s4 from '../../assets/success/s4.png'
import s5 from '../../assets/success/s5.png'
const Success = () => {
    return (
        <div className="lg:h-[459px] bg-[#ACCBC7] mt-10  ">
            <h3 className='text-[#4C696D] text-2xl font-bold text-center pt-5'>Our Success</h3>
            <p className='text-center'><small>Journey of our success.</small></p>

            <div className='lg:flex gap-5 mt-10 px-16'>

                <div className=' text-center'>
                    <div className='mx-auto flex items-center justify-center w-[203px] h-[203px] bg-white rounded-full'>
                        <img className='' src={s1} alt="" />
                    </div>
                    <p className='font-semibold '>Back in 2019, FliqaIndia recognize as a startup with DPIT in Startup India.</p>
                </div>

                <div className='text-center'>
                    <div className=' mx-auto flex items-center justify-center w-[203px] h-[203px] bg-white rounded-full'>
                        <img src={s2} alt="" />
                    </div>
                    <p className='font-semibold'>Appreciation from Startup Bengal for our creative startup community</p>
                </div>

                <div className='text-center'>
                    <div className=' mx-auto flex items-center justify-center w-[203px] h-[203px] bg-white rounded-full'>
                        <img src={s3} alt="" />
                    </div>
                    <p className='font-semibold'>FliqaIndia got featured on Yourstory. Click here</p>
                </div>

                <div className='text-center'>
                    <div className=' mx-auto flex items-center justify-center w-[203px] h-[203px] bg-white rounded-full'>
                        <img src={s4} alt="" />
                    </div>
                    <p className='font-semibold'>Received awards from ImagesBazaar on leading creative industry</p>
                </div>
                <div className='text-center'>
                    <div className=' mx-auto flex items-center justify-center w-[203px] h-[203px] bg-white rounded-full'>
                        <img src={s5} alt="" />
                    </div>
                    <p className='font-semibold'>Top ten in Intuit Circle Codeathon, 2020</p>
                </div>


            </div>

        </div>
    );
};

export default Success;