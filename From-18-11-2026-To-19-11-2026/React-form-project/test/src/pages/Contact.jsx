import { Link } from "react-router-dom";

function Contact() {
  return (
    <section className='parent'>
         <nav className='head'>
            <ul>
               <li><Link style={{textDecoration: 'none'}} to="/basic">Basic</Link></li>
               <li><Link style={{textDecoration: 'none'}} to="/contact">Contact</Link></li>
               <li><Link style={{textDecoration: 'none'}} to="/system-admin">System Admin</Link></li>
            </ul>
         </nav>
         <div className='cmp-details'>
            <h4>Contact page</h4> 
            <div className="contact-module">

             <div className="contact-1">
               <div>
                  <h6>Building Number</h6>
                  <input placeholder='Enter building number' required/>
               </div>
               <div>
                  <h6>Street Name</h6>
                  <input placeholder='Enter street name' required/>
               </div>
               <div>
                  <h6>State Name</h6>
                  <input placeholder='Enter state name' required/>
               </div> 
             </div>

             <div className="contact-2">
               <div>
                  <div className="contact-1">
                  <h6>Country</h6>
                  <input placeholder='Enter your country' required/>
               </div>
               <div className="contact-1">
                  <h6>City</h6>
                  <input placeholder='Enter your city' required/>
               </div>
               <div className="contact-1">
                  <h6>Pincode</h6>
                  <input placeholder='Enter pincode' required/>
               </div> 
               </div>
             </div>
            </div>  
            <button className="contact-btn">Submit</button>
         </div>

        </section>
  )
}

export default Contact