import HeroSearch from "../components/HeroSearch";
import NavigationBar from "../components/NavigationBar";

const Home: React.FC = () => {

  return (
    <div>
      <NavigationBar />
      <div>
        <HeroSearch />
      </div>
    </div>
  );
}


export default Home;