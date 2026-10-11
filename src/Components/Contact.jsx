

const Contact = () => {
  return (
   <footer className="footer">
     <div className="footer-container">
        <div className="join-part">
          <h3>Join the Nike Movement</h3>
          <p>Sign up to our newsletter to <br />  receive exclusive offers.</p>
          <input style={{display:"flex"}} type="email" placeholder="E-mail" />
          <button>SUBCRIBE</button>
          <h3>Nike International</h3>
          <p>© 2026 - The Patchee Bangladesh Powered by Shopify</p>
        </div>

        <div className="about">
          <h3>About Us</h3>
          <ul>
           <li><a href="#"></a>Our Story</li>
           <li><a href="#"></a>Wholesale</li>
           <li><a href="#"></a>Blogs</li>
           <li><a href="#"></a>Exchange & Refund Policy</li>
           <li><a href="#"></a>Privacy Policy</li>
           <li><a href="#"></a>FAQs</li>
           <li><a href="#"></a>Terms & Conditions</li>
          </ul>
        </div>

          <div className="contactus">
            <h3>Reach Us</h3>
            <h6>Contact Us</h6>
            <p>Sales Queries WhatsApp: +880 16 2728 0575</p>
            <p>Complaints Queries WhatsApp: +880 18 9619 5448</p>
            <p>Complaints Queries Email: complaints@thepatchee.com</p>
          </div>

          <div className="service">
            <h3>Customer Service</h3>
            <p>Track my Order</p>
            <p>I Have a Complaint</p>
            <p>Talk to the CEO</p>
          </div>
    </div>
   </footer>
  )
}

export default Contact