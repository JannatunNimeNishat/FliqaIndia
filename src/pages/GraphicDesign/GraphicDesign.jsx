
import bg from '../../assets/graphicDesign/bg.png'
import search from '../../assets/graphicDesign/search.png'

import g1 from '../../assets/graphicDesign/g1.png'
import g2 from '../../assets/graphicDesign/g2.png'
import g3 from '../../assets/graphicDesign/g3.png'
import g4 from '../../assets/graphicDesign/g4.png'

import h1 from '../../assets/graphicDesign/h1.png'
import l1 from '../../assets/graphicDesign/L1.png'
import l2 from '../../assets/graphicDesign/L2.png'
import l3 from '../../assets/graphicDesign/L3.png'
import l4 from '../../assets/graphicDesign/L4.png'
const GraphicDesign = () => {
    return (
        <>
        <div className='lg:h-[402px] mt-20  bg-cover bg-center text-white' style={{ backgroundImage: `url("${bg}")` }}>
            <div className='grid grid-cols-1 lg:grid-cols-8'>
                <div className='lg:col-span-4   lg:h-[402px] flex  px-2 py-8 items-center'>
                    <div>
                        <h3 className='text-4xl  capitalize'>DISCOVER <br />
                            <span className='font-bold'>
                                GRAPHICS DESIGN IDEAS <br /> AND SERVICES
                            </span>
                        </h3>
                        <p className='text-3xl mt-3 capitalize'>FROM BANDING TO MARKETING
                        </p>
                        <div className=' mt-8 w-full '>
                            <input className=' px-5  lg:px-16 py-2 rounded-3xl shadow-white shadow-sm' type="text" name="" id="" placeholder='what kind of design you are looking for?' />
                            <button className='bg-[#221010] px-8 py-2 rounded-3xl -ml-12 shadow-white shadow-sm'>Search</button>
                            <img className='-mt-8 ml-2' src={search} alt="" />
                           
                        </div>
                    </div>
                </div>
                <div className='lg:col-span-4 px-10 lg:px-0  lg:flex  lg:gap-8 lg:-ml-36 lg:overflow-hidden'>

                    <div>
                        <img className='lg:mt-20 relative   border-[10px] border-[#211A13] lg:w-[203px] lg:h-[233px]' src={g1} alt="" />
                        <img className='absolute -mt-[223px] ml-12' src={h1} alt="" />
                        <img className='lg:-mt-[335px] ml-20' src={l1} alt="" />
                    </div>

                    <div>
                        <img className='lg:mt-10 relative   border-[10px] border-[#211A13] lg:w-[203px] lg:h-[233px]' src={g2} alt="" />
                        <img className='absolute -mt-[223px] ml-12' src={h1} alt="" />
                        <img className='lg:-mt-[280px] ml-20' src={l2} alt="" />
                    </div>
                    <div>
                        <img className='lg:mt-20 relative   border-[10px] border-[#211A13] lg:w-[203px] lg:h-[233px]' src={g3} alt="" />
                        <img className='absolute -mt-[223px] ml-12' src={h1} alt="" />
                        <img className='lg:-mt-[335px] ml-20' src={l3} alt="" />
                    </div>
                    <div>
                        <img className='lg:mt-14 relative   border-[10px] border-[#211A13] lg:w-[203px] lg:h-[233px]' src={g4} alt="" />
                        <img className='absolute -mt-[223px] ml-12' src={h1} alt="" />
                        <img className='lg:-mt-[325px] ml-20' src={l4} alt="" />
                    </div>

                    
                </div>
            </div>
           
        </div>
        <h3 className="text-3xl text-center font-bold mt-5"><span>Popular: </span><span className='ml-3 text-[#4C696D]'>Website Design Logo Design Brochure Label Design</span></h3>
       
        <div className='w-11/12 mx-auto mt-5 h-[2px] bg-[#b7aeae]'>

        </div>
        </>
    );
};

export default GraphicDesign;