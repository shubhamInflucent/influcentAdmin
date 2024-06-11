import React from 'react';
import {influcentLogo} from './../../assets/icons/export.js';

const displayRazorpay = async ({name, email, contact}) => {
  try {
    const loadScript = () => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';

        script.onload = resolve;
        script.onerror = () => reject(new Error('Razorpay SDK failed to load. Are you online?'));

        document.body.appendChild(script);
      });
    };

    await loadScript();

    return new Promise((resolve, reject) => {
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
        amount: 500, // Amount is in the smallest currency unit. For INR, it's paise, so 50000 paise = INR 500.
        currency: 'INR',
        name: 'Influcent',
        description: 'Test Transaction',
        image: influcentLogo,
        handler: function (response) {
          resolve({ success: true, response }); // Resolve the promise with a success response
        },
        prefill: {
          name: name,
          email: email,
          contact: contact,
        },
        notes: {
          address: 'Razorpay Corporate Office',
        },
        theme: {
          color: '#0081DF',
        },
        payment_method: {
          upi: true, // Enable UPI
          card: true,
          netbanking: true,
          wallet: true,
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

      paymentObject.on('payment.failed', function (response) {
        reject({ success: false, response }); // Reject the promise with a failure response
      });
    });

  } catch (error) {
    return { success: false, error }; // Return an error if the script fails to load
  }
};


export default displayRazorpay;
