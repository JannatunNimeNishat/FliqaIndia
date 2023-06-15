import Associate from "../Associate/Associate";
import Banner from "../Banner/Banner";
import Search from "../Search/Search";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>    
            <Search></Search> 
            <Associate></Associate>   
            <Services></Services>
        </div>
    );
};

export default Home;