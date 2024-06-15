import React, {useEffect, useState} from "react";
import {Flex, Button, Text, Image} from "@chakra-ui/react"
import sanityClient from '@sanity/client';
import {influcentWhite} from './../../assets/icons/export.js';
import * as XLSX from 'xlsx';
import _ from "underscore"


const Index = () => {

  const [loading, setLoading] = useState(false)
  const client = sanityClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID, // find this in sanity.json
    dataset: import.meta.env.VITE_SANITY_DATASET, // or the name of your dataset
    token: import.meta.env.VITE_SANITY_API_TOKEN, // using env variable
    useCdn: true 
  });

  const fetchDataAndDownload = async () => {
    setLoading(true)
    try {
        const query = '*[_type == "contactForm"]'; // Replace "post" with your actual document type
        const data = await client.fetch(query);

        // Specify the fields you want to omit
        const fieldsToOmit = ['_updatedAt', '_type', '_id', "_rev"]; // Replace with your actual field names

        // Omit specified fields from each object
        const processedData = data.map(item => _.omit(item, fieldsToOmit));

        console.log(processedData, data, "data")
        const worksheet = XLSX.utils.json_to_sheet(processedData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sanity Data');

        XLSX.writeFile(workbook, 'sanity-data.xlsx');
    } catch (error) {
        console.error('Error fetching data from Sanity:', error);
    }

    setLoading(false)
};
    return (
      <Flex fontFamily="Hanken Grotesk" h='100vh' bg='black' style={{ fontSize: 'clamp(13px, 2vw, 18px)' }} flexDir='column' w='100%'>
        
  
      <Flex mx='auto' my='auto' flexDir='column' gap='40px'>
        <Image src={influcentWhite} w='200px' />
        <Button isLoading={loading} onClick={fetchDataAndDownload} >Download data</Button>

      </Flex>
      </Flex>
    )
}

export default Index;