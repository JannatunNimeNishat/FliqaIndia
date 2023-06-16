
import bg from '../../assets/blogs/bg.png'
import b1 from '../../assets/blogs/b1.png'
import b2 from '../../assets/blogs/b2.png'
import b3 from '../../assets/blogs/b3.png'

const Blogs = () => {
    return (
        <div className='h-[470px] mt-20  bg-cover bg-center ' style={{ backgroundImage: `url("${bg}")` }}>
            <div className='px-10 pt-10'>
                <h3 className='text-[#4C696D] text-2xl font-bold'>Our Blogs</h3>
                <p><small>Check out our Latest Blog</small></p>
            </div>

            <div className='flex gap-8 px-16 pt-3 '>

                <div className=' mt-3 w-[450px] h-[307px] rounded-2xl shadow-black shadow-lg' style={{ backgroundImage: `url("${b1}")` }}>

                    <div className=' w-[400px] h-[307px] bg-gradient-to-r from-black to-[rgba(21, 21, 21, 1)]   '>


                        <div className='  text-white  px-3 py-8'>
                            <p className='text-xl'>Featured on: Sep 15, 2021</p>
                            <h3 className=' text-xl lg:text-5xl  '>Wedding Photography <br /> at Goa</h3>
                        </div>


                    </div>
                </div>

                <div className=' mt-3 w-[450px] h-[307px] rounded-2xl shadow-black shadow-lg' style={{ backgroundImage: `url("${b2}")` }}>

                    <div className=' w-[400px] h-[307px] bg-gradient-to-r from-black to-[rgba(21, 21, 21, 1)]   '>


                        <div className='  text-white  px-3 py-8'>
                            <p className='text-xl'>Featured on: Sep 15, 2021</p>
                            <h3 className=' text-xl lg:text-5xl  '>Photography: Expectations <br /> vs. Reality</h3>
                        </div>


                    </div>
                </div>

                <div className='mt-3 '>
                    <div className='flex justify-between'>
                        <h3>Trending Now</h3>
                        <p>View ALL</p>
                    </div>
                    <div>
                        <div className=' flex items-center gap-2 mt-4 overflow-hidden'>
                            <img className='h-[78px] w-[100px] rounded-lg' src={b3} alt="" />
                            <div className='h-[68px]'>
                                <span className='font-bold'>Creative Industries are on the verge of depletion due to COVID-19</span>
                                <br />
                                <small className=''>In a period where many industries remain highly unclear, others want to grasp how COVID-19 impact</small>
                            </div>

                        </div>
                        <div className=' mx-auto mt-2 h-[1px] bg-[#b7aeae]'></div>

                        <div className=' flex items-center gap-2 mt-4 overflow-hidden'>
                            <img className='h-[78px] w-[100px] rounded-lg' src={b2} alt="" />
                            <div className='h-[68px]'>
                                <span className='font-bold'>Photography: Expectations vs. Reality</span>
                                <br />
                                <small>Most of the time without any hands-on experience in photography, professional and advanced photography actually</small>
                            </div>

                        </div>
                        <div className=' mx-auto mt-2 h-[1px] bg-[#b7aeae]'></div>
                        <div className=' flex items-center mt-4 overflow-hidden gap-3 '>
                            <img className='h-[78px] w-[100px] rounded-lg' src={b1} alt="" />
                            <div className='h-[68px]'>
                                <span className='font-bold'>CWedding Photography at Goa</span>
                                <br />
                                <small> Wedding Photography in Goa If not, every couple when they make their list of Pre-wedding shoot</small>
                            </div>

                        </div>
                       
                    </div>
                </div>

            </div>



        </div>
    );
};

export default Blogs;