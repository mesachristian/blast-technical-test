import Slider from "react-slick";
import Activity from "../Activity/Activity";
import {
    RecommendationSectionWrapper,
    RecommendationTitle
} from "./styled-components";
import { EventSummary } from "../../../../model";

interface RecomendationSectionProps {
    category: string;
    events: Array<EventSummary>;
}

const RecomendationSection = ({ category, events }: RecomendationSectionProps) => {
    const sliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 10,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 7,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 7,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <RecommendationSectionWrapper>
            <RecommendationTitle>{category}</RecommendationTitle>
            <Slider {...sliderSettings}>
                {events.map((event: EventSummary) => {
                    return (
                        <Activity key={event.id} {...event} />
                    );
                })}
            </Slider>
        </RecommendationSectionWrapper>
    );
}

export default RecomendationSection;
