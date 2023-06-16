
import c1 from '../../assets/course/c1.png'
import c2 from '../../assets/course/c2.png'

const Course = () => {
    return (
        <div className='lg:h-[459px]  mt-10  bg-cover bg-center text-white' style={{ backgroundImage: `url("${c1}")` }}>
            <div className='lg:flex justify-center items-center gap-5 p-10 lg:p-0  h-full'>
                {/* 1st */}
                <div>
                    <p className='text-3xl mt-3 capitalize'>ULTIMATE <br /> COURSE IN
                    </p>
                    <h3 className=' text-3xl lg:text-6xl mt-2  font-bold capitalize'>

                        PHOTOGRAPHY

                    </h3>
                </div>
                <div className='mt-2 lg:mt-0'>
                    <img src={c2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Course;