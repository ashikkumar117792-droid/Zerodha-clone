import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore
}) {
  return (
    <div className="container" style={{padding:"0 0 0 5rem"}}>
      <div className="row "style={{padding:"0 0 0 2rem"}}>
        <div className="col-4 d-flex align-items-center" >
          <div className="" style={{margin:"0 4rem 0 0"}}>
          <h1 className="fs-4 mb-4 mt-5">{productName}</h1>
          <p className="lh-lg">{productDescription}</p>
          <div>
            <a href={learnMore}>
              {learnMore}
              <i class="fa fa-long-arrow-right" aria-hidden="ture"></i>
            </a>
          </div>
          </div>
        </div>
        <div className="col-8 p-5">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
