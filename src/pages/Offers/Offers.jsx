
import o1 from '../../assets/offers/o1.svg'
import o2 from '../../assets/offers/o2.svg'
import o3 from '../../assets/offers/o3.svg'

const Offers = () => {
    return (
        <div className="py-8">

            <hr />

            <div className="mt-10">
                <div className="text-center">
                    <h3 className='text-[#4C696D] text-2xl font-bold'>Best Offers</h3>
                    <p><small>Discover the best offers on our services</small></p>
                </div>

                <div className='mt-5 flex justify-between px-16 bg-[#a1d1d115]'>
                    
                        <img src={o1} alt="" />
                    
                        <div className="divider lg:divider-horizontal py-5"></div>
                        <img src={o2} alt="" />
                    
                        <div className="divider lg:divider-horizontal py-5"></div>
                        <img src={o3} alt="" />
                        <div className="divider lg:divider-horizontal py-5"></div>
                        <img src={o1} alt="" />    
                      
                </div>

            </div>

        <br /> 

            <hr />
        </div>
    );
};

export default Offers;