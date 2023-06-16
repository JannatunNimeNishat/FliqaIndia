import Associate from "../Associate/Associate";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import GraphicDesign from "../GraphicDesign/graphicDesign";
import Search from "../Search/Search";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>    
            <Search></Search> 
            <Associate></Associate>   
            <Services></Services>
            <GraphicDesign></GraphicDesign>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;