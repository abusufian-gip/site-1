
const Navigation = ({ onLoginClick, userEmail, onLogout }) => {  return (
    
        <nav className="navbar">
          <div className="container">
                <div className="nav-logo">
                  <img src="./images/brand_logo.png"  alt="ShoeStore Logo" />
                </div>
                <ul className="nav-menu">
                    <li><a href="#" >Home</a></li>
                    <li><a href="#" >Products</a></li>
                    <li><a href="#" >About</a></li>
                    <li><a href="#" >Contact</a></li>
                    <li><a href="#" >Location</a></li>
                </ul>
                {userEmail ? 
                <div className="user-profile">
            <span className="user-email">{userEmail}</span>
            <button className="logout-btn" onClick={onLogout}>Logout</button>
          </div>
                 :
                <button className="nav-btn" onClick={onLoginClick}>
                      Login
                 </button>
          }
    </div>
    </nav>
  )
}

export default Navigation