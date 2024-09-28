import React, { useState } from 'react';
import Register from './Register'; // Import the Register component

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [showRegister, setShowRegister] = useState(false); // State to show register page

  const products = [
    { name: 'Chicken Curry', price: 350, image: 'https://img.freepik.com/premium-photo/bowl-chicken-curry-with-rice-white-background_664644-697.jpg' },
    { name: 'Chicken Biriyani', price: 300, image: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL3Jhd3BpeGVsX29mZmljZV8yMl9waG90b2dyYXBoX29mX2NoaWNrZW5fZHVtX2JpcnlhbmlfX3NpbmdsZV9wbl81ZTU4YjQ0My1lNmNhLTQ1ZDMtYWFhNC1jNmE4YzY4MTg3ZmFfMS5qcGc.jpg' },
    { name: 'Veg Biriyani', price: 200, image: 'https://t4.ftcdn.net/jpg/02/17/31/89/360_F_217318971_nSg0pl4QB0k8hxIFYB2CbWL7lWVUnYeR.jpg' },
    { name: 'Snacks', price: 100, image: 'https://media.istockphoto.com/id/1263013701/photo/salty-snacks-assortment-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=cWrHEFGrJR6K_zSm8URbDQNw0U9mengbnX9zuGTVgeI=' },
    { name: 'Juices', price: 150, image: 'https://media.istockphoto.com/id/453010753/photo/three-fruit-juice-glasses-surrounded-by-colorful-fruits.jpg?s=612x612&w=0&k=20&c=Uv8afaSP3GFNB5qG3ZXgzZXBhLlGFFdR27hMOGHO_2k=' },
    { name: 'Ice-Creams', price: 180, image: 'https://previews.123rf.com/images/natavkusidey/natavkusidey1908/natavkusidey190800075/128702777-chocolate-ice-cream-on-a-white-background-toning-selective-focus.jpg' },
  ];

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000); // Notification disappears after 3 seconds
  };

  // Function to toggle between Main Page and Register Page
  const handleShowRegister = () => {
    setShowRegister(true);
  };

  const handleShowMain = () => {
    setShowRegister(false);
  };

  return (
    <>
      {!showRegister ? (
        <>
          {/* Navbar */}
          <div className="menu">
            <nav>
              <h2 className="logo">Food Lover</h2>
              <ul>
                <li><a href="#home" className="active">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li><a href="#cart">Cart</a></li>
                <li><a href="#register" onClick={handleShowRegister}>Register</a></li>
              </ul>
            </nav>
          </div>

          {/* Cart Notification */}
          {showNotification && (
            <div className="cart-notification">
              <h4>Cart Items</h4>
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index}>
                    {item.name} - ₹{item.price}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Mainpage */}
          <div className="container">
            <div className="content">
              <h1>Delicious Food Delivery</h1>
              <h2>Order Your Favorite Biryani Now!</h2>
              <p>Experience the best Biryani delivered straight to your door. Fresh, flavorful, and authentic, every bite takes you on a journey of incredible taste.</p>
              <p>We offer quick delivery and a wide range of dishes to choose from. Get the best offers on Biryani, and enjoy a warm meal delivered to you wherever you are.</p>
              <button className="btn-order">Order Now</button>
              <button className="btn-menu">View Menu</button>
            </div>
            <div className="image">
              <img src="https://img.freepik.com/premium-photo/chicken-biryani-plate-isolated-white-background-delicious-spicy-biryani-isolated_667286-5784.jpg" alt="Delicious Biryani" />
            </div>
          </div>

          {/* How It Works Section */}
          <section className="how-it-works">
            <h2>How It Works</h2>
            <div className="info-boxes">
              <div className="info-box">
                <h3>Easy Order</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, non?</p>
              </div>
              <div className="info-box highlighted">
                <h3>Best Quality</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, non?</p>
              </div>
              <div className="info-box">
                <h3>Fast Delivery</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, non?</p>
              </div>
            </div>
          </section>

          {/* About Restaurant Section */}
          <section className="about-restaurant" id='about'>
            <div className="image-container">
              <img src="https://img.freepik.com/premium-photo/kfc-chicken-fry-with-white-background_987694-528.jpg" alt="Biryani" />
            </div>
            <div className="restaurant-info">
              <h2>About Our Restaurant</h2>
              <h3>150+</h3>
              <p>Our Delicious Food</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia itaque saepe id hic rem doloribus quas esse voluptatibus eius.</p>
              <button className="explore-menu-btn">Explore Menu</button>
            </div>
          </section>

          {/* Menu */}
          <div className="app" id='menu'>
            <div className="menu">
              <button>All</button>
              <button>Veg</button>
              <button>Non-Veg</button>
              <button>Snacks</button>
              <button>Juices</button>
              <button>Ice-Creams</button>
            </div>

            <div className="product-grid">
              {products.map((product, index) => (
                <div className="product-card" key={index}>
                  <img src={product.image} alt={product.name} className="product-image" />
                  <h3>{product.name}</h3>
                  <p>₹{product.price}</p>
                  <button className="order-btn" onClick={() => addToCart(product)}>Order Now</button>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="reviews-section" id='reviews'>
            <h2>Reviews</h2>
            <div className="reviews-container">
              <div className="review-card">
                <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="Reviewer 1" className="review-image" />
                <p>"The Chicken Curry was absolutely delicious, perfect flavor and spice!"</p>
                <div className="star-rating">⭐⭐⭐⭐⭐</div>
              </div>
              <div className="review-card">
                <img src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" alt="Reviewer 2" className="review-image" />
                <p>"The Veg Biriyani was great, I loved how the vegetables were cooked!"</p>
                <div className="star-rating">⭐⭐⭐⭐</div>
              </div>
              <div className="review-card">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" alt="Reviewer 3" className="review-image" />
                <p>"Fast delivery and delicious food! Highly recommend!"</p>
                <div className="star-rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
          {/* Footer  */}
          <div className='footer'>
          <img src='./footer.png'/>
          </div>
        </>
      ) : (
        // Register Page
        <Register goBack={handleShowMain} />
      )}
    </>
  );
};

export default App;
