<?php include 'components/head.php'; ?>

<?php include 'components/navigation.php'; ?>

<section class="fw-wrap--light-blue short">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="centered-heading">
					<heading>
						<h2>New properties are added regularly</h2>
					</heading>
					<p>We’re always finding new opportunities for you to invest. Because we mostly select new build properties, we can keep maintenance costs low.</p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<div class="formtype--select" id="locationMobSelectHook">
					<select>
						<option value="location_all">Location all</option>
						<option value="location_one">Location one</option>
						<option value="location_two">Location two</option>
						<option value="location_three">Location three</option>
						<option value="location_four">Location four</option>
						<option value="location_five">Location five</option>
						<option value="location_six">Location six</option>
					</select>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="map--wrapper">
	<div class="map--unit"></div>
	<div class="properties" id="propertiesHook">
		<div class="container">
			<div class="row">
				<div class="col-md-12">

					<div class="properties__panel">
						<div class="properties__panel--img-cont">
							<img src="./dist/images/house-pics/placeholder-2.jpg" alt="" />
						</div>
						<p>Ferndale Road</p>
					</div>

					<div class="properties__panel">
						<div class="properties__panel--img-cont">
							<img src="./dist/images/house-pics/placeholder-2.jpg" alt="" />
						</div>
						<p>Ferndale Road</p>
					</div>

					<div class="properties__panel">
						<div class="properties__panel--img-cont">
							<img src="./dist/images/house-pics/placeholder-2.jpg" alt="" />
						</div>
						<p>Ferndale Road</p>
					</div>

					<a href="#_" class="btn__primary--red">Load more</a>
				</div>
			</div>
		</div>
	</div>

	<div class="map__overlay" id="mapOverlayHook">
		<div class="map__overlay--loading"><div class="spinner"></div></div>
		<a href="#" class="map__overlay--close"><span>+</span></a>
		<div class="map__overlay--title">
			<h4></h4>
		</div>
		<div class="map__overlay--gallery">
			<div class="map__overlay--spotlight">
				<div class="map__overlay--carousel-track"></div>
			</div>
			<div class="map__overlay--thumbnails"></div>
		</div>
		<div class="map__overlay--contents">
			<p></p>
			<ul>
				<li></li>
				<li></li>
				<li></li>
			</ul>

			<a href="#" class="btn__primary--red">Invest in the fund now</a>
		</div>
	</div>
</section>

<section class="fw-wrap">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="centered-heading">
					<heading>
						<h2>A new home for your money</h2>
					</heading>
					<p>We know you want to invest your money - for your pension, your children and for your future. Your want your money to be safe, but also to work hard. But in today’s unpredictable climate, many investment opportunities aren’t all that rewarding.</p>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-md-4">
				<div class="feature-panel yellow">
					<svg class="feature-panel--balloons">
						<use xlink:href="./dist/svg/svg-sprite.svg#balloons" />
					</svg>
					<h3>The is a title</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				</div>
			</div>
			<div class="col-md-4">
				<div class="feature-panel teal">
					<svg class="feature-panel--houses">
						<use xlink:href="./dist/svg/svg-sprite.svg#houses" />
					</svg>
					<h3>The is a title</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				</div>
			</div>
			<div class="col-md-4">
				<div class="feature-panel blue">
					<svg class="feature-panel--house-safe">
						<use xlink:href="./dist/svg/svg-sprite.svg#house-safe" />
					</svg>
					<h3>The is a title</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				</div>
			</div>
		</div>

	</div>
</section>

<div class="attributes__wrapper">
	<?php include 'components/attributes.php'; ?>
</div>

<section class="option-panel">
	<div class="column">
		<h3>I’m a personal investor</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

		<a href="#" class="btn__primary--red">Tell me more</a>
	</div>
	<div class="column">
		<h3>I’m a financial advisor</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

		<a href="#" class="btn__primary--red">Tell me more</a>
	</div>
</section>


<?php include 'components/call-out.php'; ?>

<?php include 'components/footer.php'; ?>

<?php include 'components/foot.php'; ?>
