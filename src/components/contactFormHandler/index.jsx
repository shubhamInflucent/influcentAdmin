import React,{useState} from "react";
import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'your-project-id', // find this in sanity.json
  dataset: 'production', // or the name of your dataset
  useCdn: true
});

const Index = () => {

 const [formData, setFormData] = useState({
    fullName: '',
    emailId: '',
    phone: '',
    contentCategory: '',
    message: ''
  });

}

export default Index;