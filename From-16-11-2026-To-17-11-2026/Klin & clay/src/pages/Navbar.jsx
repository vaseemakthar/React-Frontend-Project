

function Navbar() {
  return (
    <nav className='nav-bar'>
        <div className='title'>
           <a href='#home'>Klin & Clay</a> 
        </div>
        <div className='nav-paths'>
            <ul className='nav-list'>
                <li><a href="#philosophy">Philosophy</a></li>
                <li><a href="#shop">Shop</a></li>
                <li><a href="#workshops">Workshops</a></li>
                <li><a href="#visit">Visit</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar