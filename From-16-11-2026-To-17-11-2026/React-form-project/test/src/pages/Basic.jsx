import { Link } from "react-router-dom";
import '../App.css'

function Basic() {
    
  return (
    
    <form className='parent'>
         <nav className='head'>
            <ul>
                <li><Link 
                  style={{textDecoration: 'none'}} 
                  to="/basic"
                >Basic</Link></li>
                <li><Link style={{textDecoration: 'none'}} to="/contact">Contact</Link></li>
                <li><Link style={{textDecoration: 'none'}} to="/system-admin">System Admin</Link></li>
            </ul>
         </nav>
         <div className='cmp-details'>

            <h4>Company Details</h4>
              
             <div className='cmp-head' id="company-form">
              <div className='cmp-details-1'>
                <div>
                  <h6>Company Name <span className="required-star">*</span></h6>
                  <input placeholder='Ecosuite Gobal HQ' required/>
                </div>

                <div>
                  <h6>Registration Number <span className="required-star">*</span></h6>
                  <input placeholder='REG-123456' required/>
                </div>

                <div>
                  <h6>Status</h6>
                  <select id="dropdown" name="dropdown">
                      <option value="option1">Active</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>
            
              <div className='cmp-details-2'>
                 <div>
                  <h6>Parent Company </h6>
                  <select id="dropdown" name="dropdown">
                      <option value="None (Standalone)">None (Standalone)</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                  </select>
                </div>

                <div>
                  <h6>Currency</h6>
                   <select id="dropdown" name="dropdown">
                      <option value="--Select Currency--">--Select Currency--</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                  </select>
                </div>

                <div>
                  <h6>Website</h6>
                  <input placeholder='https://company.com'/>
                </div>
              </div>
            </div>    
         </div>

        <div className='companyAssets'>
           <h4>Company Assets</h4>

          <div className='asset-part'>  

            <div className='assets1'>
              <p className='asset1-cmp'>Company Logo</p>
              <input type="file" id="file-upload" accept=".jpg,.png,.pdf"></input>
              <p className='inp-format'>PNG, JPG up to 1MB</p>
            </div>

            <div className='assets2'>
              <p className='asset2-cmp'>Company Stamp</p>
              <input type="file" id="file-upload" accept=".jpg,.png,.pdf"></input>
              <p className='inp-format'>PNG, JPG up to 1MB</p>
            </div> 
          </div>
        </div>

        <div className='document-table-module'>
          <h4>Documents</h4>
          <table className="document-table">
            <thead>
              <tr>
                <th>DOCUMENT NAME</th>
                <th>ISSUE DATE</th>
                <th>EXPIRY DATE</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td colSpan="4" className="empty-message">
                  No documents added yet.
                </td>
              </tr>
            </tbody>
        </table>
        </div>

        <div className='btn-module'>
          <button className='cancel-btn'>Cancel</button>
          <button type='submit' className='nxt-btn' from="company-form">Next</button>
        </div>
    </form>
  )
}

export default Basic