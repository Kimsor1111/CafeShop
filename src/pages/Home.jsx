import { FeatureTop } from "./../component/Home/index";
import { featureTop } from "./../data/Home";

const Home = () => {
  return (
    <>
      {featureTop.map(({ title, des, img }, index) => (
        <FeatureTop key={index} title={title} des={des} img={img}/>
      ))}
    </>
  );
};

export default Home;
