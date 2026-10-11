import { useState } from 'react';
import Navigation from "./Components/Navigation";
import Hero from "./Components/Hero";
import Input from "./Components/Input";
import Delevery from "./Components/Delevery";
import Contact from "./Components/Contact";
import LoginModal from "./Components/LoginModal";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  // Logout function
  const handleLogout = () => {
    setUserEmail("");
  };

  return (
    <div className="app-main">
      <Navigation 
        onLoginClick={() => setShowLogin(true)} 
        userEmail={userEmail} 
        onLogout={handleLogout} 
      />
      <Hero />

      {/* Card Section */}
      <div className="card-container" id="product-section">
        <div className="Card">
          <div className="card-image">
            <img src="./images/card-2.png" alt="Card 1" />
          </div>
          <div className="card-content">
            <span className="card-tag">SNEAKERS</span>
            <h1 className="card-title">Nike Air Force 1 Shadow</h1>
            <p className="card-description">Premium pastel leather sneaker with all-day comfortable cushioning.</p>
            <div className="card-footer">
              <div className="card-price">৳2,500</div>
            </div>
            <button className="card-btn">Buy Now</button>
          </div>
        </div>

        <div className="Card">
          <div className="card-image">
            <img src="./images/card-3.png"  alt="Card 2" />
          </div>
          <div className="card-content">
            <span className="card-tag">SNEAKERS</span>
            <h1 className="card-title">Nike Air Max Moto </h1>
            <p className="card-description">Premium pastel leather sneaker with all-day comfortable cushioning.</p>
            <div className="card-footer">
              <div className="card-price">৳2,700</div>
            </div>
            <button className="card-btn">Buy Now</button>
          </div>
        </div>

        <div className="Card">
          <div className="card-image">
            <img src="./images/card-4.png" alt="Card 3" />
          </div>
          <div className="card-content">
            <span className="card-tag">SNEAKERS</span>
            <h1 className="card-title">Nike Zoom Vomero 5</h1>
            <p className="card-description">Premium pastel leather sneaker with all-day comfortable cushioning.</p>
            <div className="card-footer">
              <div className="card-price">৳2,350</div>
            </div>
            <button className="card-btn">Buy Now</button>
          </div>
        </div>

        <div className="Card">
          <div className="card-image">
            <img src="./images/card-5.png"  alt="Card 4" />
          </div>
          <div className="card-content">
            <span className="card-tag">SNEAKERS</span>
            <h1 className="card-title">Nike V5 RNR</h1>
            <p className="card-description">Premium pastel leather sneaker with all-day comfortable cushioning.</p>
            <div className="card-footer">
              <div className="card-price">৳4,500</div>
            </div>
            <button className="card-btn">Buy Now</button>
          </div>
        </div>

        <div className="Card">
          <div className="card-image">
            <img src="./images/card-1.png"  alt="Card 5" />
          </div>
          <div className="card-content">
            <span className="card-tag">SNEAKERS</span>
            <h1 className="card-title">Nike Killshot 2 Leather</h1>
            <p className="card-description">Premium pastel leather sneaker with all-day comfortable cushioning.</p>
            <div className="card-footer">
              <div className="card-price">৳3,700</div>
            </div>
            <button className="card-btn">Buy Now</button>
          </div>
        </div>

        <div className="Card">
          <div className="card-image">
            <img src="./images/card-10.png" alt="Card 6" />
          </div>
          <div className="card-content">
            <span className="card-tag">SNEAKERS</span>
            <h1 className="card-title">Nike Free Metcon 7</h1>
            <p className="card-description">Premium pastel leather sneaker with all-day comfortable cushioning.</p>
            <div className="card-footer">
              <div className="card-price">৳3,000</div>
            </div>
            <button className="card-btn">Buy Now</button>
          </div>
        </div>

        <div className="Card">
          <div className="card-image">
            <img src="./images/card-27.png"  alt="Card 7" />
          </div>
          <div className="card-content">
            <span className="card-tag">SNEAKERS</span>
            <h1 className="card-title">Nike Air Force 1 '07 Edge</h1>
            <p className="card-description">Premium pastel leather sneaker with all-day comfortable cushioning.</p>
            <div className="card-footer">
              <div className="card-price">৳4,500</div>
            </div>{" "}
            <button className="card-btn">Buy Now</button>
          </div>
        </div>

        <div className="Card">
          <div className="card-image">
            <img src="./images/card-12.png"  alt="Card 8" />
          </div>
          <div className="card-content">
            <span className="card-tag">SNEAKERS</span>
            <h1 className="card-title">Nike Dunk Low</h1>
            <p className="card-description">Premium pastel leather sneaker with all-day comfortable cushioning.</p>
            <div className="card-footer">
              <div className="card-price">৳3,200</div>
            </div>
            <button className="card-btn">Buy Now</button>
          </div>
        </div>

        <div className="Card">
          <div className="card-image">
            <img src="./images/card-28.png" alt="Card 9" />
          </div>
          <div className="card-content">
            <span className="card-tag">SNEAKERS</span>
            <h1 className="card-title">Nike Sideline IV</h1>
            <p className="card-description">Premium pastel leather sneaker with all-day comfortable cushioning.</p>
            <div className="card-footer">
              <div className="card-price">৳2,850</div>
            </div>
            <button className="card-btn">Buy Now</button>
          </div>
        </div>

        <div className="Card">
          <div className="card-image">
            <img src="./images/card-13.png"  alt="Card 10" />
          </div>
          <div className="card-content">
            <span className="card-tag">SNEAKERS</span>
            <h1 className="card-title">Air Jordan 5 Retro "Sunset"</h1>
            <p className="card-description">Premium pastel leather sneaker with all-day comfortable cushioning.</p>
            <div className="card-footer">
              <div className="card-price">৳2,500</div>
            </div>
            <button className="card-btn">Buy Now</button>
          </div>
        </div>

        <div className="Card">
          <div className="card-image">
            <img src="./images/card-14.png"  alt="Card 11" />
          </div>
          <div className="card-content">
            <span className="card-tag">SNEAKERS</span>
            <h1 className="card-title">Nike Ava Rover Premium</h1>
            <p className="card-description">Premium pastel leather sneaker with all-day comfortable cushioning.</p>
            <div className="card-footer">
              <div className="card-price">৳2,250</div>
            </div>
            <button className="card-btn">Buy Now</button>
          </div>
        </div>

        <div className="Card">
          <div className="card-image">
            <img src="./images/card-15.png"  alt="Card 12" />
          </div>
          <div className="card-content">
            <span className="card-tag">SNEAKERS</span>
            <h1 className="card-title">Nike Dunk Low Retro</h1>
            <p className="card-description">Premium pastel leather sneaker with all-day comfortable cushioning.</p>
            <div className="card-footer">
              <div className="card-price">৳3,500</div>
            </div>
            <button className="card-btn">Buy Now</button>
          </div>
        </div>

        <div className="Card">
          <div className="card-image">
            <img src="./images/card-16.png"  alt="Card 13" />
          </div>
          <div className="card-content">
            <span className="card-tag">SNEAKERS</span>
            <h1 className="card-title">Nike SB React Leo</h1>
            <p className="card-description">Premium pastel leather sneaker with all-day comfortable cushioning.</p>
            <div className="card-footer">
              <div className="card-price">৳4,000</div>
            </div>
            <button className="card-btn">Buy Now</button>
          </div>
        </div>

        <div className="Card">
          <div className="card-image">
            <img src="./images/card-17.png"  alt="Card 15" />
          </div>
          <div className="card-content">
            <span className="card-tag">SNEAKERS</span>
            <h1 className="card-title">Nike Killshot 2</h1>
            <p className="card-description">Premium pastel leather sneaker with all-day comfortable cushioning.</p>
            <div className="card-footer">
              <div className="card-price">৳3,900</div>
            </div>
            <button className="card-btn">Buy Now</button>
          </div>
        </div>

        <div className="Card">
          <div className="card-image">
            <img src="./images/card-18.png"  alt="Card 16" />
          </div>
          <div className="card-content">
            <span className="card-tag">SNEAKERS</span>
            <h1 className="card-title">Nike Vomero Plus</h1>
            <p className="card-description">Premium pastel leather sneaker with all-day comfortable cushioning.</p>
            <div className="card-footer">
              <div className="card-price">৳5,000</div>
            </div>
            <button className="card-btn">Buy Now</button>
          </div>
        </div>

        <div className="Card">
          <div className="card-image">
            <img src="./images/card-20.png"  alt="Card 17" />
          </div>
          <div className="card-content">
            <span className="card-tag">SNEAKERS</span>
            <h1 className="card-title">Nike Court Vision SE</h1>
            <p className="card-description">Premium pastel leather sneaker with all-day comfortable cushioning.</p>
            <div className="card-footer">
              <div className="card-price">৳4,800</div>
            </div>
            <button className="card-btn">Buy Now</button>
          </div>
        </div>

        <div className="Card">
          <div className="card-image">
            <img src="./images/card-21.png"  alt="Card 18" />
          </div>
          <div className="card-content">
            <span className="card-tag">SNEAKERS</span>
            <h1 className="card-title">Nike Court Heritage SL</h1>
            <p className="card-description">Premium pastel leather sneaker with all-day comfortable cushioning.</p>
            <div className="card-footer">
              <div className="card-price">৳3,300</div>
            </div>
            <button className="card-btn">Buy Now</button>
          </div>
        </div>

        <div className="Card">
          <div className="card-image">
            <img src="./images/card-22.png"  alt="Card 19" />
          </div>
          <div className="card-content">
            <span className="card-tag">SNEAKERS</span>
            <h1 className="card-title">Nike Air Force 1 '07 Patent Leather</h1>
            <p className="card-description">Premium pastel leather sneaker with all-day comfortable cushioning.</p>
            <div className="card-footer">
              <div className="card-price">৳4,900</div>
            </div>
            <button className="card-btn">Buy Now</button>
          </div>
        </div>

        <div className="Card">
          <div className="card-image">
            <img src="./images/card-24.png"  alt="Card 21" />
          </div>
          <div className="card-content">
            <span className="card-tag">SNEAKERS</span>
            <h1 className="card-title">Nike P-6000</h1>
            <p className="card-description">Premium pastel leather sneaker with all-day comfortable cushioning.</p>
            <div className="card-footer">
              <div className="card-price">৳4,500</div>
            </div>
            <button className="card-btn">Buy Now</button>
          </div>
        </div>

        <div className="Card">
          <div className="card-image">
            <img src="./images/card-23.png"  alt="Card 22" />
          </div>
          <div className="card-content">
            <span className="card-tag">SNEAKERS</span>
            <h1 className="card-title">Nike Air Max "Joga Bonito"</h1>
            <p className="card-description">Premium pastel leather sneaker with all-day comfortable cushioning.</p>
            <div className="card-footer">
              <div className="card-price">৳3,500</div>
            </div>
            <button className="card-btn">Buy Now</button>
          </div>
        </div>

        <div className="Card">
          <div className="card-image">
            <img src="./images/card-26.png"  alt="Card 23" />
          </div>
          <div className="card-content">
            <span className="card-tag">SNEAKERS</span>
            <h1 className="card-title">Nike Air Max "Joga Bonito"</h1>
            <p className="card-description">Premium pastel leather sneaker with all-day comfortable cushioning.</p>
            <div className="card-footer">
              <div className="card-price">৳5,500</div>
            </div>
            <button className="card-btn">Buy Now</button>
          </div>
        </div>
      </div>

      <Input />
      <Delevery />
      <Contact />

      {/* Login Modal Component */}
      <LoginModal 
        showLogin={showLogin} 
        setShowLogin={setShowLogin} 
        setUserEmail={setUserEmail} 
      />
    </div>
  );
};

export default App;