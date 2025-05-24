import HeroSearch from "../components/HeroSearch";
import NavigationBar from "../components/NavigationBar";
import FeaturedItems from "../components/FeaturedItems";
import QuickSelectWrapper from "../components/QuickSelectWrapper";

const Home: React.FC = () => {

  return (
    <div>
      <NavigationBar />
      <div>
        <QuickSelectWrapper query="a=list" />
        <HeroSearch />
        <FeaturedItems />
      </div>
    </div>
  );
}


export default Home;