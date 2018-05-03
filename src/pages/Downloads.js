import React from 'react';
//import { Table } from 'react-bootstrap';
import {Form, FormControl, Button, Table, Carousel, Jumbotron} from 'react-bootstrap';

class Downloads extends React.Component {
    render() {
        return (
            <div>
            
            <div class="w3layouts-breadcrumbs text-center">
		<div class="container">
			<span class="agile-breadcrumbs"><a href="index.html"><i class="fa fa-home home_1"></i></a> / <span>Mobile app</span></span>
		</div>
	</div>
	
	<div class="mobileapp main-grid-border">
		<div class="container">
			<div class="wthree-mobile-app">
				<form action="#" method="get"> 
					<input class="text" type="tel" name="tel" placeholder="Enter Your Mobile Number" required=""/>
					<input type="submit" value="Send Download Link"/>
				</form>
			</div>
			<div class="app">
				<div class="col-md-5 app-left mpl">
					<h2>B2B mobile app on your smartphone!</h2>
					<p>Buy and Sell your business items quickly and easily straight from your phone.</p>
					<div class="agileinfo-dwld-app">
							<h6>Download The App : 
								<a href="#"><i class="fa fa-apple"></i></a>
								<a href="#"><i class="fa fa-windows"></i></a>
								<a href="#"><i class="fa fa-android"></i></a>
							</h6>
						</div>
				</div>
				<div class="col-md-7 agile-app-image">
					<img src="" alt=""/>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
		<div class="app-bottom-grids text-center">
			<div class="container">
				<div class="col-md-3 app-bottom-grid">
					<i class="fa fa-search"></i>
					<h3>Search</h3>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry's standard industry.</p>
				</div>
				<div class="col-md-3 app-bottom-grid">
					<i class="fa fa-bell-o"></i>
					<h3>Notifications</h3>
					<p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
				</div>
				<div class="col-md-3 app-bottom-grid">
					<i class="fa fa-plus"></i>
					<h3>Add ads</h3>
					<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
				</div>
				<div class="col-md-3 app-bottom-grid">
					<i class="fa fa-reply-all"></i>
					<h3>Get reply</h3>
					<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.</p>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>	
	</div>
	</div>
        )
    }
}

export default Downloads;