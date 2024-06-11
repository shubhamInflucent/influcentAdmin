import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Flex, Text, Button, Image, IconButton, SimpleGrid, useMediaQuery} from "@chakra-ui/react"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './index.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import {carouselAnalysis } from './../../assets/landingPage/export.js';
import {ArrowForwardIcon} from "@chakra-ui/icons"
import {codeIcon, customerManagement, desktopIcons, cardIcon, number1, number2, number3, number4} from './../../assets/landingPage/carousel/export.js';

export default function App() {
    const swiperRef = useRef(null);
    const [isGreaterThan1000] = useMediaQuery('(min-width: 1000px)')
    const [isGreaterThan600] = useMediaQuery('(min-width: 600px)')
    const [bottomText, setBottomText] = useState(0)
    const bottomTextList = ["How you can benefit from this", "Services"];
    const bottomTextList2 = ["How you can benefit from this", "How you can benefit from this", "How you can benefit from this", "How you can benefit from this", "Services"]
    const _HandleBottomText = () => {
    
      let noOfSlides = isGreaterThan600 ? 2 - 1 : 5 - 1;
      if(bottomText < noOfSlides) {
        setBottomText(bottomText + 1)
      }else {
        setBottomText(0)
      }

    }


  return (
    <Flex style={{ fontSize: 'clamp(13px, 2vw, 18px)' }} h='fit-content' w='100%' overflow='hidden' flexDir='column' justify='center'>
      <Swiper
        style={{height: "auto"}}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{ clickable: true, el: '.swiper-pagination', type: 'bullets' }}
        navigation={{
            nextEl: '.custom-next-button',
            prevEl: '.custom-prev-button',
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {isGreaterThan600 && <SwiperSlide>
         <SimpleGrid style={{ fontSize: 'clamp(13px, 2vw, 18px)' }} w='100%' columns={2} spacing="20px">
          <Slide1 />
          <Slide2 />
          <Slide3 />
          <Slide4 />
        </SimpleGrid>
        </SwiperSlide>}

        {!isGreaterThan600 && <SwiperSlide style={{padding: "5px"}}><Slide1 /></SwiperSlide>}
        {!isGreaterThan600 && <SwiperSlide style={{padding: "5px"}}><Slide2 /></SwiperSlide>}
        {!isGreaterThan600 && <SwiperSlide style={{padding: "5px"}}><Slide3 /></SwiperSlide>}
        {!isGreaterThan600 && <SwiperSlide style={{padding: "5px"}}><Slide4 /></SwiperSlide>}

        <SwiperSlide style={{ padding: isGreaterThan600 ? "40px" : "5px", height: isGreaterThan600 ? "620px" : "300px", borderRadius: "8px",  border: "1px solid #e7e7e7", bg: "green"}}><img style={{ height: isGreaterThan600 ? "400px" : "100%", objectFit: "contain"}} src={carouselAnalysis} /></SwiperSlide>

        <Flex justify='end' alignItems='center' gap='10px' p='10px'>
          {/* <Button className="custom-prev-button" mr={4}>Previous</Button> */}
          <Text>{ isGreaterThan600 ? bottomTextList?.[bottomText] : bottomTextList2?.[bottomText]}</Text>
          <IconButton className="custom-next-button" onClick={e => _HandleBottomText()} boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px;" borderRadius='50%' bg='white' h='40px' w='40px'><ArrowForwardIcon /></IconButton>
        </Flex>
      </Swiper>
    </Flex>
  );
}

const Slide1 = () => {
  const [isGreaterThan1000] = useMediaQuery('(min-width: 1000px)')
  const [isGreaterThan600] = useMediaQuery('(min-width: 600px)')

    return (
          <Flex h='300px' style={{ fontSize: 'clamp(13px, 2vw, 18px)' }} w='100%' borderRadius='8px' border="1px solid #e7e7e7" justify='space-between'>
                <Flex pl={isGreaterThan1000 ? '30px' : "10px"} justify='center' textAlign='start' alignItems='start' flexDir='column'>
                    <Image src={desktopIcons} style={{height: "60px", width: "60px"}} />
                    <Text style={{ fontSize: 'clamp(18px, 2vw, 25px)' }} fontWeight='700'>Personalized Website <br /> & app development</Text>
                    <Text  fontWeight='500' opacity='0.8'>We build your dream {isGreaterThan600 && <br />} digital space that reflects <br/> your persona & {isGreaterThan600 && <br/>} uniqueness </Text>
                </Flex>
                <Flex justify='end'>
                   <Image src={number1}  />
                </Flex>
          </Flex>
    )
}

const Slide2 = () => {
  const [isGreaterThan1000] = useMediaQuery('(min-width: 1000px)')
  const [isGreaterThan600] = useMediaQuery('(min-width: 600px)')

    return (
          <Flex h='300px' style={{ fontSize: 'clamp(13px, 2vw, 18px)' }} w='100%' borderRadius='8px' border="1px solid #e7e7e7" justify='space-between'>
                <Flex  pl={isGreaterThan1000 ? '30px' : "10px"} justify='center' textAlign='start' alignItems='start' flexDir='column'>
                    <Image src={cardIcon} style={{height: "60px", width: "60px"}} />
                    <Text style={{ fontSize: 'clamp(18px, 2vw, 25px)' }} fontWeight='700'>Seamless Payment <br/> Processing</Text>
                    <Text fontWeight='500' opacity='0.8'>Recieve quick & secured {isGreaterThan600 && <br/>} payments from all over <br/> the world and track your{isGreaterThan600 && <br/>} income</Text>
                </Flex>
                
                <Flex justify='end'>
                   <Image src={number2}/>
                </Flex>
          </Flex>
    )
}
const Slide3 = () => {
  const [isGreaterThan1000] = useMediaQuery('(min-width: 1000px)')
  const [isGreaterThan600] = useMediaQuery('(min-width: 600px)')

    return (
          <Flex h='300px' style={{ fontSize: 'clamp(13px, 2vw, 18px)' }} w='100%' borderRadius='8px' border="1px solid #e7e7e7" justify='space-between'>
                <Flex  pl={isGreaterThan1000 ? '30px' : "10px"} justify='center' textAlign='start' alignItems='start' flexDir='column'>
                    <Image src={customerManagement} style={{height: "60px", width: "60px"}} />
                    <Text style={{ fontSize: 'clamp(18px, 2vw, 25px)' }} fontWeight='700'>Efficient Customer<br /> Management</Text>
                    <Text  fontWeight='500' opacity='0.8'>Give your customers{isGreaterThan600 && <br />} best experience as they <br/>  are interacting with an {isGreaterThan600 && <br/>} enterprise</Text>
                </Flex>
                <Flex justify='end'>
                   <Image src={number3}  />
                </Flex>
          </Flex>

    )
}
const Slide4 = () => {
  const [isGreaterThan1000] = useMediaQuery('(min-width: 1000px)')
  const [isGreaterThan600] = useMediaQuery('(min-width: 600px)')

    return (
          <Flex h='300px' style={{ fontSize: 'clamp(13px, 2vw, 18px)' }} w='100%' borderRadius='8px' border="1px solid #e7e7e7" justify='space-between'>
                <Flex  pl={isGreaterThan1000 ? '30px' : "10px"} justify='center' textAlign='start' alignItems='start' flexDir='column'>
                    <Image src={codeIcon} style={{height: "60px", width: "60px"}} />
                    <Text style={{ fontSize: 'clamp(18px, 2vw, 25px)' }} fontWeight='700'>Dedicated Technical <br/> Support</Text>
                    <Text fontWeight='500' opacity='0.8'>Focus on keep growing <br/> and leave rest on us </Text>
                </Flex>
                
                <Flex justify='end'>
                   <Image src={number4}/>
                </Flex>
          </Flex>
    )
}

