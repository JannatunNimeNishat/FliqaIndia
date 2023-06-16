import Associate from "../Associate/Associate";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import GraphicDesign from "../GraphicDesign/graphicDesign";
import Search from "../Search/Search";
import Services from "../Services/Services";
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
        </div>
    );
};

export default Home;