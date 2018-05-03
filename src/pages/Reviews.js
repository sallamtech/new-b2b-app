import React, { Component } from 'react';

class Reviews extends React.Component {
    
    constructor() {
    super();
	    this.state = {
	      input: 'Hello'
	    };
	    
	    this.updateInput = (event) => {
		    this.setState({
		      input: event.target.value.trim()
		    })
		}
	
		this.submit = () => {
			console.log(this.text.value)
		}
    
	}
    
	  
    
    render() {
        return (
            <div>
            
            <div class="w3layouts-breadcrumbs text-center">
		<div class="container">
			<span class="agile-breadcrumbs"><a href="#"><i class="fa fa-home home_1"></i></a> / <span>Reviews</span></span>
		</div>
	</div>
            
            <div class="submit-ad main-grid-border">
		<div class="container">
			
			<Welcome text="Reviews" />
			
			<h3>{this.state.input}</h3>
        <input type="text" onChange={this.updateInput} value={this.state.input}  />
        <input type="text" ref={(input) => this.text = input } />
        <button onClick={this.submit}>Show Value</button>
			
			<div class="select-box">
				<div class="select-city-for-local-ads ads-list">
					<label>Select your city to see local reviews</label>
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
					  <option data-tokens="Mobiles">Mobiles</option>
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
					<label>Search for a specific review</label>
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
			
			
			<div class="agileinfo-ads-display col-md-9">
					<div class="wrapper">					
					<div class="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
					  <ul id="myTab" class="nav nav-tabs nav-tabs-responsive" role="tablist">
						<li role="presentation" class="active">
						  <a href="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true">
							<span class="text">Reviews</span>
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
									<span class="adprice">6 hours ago</span>
									<p class="catpath">Reviews » Positive</p>
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
									<span class="adprice">17 hours ago</span>
									<p class="catpath">Reviews » Negative</p>
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
									<span class="adprice">11 days ago</span>
									<p class="catpath">Reviews » Positive</p>
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
				</div>
				<div class="clearfix"></div>
				
				
		</div>	
	</div>
	</div>
        )
    }
}

class Welcome extends Component {
  render() {
    const { text, toggle } = this.props;
    console.log(toggle);
    return (
      <h1 className="App-title">{text}</h1>
    )
  }
}

export default Reviews;