import React from 'react';
//import { Table } from 'react-bootstrap';
import {Form, FormControl, Button, Table, Carousel, Jumbotron} from 'react-bootstrap';

class Seller extends React.Component {
    render() {
        return (
            <div>
            
            <div class="w3layouts-breadcrumbs text-center">
				<div class="container">
					<span class="agile-breadcrumbs">
					<a href="#"><i class="fa fa-home home_1"></i></a> / 
					<a href="#seller">John Smith</a>
					</span>
				</div>
			</div>
			
			<div class="submit-ad main-grid-border">
		        <div class="container">
		        <h2 class="w3-head">4 listings by <strong>John Smith</strong></h2>
			<div class="ads-grid">
			
			<div class="side-bar col-md-3">
					
				<div class="w3ls-featured-ads">
				
				
					<div class="w3l-featured-ad">
							<div class="w3-featured-ad-left">
								<img src="https://www.godaddy.com/garage/wp-content/uploads/2014/06/create-a-gravatar-beard.png" title="ad image" alt="" />
							</div>
							<div class="w3-featured-ad-right">
								<h2 class="sear-head fer">John Smith</h2>
							</div>
							<div class="clearfix"></div>
						
					</div>
					
					<div class="w3l-featured-ad">
							<div class="w3-featured-ad-left">
								<i class="glyphicon glyphicon-earphone"></i>
							</div>
							<div class="w3-featured-ad-right">
								555-555-5555
							</div>
							<div class="clearfix"></div>
					</div>
					
					<div class="w3l-featured-ad">
							<div class="w3-featured-ad-left">
								<i class="glyphicon glyphicon-road"></i>
							</div>
							<div class="w3-featured-ad-right">
								123 Street Address
							</div>
							<div class="clearfix"></div>
					</div>
					
					<div class="w3l-featured-ad">
							<div class="w3-featured-ad-left">
								<i class="fa fa-envelope" aria-hidden="true"></i>
							</div>
							<div class="w3-featured-ad-right">
								info@example.com
							</div>
							<div class="clearfix"></div>
					</div>
					
				</div>
				</div>
				</div>
            
            <div class="submit-ad main-grid-border">
		<div class="container">
			<div class="agileinfo-ads-display col-md-9">
					<div class="wrapper">					
					<div class="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
					  <ul id="myTab" class="nav nav-tabs nav-tabs-responsive" role="tablist">
						<li role="presentation" class="active">
						  <a href="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true">
							<span class="text">Listings</span>
						  </a>
						</li>
						<li role="presentation" class="next">
						  <a href="#profile" role="tab" id="profile-tab" data-toggle="tab" aria-controls="profile">
							<span class="text">Reviews</span>
						  </a>
						</li>
						<li role="presentation" class="next">
						  <a href="#following" role="tab" id="profile-tab" data-toggle="tab" aria-controls="profile">
							<span class="text">Following</span>
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
						<div role="tabpanel" class="tab-pane fade" id="profile" aria-labelledby="profile-tab">
						 <div>
												<div id="container">
								<div class="view-controls-list" id="viewcontrols">
									{/*<label>view :</label>
									<a class="gridview"><i class="glyphicon glyphicon-th"></i></a>
									<a class="listview active"><i class="glyphicon glyphicon-th-list"></i></a>*/}
									<a href="/review-form">Leave a review</a>
								</div>
								<div class="sort">
								   <div class="sort-by">
										<label>Sort By : </label>
										<select>
														<option value="">View all</option>
														<option value="">Positive</option>
														<option value="">Negative</option>
										</select>
									   </div>
									 </div>
								<div class="clearfix"></div>
							<ul class="list">
								<a href="#seller">
									<li>
									<img src="http://rsassociates.itsupportnepal.com/rs/wp-content/uploads/2017/09/gravatar_1.jpg" title="" alt="" />
									<section class="list-left">
									<h5 class="title">Mike Jones</h5>
									<span class="adprice">(+) 6 hours ago</span>
									<p class="catpath">Mobile Phones » Phone Name</p>
									<p class="catpath">There are many variations of passages of Lorem Ipsum</p>
									</section>
									<section class="list-right">
									<span class="date">Today, 17:55</span>
									<span class="cityname">City name</span>
									</section>
									<div class="clearfix"></div>
									</li> 
								</a>
								<a href="#seller">
									<li>
									<img src="http://atleticafranciacorta.com/assets/images/members/profile/2_3_1_avatar.jpg" title="" alt="" />
									<section class="list-left">
									<h5 class="title">Ms. Jackson</h5>
									<span class="adprice">(-) 17 hours ago</span>
									<p class="catpath">Mobile Phones » Phone Name</p>
									<p class="catpath">There are many variations of passages of Lorem Ipsum</p>
									</section>
									<section class="list-right">
									<span class="date">Today, 17:45</span>
									<span class="cityname">City name</span>
									</section>
									<div class="clearfix"></div>
									</li> 
								</a>
								<a href="#seller">
									<li>
									<img src="http://www.creazo.fr/wp-content/uploads/2016/03/1458916347_ninja-background.png" title="" alt="" />
									<section class="list-left">
									<h5 class="title">Arnold</h5>
									<span class="adprice">(+) 11 days ago</span>
									<p class="catpath">Mobile Phones » Phone Name</p>
									<p class="catpath">There are many variations of passages of Lorem Ipsum</p>
									</section>
									<section class="list-right">
									<span class="date">Today, 17:30</span>
									<span class="cityname">City name</span>
									</section>
									<div class="clearfix"></div>
									</li> 
								</a>
							</ul>
							<a href="/reviews">View all</a>
						</div>
							</div>
						</div>
						
						<div role="tabpanel" class="tab-pane fade" id="following" aria-labelledby="profile-tab">
						 <div>
												<div id="container">
								<div class="sort">
								   <div class="sort-by">
										<label>Sort By : </label>
										<select>
														<option value="">View all</option>
														<option value="">Positive</option>
														<option value="">Negative</option>
										</select>
									   </div>
									 </div>
								<div class="clearfix"></div>
							<ul class="list">
								<a href="#seller">
									<li>
									<img src="http://rsassociates.itsupportnepal.com/rs/wp-content/uploads/2017/09/gravatar_1.jpg" title="" alt="" />
									<section class="list-left">
									<h5 class="title">Mike Jones</h5>

									</section>
									<section class="list-right">
									<span class="cityname">City name</span>
									</section>
									<div class="clearfix"></div>
									</li> 
								</a>
								<a href="#seller">
									<li>
									<img src="http://atleticafranciacorta.com/assets/images/members/profile/2_3_1_avatar.jpg" title="" alt="" />
									<section class="list-left">
									<h5 class="title">Mike Jones</h5>

									</section>
									<section class="list-right">
									<span class="cityname">City name</span>
									</section>
									<div class="clearfix"></div>
									</li> 
								</a>
								<a href="#seller">
									<li>
									<img src="http://www.creazo.fr/wp-content/uploads/2016/03/1458916347_ninja-background.png" title="" alt="" />
									<section class="list-left">
									<h5 class="title">Mike Jones</h5>

									</section>
									<section class="list-right">
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
												
								<div class="post-ad-form">
				
				
				
				<form>
					<label>Old Password</label>
					<input type="text" class="phone" placeholder=""/>
					<div class="clearfix"></div>
					
					<label>New Password</label>
					<input type="text" class="phone" placeholder=""/>
					<div class="clearfix"></div>
					
					<label>Retype New Password</label>
					<input type="text" class="phone" placeholder=""/>
					<div class="clearfix"></div>
					
					<div class="clearfix"></div>
					
					<input type="submit" value="Update Changes"/>
					<div class="clearfix"></div>
					
				</form>
			</div>
					
						</div>
							</div>
						</div>
					  </div>
					</div>
				</div>
				</div>
		</div>	
	</div>
	</div>
	</div>
	</div>
        )
    }
}

export default Seller;