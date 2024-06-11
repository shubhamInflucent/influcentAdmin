
import React, {useEffect, useState} from "react";
import {Flex, Button, Text, Image, SimpleGrid, Input, Textarea, FormControl, FormLabel, useMediaQuery, Select, useToast } from "@chakra-ui/react"
import Navbar from '../../components/navbar/index.jsx';
import Footer from '../../components/footer/index.jsx';
import {mail, location} from './../../assets/icons/export.js';
import ContacePageImage from './../../assets/landingPage/contactPage/Group 328.webp';
import sanityClient from '@sanity/client';

const contentCategories = ["Business", "Yoga", "Music", "Finance", "Fitness", "Astrology", "Designer", "Educator" ]
const initialFormState = {
  fullName: '',
  emailId: '',
  phone: '',
  contentCategory: '',
  message: ''
}

const Index = () => {
  const toast = useToast()
  const [textIndex, setTextIndex] = useState(0);
  const [isGreaterThan1000] = useMediaQuery('(min-width: 1000px)')
  const [isGreaterThan600] = useMediaQuery('(min-width: 600px)')
  const [isGreaterThan500] = useMediaQuery('(min-width: 500px)')
  const [loading, setLoading] = useState(false)

  const client = sanityClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID, // find this in sanity.json
    dataset: import.meta.env.VITE_SANITY_DATASET, // or the name of your dataset
    token: import.meta.env.VITE_SANITY_API_TOKEN, // using env variable
    useCdn: true 
  });

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      await client.create({
        _type: 'contactForm',
        ...formData
      });
      toast({
        title: 'Message Sent',
        description: "we have recieved you message",
        status: 'info',
        position: 'top-left',
        duration: 3000,
        isClosable: true,
      })
      setFormData(initialFormState)
    } catch (error) {
      console.error('Submission failed: ', error);
      toast({
        title: 'Something went wrong',
        position: 'top-left',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
    setLoading(false)
  };

    return (
      <Flex  fontFamily="satoshi" style={{ fontSize: 'clamp(13px, 2vw, 18px)' }} bg="#f2fbfa" flexDir='column' w='100%' h='100%'>
        <Navbar backgroundColor="#f2fbfa" />

          <Flex flexDir="Column" mt='80px' pb='90px' mx='auto' alignItems='center' w={isGreaterThan1000 ? '80%' : "95%"} >
              <Flex position="relative" >
                <Text color="#dfe7e6" style={{ fontSize: 'clamp(50px, 8vw, 140px)' }} fontWeight="700">CONTACT</Text>
                <Flex  w='100%' h='100%' position="absolute">
                  <Text mx='auto' my='auto' style={{ fontSize: 'clamp(18px, 4.5vw, 50px)' }} fontWeight="800">Get in touch</Text>
                </Flex>
              </Flex>
              <SimpleGrid w={isGreaterThan1000 ? '80%' : "98%"} mt='50px' mx='auto' columns={isGreaterThan600 ? 2 : 1}>

                  <Flex flexDir='column' alignItems={isGreaterThan600 ? 'flex-start' : 'center'}>

                    <Image src={ContacePageImage}  w='150px' />
                    <Text  fontFamily="satoshi"  mt='20px' mb='40px' style={{ fontSize: 'clamp(20px, 4vw, 40px)' }} fontWeight="700">Help Us Help You</Text>
                    <Flex alignItems='center' gap='10px'>
                      <Image src={mail} w='22px' />
                      <Text fontWeight='600'>Shubhamg@influcent.com</Text>
                    </Flex>
                    <Flex mt='10px' alignItems='center' gap='10px'>
                      <Image src={location} w='22px' />
                      <Text fontWeight='600'>147 C, GH2 Paschim Vihar, New Delhi, 110063</Text>
                    </Flex>
                  </Flex>

                  <form onSubmit={handleSubmit} >
                  <Flex fontFamily="Hanken Grotesk"  alignItems={isGreaterThan600 ? 'flex-start' : 'center'} flexDir='column' mt='40px' bg='white' borderRadius='10px' padding='20px' gap='20px'>
                    <SimpleGrid w='100%' columns={isGreaterThan500 ? 2 : 1} spacing="10px">
                    <FormControl isRequired>
                      <FormLabel  fontSize='14px' opacity="0.8">Full Name</FormLabel>
                      <Input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel fontSize='14px'  opacity="0.8">Content Category</FormLabel>
                      <Select placeholder="select" name="contentCategory" value={formData.contentCategory} onChange={(e) => setFormData({ ...formData, contentCategory: e.target.value })}>
                        {contentCategories.map((item, index) => (
                          <option key={index} value={item}>{item}</option>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel  fontSize='14px' opacity="0.8">Phone Number</FormLabel>
                      <Input type="tel" name="phone" value={formData.phone} onChange={handleChange}  />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel  fontSize='14px' opacity="0.8">E-mail ID</FormLabel>
                      <Input type="email" name="emailId" value={formData.emailId} onChange={handleChange} />
                    </FormControl>
                    </SimpleGrid>
                    <Flex flexDir='column' gap='5px' w='100%'>
                    <Text  opacity="0.8" fontSize='14px'>Message</Text>
                    <Textarea name="message" value={formData.message} onChange={handleChange}/>
                    </Flex>
                    <Button isLoading={loading} type="submit" w='100%' colorScheme='blue' fontWeight='400' fontSize='13px' h='40px' >Send Message</Button>
                  </Flex>
                  </form>

              </SimpleGrid>
          </Flex>
          
        <Footer />
      </Flex>
    )
}

export default Index;