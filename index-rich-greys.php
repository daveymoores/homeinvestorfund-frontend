<?php include 'components/head.php'; ?>
<?php include 'components/navigation.php'; ?>

<section class="fw-wrap--light-blue calculator--wrapper">
	<div class="section-bg section-bg__hero-home">
		<img src="./dist/images/bg/hero-home.png" alt="" />
	</div>

	<div class="container">
		<div class="row">
			<div class="col-md-6 col-sm-6">
				<heading>
					<h1>Investing for <span class="colorpick--red" style="display: block;">your family's future</span></h1>
					<p class="light">We’ve opened the doors to a £54m residential property fund to help thousands of customers like you invest and save in a whole new way.</p>
				</heading>
			</div>
			<div class="col-md-6 col-sm-6">

				<div class="video-display" data-widget="video-display">
					<div class="video-display--player" data-type="vimeo" data-video-id="143418951"></div>
					<a href="#" class="video-prompt--btn">
						<span></span>
					</a>
				</div>

			</div>
		</div>
	</div>

	<div class="map__overlay map__overlay--home" data-widget="info-overlay">
		<a href="#" class="map__overlay--close"><span>+</span></a>
		<div class="map__overlay--title">
			<h4>How were these figures calculated?</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		</div>
	</div>
	<div class="map__overlay--bg" id="overlayBackgroundHook"></div>
</section>

<div class="calculator--outer-wrapper">
	<section class="calculator--section">
		<div class="container">
			<div class="row">
				<div class="col-md-12">

					<?php include 'components/investment-calculator.php'; ?>

				</div>
			</div>
		</div>
	</section>
</div>

<section class="container">
	<div class="row">
		<div class="col-md-12">
			<div class="attributes">
				<div class="attributes__container">
					<div class="attributes__unit">
						<div class="attributes__unit--icon">
							<svg>
								<use xlink:href="./dist/svg/svg-sprite.svg#tick-red" />
							</svg>
						</div>
						<div class="attributes__unit--p">
							<p>homeinvestor.fund is authorised and regulated by the Financial Conduct Authority</p>
						</div>
					</div>
					<div class="attributes__unit">
						<div class="attributes__unit--icon">
							<svg>
								<use xlink:href="./dist/svg/svg-sprite.svg#stack-red" />
							</svg>
						</div>
						<div class="attributes__unit--p">
							<p>Lump sum investment</p>
						</div>
					</div>
					<div class="attributes__unit">
						<div class="attributes__unit--icon fscs">
							<svg>
								<use xlink:href="./dist/svg/svg-sprite.svg#fscs" />
							</svg>
						</div>
						<div class="attributes__unit--p">
							<p>Covered by the Financial Services Compensation Scheme</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="fw-wrap--blue double-padding index-bg--rich-greys">
	<div class="container">
		<div class="row">
			<div class="col-md-6 col-sm-12">
				<heading>
					<h2>A simple investment choice to save for your first home</h2>
				</heading>
				<p class="light">We know you want to start saving for your first home. You want your money to be safe, but also to work hard. But with today’s low interest rates, ISAs offer less of an opportunity to get you closer to owning your first home.</p>
			</div>
			<div class="col-md-6 col-sm-12"></div>
		</div>
	</div>

	<img src="./dist/images/index-blue-bg/index-rich-greys/coin-wall-mob.png" class="index-bg--mob" />
	<img src="./dist/images/index-blue-bg/index-rich-greys/coin-wall-tablet.png" class="index-bg--tablet" />
	<img src="./dist/images/index-blue-bg/index-rich-greys/coin-wall.png" class="index-bg--desktop" />
</section>

<section class="fw-wrap">
	<div class="container">
		<div class="row">
			<div class="col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10">
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
				<div class="feature-panel blue eq">
					<svg class="feature-panel--balloons">
						<use xlink:href="./dist/svg/svg-sprite.svg#money-bag" />
					</svg>
					<h3>The is a title</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				</div>
			</div>
			<div class="col-md-4">
				<div class="feature-panel teal eq">
					<svg class="feature-panel--tap">
						<use xlink:href="./dist/svg/svg-sprite.svg#tap" />
					</svg>
					<h3>The is a title</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				</div>
			</div>
			<div class="col-md-4">
				<div class="feature-panel yellow eq">
					<svg class="feature-panel--houses">
						<use xlink:href="./dist/svg/svg-sprite.svg#balloons" />
					</svg>
					<h3>The is a title</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				</div>
			</div>
		</div>

		<?php include 'components/map-teaser.php'; ?>

	</div>
</section>

<?php include 'components/homepage-carousel.php'; ?>

<?php include 'components/homepage-faqs.php'; ?>

<?php include 'components/guide-sign-up.php'; ?>

<?php include 'components/call-out.php'; ?>

<?php include 'components/nav-options.php'; ?>

<?php include 'components/footer.php'; ?>

<?php include 'components/foot.php'; ?>
