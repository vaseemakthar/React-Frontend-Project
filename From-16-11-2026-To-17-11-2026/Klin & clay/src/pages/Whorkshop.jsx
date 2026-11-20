import "../App.css"

function Whorkshop() {
  return (
    <section id="workshops" className="workshop-pge">
     <h1>This month's workshops</h1>   
     <table className="workshop-tbe">
      <thead>
        <tr>
          <th>Session</th>
          <th>Day</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Wheel Throwing, Beginner</td>
          <td>Tuesdays</td>
          <td className="time" style={{ fontWeight: 600 ,color:'#8c4a2f'}}>6:00–8:30pm</td>
        </tr>
        <tr>
          <td>Hand-Building &amp; Glazing</td>
          <td>Thursdays</td>
          <td className="time" style={{ fontWeight: 600 ,color:'#8c4a2f'}}>6:00–8:00pm</td>
        </tr>
        <tr>
          <td>Open Studio Time</td>
          <td>Saturdays</td>
          <td className="time" style={{ fontWeight: 600 ,color:'#8c4a2f'}}>10:00am–2:00pm</td>
        </tr>
      </tbody>
     </table>
    </section>
    
  )
}

export default Whorkshop