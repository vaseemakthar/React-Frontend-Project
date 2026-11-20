
function Visit() {
  return (
    <section id="visit" className="visit-pge">
        <div className="visit-pge-1">
           <h2>Come by the studio</h2>
           <ul>
              <li><span className="day">Tue–Fri </span>11am – 6pm</li>
              <li><span className="day">Saturday</span>10am – 4pm</li>
              <li><span className="day">Sun–Mon </span>Closed</li>
           </ul>
           <p>412 Foundry Lane, back building, ring the bell marked "Kiln."</p>
        </div>
        <div className="visit-pge-2">
            <h2>Ask about a commission</h2>
            <form className="visit-form">
               <p>Your name</p>
               <input placeholder="" type="text" className="visit-inp" required />

               <p>Email</p>
               <input type="email" className="visit-inp" required />
                           
               <p>What are you picturing?</p>
               <select className="visit-inp">
                    <option value="">A mug or cup</option>
                    <option value="mug">A  bowl or serving piece</option>
                    <option value="plate">A vase</option>
                    <option value="bowl">Something else entirely</option>
               </select>

                <p>Tell us more</p>
                <textarea className="visit-inpar"/>
                <button>Send inquiry</button>
            </form>
        </div>
    </section>
  )
}

export default Visit