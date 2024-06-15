// contactForm.js
export default {
    name: 'contactForm',
    type: 'document',
    title: 'Contact Form',
    fields: [
      {
        name: 'fullName',
        type: 'string',
        title: 'Full Name'
      },
      {
        name: 'emailId',
        type: 'string',
        title: 'Email ID'
      },
      {
        name: 'phone',
        type: 'string',
        title: 'Phone'
      },
      {
        name: 'contentCategory',
        type: 'string',
        title: 'Content Category'
      },
      {
        name: 'message',
        type: 'text',
        title: 'Message'
      },
      {
        name: 'hadDownloadedEbook',
        type: 'boolean',
        title: 'Downloaded E-book'
      }
    ]
  }
  