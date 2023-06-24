import React, { useContext, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartactions';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import { UserContext } from '../App';
import emailjs from 'emailjs-com';

const AfterReg = () => {



  
  const sizes = ['S', 'M', 'L', 'XL'];

  const merchandiseData = [
    {
      id: 1,
      title: 'T-Shirt (Men)',
      price: '$19.99',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/1b239f21748681.56306e809d183.jpg',
    },
    {
      id: 2,
      title: 'T-Shirt (Women)',
      price: '$24.99',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/1b239f21748681.56306e809d183.jpg',
    },
  ];

  const [selectedSizes, setSelectedSizes] = useState({});
  const [cartCount, setCartCount] = useState(0);
  const [SelectedSize, setSize] = useState('');

  const handleSizeChange = (itemId, size) => {
    setSize(size)
    setSelectedSizes((prevSelectedSizes) => ({
      ...prevSelectedSizes,
      [itemId]: size,
    }));
  };

  

  const foodAndBeverages = [
    { id: 1, name: 'Burger', price: 9.99 ,  type:'F&V',},
    { id: 2, name: 'Pizza', price: 12.99  , type:'F&V',},
    { id: 3, name: 'Pasta', price: 8.99 ,  type:'F&V',},
    { id: 4, name: 'Sandwich', price: 6.99 , type:'F&V',},
    { id: 5, name: 'Salad', price: 7.99 ,  type:'F&V',},
    { id: 6, name: 'Smoothie', price: 4.99 ,  type:'F&V',},
    { id: 7, name: 'Coffee', price: 3.99 ,  type:'F&V',},
    { id: 8, name: 'Tea', price: 2.99 ,  type:'F&V',},
    {
      id: 9,
      type:'MERCH',
      name: 'T-Shirt (Men)',
      price: 19.99,
      sizes:SelectedSize,
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/1b239f21748681.56306e809d183.jpg',
    },
    {
      id: 10,
      type:'MERCH',
      name: 'T-Shirt (Women)',
      price: 24.99,
      sizes:SelectedSize,
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/1b239f21748681.56306e809d183.jpg',
    },
  ];

  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (id) => {
    setSelectedItems((prevSelectedItems) => [...prevSelectedItems, id]);
    setCartCount((prevCartCount) => prevCartCount + 1);


    setSelectedSizes((prevSelectedSizes) => ({
      ...prevSelectedSizes,
      [id._id]: 'Selected',
    }));
    setCartCount((prevCartCount) => prevCartCount + 1);

  };
  // const handleButtonClick = (itemId) => {
   
  // };



// console.log(selectedItems)
  const isAddedToCart = (id) => {
    return selectedItems.includes(id);
  };

  const pastEvents = [
    { id: 1, image: 'https://via.placeholder.com/300x200?text=Event%201' },
    { id: 2, image: 'https://via.placeholder.com/300x200?text=Event%202' },
    { id: 3, image: 'https://via.placeholder.com/300x200?text=Event%203' },
  ];

  const faqs = [
    { id: 1, question: 'How to place an order?', answer: 'To place an order, follow these steps...' },
    { id: 2, question: 'What are the payment options?', answer: 'We accept various payment methods...' },
    { id: 3, question: 'Can I return an item?', answer: 'Yes, you can return an item within...' },
  ];

  const [expandedFaqIds, setExpandedFaqIds] = useState([]);

  const toggleFaq = (faqId) => {
    setExpandedFaqIds((prevExpandedFaqIds) => {
      if (prevExpandedFaqIds.includes(faqId)) {
        return prevExpandedFaqIds.filter((id) => id !== faqId);
      } else {
        return [...prevExpandedFaqIds, faqId];
      }
    });
  };

  const contactFormInitialState = { name: '', email: '', message: '' };
  const [contactFormData, setContactFormData] = useState(contactFormInitialState);

  const handleContactFormChange = (e) => {
    const { name, value } = e.target;
    setContactFormData((prevContactFormData) => ({
      ...prevContactFormData,
      [name]: value,
    }));
  };

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(contactFormData);
    // Reset form state
    setContactFormData(contactFormInitialState);
  };


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  

//   const products = selectedItems.filter((x)=>x == foodAndBeverages._id)
// console.log(products)
    // { id: 1, name: 'Product 1', price: 9.99 },
    // { id: 2, name: 'Product 2', price: 14.99 },
    // { id: 3, name: 'Product 3', price: 19.99 },


  
  const getTotalPrice = () => {
   return selectedItems.reduce((accumulator, object) => {
      return accumulator + object.price;
    }, 0);
  };

  // const getTotalPrice = 

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



  const [showAlert, setShowAlert] = useState(false);
  const [Loggedin,setLoggedin]=useContext(UserContext)
  const{FullName , PassingYear , RoleNumber , Email} = Loggedin

 
  const handleOk = () => {
    window.location.reload();
  };


  const ConfirmOrder = async () => {

    // Perform validation and submit form data
    if (FullName && PassingYear && RoleNumber && Email) {
    
    
        console.log(FullName , PassingYear , RoleNumber , Email)
    
        const res = await fetch("https://fiesta-backend-server.onrender.com/Order", {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            Name: FullName,
            PassingYear: PassingYear,
            Email: Email,
            Roll: RoleNumber,
            Description: selectedItems
          })
        });
    
        if (res) {
          console.log(res);
        

          const body = JSON.stringify({
            Description: selectedItems,
            total:getTotalPrice().toFixed(2)
          })
         sendEmail(body)

            setLoggedin({
              FullName : FullName,
              PassingYear : PassingYear,
              Email : Email,
              RoleNumber : RoleNumber,
              OrderList : "" , 
            })
          alert('Payment Statement has been sent to your email ID , checkout the mailbox');
          setShowAlert(true)
        }
      
    
    } else {
      alert('Please Logged in first');
    }
  };
 



  const MERCH = foodAndBeverages.filter((x)=>x.type == 'MERCH')
  const FoodandBevs = foodAndBeverages.filter((x)=>x.type == 'F&V')

  const removeFromCart = product => {
    let filteredFruits = selectedItems.filter( item => item._id != product._id);
setSelectedItems(filteredFruits)

console.log(filteredFruits)
    }

  






    const [Tshirts, settshirts] = useState([
      // { _id: 1, name: "T-Shirt 1",image:"fkfshfkjshfhsdfhksf" , price: "$10" },
      // { _id: 2, name: "T-Shirt 2",image:"fkfshfkjshfhsdfhksf" , price: "$15" },
      // { _id: 3, name: "T-Shirt 3",image:"fkfshfkjshfhsdfhksf" , price: "$20" },
    ]);
    const [foods, setfoods] = useState([
      // { _id: 1, name: "Food 1",image:"fkfshfkjshfhsdfhksf" , price: "$8" },
      // { _id: 2, name: "Food 2",image:"fkfshfkjshfhsdfhksf" , price: "$12" },
      // { _id: 3, name: "Food 3",image:"fkfshfkjshfhsdfhksf" , price: "$15" },
    ]);
    const [foodsBev, setfoodsBev] = useState([
      // { _id: 1, name: "Beverage 1",image:"fkfshfkjshfhsdfhksf" , price: "$5" },
      // { _id: 2, name: "Beverage 2",image:"fkfshfkjshfhsdfhksf" , price: "$3" },
      // { _id: 3, name: "Beverage 3",image:"fkfshfkjshfhsdfhksf" , price: "$4" },
    ]);
  
  
  
    const [products,setProducts]=useState(false)
    useEffect(() => {
      fetchProducts();
    }, [products]);
    
   
  
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fiesta-backend-server.onrender.com/Products");
        const data = await response.json();
        
        setProducts( data)
        
  
        const tshirts = products.filter((item) => item.Category?._id== '6494444a9fc9698b662ec371');
        const foodsandbevs = data.filter((item)=>item.Category?._id !== '6494444a9fc9698b662ec371');
       
        settshirts(tshirts);
        // setfoods(foods)
        setfoodsBev(foodsandbevs)
  
      } catch (error) {
        console.log(error);
      }
    };

    const [email, setEmail] = useState('');
    const sendEmail = (body) => {
      const serviceID = 'service_m05nh4w';
      const templateID = 'template_qgyekv5';
      const userID = 'NxPNigVdSm6c6IGkN';
      const emailBody = body;
    
      const emailParams = {
        
        to_email: Loggedin.Email,
        to_name: Loggedin.FullName,
        from_name:"Shuvo K",
        subject: 'Order Summary',
        message: 'Here is your order summary for the event . Collect them on the event reciption',
        attachments: emailBody
      };
    
      emailjs.send(serviceID, templateID, emailParams, userID)
        .then(response => {
          console.log('QR code email sent successfully!', response);
        })
        .catch(error => {
          console.error('Error sending QR code email:', error);
        });
    };





  return (
    <div>
        <header className="bg-indigo-500">
      <nav className="container mx-auto flex items-center justify-between px-8 py-5">
        <div>
          <Link to="/" className="text-white text-2xl text-lg font-bold">
            AEC Fest 2023
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-12">
          <a href="#merchandise" className="text-white hover:text-gray-200">
            Merchandise
          </a>
          <a href="#food-and-beverages" className="text-white hover:text-gray-200">
            Food and Beverages
          </a>
          <a href="#past-events" className="text-white hover:text-gray-200">
            Past Events
          </a>
          <a href="#faqs" className="text-white hover:text-gray-200">
            FAQs
          </a>
          <a href="#contact-us" className="text-white hover:text-gray-200">
            Contact Us
          </a>
        </div>

        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={handleMenuToggle}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-blue-400 py-2">
          <a href="#merchandise" className="block text-white px-4 py-2">
            Merchandise
          </a>
          <a href="#food-and-beverages" className="block text-white px-4 py-2">
            Food and Beverages
          </a>
          <a href="#past-events" className="block text-white px-4 py-2">
            Past Events
          </a>
          <a href="#faqs" className="block text-white px-4 py-2">
            FAQs
          </a>
          <a href="#contact-us" className="block text-white px-4 py-2">
            Contact Us
          </a>
        </div>
      )}
    </header>

      <section className="bg-blue-100 py-8 min-h-screen"  id="merchandise">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center font-semibold mb-4">Merchandise</h2>
          <hr className="mx-auto border-t-2 border-indigo-500 w-12" />
          <div className="flex flex-wrap justify-center mt-8">
            {Tshirts?.map((item) => (
              <div key={item._id} className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-4 mx-4">
                <img src={item.image} alt={item.name} className="w-full h-56 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-2">Price: {item.price}</p>
                  <div className="flex items-center mb-2">
                    <span className="mr-2">Size:</span>
                    {sizes.map((size) => (
                      <label key={size} className="mr-2">
                        <input
                          type="radio"
                          name={`size-${item._id}`}
                          value={size}
                          className="mr-1"
                          onChange={() => handleSizeChange(item._id, size)}
                        />
                        {size}
                      </label>
                    ))}
                  </div>
                  {selectedSizes[item._id] && (
                    <button
                      className="block text-xl w-full tracking-wider bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"
                      onClick={() => handleSelect(item)}  
                    >
                      {selectedSizes[item._id] === 'Selected' ? 'Selected' : 'Select'}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8" id="food-and-beverages">
        <h2 className="text-3xl text-center font-semibold mb-4">Foods and Beverages</h2>
        <hr className="mx-auto border-t-2 border-indigo-500 w-12 mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {foodsBev?.map((item) => (
            <div key={item._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={`https://via.placeholder.com/300x200?text=${item.name}`}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-2">Price: {item.price}</p>

                {selectedItems.find((x)=>x._id == item._id) ?
                 <button
                 className="block w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"
                 
               >
                 Added to Cart
                 </button>
                 :
                <button
                  className="block w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"
                  onClick={() => handleSelect(item)}
                >
                   Select
                </button>

                }

              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-blue-100 py-8" id="past-events">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center font-semibold mb-4">Past Events</h2>
          <hr className="mx-auto border-t-2 border-indigo-500 w-12" />
          <div className="flex flex-wrap justify-center mt-8">
            {pastEvents.map((event) => (
              <div key={event._id} className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-4 mx-4">
                <img src={event.image} alt={`Event ${event._id}`} className="w-full h-56 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-8 px-8"  id="faqs">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center font-semibold mb-4">FAQs</h2>
          <hr className="mx-auto border-t-2 border-indigo-500 w-12" />
          <div className="mt-8">
            {faqs.map((faq) => (
              <div key={faq._id} className="mb-4">
                <button
                  className="flex justify-between items-center w-full py-2 px-4 bg-indigo-500 text-white rounded-lg focus:outline-none hover:bg-indigo-600"
                  onClick={() => toggleFaq(faq._id)}
                >
                  <span className="text-xl font-semibold">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 transform ${
                      expandedFaqIds.includes(faq._id) ? 'rotate-180' : ''
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedFaqIds.includes(faq._id) && (
                  <div className="mt-4 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-100 py-8" id="contact-us">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center font-semibold mb-4">Contact Us</h2>
          <hr className="mx-auto border-t-2 border-indigo-500 w-12" />
          <div className="mt-8">
            <form onSubmit={handleContactFormSubmit} className="max-w-md mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={contactFormData.name}
                  onChange={handleContactFormChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactFormData.email}
                  onChange={handleContactFormChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={contactFormData.message}
                  onChange={handleContactFormChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <div className="flex justify-center">
      <div className="w-full max-w-md  text-white rounded-lg shadow">
   

      

        <div className={`fixed  align-items-center inset-0 flex items-center justify-center ${isModalOpen ? 'visible' : 'hidden'}`}>
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          <div className="relative   z-10 w-full max-w-md p-6 bg-indigo-900 text-white rounded-lg shadow">
            <h1 className="text-2xl text-center mb-1">Cart</h1>
            <hr class="mx-auto border-t-2 border-white-500 w-22"/>
            {selectedItems.length === 0 ? (
              <div className="flex items-center justify-center mb-4 mt-4">
                <img src="https://via.placeholder.com/250x250.png?text=Product+Image
e" alt="Cart" className="w-12 h-12 mr-2" />
                <span className="text-gray-100">Your cart is empty.</span>
                                    <hr class="border-t border-white my-4"/>

              </div>
            ) : (
              <div className='text-center align-items-center justify-content-center pt-5 '>
                  
                {selectedItems.map((product) => (
                  <div key={product._id} className="flex items-center  justify-between mb-4">
                     <img
                src={`https://via.placeholder.com/100x100?text=${product.name}`}
                alt={product.name}
                className=" object-cover"
              />
                    <div>
                      <span className="text-gray-100">{product.name}</span>
                      <span className="text-gray-400"> - ${product.price}</span>
                    </div>
                    <button  onClick={()=>removeFromCart(product)} className="px-2 py-1 text-sm text-white bg-indigo-500 rounded">
                      Remove
                    </button>

                  </div>

                ))}
                            <hr class="mx-auto border-t-2 border-white-500 w-22"/>

                <div className="flex items-center justify-between">
                  <span className="text-gray-100">Total:</span>
                  <span className="text-gray-100">${getTotalPrice().toFixed(2)}</span>
                </div>

                <button onClick={()=>ConfirmOrder()} className="w-full py-2 mt-4 text-white bg-indigo-500 rounded">
                  Proceed to Payment
                </button>
              </div>
            )}

            <button
              className="absolute top-4 right-4 text-gray-100"
              onClick={closeModal}
            >
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
            </button>
          </div>
        </div>
      </div>
    </div>


    <div className={`fixed text-center inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 ${showAlert ? '' : 'hidden'}`}>
      {showAlert && (
        <div className="bg-white p-4 text-center rounded-lg">
          <h2 className="text-lg font-bold mb-2">Alert</h2>
          <p className="mb-4">This is a Payment success messege.</p>
          <button
            className="px-4 py-2 bg-indigo-500 text-white rounded"
            onClick={handleOk}
          >
            OK
          </button>
        </div>
      )}
    </div>

       {/* Cart Icon */}
 <div  onClick={openModal} className="fixed flex flex-row bottom-4 right-4 bg-indigo-500 text-white rounded-full p-3">

<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi font-bold bi-cart3" viewBox="0 0 16 16">
<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
<span className="ml-1 mt-2">{selectedItems.length}</span>



</div>



    {/* <div className={`overlay${isSidebarOpen ? ' visible' : ''}`} onClick={closeSidebar}></div> */}
 
    </div>
  );
};





const mapStateToProps = (state) => {
  return {
    products: state.foodAndBeverages
  };
};

export default connect(mapStateToProps, { addToCart })(AfterReg);


