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
import {carouselAnalysis, number1, number2, number3, number4, desktopIcons, cardIcon, customerManagement, codeIcon} from './../../assets/landingPage/export.js';
import {ArrowForwardIcon} from "@chakra-ui/icons"

export default function App() {
    const swiperRef = useRef(null);
    const [isGreaterThan1000] = useMediaQuery('(min-width: 1000px)')
    const [isGreaterThan600] = useMediaQuery('(min-width: 600px)')


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

        <SwiperSlide style={{ padding: "40px", height: isGreaterThan600 ? "620px" : "300px", borderRadius: "8px",  border: "1px solid #e7e7e7", bg: "green"}}><img style={{ height: isGreaterThan600 ? "400px" : "180px", objectFit: "contain"}} src={carouselAnalysis} /></SwiperSlide>

        <Flex justify='end' alignItems='center' gap='10px' p='10px'>
          {/* <Button className="custom-prev-button" mr={4}>Previous</Button> */}
          <Text>How you can benefit from this</Text>
          <IconButton className="custom-next-button" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px;" borderRadius='50%' bg='white' h='40px' w='40px'><ArrowForwardIcon /></IconButton>
        </Flex>
      </Swiper>
    </Flex>
  );
}

const Slide1 = () => {
  const [isGreaterThan1000] = useMediaQuery('(min-width: 1000px)')

    return (
          <Flex h='300px' w='100%' borderRadius='8px' border="1px solid #e7e7e7" justify='space-between'>
                <Flex pl={isGreaterThan1000 ? '30px' : "10px"} justify='center' textAlign='start' alignItems='start' flexDir='column'>
                    <Image src={desktopIcons} style={{height: "40px", width: "40px"}} />
                    <Text style={{ fontSize: 'clamp(18px, 2vw, 25px)' }} fontWeight='700'>Personalized Website <br /> & app development</Text>
                    <Text  fontWeight='500' opacity='0.8'>Your personal brand <br/> matters</Text>
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
          <Flex h='300px' w='100%' borderRadius='8px' border="1px solid #e7e7e7" justify='space-between'>
                <Flex  pl={isGreaterThan1000 ? '30px' : "10px"} justify='center' textAlign='start' alignItems='start' flexDir='column'>
                    <Image src={codeIcon} style={{height: "40px", width: "40px"}} />
                    <Text style={{ fontSize: 'clamp(18px, 2vw, 25px)' }} fontWeight='700'>Seamless Payment <br/> Processing</Text>
                    <Text fontWeight='500' opacity='0.8'>Recieve quick & secured <br/> payments from all over <br/> the world and track your <br/> income</Text>
                </Flex>
                
                <Flex justify='end'>
                   <Image src={number2}/>
                </Flex>
          </Flex>
    )
}
const Slide3 = () => {
  const [isGreaterThan1000] = useMediaQuery('(min-width: 1000px)')

    return (
          <Flex h='300px' w='100%' borderRadius='8px' border="1px solid #e7e7e7" justify='space-between'>
                <Flex  pl={isGreaterThan1000 ? '30px' : "10px"} justify='center' textAlign='start' alignItems='start' flexDir='column'>
                    <Image src={customerManagement} style={{height: "40px", width: "40px"}} />
                    <Text style={{ fontSize: 'clamp(18px, 2vw, 25px)' }} fontWeight='700'>Efficient Customer<br /> Management</Text>
                    <Text  fontWeight='500' opacity='0.8'>give your customer the best <br /> experience as they are <br/> interacting with an <br/> enterprise</Text>
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
          <Flex h='300px' w='100%' borderRadius='8px' border="1px solid #e7e7e7" justify='space-between'>
                <Flex  pl={isGreaterThan1000 ? '30px' : "10px"} justify='center' textAlign='start' alignItems='start' flexDir='column'>
                    <Image src={codeIcon} style={{height: "40px", width: "40px"}} />
                    <Text style={{ fontSize: 'clamp(18px, 2vw, 25px)' }} fontWeight='700'>Dedicated Technical <br/> Support</Text>
                    <Text fontWeight='500' opacity='0.8'>Focus on keep growing <br/> and leave rest on us</Text>
                </Flex>
                
                <Flex justify='end'>
                   <Image src={number4}/>
                </Flex>
          </Flex>
    )
}

