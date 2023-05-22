import { useSelector } from "react-redux";
import Slider from "react-slick";
import { universityItemsSelector } from "selectors/university.selector";

import Box from '@mui/material/Box';
import { IUniversity } from "models/IUniversity";
import { UniversityCarouselItem } from "./UniversityCarouselItem";

const randomImages = [
    "https://fastly.picsum.photos/id/30/1280/901.jpg?hmac=A_hpFyEavMBB7Dsmmp53kPXKmatwM05MUDatlWSgATE",
    "https://fastly.picsum.photos/id/482/1280/901.jpg?hmac=HNpFBuCOgxNCEMKBsnsU0Qf7Sn1E2Dnr3ZyGwnWmR9s",
    "https://fastly.picsum.photos/id/499/1280/901.jpg?hmac=gLBUBGngEnF4-xkWcHaxE6RmTVyuPIpFhi8n9Pb2SlI",
    "https://fastly.picsum.photos/id/372/1280/901.jpg?hmac=nKUfQxMimy4e3THxitQLLZVmMNbn0BbQbL6XTmdIkdo"
]

export const UniversityCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const universities = useSelector(universityItemsSelector).slice(0, 4);

    const goToUniversity = (university: IUniversity) => () => window.open(university.web_pages[0]);

    return (
        <Box margin='30px'>
            <Box maxWidth={500} display='block' margin='0 auto'>
                <Slider {...settings}>
                    {
                        universities.map((uni, index) => (
                            <UniversityCarouselItem
                                key={uni.id}
                                university={uni}
                                imageUrl={randomImages[index]}
                                onClick={goToUniversity}
                            />
                        ))
                    }
                </Slider>
            </Box>

        </Box>
    )
}
