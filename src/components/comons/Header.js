import React from "react";

function Header() {
  return (
    
    <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                        <a href="#" className="logo">Peritus Mobile</a>
                       
                        <ul className="nav">
                            <li className="scroll-to-section"><a href="/" className="active">Home</a></li>
                              <li className="scroll-to-section"><a href="/about" className="active">About</a></li>
                              <li className="scroll-to-section"><a href="/services" className="active">Services</a></li>
                              <li  className="scroll-to-section"><a href="/frequently" className="active">Frequently Questions</a></li>
                              <li className="scroll-to-section"><a href="/contact" className="active">Contact us</a></li>
                      </ul>
                        <a className='menu-trigger'>
                            <span>Menu</span>
                        </a>

                    </nav>
                </div>
            </div>
        </div>
    </header>
  );
}

export default Header;
