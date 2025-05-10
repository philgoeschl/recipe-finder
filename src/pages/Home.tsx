import HeroSearch from "../components/HeroSearch";
import NavigationBar from "../components/NavigationBar";
import FeaturedItems from "../components/FeaturedItems";

const Home: React.FC = () => {

  return (
    <div>
      <NavigationBar />
      <div>
        <HeroSearch />
        <FeaturedItems />
      </div>
    </div>
  );
}


export default Home;