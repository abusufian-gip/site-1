

const Contact = () => {
  return (
  
    <div className="input-container" style={{display :"flex" , columnGap: "50px"}}>

      <div className="left-side">
        <img src="./images/nike-show-pic.png" alt="" />
      </div>

      <div  className="right-side">
      <div className="input1">
        <label htmlFor="Name"> Name : </label>
        <input type="Name"  placeholder="Enter your name : "/>
      </div>
      <div className="input2">
        <label htmlFor="Email"> Email : </label>
        <input type="email"  placeholder="Enter your email: "/>
      </div>
      <div className="input3">
        <label htmlFor="address"> Address : </label>
        <input type="address" />
      </div>
      <div className="input4">
        <label htmlFor="number"> Contact : </label>
        <input type="contact" />
      </div>
       <button type="button" className="submitbtn">Submit</button>
      
</div>
        
    </div>
   
  )
}

export default Contact