import React, {useEffect, useState} from "react";
import {Flex, Button, Text, Image, SimpleGrid, UnorderedList, ListItem, Input, Select, FormControl, FormLabel, useMediaQuery } from "@chakra-ui/react"
import Navbar from './../../components/navbar/index.jsx';
import Footer from './../../components/footer/index.jsx';
import {aboutUs, cardIcon, carouselAnalysis, codeIcon, customerManagement, desktopIcons, eBook, landingImage, number1, number2, number3, number4} from './../../assets/landingPage/export.js';
import ReactTextTransition, { presets } from "react-text-transition";


import LandingPageCarousel from './../../components/landingPageCarousel/index.jsx';

const Index = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [isGreaterThan1000] = useMediaQuery('(min-width: 1000px)')
  const [isGreaterThan600] = useMediaQuery('(min-width: 600px)')
  const [isGreaterThan500] = useMediaQuery('(min-width: 500px)')
  const textTerms = ["Business", "Creator", "Influencer", "Yoga Class", "Enterprenuer", "Worker" ]

  useEffect(() => {
    let interval = setInterval(() => {
      setTextIndex((prevTextIndex) => (prevTextIndex <= 4 ? prevTextIndex + 1 : 0));

    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

    return (
      <Flex fontFamily="Hanken Grotesk" style={{ fontSize: 'clamp(13px, 2vw, 18px)' }} flexDir='column' w='100%' h='100%'>
        <Navbar />
          <Flex py='100px' w={isGreaterThan1000 ? '80%' : "95%"} mx='auto' >
                <Flex flexDir='column' alignItems='center' mx='auto'>
                  <Flex fontFamily="satoshi" position='relative' style={{ fontSize: 'clamp(30px, 4vw, 50px)' }} fontWeight='900' lineHeight='1.3' textAlign='center'>Empower Your Passion. <br /> Monetize Your Experience.
                  {isGreaterThan600 && <Flex w='fit-content' position='absolute' fontSize='15px' left={isGreaterThan1000 ? '-20px' : "-40px"} top={isGreaterThan1000 ?'-5px' : "-10px"} px='20px' py='5px' bg='#F9A602' borderRadius='30px' color='white' fontWeight='600' style={{transform: "rotate(-25deg)"}}>Hi Creators</Flex>} 
                  </Flex>
                  <Text textAlign='center' my='10px' fontWeight='500' opacity='0.8'>Transform your knowledge in to profitable online courses <br/> with personalized platforms</Text>
                  <Button my='20px' w='200px' colorScheme='blue' fontWeight='400' fontSize='13px' h='35px'>Get Started</Button>
                  <Image my='100px' w={isGreaterThan600 ? '55%' : "95%"} src={landingImage} />
                </Flex>
          </Flex>

          <Flex bg='#F3FBF8' w='100%' px='30px' py={isGreaterThan1000 ? '70px' : "30px"}>
            <Flex w={isGreaterThan1000 ? '80%' : "95%"} flexDir={isGreaterThan600 ? "row" : "column-reverse"} gap={!isGreaterThan600 && "40px"} mx='auto' alignItems={isGreaterThan600 ? "center" : "center"} justify='space-between'>
              <Flex flexDir='column' alignItems={isGreaterThan600 ? "left" : "center"} textAlign={isGreaterThan600 ? "left" : "center"}  w='100%' gap='20px'>
                <Text fontFamily="satoshi" style={{ fontSize: 'clamp(30px, 4vw, 50px)' }} fontWeight='900' lineHeight='1.3'>About us</Text>
                <Text fontWeight='500' opacity='0.8'>At Influcent, we're dedicated to empowering <br /> creators to monetize their skill and <br/> passions. Our mission is to help influencers <br /> and experts expand their income streams <br /> beyond traditional brand deals by offering <br/> personalized platforms to share and sell <br/> their knowledge</Text>
                <Button my='20px' w='200px' colorScheme='blue' fontWeight='400' fontSize='13px' h='35px'>Get Started</Button>
              </Flex>
              <Flex w='100%' justify={isGreaterThan600 ? 'end' : "center"}>
                <Image src={aboutUs} objectFit='contain' w='70%'/>
              </Flex>
            </Flex>
          </Flex>

          <Flex w={isGreaterThan1000 ? '80%' : "95%"} mx='auto' flexDir='column' alignItems='center'>
            <Text fontFamily="satoshi" mt='100px' mb='30px' style={{ fontSize: 'clamp(30px, 4vw, 50px)' }} fontWeight='900' lineHeight='1.3'>Our services</Text>
            <LandingPageCarousel />
          </Flex>

          <Flex mt='80px' pb='40px' bg="linear-gradient(#ffffff, #fff9ed)">
              <SimpleGrid w={isGreaterThan1000 ? '80%' : "95%"} mx='auto' columns={isGreaterThan600 ? 2 : 1}>
                <Flex flexDir='column'>
                   <Text fontFamily="satoshi" style={{ fontSize: 'clamp(20px, 4vw, 40px)' }} fontWeight='700' lineHeight='1.3'>E book for all creator, <br /> including
                   <ReactTextTransition style={{ margin: "0 4px", color: "#F9A602" }} inline>
                      {textTerms[textIndex]}
                   </ReactTextTransition>
                   </Text>

                  <Flex mt='30px' mb='10px' py='10px' style={{ fontSize: 'clamp(15px, 4vw, 25px)' }} w='80%' borderBottom="1px solid #e7e7e7">Content</Flex>

                  <UnorderedList>
                    <ListItem>Course Creation Blueprint</ListItem>
                    <ListItem>Personal Branding Mastery</ListItem>
                    <ListItem>Marketing and Promotion Strategies</ListItem>
                    <ListItem>Student Engagement and Retention</ListItem>
                  </UnorderedList>

                  <Flex flexDir='column' mt='40px' bg='white' borderRadius='10px' padding='20px' gap='20px'>
                    <SimpleGrid columns={isGreaterThan500 ? 2 : 1} spacing="10px">
                    <FormControl>
                      <FormLabel>First Name</FormLabel>
                      <Input type='text' />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Last Name</FormLabel>
                      <Input type='text' />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Phone Number</FormLabel>
                      <Input type='tel' />
                    </FormControl>
                    <FormControl>
                      <FormLabel>E-mail ID</FormLabel>
                      <Input type='email' />
                    </FormControl>
                    </SimpleGrid>
                    <Flex flexDir='column' gap='5px'>
                    <Text>Content category</Text>
                    <Select placeholder='Select option'>
                      <option value='option1'>Option 1</option>
                      <option value='option2'>Option 2</option>
                      <option value='option3'>Option 3</option>
                    </Select>
                    </Flex>
                    <Button w='100%' colorScheme='blue' fontWeight='400' fontSize='13px'  h='40px' >Pay and Download</Button>
                  </Flex>

                </Flex>
                <Flex maxH="700px" w='fit-content' justifyContent='end' ><Image src={eBook} style={{objectFit: "contain"}} /></Flex>
              </SimpleGrid>
          </Flex>
        <Footer />
      </Flex>
    )
}

export default Index;