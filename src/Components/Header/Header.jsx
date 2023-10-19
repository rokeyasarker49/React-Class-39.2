import './Header.css'

function Header() {


  return (
    <>
    <section className="header-section">

        <div className="header-container">
            <div className="header-head">
                <div className="icon"><img src="Logo.png" alt="" /></div>
                <div className="menu">
                    <ul>
                        <li><a href="#">Order</a></li>
                        <li><a href="#">Order Review</a></li>
                        <li><a href="#">Manage Inventory</a></li>
                    </ul>
                </div>
            </div>
        </div>

    </section>
      
    </>
  )
}

export default Header;