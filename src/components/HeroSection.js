import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (  
	<div class="HeroSection">	
    <div class="container-fluid px-4 py-5 my-5 text-center">
	<div class="lc-block d-block mx-auto mb-4">
    <div class="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center">
		<img class="img-fluid" src="./welcome.jpg" alt="hero section welcome" width="500" height="" /></div>
	</div>
	<div class="lc-block">
		<div editable="rich">
			<h2 class="display-5 fw-bold">Welcome to the Virtual Art Gallery!</h2>
		</div>
	</div>
	<div class="lc-block col-lg-6 mx-auto mb-4">
		<div editable="rich">
			<p class="lead ">Here, you can share your art and checkout other's. Currently you can't buy them but soon we would add this feature too!</p>
		</div>
	</div>

	<div class="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center mb-5"> <Link class="btn btn-primary btn-lg px-4 gap-3" to="uploadFiles" role="button">Upload Art</Link>
	<Link class="btn btn-outline-secondary btn-lg px-4" to="/gallery" role="button">View Art</Link>
	</div>    
</div>
</div>
    );
};
export default HeroSection;