import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../App";
import LoginPage from "./Authentication";


const AdminPanel = () => {
  const [LoggedinAdmin,setLoggedinAdmin]=useContext(UserContext)

  // const [tshirts, setTshirts] = useState();

  // const [foods, setFoods] = useState();

  // const [beverages, setBeverages] = useState();

  const [Event, setEvent] = useState([
    { id: 1, name: "Beverage 1", picture: "fsfsf$5" },
    { id: 2, name: "Beverage 2", picture: "$dfsdfsdffdf3" },
    { id: 3, name: "Beverage 3", picture: "fdsfsfsf$4" },
  ]);

  const [Faq, setFaq] = useState([
    { id: 1, question : "Beverage 1", answer: "fsfsf$5" },
    { id: 2, question: "Beverage 2", answer: "$dfsdfsdffdf3" },
    { id: 3, question: "Beverage 3", answer: "fdsfsfsf$4" },
  ]);

  

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };






  const refTshirt = useRef()
  const refBev = useRef()

  // console.log(refTshirt,refFood,refBev)


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
  const [bevs, setBevs] = useState([
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
      const response = await fetch("http://localhost:3000/Products");
      const data = await response.json();
      
      setProducts( data)
      

      const tshirts = products.filter((item) => item.Category?._id== '6494444a9fc9698b662ec371');
      const foods = data.filter((item)=>item.Category?._id === '649616ae0788f3d0abbc0e50');
      const bevs = products.filter((item)=>item.Category?._id=='649538ce6968adc069b9eacf');
      settshirts(tshirts);
      setfoods(foods)
      setBevs(bevs)

    } catch (error) {
      console.log(error);
    }
  };
 

  



  const PostATshirt = async (e) => {
  e.preventDefault();
    // Perform validation and submit form data
    // if (Name && price && Category && image) {
    
    
        // console.log(Name ,image:"fkfshfkjshfhsdfhksf" , price , Category , image , size)
    
        const res = await fetch("http://localhost:3000/Products", {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            name:refTshirt.current.elements[0].value,
            price:refTshirt.current.elements[1].value,
            Category:'6494444a9fc9698b662ec371',
            image:refTshirt.current.elements[2].value,
          })
        });
    
        if (res) {
          console.log(res);
         
           
          alert(' Statement has been sent ');
          setProducts(!products)

          // setShowAlert(true)
        }
      
    
    // } else {
    //   alert('error happend');
    // }
  };

  const deleteProduct = async (id) => {
    try {
      await fetch(`http://localhost:3000/Products/${id}`, {
        method: "DELETE",
      });
      setProducts(!products);
      alert('Deleted')
    } catch (error) {
      alert(error);
    }
  };





  //update products

  
  
  //post food and beverage
  const [foodName, setFoodName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');


  const Foodreef=useRef()
  const PostATfood = async (event) => {
    event.preventDefault();
    // console.log(image,price)
    try {
      const response = await fetch('http://localhost:3000/Products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name:Foodreef.current.children[0].value,
          price:Foodreef.current.children[1].value,
          Category:'649616ae0788f3d0abbc0e50',
          image:Foodreef.current.children[2].value,
        }),
      });

      if (response) {
        alert('Food added successfully!');
        // Reset the form input values
        setFoodName('');
        setImage('');
        setPrice('');
        setProducts(!products)
      } else {
        alert('Error adding food:', response.status);
      }
    } catch (error) {
      alert('Error adding food:', error);
    }
  };
  //post bevarage

  const [beverageName, setBeverageName] = useState('');
  const [Bevimage, setBevImage] = useState('');
  const [BevBevprice, setBevPrice] = useState('');
