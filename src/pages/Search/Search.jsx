
import g1 from '../../assets/search/Group.svg'
import g2 from '../../assets/search/Group2.svg'
import g3 from '../../assets/search/Group3.svg'
import g4 from '../../assets/search/Group4.svg'

const Search = () => {
    return (
        <div className="mt-6">
            <h3 className="text-5xl text-center font-bold">India’s Leading Creative Platform</h3>
            <p className="text-2xl text-center mt-2">Experience hassle free bookings. Trusted by 2500+ Customers
            </p>
           
            <div className="form-control  mt-5  ">
               

                <div className=' mt-3 lg:mt-8  rounded-3xl mx-auto  border '>
                    <input className=' px-5  lg:px-48 py-2 rounded-3xl  shadow-sm' type="text" name="" id="" placeholder='Search service, blog and many more…' />
                    <button className='bg-[#221010] text-white px-8 py-2 rounded-3xl -ml-12 shadow-sm'>Search</button>
                </div>
            </div>


            <div className='mt-8 mx-auto w-1/2 lg:flex  gap-3 justify-evenly'>
                <div className=' lg:flex gap-2  items-center'>
                    <img className='h-[127px] w-[142px]' src={g1} alt="" />
                    <div>
                        <h3 className='font-bold  '>Verified Reviews</h3>
                        <p><small>For verified reviewers</small></p>
                    </div>
                </div>

                <div className=' mt-3 lg:mt-0 lg:flex gap-2 items-center'>
                    <img src={g2} alt="" />
                    <div>
                        <h3 className='font-bold  '>Top Articles</h3>
                        <p> <small>Helps you decide</small> </p>
                    </div>
                </div>
                <div className=' mt-3 lg:mt-0 lg:flex gap-2 items-center'>
                    <img src={g3} alt="" />
                    <div>
                        <h3 className='font-bold '>Write Share Win Contest</h3>
                        <p><small>Earn cash for reviews</small></p>
                    </div>
                </div>
                <div className=' mt-3 lg:mt-0 lg:flex gap-2 items-center'>
                    <img src={g4} alt="" />
                    <div>
                        <h3 className='font-bold text-xl'>MouthShut for Brands</h3>
                        <p> <small>Request a Demo</small> </p>
                    </div>
                </div>
            </div>
            <hr className=' text-black h-[2px] bg-black lg:w-[1150px] mx-auto mt-7' />
        </div>
    );
};

export default Search;