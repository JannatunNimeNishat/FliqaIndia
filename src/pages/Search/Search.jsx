
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
            {/* search */}
            <div className="form-control text-center w-[995px] mx-auto mt-5  ">
                <div className="input-group ">
                    <input type="text" placeholder=" Search service, blog and many more…" className="border rounded-[34px] w-full" />
                    <button className="btn border rounded-[34px]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>


            <div className='mt-8 flex  gap-3 justify-evenly'>
                <div className='flex gap-2  items-center'>
                    <img className='h-[127px] w-[142px]' src={g1} alt="" />
                    <div>
                        <h3 className='font-bold  '>Verified Reviews</h3>
                        <p><small>For verified reviewers</small></p>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <img src={g2} alt="" />
                    <div>
                        <h3 className='font-bold  '>Top Articles</h3>
                        <p> <small>Helps you decide</small> </p>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <img src={g3} alt="" />
                    <div>
                        <h3 className='font-bold '>Write Share Win Contest</h3>
                        <p><small>Earn cash for reviews</small></p>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <img src={g4} alt="" />
                    <div>
                        <h3 className='font-bold text-xl'>MouthShut for Brands</h3>
                        <p> <small>Request a Demo</small> </p>
                    </div>
                </div>
            </div>
            <hr  className=' text-black h-[3px] bg-black w-[1150px] mx-auto mt-7'/>
        </div>
    );
};

export default Search;