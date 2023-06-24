import React, { useContext, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { UserContext } from '../App';
import QRCode from 'qrcode.react';
import emailjs from 'emailjs-com';

const RegistrationPage = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
  const [eventName, setEventName] = useState('AEC Fest');
  const [passingYear, setPassingYear] = useState('');
  const [roleNumber, setRoleNumber] = useState('');
  const [email, setEmail] = useState('');




  const [Loggedin,setLoggedin]=useContext(UserContext)
  const qrCodeData = JSON.stringify({

    FullName: name,
    PassingYear: passingYear,
    Email: email,
    RoleNumber: roleNumber,

  });
   // Generate the QR code image URL
   const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrCodeData)}`;
 // Send email with the QR code image as an attachment
 const sendEmail = () => {
  const serviceID = 'service_ezi7z9f';
  const templateID = 'template_hpivmui';
  const userID = 'NxPNigVdSm6c6IGkN';
  const emailBody = `<html><body><img src="${qrCodeUrl}" alt="QR Code" /></body></html>`;

  const emailParams = {
    
    to_email: Loggedin.Email,
    to_name: Loggedin.FullName,
    from_name:"Shuvo K",
    subject: 'Event Pass',
    message: 'Please find the QR code attached and this is your Official Pass for entering the event.Keep it safe',
    attachments: qrCodeUrl
  };

  emailjs.send(serviceID, templateID, emailParams, userID)
    .then(response => {
      console.log('QR code email sent successfully!', response);
    })
    .catch(error => {
      console.error('Error sending QR code email:', error);
    });
};



  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform validation and submit form data
    if (name && passingYear && roleNumber && email) {
    
    
        console.log(name , passingYear , roleNumber , email)
    
        const res = await fetch("http://localhost:3000/User", {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            FullName: name,
            PassingYear: passingYear,
            Email: email,
            RoleNumber: roleNumber,
        
          })
        });
    
        if (res) {
          console.log(res);
  





sendEmail();











            setLoggedin({
              FullName : name,
              PassingYear : passingYear,
              Email : email,
              RoleNumber : roleNumber,
              OrderList : "" , 
          
            })
          alert('ENTRY PASS(a QRcode)  is  sent to your email ID.!!KINDLY CHECK!!');
          navigate('/afterReg');
        }
      
    
    } else {
      alert('Please fill in all the required fields.');
    }
  };



  


















 
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100 ">
      <div className="bg-white p-8 rounded shadow-lg md:w-2/3">
      <h1 className="text-4xl text-center mb-4 tracking-widest		">Registration</h1>
        <hr className="border-indigo-500 mb-4" />
        <p className="text-center text-gray-800 bg-indigo-300 rounded-lg px-4 py-2 mb-6">
          After inputting all the correct details below, send 300 Rupees to +921244448847 number and give us the transaction ID for authentication.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="eventName" className="block mb-1">
              Event Name
            </label>
            <input
              type="text"
              id="eventName"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="passingYear" className="block mb-1">
              Passing Year
            </label>
            <select
              id="passingYear"
              value={passingYear}
              onChange={(e) => setPassingYear(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            >
              <option value="">Select Passing Year</option>
              {Array.from({ length: 21 }, (_, i) => 2000 + i).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="roleNumber" className="block mb-1">
              Role Number
            </label>
            <input
              type="text"
              id="roleNumber"
              value={roleNumber}
              onChange={(e) => setRoleNumber(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <button type="submit" className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
