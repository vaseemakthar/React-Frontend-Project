import "../App.css"
import apimg from '../assets/kiln-home-img.jpg'

function Home() {
  return (
    <header id="home" className="main-pge">
       <div className="main-1">
          <h1>Everything here still has fingerprints in it</h1>
          <p>We throw, glaze, and fire every piece by hand in a converted garage in the east end. Nothing leaves the studio twice the same.</p>
          <button><a href="#shop">Browse the collection</a></button>
       </div>
       <div className="main-2">
           <img src={apimg}/>
       </div>
    </header>
  )
}

export default Home