import Article from "./Article";
import Banner from "./Banner";
import Newslater from "./Newslater";
import Partner from "./Partner";
import Recentposts from "./Recentposts/Recentposts";


const Home = () => {
  
    return (
        <div>
            <Banner></Banner>
            <Recentposts></Recentposts>
            <Newslater></Newslater>
            <Article></Article>
            <Partner></Partner>
        </div>

    );
};

export default Home;