import React, {ComponentRef, useEffect} from "react";
import {Image, Stack, Text} from "@chakra-ui/react";
import Slider from "react-slick";
import "../slider.css";
/* import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; */

import quoteBg from "/assets/pattern-quotes.svg";
const sliderData = [
  {
    id: 0,
    testimonial:
      "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
    name: "Tanya Sinclair",
    position: "UX Engineer",
    image: "image-tanya.jpg",
  },
  {
    id: 0,
    testimonial:
      "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
    name: " John Tarkpor",
    position: "Junior Front-end Developer",
    image: "image-john.jpg",
  },
];

const SlideTemplate = (props: any) => {
  const sliderImage = `/assets/${props.image}`;

  return (
    <Stack
      alignItems="center"
      alignSelf="center"
      color="primary.500"
      direction={["column-reverse", "row"]}
      paddingX={[0, 12]}
      position="relative"
      spacing={[16, 0]}
    >
      <Stack
        backgroundImage={quoteBg}
        backgroundPosition={["50% 0%", "20% 10%"]}
        backgroundRepeat="no-repeat"
        backgroundSize="20%"
        height={["auto", "26rem"]}
        justifyContent="center"
        spacing={[6, 8]}
        width={["85%", "58%"]}
        zIndex="100"
      >
        <Text
          as="h1"
          fontSize={["lg", "2xl"]}
          fontWeight="300"
          lineHeight={[1.4, 1.4]}
          textAlign={["center", "left"]}
        >
          {props.testimonial}
        </Text>
        <Stack
          alignItems="baseline"
          alignSelf={["center", "flex-start"]}
          direction={["column", "row"]}
          spacing={[0, 2]}
        >
          <Text alignSelf={["center", "inherit"]} fontSize={["lg", "md"]} fontWeight="700">
            {props.name}
          </Text>
          <Text alignSelf={["center", "inherit"]} color="primary.600" fontSize={["lg", "lg"]}>
            {props.position}
          </Text>
        </Stack>
      </Stack>
      <Image
        alt="slider-image"
        borderRadius="md"
        height={[64, "26rem"]}
        position={["relative", "absolute"]}
        right={["auto", 16]}
        src={sliderImage}
        width={[64, "26rem"]}
      />
    </Stack>
  );
};
const Slides = sliderData.map((sl) => (
  <SlideTemplate
    key={sl.id}
    image={sl.image}
    name={sl.name}
    position={sl.position}
    testimonial={sl.testimonial}
  />
));

function SamplePrevArrow(props: any) {
  const {className, style, onClick} = props;

  return (
    <Stack
      alignItems="center"
      backgroundColor="white"
      borderLeftRadius="50%"
      bottom={["50%", -5]}
      boxShadow="-4px 4px 6px 4px rgba(0,0,0,.2)"
      className={className}
      display="flex"
      height={10}
      justifyContent="center"
      right={["40%", 80]}
      style={{
        ...style,
        display: "flex",
        transform: "translateX(-40px)",
      }}
      width={10}
      zIndex="100"
      onClick={onClick}
    >
      <Image src="/assets/icon-prev.svg" />
    </Stack>
  );
}
function SampleNextArrow(props: any) {
  const {className, style, onClick} = props;

  return (
    <Stack
      alignItems="center"
      backgroundColor="white"
      borderRightRadius="50%"
      bottom={["50%", -5]}
      boxShadow="4px 4px 6px 4px rgba(0,0,0,.2)"
      className={className}
      display="flex"
      height={10}
      justifyContent="center"
      right={["40%", 80]}
      style={{
        ...style,
        display: "flex",
      }}
      width={10}
      zIndex="100"
      onClick={onClick}
    >
      <Image src="/assets/icon-next.svg" />
    </Stack>
  );
}
const App: React.FC = () => {
  const sliderRef = React.useRef<Slider>(null);

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    function slide(y: number) {
      if (sliderRef) {
        y > 0 ? sliderRef.current!.slickNext() : sliderRef.current!.slickPrev();
      }
    }
    window.addEventListener("wheel", (e) => {
      slide(e.deltaY);
    });
  }, []);

  return (
    <Stack
      backgroundColor="white"
      backgroundImage={["url('/assets/pattern-curve.svg'), url('/assets/pattern-bg.svg')"]}
      backgroundPosition={["50%  100%, 50% 0%", "0%  100%, 80% 50%"]}
      backgroundRepeat={["no-repeat, no-repeat", "no-repeat, no-repeat"]}
      backgroundSize={["contain, 90%", "50% , 46%"]}
      height="100vh"
      justifyContent="center"
      paddingX={[0, 40]}
      role="main"
      spacing={0}
      width="100%"
    >
      <Slider {...settings} ref={sliderRef}>
        {Slides}
      </Slider>
    </Stack>
  );
};

export default App;
