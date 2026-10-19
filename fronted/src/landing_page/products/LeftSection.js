import React from "react";

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className="container">
            <div className="row" style={{padding:"0 5rem 0 6rem"}}>
                <div className="col-8 p-5">
                    <img src={imageURL}/>
                </div>
                <div className="col-4  mt-5 center">
                    <h1 className="fs-4 mb-4 mt-5">{productName}</h1>
                    <p className="lh-lg">{productDescription}</p>
                    <div>
                    <a href={tryDemo}>{tryDemo}<i class="fa fa-long-arrow-right" aria-hidden="ture"></i></a>
                    <a href={learnMore} style={{marginLeft:"50px"}}>{learnMore} </a>
                    </div>
                    <div className="mt-3">
                    <a href={googlePlay}><img src="media/images/googlePlayBadge.svg"/></a>
                    <a href={appStore}><img src="media/images/appstoreBadge.svg" style={{marginLeft:"50px"}}/></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;