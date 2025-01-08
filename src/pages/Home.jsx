import { FeatureTop, FeatureCard, FeatureMid } from "./../component/Home/index";
import { featureTop, featureCard, featureMid } from "./../data/Home";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Component } from "react";

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
        <div className="slider-container w-[100%]">
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
    </>
  );
};

export default Home;
