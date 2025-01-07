import { FeatureTop, FeatureCard } from "./../component/Home/index";
import { featureTop, featureCard } from "./../data/Home";

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
      <div className="lg:h-[460px] lg:px-[25px] lg:gap-[25px] gap-2 lg:grid-cols-3 grid-cols-1 h-fit w-full grid mt-10">
        {featureCard.map(({ icon, title, des }, index) => (
          <FeatureCard key={index} icon={icon} title={title} des={des} />
        ))}
      </div>
    </>
  );
};

export default Home;
