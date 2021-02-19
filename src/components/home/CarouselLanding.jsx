import React, { useState } from "react";

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption, CarouselControl
} from "reactstrap";

// core components

const items = [
  {
    src: require("../../assets/img/events/Corporate.png"),
    altText: "Corporate",
    caption: "Corporate"
  },
  {
    src: require("../../assets/img/events/wedding.png"),
    altText: "Weddings",
    caption: "Weddings"
  },
  {
    src: require("../../assets/img/events/market.png"),
    altText: "Spring & Fall Markets",
    caption: "Spring & Fall Markets"
  },
  {
    src: require("../../assets/img/events/VIP.png"),
    altText: "Vip Private Parties",
    caption: "Vip Private Parties"
  },
  {
    src: require("../../assets/img/events/drop-off.png"),
    altText: "Drop Off's",
    caption: "Drop Off's"
  }
];

function SectionCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
        <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}>
          <img src={item.src} alt={item.altText} />
          <CarouselCaption className="" captionText="" captionHeader={item.caption} />
        </CarouselItem>
    );
  });

  return (
      <div className="section pt-o" id="carousel" style={{ marginBottom: '-30px', paddingTop: '-10px'}}>
        <Container>
          <h2 className=" text-center">Events</h2>
          <br/>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <Card className="page-carousel">
                <Carousel
                    interval={2000}
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}>
                  <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                  {slides}
                  <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                  <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
  )
}

export default SectionCarousel;
