import {
  FeatureTop,
  FeatureCard,
  FeatureMid,
  FeaturePrd,
  FeatureBottom,
} from "./../component/Home/index";
import {
  featureTop,
  featureCard,
  featureMid,
  featurePrd,
  featureBottom,
} from "./../data/Home";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };
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
      <div className="xl:place-items-center xl:gap-0 lg:py-[5px] lg:h-[460px] lg:px-[25px] lg:gap-[25px] gap-2 lg:grid-cols-3 grid-cols-1 h-fit w-full grid mt-10">
        {featureCard.map(({ icon, title, des }, index) => (
          <FeatureCard key={index} icon={icon} title={title} des={des} />
        ))}
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="slider-container w-[100%] overflow-hidden">
          <Slider {...settings}>
            {featureMid.map(({ title, des, img }, index) => (
              <FeatureMid
                key={index}
                title={title}
                des={des}
                img={img}
                featureindex={index + 1}
              />
            ))}
          </Slider>
        </div>
      </div>
      <h1 className="lg:text-5xl w-full h-[300px] bg-[rgba(233,216,199,255)] flex justify-center text-center items-center flex-col text-4xl font-['poppins'] font-bold text-[rgb(71,51,38)] px-10">
        <span className="text-sm font-semibold mb-2">Cafe & Dessert</span>
        Tasty & Inclusive Treats
        <span className="text-sm font-semibold mt-2">
          We offer a range of delicious vegan and gluten-free cakes, so everyone
          can enjoy a sweet treat at our cafe.
        </span>
      </h1>
      <div className="lg:gap-5 lg:px-5 lg:grid-cols-3 md:grid-cols-2 md:px-16 grid-cols-1 place-items-center pb-10 grid gap-5 px-5 bg-[rgba(233,216,199,255)]">
        {featurePrd.map(({ id, img, name, type, price, pricedot }) => (
          <FeaturePrd
            key={id}
            img={img}
            name={name}
            type={type}
            price={price}
            pricedot={pricedot}
          />
        ))}
      </div>
      <FeatureBottom
        title={featureBottom.title}
        des={featureBottom.des}
        img={featureBottom.img}
      />
    </>
  );
};

export default Home;
