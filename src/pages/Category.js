import React from 'react';
//import { Table } from 'react-bootstrap';
import {Form, FormControl, Button, Table, Carousel, Jumbotron} from 'react-bootstrap';

class Category extends React.Component {
    render() {
        return (
            <div>
            
            <div class="w3layouts-breadcrumbs text-center">
		<div class="container">
			<span class="agile-breadcrumbs">
			<a href="#"><i class="fa fa-home home_1"></i></a> / 
			<a href="#categories">Categories</a> / 
			<span> Mobiles</span></span>
		</div>
	</div>
            
            <div class="submit-ad main-grid-border">
		<div class="container">
			
			<div class="select-box">
				<div class="select-city-for-local-ads ads-list">
					<label>Select your city to see local ads</label>
						<select>
							<optgroup label="Popular Cities">
								<option selected>All Cities</option>
								<option>Dakar</option>
								<option>Touba</option>
							</optgroup>
			            </select>
				</div>
				<div class="browse-category ads-list">
					<label>Browse Categories</label>
					<select class="selectpicker show-tick" data-live-search="true">
					  <option data-tokens="Mobiles">All</option>
					  <option data-tokens="Mobiles" selected>Mobiles</option>
					  <option data-tokens="Electronics & Appliances">Electronics & Appliances</option>
					  <option data-tokens="Cars">Cars</option>
					  <option data-tokens="Bikes">Bikes</option>
					  <option data-tokens="Furniture">Furniture</option>
					  <option data-tokens="Pets">Pets</option>
					  <option data-tokens="Books, Sports & Hobbies">Books, Sports & Hobbies</option>
					  <option data-tokens="Fashion">Fashion</option>
					  <option data-tokens="Kids">Kids</option>
					  <option data-tokens="Services">Services</option>
					  <option data-tokens="Jobs">Jobs</option>
					  <option data-tokens="Real Estate">Real Estate</option>
					</select>
				</div>
				<div class="search-product ads-list">
					<label>Search for a specific product</label>
					<div class="search">
						<div id="custom-search-input">
						<div class="input-group">
							<input type="text" class="form-control input-lg" placeholder="Search" />
							<span class="input-group-btn">
								<button class="btn btn-info btn-lg" type="button">
									<i class="glyphicon glyphicon-search"></i>
								</button>
							</span>
						</div>
					</div>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
			
			<div class="ads-grid">
			<div class="side-bar col-md-3">
					<div class="search-hotel">
					<h3 class="agileits-sear-head">Name contains</h3>
					<form>
						<input type="text" value="Product name..." onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Product name...';}" required="" />
						<input type="submit" value=">>" />
					</form>
				</div>
				
				<div class="w3-brand-select">
					<h3 class="agileits-sear-head">Brand name</h3>
					  <select class="selectpicker" data-live-search="true">
					  <option data-tokens="All">All</option>
					  <option data-tokens="Asus">Asus</option>
					  <option data-tokens="Black Berry">Black Berry</option>
					  <option data-tokens="HTC">HTC</option>
					  <option data-tokens="Intex">Intex</option>
					  <option data-tokens="iPhone">iPhone</option>
					  <option data-tokens="Karbonn">Karbonn</option>
					  <option data-tokens="Lava">Lava</option>
					  <option data-tokens="Lenovo">Lenovo</option>
					  <option data-tokens="LG">LG</option>
					  <option data-tokens="Mi">Mi</option>
					  <option data-tokens="Micromax">Micromax</option>
					  <option data-tokens="Motorola">Motorola</option>
					  <option data-tokens="Nokia">Nokia</option>
					  <option data-tokens="Samsung">Samsung</option>
					  <option data-tokens="Sony">Sony</option>
					  <option data-tokens="Other Mobiles">Other Mobiles</option>
					</select>
				</div>
				
				<div class="w3ls-featured-ads">
					<h2 class="sear-head fer">Featured Ads</h2>
					<div class="w3l-featured-ad">
						<a href="#single">
							<div class="w3-featured-ad-left">
								<img src="https://www.slickwraps.com/media/catalog/category/s5_3.jpg" title="ad image" alt="" />
							</div>
							<div class="w3-featured-ad-right">
								<h4>Lorem Ipsum is simply dummy text of the printing industry</h4>
								<p>$ 450</p>
							</div>
							<div class="clearfix"></div>
						</a>
					</div>
					<div class="w3l-featured-ad">
						<a href="#single">
							<div class="w3-featured-ad-left">
								<img src="http://image.priceprice.k-img.com/global/images/product/mobilephones/Cherry_Mobile_Flare_P1/Cherry_Mobile_Flare_P1_L_1.jpg" title="ad image" alt="" />
							</div>
							<div class="w3-featured-ad-right">
								<h4>Lorem Ipsum is simply dummy text of the printing industry</h4>
								<p>$ 380</p>
							</div>
							<div class="clearfix"></div>
						</a>
					</div>
					<div class="w3l-featured-ad">
						<a href="#single">
							<div class="w3-featured-ad-left">
								<img src="https://teja10.kuikr.com/o1/20161227/ak_1754001356-1482799919.jpg" title="ad image" alt="" />
							</div>
							<div class="w3-featured-ad-right">
								<h4>Lorem Ipsum is simply dummy text of the printing industry</h4>
								<p>$ 560</p>
							</div>
							<div class="clearfix"></div>
						</a>
					</div>
					<div class="clearfix"></div>
				</div>
				</div>
				</div>
			
			<div class="agileinfo-ads-display col-md-9">
					<div class="wrapper">					
					<div class="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
					  <ul id="myTab" class="nav nav-tabs nav-tabs-responsive" role="tablist">
						<li role="presentation" class="active">
						  <a href="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true">
							<span class="text">All Ads</span>
						  </a>
						</li>
						<li role="presentation" class="next">
						  <a href="#profile" role="tab" id="profile-tab" data-toggle="tab" aria-controls="profile">
							<span class="text">Ads with Photos</span>
						  </a>
						</li>
						<li role="presentation">
						  <a href="#samsa" role="tab" id="samsa-tab" data-toggle="tab" aria-controls="samsa">
							<span class="text">Company</span>
						  </a>
						</li>
					  </ul>
					  <div id="myTabContent" class="tab-content">
						<div role="tabpanel" class="tab-pane fade in active" id="home" aria-labelledby="home-tab">
						   <div>
												<div id="container">
								<div class="view-controls-list" id="viewcontrols">
									<label>view :</label>
									<a class="gridview"><i class="glyphicon glyphicon-th"></i></a>
									<a class="listview active"><i class="glyphicon glyphicon-th-list"></i></a>
								</div>
								<div class="sort">
								   <div class="sort-by">
										<label>Sort By : </label>
										<select>
														<option value="">Most recent</option>
														<option value="">Price: Rs Low to High</option>
														<option value="">Price: Rs High to Low</option>
										</select>
									   </div>
									 </div>
								<div class="clearfix"></div>
							<ul class="list">
								<a href="#single">
									<li>
									<img src="http://stat.homeshop18.com/homeshop18/images/productImages/338/samsung-guru-e1200-mobile-phone-large_a68c67293ae8ecba99b8395694101cce.jpg" title="" alt="" />
									<section class="list-left">
									<h5 class="title">There are many variations of passages of Lorem Ipsum</h5>
									<span class="adprice">$290</span>
									<p class="catpath">Mobile Phones » Brand</p>
									</section>
									<section class="list-right">
									<span class="date">Today, 17:55</span>
									<span class="cityname">City name</span>
									</section>
									<div class="clearfix"></div>
									</li> 
								</a>
								<a href="#single">
									<li>
									<img src="http://image.priceprice.k-img.com/global/images/product/mobilephones/Cherry_Mobile_Flare_P1/Cherry_Mobile_Flare_P1_L_1.jpg" title="" alt="" />
									<section class="list-left">
									<h5 class="title">It is a long established fact that a reader long established</h5>
									<span class="adprice">$310</span>
									<p class="catpath">Mobile Phones » Brand</p>
									</section>
									<section class="list-right">
									<span class="date">Today, 17:45</span>
									<span class="cityname">City name</span>
									</section>
									<div class="clearfix"></div>
									</li> 
								</a>
								<a href="#single">
									<li>
									<img src="https://teja10.kuikr.com/o1/20161227/ak_1754001356-1482799919.jpg" title="" alt="" />
									<section class="list-left">
									<h5 class="title">Contrary to popular belief, Lorem Ipsum is not</h5>
									<span class="adprice">$190</span>
									<p class="catpath">Mobile Phones » Brand</p>
									</section>
									<section class="list-right">
									<span class="date">Today, 17:30</span>
									<span class="cityname">City name</span>
									</section>
									<div class="clearfix"></div>
									</li> 
								</a>
								<a href="#single">
									<li>
									<img src="https://www.slickwraps.com/media/catalog/category/s5_3.jpg" title="" alt="" />
									<section class="list-left">
									<h5 class="title">The standard chunk of Lorem Ipsum used since the</h5>
									<span class="adprice">$480</span>
									<p class="catpath">Mobile Phones » Brand</p>
									</section>
									<section class="list-right">
									<span class="date">Today, 17:25</span>
									<span class="cityname">City name</span>
									</section>
									<div class="clearfix"></div>
									</li> 
								</a>
							</ul>
						</div>
							</div>
						</div>
						<div role="tabpanel" class="tab-pane fade" id="profile" aria-labelledby="profile-tab">
						 <div>
												<div id="container">
								<div class="view-controls-list" id="viewcontrols">
									<label>view :</label>
									<a class="gridview"><i class="glyphicon glyphicon-th"></i></a>
									<a class="listview active"><i class="glyphicon glyphicon-th-list"></i></a>
								</div>
								<div class="sort">
								   <div class="sort-by">
										<label>Sort By : </label>
										<select>
														<option value="">Most recent</option>
														<option value="">Price: Rs Low to High</option>
														<option value="">Price: Rs High to Low</option>
										</select>
									   </div>
									 </div>
								<div class="clearfix"></div>
							<ul class="list">
								<a href="#single">
									<li>
									<img src="http://stat.homeshop18.com/homeshop18/images/productImages/338/samsung-guru-e1200-mobile-phone-large_a68c67293ae8ecba99b8395694101cce.jpg" title="" alt="" />
									<section class="list-left">
									<h5 class="title">There are many variations of passages of Lorem Ipsum</h5>
									<span class="adprice">$290</span>
									<p class="catpath">Mobile Phones » Brand</p>
									</section>
									<section class="list-right">
									<span class="date">Today, 17:55</span>
									<span class="cityname">City name</span>
									</section>
									<div class="clearfix"></div>
									</li> 
								</a>
								<a href="#single">
									<li>
									<img src="http://image.priceprice.k-img.com/global/images/product/mobilephones/Cherry_Mobile_Flare_P1/Cherry_Mobile_Flare_P1_L_1.jpg" title="" alt="" />
									<section class="list-left">
									<h5 class="title">It is a long established fact that a reader long established</h5>
									<span class="adprice">$310</span>
									<p class="catpath">Mobile Phones » Brand</p>
									</section>
									<section class="list-right">
									<span class="date">Today, 17:45</span>
									<span class="cityname">City name</span>
									</section>
									<div class="clearfix"></div>
									</li> 
								</a>
								<a href="#single">
									<li>
									<img src="https://teja10.kuikr.com/o1/20161227/ak_1754001356-1482799919.jpg" title="" alt="" />
									<section class="list-left">
									<h5 class="title">Contrary to popular belief, Lorem Ipsum is not</h5>
									<span class="adprice">$190</span>
									<p class="catpath">Mobile Phones » Brand</p>
									</section>
									<section class="list-right">
									<span class="date">Today, 17:30</span>
									<span class="cityname">City name</span>
									</section>
									<div class="clearfix"></div>
									</li> 
								</a>
								<a href="#single">
									<li>
									<img src="https://www.slickwraps.com/media/catalog/category/s5_3.jpg" title="" alt="" />
									<section class="list-left">
									<h5 class="title">The standard chunk of Lorem Ipsum used since the</h5>
									<span class="adprice">$480</span>
									<p class="catpath">Mobile Phones » Brand</p>
									</section>
									<section class="list-right">
									<span class="date">Today, 17:25</span>
									<span class="cityname">City name</span>
									</section>
									<div class="clearfix"></div>
									</li> 
								</a>
							</ul>
						</div>
							</div>
						</div>
						<div role="tabpanel" class="tab-pane fade" id="samsa" aria-labelledby="samsa-tab">
						  <div>
												<div id="container">
								<div class="view-controls-list" id="viewcontrols">
									<label>view :</label>
									<a class="gridview"><i class="glyphicon glyphicon-th"></i></a>
									<a class="listview active"><i class="glyphicon glyphicon-th-list"></i></a>
								</div>
								<div class="sort">
								   <div class="sort-by">
										<label>Sort By : </label>
										<select>
														<option value="">Most recent</option>
														<option value="">Price: Rs Low to High</option>
														<option value="">Price: Rs High to Low</option>
										</select>
									   </div>
									 </div>
								<div class="clearfix"></div>
							<ul class="list">
								<a href="#single">
									<li>
									<img src="http://stat.homeshop18.com/homeshop18/images/productImages/338/samsung-guru-e1200-mobile-phone-large_a68c67293ae8ecba99b8395694101cce.jpg" title="" alt="" />
									<section class="list-left">
									<h5 class="title">There are many variations of passages of Lorem Ipsum</h5>
									<span class="adprice">$290</span>
									<p class="catpath">Mobile Phones » Brand</p>
									</section>
									<section class="list-right">
									<span class="date">Today, 17:55</span>
									<span class="cityname">City name</span>
									</section>
									<div class="clearfix"></div>
									</li> 
								</a>
								<a href="#single">
									<li>
									<img src="http://image.priceprice.k-img.com/global/images/product/mobilephones/Cherry_Mobile_Flare_P1/Cherry_Mobile_Flare_P1_L_1.jpg" title="" alt="" />
									<section class="list-left">
									<h5 class="title">It is a long established fact that a reader long established</h5>
									<span class="adprice">$310</span>
									<p class="catpath">Mobile Phones » Brand</p>
									</section>
									<section class="list-right">
									<span class="date">Today, 17:45</span>
									<span class="cityname">City name</span>
									</section>
									<div class="clearfix"></div>
									</li> 
								</a>
								<a href="#single">
									<li>
									<img src="https://teja10.kuikr.com/o1/20161227/ak_1754001356-1482799919.jpg" title="" alt="" />
									<section class="list-left">
									<h5 class="title">Contrary to popular belief, Lorem Ipsum is not</h5>
									<span class="adprice">$190</span>
									<p class="catpath">Mobile Phones » Brand</p>
									</section>
									<section class="list-right">
									<span class="date">Today, 17:30</span>
									<span class="cityname">City name</span>
									</section>
									<div class="clearfix"></div>
									</li> 
								</a>
								<a href="#single">
									<li>
									<img src="https://www.slickwraps.com/media/catalog/category/s5_3.jpg" title="" alt="" />
									<section class="list-left">
									<h5 class="title">The standard chunk of Lorem Ipsum used since the</h5>
									<span class="adprice">$480</span>
									<p class="catpath">Mobile Phones » Brand</p>
									</section>
									<section class="list-right">
									<span class="date">Today, 17:25</span>
									<span class="cityname">City name</span>
									</section>
									<div class="clearfix"></div>
									</li> 
								</a>
							</ul>
						</div>
							</div>
						</div>
						<ul class="pagination pagination-sm">
							<li><a href="#">Prev</a></li>
							<li><a href="#">1</a></li>
							<li><a href="#">2</a></li>
							<li><a href="#">3</a></li>
							<li><a href="#">4</a></li>
							<li><a href="#">5</a></li>
							<li><a href="#">6</a></li>
							<li><a href="#">7</a></li>
							<li><a href="#">8</a></li>
							<li><a href="#">Next</a></li>
						</ul>
					  </div>
					</div>
				</div>
				</div>
				<div class="clearfix"></div>
				
				
		</div>	
	</div>
	</div>
        )
    }
}

export default Category;