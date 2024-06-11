import React from "react";
import Marquee from "react-fast-marquee";
import {Image, useMediaQuery} from "@chakra-ui/react"
import {group1, group2, group3, group4, group5, group6, group7, group8} from './../../assets/landingPage/imagesLoop/export.js';

const App = () => {
  const [isGreaterThan800] = useMediaQuery('(min-width: 800px)')

 return (
    <Marquee style={{ marginBottom: "100px"}}>
      <Image mx={isGreaterThan800 ? '30px' : "10px"} mt='50px' src={group1} w={isGreaterThan800 ? '200px' : "100px"}/>
      <Image  mx={isGreaterThan800 ? '30px' : "10px"}  mb='50px' src={group2} w={isGreaterThan800 ? '200px' : "100px"}/>
      <Image  mx={isGreaterThan800 ? '30px' : "10px"}  mt='50px' src={group3} w={isGreaterThan800 ? '200px' : "100px"}/>
      <Image  mx={isGreaterThan800 ? '30px' : "10px"}  mb='50px' src={group4} w={isGreaterThan800 ? '200px' : "100px"}/>
      <Image  mx={isGreaterThan800 ? '30px' : "10px"}  mt='50px' src={group5} w={isGreaterThan800 ? '200px' : "100px"}/>
      <Image  mx={isGreaterThan800 ? '30px' : "10px"}  mb='50px' src={group6} w={isGreaterThan800 ? '200px' : "100px"}/>
      <Image  mx={isGreaterThan800 ? '30px' : "10px"}  mt='50px' src={group7} w={isGreaterThan800 ? '200px' : "100px"}/>
      <Image  mx={isGreaterThan800 ? '30px' : "10px"}  mb='50px' src={group8} w={isGreaterThan800 ? '200px' : "100px"}/>
    </Marquee>
   );
}
export default App;