const beverage = useRef()
  const PostABeverage = async (event) => {
    event.preventDefault();
// console.log(beverage)
    const formData = {
      beverageName,
      Bevimage,
      BevBevprice,
    };

    try {
      const response = await fetch('http://localhost:3000/Products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          
          name:beverage.current.children[0].value,
          price:beverage.current.children[1].value,
          Category:'649538ce6968adc069b9eacf',
          image:beverage.current.children[2].value,
        }),
      });

      if (response.ok) {
        alert('Beverage added successfully!');
        setBeverageName('');
        setBevImage('');
        setBevPrice('');
        setProducts(!products)

      } else {
        alert('Error adding beverage:', response.status);
      }
    } catch (error) {
      alert('Error adding beverage:', error);
    }
  };

 



  const [isOpen, setIsOpen] = useState(false);
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();

  // const handleOpenModal = () => {
  //   setIsOpen(true);
  // };



  const[item,setItem]=useState([])
  const updateProduct = async (item) => {
   

    const response = await fetch(`http://localhost:3000/Products/${item._id}`)
    const data = await response.json();
    console.log(data)
    setItem(data[0])

    setProducts(!products);
    setIsOpen(true);
    console.log(item)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();



    // if (item.length==0) {
      // Retrieve the input values from the refs
    const name = nameRef.current.value;
    const price = priceRef.current.value;
    const image = imageRef.current.value;

    try {
      const response = await fetch(`http://localhost:3000/Products/${item._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name:name,
          price:price,
          image:image
        }),
      });
      const data = await response.json();
     
      setProducts(!products);
      alert('update successful')


        // Clear the input fields defaultvalue
  //  nameRef.current.defaultValue="null";
  //  priceRef.current.defaultValue="null";
  //  imageRef.current.defaultValue="null";
     setItem([])
    
    } catch (error) {
      alert(error);
    }
    // }
    

 
     // Clear the input fields
    //  nameRef.current.value="null";
    //  priceRef.current.value="null";
    //  imageRef.current.value="null";
 

    // Close the modal
    setIsOpen(false);
  };
  const handleCloseModal = () => {
    setIsOpen(false);

  };

 
  








  return (
    <div>
      {LoggedinAdmin == 'shuvokoiri0@gmail.com' ?
<div>
<nav className="bg-indigo-500 p-5">
 
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-lg font-semibold">Admin Panel</h1>
        <button
          className="block sm:hidden text-white hover:text-indigo-200 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 7H19V9H5V7ZM5 12H19V14H5V12ZM5 17H19V19H5V17Z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16ZM4 21H20V23H4V21Z"
              />
            )}
          </svg>
        </button>
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } sm:flex sm:space-x-4 mt-4 sm:mt-0`}
        >
          <li>
            <a
              href="#tshirts"
              className="text-white hover:text-indigo-200"
            >
              T-Shirts
            </a>
          </li>
          <li>
            <a
              href="#foods"
              className="text-white hover:text-indigo-200"
            >
              Foods
            </a>
          </li>
          <li>
            <a
              href="#beverages"
              className="text-white hover:text-indigo-200"
            >
              Beverages
            </a>
          </li>
          <li>
            <a
              href="#faqs"
              className="text-white hover:text-indigo-200"
            >
              Faqs
            </a>
          </li>
          <li>
            <a
              href="#events"
              className="text-white hover:text-indigo-200"
            >
              Events
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <div className="container mx-auto p-4">
        
  
      <section id="tshirts" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">T-Shirts</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
              
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Image</th>

                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Tshirts?.map((item) => (
                <tr key={item._id}>
                  <td className="py-2 px-4 border-b">{item.name}</td>
                  <td className="py-2 px-4 border-b">{item.price}</td>
                  <td className="py-2 px-4 border-b text-center">{item.image}</td>

                  <td className="py-2 px-4 border-b text-center">
                    <button
                      className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 mr-2"
                      onClick={() => deleteProduct(item._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600"
                      onClick={() => updateProduct(item)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <form className="mt-8" onSubmit={PostATshirt}     ref={refTshirt}>
          <div className="flex flex-col md:flex-row">
            <input
              type="text"
              placeholder="T-Shirt Name"
              className="w-full md:w-1/3 border py-2 px-4 mb-2 md:mr-4"
            />
            <input
              type="text"
              placeholder="Price"
              className="w-full md:w-1/3 border py-2 px-4 mb-2 md:mr-4"
            />
              <input
              type="text"
              placeholder="T-Shirt Image"
              className="w-full md:w-1/3 border py-2 px-4 mb-2 md:mr-4"
            />
               <div>
               {/* <label>Sizes:</label> */}

                {/* <div className="flex "> 
        <div>
          <input
            type="checkbox"
            id="size-s"
            value="S"
            // checked={sizes.includes('S')}
            // onChange={handleSizeChange}
          />
          <label htmlFor="size-s">S</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="size-m"
            value="M"
            className="mx-1"
            // checked={sizes.includes('M')}
            // onChange={handleSizeChange}
          />
          <label htmlFor="size-m">M</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="size-l"
            value="L"
            // checked={sizes.includes('L')}
            // onChange={handleSizeChange}
          />
          <label htmlFor="size-l">L</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="size-l"
            value="XL"
            className="mx-1"

            // checked={sizes.includes('L')}
            // onChange={handleSizeChange}
          />
          <label htmlFor="size-l">L</label>
        </div>
      </div> */}


    
      </div>           
      <button className="bg-indigo-500 sm:mx-5 text-white py-2 px-4 rounded hover:bg-indigo-600 w-full md:w-auto">
              Add T-Shirt
            </button>
          </div>
        </form>
      </section>

      <section id="foods" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Foods</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Image</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {foods?.map((item) => (
                <tr key={item._id}>
                  <td className="py-2 px-4 border-b text-center">{item.name}</td>
                  <td className="py-2 px-4 border-b">{item.price}</td>
                  <td className="py-2 px-4 border-b">{item.image}</td>
                  <td className="py-2 px-4 border-b text-center">
                    <button
                      className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 mr-2"
                      onClick={() => deleteProduct(item._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600"
                      onClick={() => updateProduct(item)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <form className="mt-8" onSubmit={PostATfood}>
      <div ref={Foodreef} className="flex flex-col md:flex-row">
        <input
          type="text"
          placeholder="Food Name"
          defaultValue={foodName}
          onChange={(event) => setFoodName(event.target.value)}
          className="w-full md:w-1/3 border py-2 px-4 mb-2 md:mr-4"
        />
    
        <input
          type="text"
          placeholder="Price"
          defaultValue={price}
          onChange={(event) => setPrice(event.target.value)}
          className="w-full md:w-1/3 border py-2 px-4 mb-2 md:mr-4"
        />    <input
        type="text"
        placeholder="Image"
        defaultValue={image}
        onChange={(event) => setImage(event.target.value)}
        className="w-full md:w-1/3 border py-2 px-4 mb-2 md:mr-4"
      />
        <button className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 w-full md:w-auto">
          Add Food
        </button>
      </div>
    </form>
      </section>

      <section id="beverages" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Beverages</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Image</th>

                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bevs?.map((item) => (
                <tr key={item._id}>
                  <td className="py-2 px-4 border-b text-center">{item.name}</td>
                  <td className="py-2 px-4 border-b">{item.price}</td>
                  <td className="py-2 px-4 border-b">{item.image}</td>
                  <td className="py-2 px-4 border-b text-center">
                    <button
                      className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 mr-2"
                      onClick={() => deleteProduct(item._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600"
                      onClick={() => updateProduct(item)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <form className="mt-8" onSubmit={PostABeverage}>
      <div ref={beverage} className="flex flex-col md:flex-row">
        <input
          type="text"
          placeholder="Beverage Name"
          defaultValue={beverageName}
          onChange={(event) => setBeverageName(event.target.value)}
          className="w-full md:w-1/3 border py-2 px-4 mb-2 md:mr-4"
        />
  
        <input
          type="text"
          placeholder="Price"
          defaultValue={BevBevprice}
          onChange={(event) => setBevPrice(event.target.value)}
          className="w-full md:w-1/3 border py-2 px-4 mb-2 md:mr-4"
        />
              <input
          type="text"
          placeholder="Image"
          defaultValue={Bevimage}
          onChange={(event) => setBevImage(event.target.value)}
          className="w-full md:w-1/3 border py-2 px-4 mb-2 md:mr-4"
        />
        <button className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 w-full md:w-auto">
          Add Beverage
        </button>
      </div>
    </form>

      </section>

      {/* <section id="faqs" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Faq Section</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Question</th>
                <th className="py-2 px-4 border-b">Answer</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Faq.map((item) => (
                <tr key={item._id}>
                  <td className="py-2 px-4 border-b text-center">{item.question}</td>
                  <td className="py-2 px-4 border-b">{item.answer}</td>
                  <td className="py-2 px-4 border-b text-center">
                    <button
                      className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 mr-2"
                      onClick={() => deleteFaq(item._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600"
                      onClick={() => updateFaq(item._id, { name: "Updated Name" })}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <form className="mt-8">
          <div className="flex flex-col md:flex-row">
            <input
              type="text"
              placeholder="Quote the Question"
              className="w-full md:w-1/3 border py-2 px-4 mb-2 md:mr-4"
            />
               <input
              type="text"
              placeholder="Give the Answer"
              className="w-full md:w-1/3 border py-2 px-4 mb-2 md:mr-4"
            />
           
            <button className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 w-full md:w-auto">
              Add a FAQ
            </button>
          </div>
        </form>
      </section> */}

      {/* <section id="events" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Past Events</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Picture</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Event.map((item) => (
                <tr key={item._id}>
                  <td className="py-2 px-4 border-b text-center">{item.name}</td>
                  <td className="py-2 px-4 border-b">{item.picture}</td>
                  <td className="py-2 px-4 border-b text-center">
                    <button
                      className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 mr-2"
                      onClick={() => deleteEvent(item._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600"
                      onClick={() => updateEvent(item._id, { name: "Updated Name" })}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <form className="mt-8">
          <div className="flex flex-col md:flex-row">
            <input
              type="text"
              placeholder="Paste the Image url"
              className="w-full md:w-1/3 border py-2 px-4 mb-2 md:mr-4"
            />
               <input
              type="text"
              placeholder="Event Name"
              className="w-full md:w-1/3 border py-2 px-4 mb-2 md:mr-4"
            />
           
            <button className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 w-full md:w-auto">
              Add an Event Memory
            </button>
          </div>
        </form>
      </section> */}




 <div className={`modal ${isOpen ? 'block' : 'hidden'}       fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50`}>
        <div className="modal-overlay"></div>
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title">Add Product</h2>
            <button className="modal-close" onClick={handleCloseModal}>
              &times;
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  defaultValue={item.name}
                  className="form-input"
                  ref={nameRef}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  defaultValue={item.price}
                  className="form-input"
                  ref={priceRef}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="image" className="form-label">
                  Image
                </label>
                <input
                  type="text"
                  id="image"
                  defaultValue={item.image}
                  className="form-input"
                  ref={imageRef}
                  required
                />
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn bg-indigo-500 text-white font-bold">
                  Update
                </button>
                {/* <button className="btn btn-secondary" onClick={handleCloseModal}>
                  Cancel
                </button> */}
              </div>
            </form>
          </div>
        </div>
      </div>


</div>
    </div>
    :
    <LoginPage/>
    }
    </div>
  );
};

export default AdminPanel;
