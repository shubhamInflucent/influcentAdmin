import React, {useEffect, useState} from "react";
import {Flex, Button, Text, Image, SimpleGrid, UnorderedList, ListItem, Input, Select, FormControl, FormLabel, useMediaQuery, useToast } from "@chakra-ui/react"
import Navbar from './../../components/navbar/index.jsx';
import {useNavigate} from "react-router-dom"
import Footer from './../../components/footer/index.jsx';
import {aboutUs, eBookFree} from './../../assets/landingPage/export.js';
import ReactTextTransition, { presets } from "react-text-transition";
import LandingPageMarquee from './../../components/landingPageMarquee/index.jsx';
import LandingPageCarousel from './../../components/landingPageCarousel/index.jsx';
import sanityClient from '@sanity/client';
import PaymentFunction from './../../components/payment/index.jsx';
import emailjs from 'emailjs-com';
import InflucentEbook from './../../assets/landingPage/Influcent_E-Book.pdf';

const textTerms = ["Business", "Yoga", "Music", "Finance", "Fitness", "Astrology", "Designer", "Educator" ];
const initialFormState = {
  firstName: '',
  lastName: '',
  emailId: '',
  phone: '',
  contentCategory: '',
  message: ''
}

const Index = () => {
  const toast = useToast()
  const navigate = useNavigate();
  const [textIndex, setTextIndex] = useState(0);
  const [isGreaterThan1100] = useMediaQuery('(min-width: 1100px)')
  const [isGreaterThan1000] = useMediaQuery('(min-width: 1000px)')
  const [isGreaterThan600] = useMediaQuery('(min-width: 600px)')
  const [isGreaterThan500] = useMediaQuery('(min-width: 500px)')

  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState(initialFormState);


  const client = sanityClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID, // find this in sanity.json
    dataset: import.meta.env.VITE_SANITY_DATASET, // or the name of your dataset
    token: import.meta.env.VITE_SANITY_API_TOKEN, // using env variable
    useCdn: true 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSendMail = () => {

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userID = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const userData = {
        from_name: formData.firstName + " " + formData.lastName,
        from_email: formData.emailId,
        from_phone: formData.phone,
        from_content_category: formData.contentCategory
    }

    emailjs.send(serviceID, templateID, userData, userID)
      .then((response) => {
        setFormData(initialFormState)
      }, (error) => {

      });

  };

  const handleSaveDataToSanity = async () => {

    try {
      await client.create({
        _type: 'contactForm',
        ...{
           fullName: formData.firstName + " " + formData.lastName,
           emailId: formData.emailId,
           phone: formData.phone,
           contentCategory: formData.contentCategory,
           message: formData.message,
        }
      });

      handleDownloadEbook()
      handleSendMail()
      setLoading(false)


    } catch (error) {
      console.error('Submission failed: ', error);
  
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    handleSaveDataToSanity()

    // PaymentFunction({name: formData.firstName + " " + formData.lastName, email: formData.emailId, contact: formData.phone})
    // .then(result => {
    //   if (result.success) {
    //     // handleSaveDataToSanity()
    //     console.log('Payment Successful:', result.response);
    //   } else {
    //     console.error('Payment Failed:', result.response);
    //   }
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // });
  };

  const _HandleGetStarted = () => {
    navigate('/contact')
  }

  const handleDownloadEbook = () => {

    const link = document.createElement('a');
    // Set the href to the PDF file's URL
    link.href = InflucentEbook;
    // Set the download attribute with the desired file name
    link.download = 'Influcet_Ebook.pdf';
    // Append the link to the body (this is needed for some browsers)
    document.body.appendChild(link);
    // Programmatically click the link to trigger the download
    link.click();
    // Remove the link from the document
    document.body.removeChild(link);
  };


  useEffect(() => {
    let interval = setInterval(() => {
      setTextIndex((prevTextIndex) => (prevTextIndex <= 4 ? prevTextIndex + 1 : 0));

    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

    return (
      <Flex fontFamily="Hanken Grotesk" style={{ fontSize: 'clamp(13px, 2vw, 18px)' }} flexDir='column' w='100%' h='100%'>
        <Navbar backgroundColor="white"/>

          <Flex py='100px' w={isGreaterThan1000 ? '80%' : "95%"} mx='auto' >
                <Flex flexDir='column' alignItems='center' mx='auto'>
                  <Flex fontFamily="satoshi" position='relative' style={{ fontSize: 'clamp(30px, 4vw, 50px)' }} fontWeight='800' lineHeight='1.3' textAlign='center'>Create. Influence. Earn. <br /> Transform Your Skills into Income.
                  {isGreaterThan600 && <Flex w='fit-content' position='absolute' fontSize='15px' left={isGreaterThan1000 ? '70px' : "30px"} top={isGreaterThan1000 ?'-10px' : "-20px"} px='20px' py='5px' bg='#F9A602' borderRadius='30px' color='white' fontWeight='600' style={{transform: "rotate(-25deg)"}}>Hi Creators</Flex>} 
                  </Flex>
                  <Text textAlign='center' my='10px' fontWeight='500' opacity='0.6'>Modify your knowledge into profitable online courses {isGreaterThan600 && <br/>} with personalized platforms.</Text>
                  <Button onClick={() => _HandleGetStarted()} my='20px' w='200px' bg='#0081DF' colorScheme='blue' fontWeight='400' fontSize='13px' h='35px'>Let's Connect</Button>
                  <Text style={{ fontSize: 'clamp(20px, 4vw, 30px)' }} mt='30px' fontWeight='800'>Which Creators we serve</Text>
                </Flex>
          </Flex>

          <LandingPageMarquee />

          <Flex bg='#F3FBF8' w='100%' px='30px' py={isGreaterThan1000 ? '70px' : "30px"}>
            <Flex w={isGreaterThan1000 ? '80%' : "95%"} flexDir={isGreaterThan600 ? "row" : "column-reverse"} gap={!isGreaterThan600 && "40px"} mx='auto' alignItems={isGreaterThan600 ? "center" : "center"} justify='space-between'>
              <Flex flexDir='column' alignItems={isGreaterThan600 ? "left" : "center"} textAlign={isGreaterThan600 ? "left" : "center"}  w='100%' gap='20px'>
                <Text fontFamily="satoshi" style={{ fontSize: 'clamp(30px, 4vw, 50px)' }} fontWeight='800' lineHeight='1.3'>About us</Text>
                <Text fontWeight='500' opacity='0.6'>At Influcent, we're dedicated to empowering {isGreaterThan600 && <br />} creators to monetize their skill and {isGreaterThan600 && <br/>} passions. Our mission is to help influencers{isGreaterThan600 &&  <br />} and experts expand their income streams {isGreaterThan600 && <br /> }beyond traditional brand deals by offering {isGreaterThan600 && <br/>} personalized platforms to share and sell {isGreaterThan600 && <br/>} their knowledge</Text>
                <Button  onClick={() => _HandleGetStarted()}  my='20px' w='200px' colorScheme='blue' fontWeight='400' fontSize='13px' h='35px' bg='#0081DF'>Get in touch</Button>
              </Flex>
              <Flex w='100%' justify={isGreaterThan600 ? 'end' : "center"}>
                <Image src={aboutUs} objectFit='contain' w='70%'/>
              </Flex>
            </Flex>
          </Flex>

          <Flex w={isGreaterThan1100 ? '80%' : "95%"} mx='auto' flexDir='column' alignItems='center'>
            <Text fontFamily="satoshi" mt='100px' mb='30px' style={{ fontSize: 'clamp(30px, 4vw, 50px)' }} fontWeight='800' lineHeight='1.3'>Our Services</Text>
            <LandingPageCarousel />
          </Flex>

          <Flex mt='80px' pb='40px' bg="linear-gradient(#ffffff, #fff9ed)">
              <SimpleGrid w={isGreaterThan1000 ? '80%' : "95%"} mx='auto' columns={isGreaterThan600 ? 2 : 1}>
                <Flex flexDir='column'>

                  <Text fontFamily="satoshi" style={{ fontSize: 'clamp(20px, 4vw, 40px)' }} fontWeight='700' lineHeight='1.3'>E book for all creators, <br /> including
                   <ReactTextTransition style={{ margin: "0 4px", color: "#F9A602" }} inline>
                      {textTerms[textIndex]}
                   </ReactTextTransition>
                  </Text>

                  <Flex mt='30px' mb='10px' py='10px' style={{ fontSize: 'clamp(15px, 4vw, 25px)' }} fontWeight='800' w='80%' borderBottom="1px solid #e7e7e7">Content</Flex>

                  <UnorderedList  fontWeight='400'>
                    <ListItem>Course Creation Blueprint</ListItem>
                    <ListItem>Personal Branding Mastery</ListItem>
                    <ListItem>Marketing and Promotion Strategies</ListItem>
                    <ListItem>Student Engagement and Retention</ListItem>
                  </UnorderedList>

                  <form onSubmit={handleSubmit} >
                  <Flex fontFamily="Hanken Grotesk"  alignItems={isGreaterThan600 ? 'flex-start' : 'center'} flexDir='column' mt='40px' bg='white' borderRadius='10px' padding='20px' gap='20px'>
                    <SimpleGrid w='100%' columns={isGreaterThan500 ? 2 : 1} spacing="10px">
                    <FormControl isRequired>
                      <FormLabel fontSize='14px' opacity="0.6">First Name</FormLabel>
                      <Input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel fontSize='14px' opacity="0.6">Last Name</FormLabel>
                      <Input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel  fontSize='14px' opacity="0.6">Phone Number</FormLabel>
                      <Input type="tel" name="phone" value={formData.phone} onChange={handleChange}  />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel  fontSize='14px' opacity="0.6">E-mail ID</FormLabel>
                      <Input type="email" name="emailId" value={formData.emailId} onChange={handleChange} />
                    </FormControl>
                    </SimpleGrid>
                    <Flex flexDir='column' gap='5px' w='100%'>
                    <FormControl isRequired >
                      <FormLabel fontSize='14px'  opacity="0.6">Content Category</FormLabel>
                      <Select placeholder="select" name="contentCategory" value={formData.contentCategory} onChange={(e) => setFormData({ ...formData, contentCategory: e.target.value })}>
                        {textTerms.map((item, index) => (
                          <option key={index} value={item}>{item}</option>
                        ))}
                      </Select>
                    </FormControl>
                    </Flex>
                    <Button isLoading={loading} type="submit" bg='#0081DF' w='100%' colorScheme='blue' fontWeight='400' fontSize='13px' h='40px'>Download Free</Button>
                  </Flex>
                  </form>

                </Flex>
                <Flex maxH="700px" w='fit-content' justifyContent='end' ><Image src={eBookFree} style={{objectFit: "contain"}} /></Flex>
              </SimpleGrid>
          </Flex>
        <Footer />
      </Flex>
    )
}

export default Index;