import React from "react";
import {useNavigate} from "react-router-dom"
import { Flex, Button, Text, Image, IconButton, Link, useMediaQuery } from "@chakra-ui/react";
import { influcent, instagram, linkedin } from "./../../assets/icons/export.js";

const Index = ({backgroundColor}) => {
  const navigate = useNavigate()
  const [isGreaterThan1000] = useMediaQuery('(min-width: 1000px)')
  const [isGreaterThan600] = useMediaQuery('(min-width: 600px)')


  return (
    <Flex bg={backgroundColor} w="100%" h="60px" justify="center" position='fixed' zIndex={100}>
      <Flex w={isGreaterThan1000 ? '80%' : "95%"} justify="space-between" alignItems="center">
        <Flex cursor='pointer' onClick={()=> navigate("/")} >
          <Image src={influcent} w="130px" />
        </Flex>
        <Flex alignItems='center' gap='10px'>
          <Link href="https://www.instagram.com/influcent/" h='35px' w='35px' display='flex' justifyContent='center' alignItems='center' borderRadius='50%' bg='white' boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px;" isExternal>
             <Image src={instagram} h='18px' w='18px' />
          </Link>
          <Link href="https://www.linkedin.com/company/influcent/" h='35px' w='35px' borderRadius="50%" bg='white' display='flex' justifyContent='center' alignItems='center' boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px;"  isExternal>
             <Image src={linkedin} h='18px' w='18px' />
          </Link>
          {isGreaterThan600 && <Button onClick={()=> navigate('/contact')} maxW='150px' minW='80px' colorScheme='blue' fontWeight='400' fontSize='13px' h='35px'>Get Started</Button>}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Index;
