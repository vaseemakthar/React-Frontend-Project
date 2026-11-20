import "../App.css"
import img1 from '../assets/img-1.jpg'
import img2 from '../assets/img-2.jpg'
import img3 from '../assets/img-3.jpg'
import img4 from '../assets/img-4.jpg'

function Shop() {
  return (
     <section id="shop" className="shop-pge">

        <h1>Currently in the shop</h1>  

        <div className="parent-card">
           <div className="shop-card">
             <div className="card-img">
                <img src={img1}/>
             </div>
             <div className="card-2">
               <h4>Ash-Glazed Mug</h4>
               <p>12oz, wheel-thrown stoneware</p>
               <h5>$34</h5>
             </div>
           </div>

            <div className="shop-card">
                <div className="card-img">
                    <img src={img2}/>
                </div>
                <div className="card-2">
                    <h4>Celadon Serving Bowl</h4>
                    <p>9in diameter, food-safe glaze</p>
                    <h5>$68</h5>
                </div>
            </div>

            <div className="shop-card">
                <div className="card-img">
                    <img src={img3}/>
                </div>
                <div className="card-2">
                    <h4>Textured Bud Vase</h4>
                    <p>6in tall, unglazed base, sealed interior</p>
                    <h5>$42</h5>
                </div>
            </div>

            <div className="shop-card">
                <div className="card-img">
                    <img src={img4}/>
                </div>
                <div className="card-2">
                    <h4>Everyday Plate Set</h4>
                    <p>Set of 4, dishwasher-safe</p>
                    <h5>$120</h5>
                </div>
            </div>

        </div>
        
     </section>
  )
}

export default Shop