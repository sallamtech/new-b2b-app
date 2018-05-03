import React from 'react';
//import { Table } from 'react-bootstrap';
import {Form, FormControl, Button, Table, Carousel, Jumbotron} from 'react-bootstrap';

class Contact extends React.Component {
    render() {
        return (
            <div>
            
            <div class="w3layouts-breadcrumbs text-center">
		<div class="container">
			<span class="agile-breadcrumbs"><a href="#"><i class="fa fa-home home_1"></i></a> / <span>Contact</span></span>
		</div>
	</div>


	<div class="contact main-grid-border">
		<div class="container">
			<h2 class="w3-head text-center">Contact Us</h2>
			<section id="hire">    
				<form id="filldetails" action="#" method="post">
					  <div class="field name-box">
							<input type="text" name="name" placeholder="Who Are You?"/>
							<label>Name</label>
							<span class="ss-icon">check</span>
					  </div>
					  
					  <div class="field email-box">
							<input type="text" name="email" placeholder="example@email.com"/>
							<label>Email</label>
							<span class="ss-icon">check</span>
					  </div>
					  
					  <div class="field ad-ID">
							<input type="text" name="id" placeholder="Ad ID"/>
							<label>Ad ID</label>
							<span class="ss-icon">check</span>
					  </div>
					  
					  <div class="field phonenum-box">
							<input type="text" name="tel" placeholder="Phone Number"/>
							<label>Phone</label>
							<span class="ss-icon">check</span>
					  </div>

					  <div class="field msg-box">
							<textarea id="msg" rows="4" placeholder="Your message goes here..."></textarea>
							<label>Your Msg</label>
							<span class="ss-icon">check</span>
					  </div>

					 
			  </form>
			<div class="upload">
						 <h3 class="tlt">Add Attachment:</h3>
						<form id="upload" method="post" action="#" enctype="multipart/form-data">
			<div id="drop">
				<a>Choose file</a>
				<input type="file" name="upl" multiple />
			</div>

			<ul class="show">

			</ul>
		</form>	
		<div class="clear"></div>
		<form class="submit">
		<input class="button" type="submit" value="Send" />
		</form>

						</div>
			</section>
			
		</div>	

		<div class="container">
			<div class="agileits-get-us">
				<ul>
					<li><i class="fa fa-map-marker" aria-hidden="true"></i>123 Street Address</li>
					<li><i class="fa fa-phone" aria-hidden="true"></i>555-555-5555</li>
					<li><i class="fa fa-envelope" aria-hidden="true"></i><a href="mailto:info@example.com">mail@example.com</a></li>
				</ul>
			</div>
		</div>

		<div class="map-w3layouts">
			<h3>Location</h3>
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123488.79906772947!2d-17.53586615840739!3d14.711179976658123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f5b3c5bb71%3A0xb17c17d92d5db21f!2sDakar%2C+Senegal!5e0!3m2!1sen!2sus!4v1513665406245" allowfullscreen=""></iframe>
		</div>
	</div>
	</div>
        )
    }
}

export default Contact;