import React from "react";

function Header() {
  return (
    
    <header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                        <a href="#" class="logo">Peritus Mobile</a>
                       
                        <ul class="nav">
                            <li class="scroll-to-section"><a href="/" class="active">Home</a></li>
                              <li class="scroll-to-section"><a href="/about" class="active">About</a></li>
                              <li class="scroll-to-section"><a href="/services" class="active">Services</a></li>
                              <li  class="scroll-to-section"><a href="/frequently" class="active">Frequently Questions</a></li>
                              <li class="scroll-to-section"><a href="/contact" class="active">Contact us</a></li>
                      </ul>
                        <a class='menu-trigger'>
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
