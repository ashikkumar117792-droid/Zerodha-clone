import React from "react";

function Hero() {
    return ( 
        <div className="container mb-1 boder-bottom">
            <div className="text-center p-3 mt-5">
                <h1 className="fs-2">Zerodha Products</h1>
                <h3 className="text-muted fs-4 fw-light mt-3">Sleek, modern, and intuitive trading platforms.</h3>
                <p className="mt-3 mb-5">Check out our <a href="" style={{textDecoration: "none"}}>investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
            </div>
        </div>
     );
}

export default Hero;