import Associate from "../Associate/Associate";
import Awards from "../Awards/Awards";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import GraphicDesign from "../GraphicDesign/graphicDesign";
import Offers from "../Offers/Offers";
import Search from "../Search/Search";
import Services from "../Services/Services";
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
        </div>
    );
};

export default Home;