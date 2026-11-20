import { Link } from "react-router-dom";

function SystemAdmin() {
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
            <h4>System Admin page</h4>   
         </div>
      </section>
  )
}

export default SystemAdmin