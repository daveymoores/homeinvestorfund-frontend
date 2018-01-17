<?php include 'components/head.php'; ?>

<?php include 'components/navigation.php'; ?>

<section class="fw-wrap--light-blue short">
	<div class="container">
		<div class="row">
			<div class="col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10">
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
						<option value="location_one">Area one</option>
						<option value="location_two">Area two</option>
						<option value="location_three">Area three</option>
						<option value="location_four">Area four</option>
					</select>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="map--wrapper">
	<div class="properties" id="propertiesHook">
		<div class="container">
			<div class="row">
				<div class="col-md-12">

					<div class="properties__container"></div>
					<a href="#_" class="btn__primary--red">Load more</a>

				</div>
			</div>
		</div>
	</div>

	<div class="map--unit" data-widget="property-map"></div>

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
		</div>
		<div class="map__overlay--contents">
			<h5></h5>
			<p></p>

			<a href="#" class="btn__primary--red" data-widget="trigger-redirect">Invest in the fund now</a>
		</div>
	</div>
	<div class="map__overlay--bg properties" id="overlayBackgroundHook"></div>
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

		<div class="row" data-widget="equal-heights">
			<div class="col-md-4">
				<div class="feature-panel yellow eq">
					<svg class="feature-panel--balloons">
						<use xlink:href="./dist/svg/svg-sprite.svg#balloons" />
					</svg>
					<h3>The is a title</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				</div>
			</div>
			<div class="col-md-4">
				<div class="feature-panel teal eq">
					<svg class="feature-panel--houses">
						<use xlink:href="./dist/svg/svg-sprite.svg#houses" />
					</svg>
					<h3>The is a title</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				</div>
			</div>
			<div class="col-md-4">
				<div class="feature-panel blue eq">
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

<?php include 'components/option-panel.php'; ?>

<?php include 'components/call-out.php'; ?>

<?php include 'components/footer.php'; ?>

<?php include 'components/foot.php'; ?>
