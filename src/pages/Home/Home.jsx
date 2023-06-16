import Associate from "../Associate/Associate";
import Awards from "../Awards/Awards";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Course from "../Course/Course";
import GraphicDesign from "../GraphicDesign/graphicDesign";
import Offers from "../Offers/Offers";
import Search from "../Search/Search";
import Services from "../Services/Services";
import Success from "../Success/Success";
import Testimonials from "../Testimonials/Testimonials";
import Wedding from "../Wedding/Wedding";


const Home = () => {
    return (
        <div>
            <Banner></Banner>    
            <Search></Search> 
            <Associate></Associate>   
            <Services></Services>
            <GraphicDesign></GraphicDesign>
            <Blogs></Blogs>
            <Wedding></Wedding>
            <Offers></Offers>
            <Testimonials></Testimonials>
            <Awards></Awards>
            <Success></Success>
            <Course></Course>
        </div>
    );
};

export default Home;