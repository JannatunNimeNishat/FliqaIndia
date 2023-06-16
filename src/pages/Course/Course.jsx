
import c1 from '../../assets/course/c1.png'
import c2 from '../../assets/course/c2.png'

const Course = () => {
    return (
        <div className='h-[459px] mt-10  bg-cover bg-center text-white' style={{ backgroundImage: `url("${c1}")` }}>
            <div className='flex justify-center items-center gap-5  h-full'>
                {/* 1st */}
                <div>
                    <p className='text-3xl mt-3 capitalize'>ULTIMATE <br /> COURSE IN
                    </p>
                    <h3 className='text-6xl mt-2  font-bold capitalize'>

                        PHOTOGRAPHY

                    </h3>
                </div>
                <div>
                    <img src={c2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Course;