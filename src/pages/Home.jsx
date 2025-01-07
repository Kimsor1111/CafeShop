import { FeatureTop, FeatureCard } from "./../component/Home/index";
import { featureTop } from "./../data/Home";

const Home = () => {
  return (
    <>
      {featureTop.map(({ title, des, img }, index) => (
        <FeatureTop
          key={index}
          title={title}
          des={des}
          img={img}
          featureindex={index + 1}
        />
      ))}
      <div className="bg-red-500 w-full h-[440px] grid grid-cols-3 px-[130px] gap-[50px] mt-10">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
    </>
  );
};

export default Home;
