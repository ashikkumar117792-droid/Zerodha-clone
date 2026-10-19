import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="row p-5 " id="supportWrapper">
      <div className="col">
        <h4>Support Portal</h4>
        </div>
        <div className="col">
        <a href="">Track Tickets</a>
        </div>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-5">
          <h1 className="fs-4">Search for an answer or browse help topics to create ticket</h1>
          <input placeholder="Eg: How do I open my account, How do i activate F&O..."/><br/>
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins</a>
          <a href="">Kite user manual</a>
          <a href="">Learn how to create a ticket</a>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li><a href="">Latest Intraday leverages and Square-off timings</a></li>
            <li><a href="">Quantity freeze limits for indices from October 5, 2026</a></li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
