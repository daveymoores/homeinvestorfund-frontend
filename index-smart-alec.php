<?php include 'components/head.php'; ?>
<?php include 'components/navigation.php'; ?>

<section class="fw-wrap--light-blue calculator--wrapper">
	<div class="container">
		<div class="row">
			<div class="col-md-6 col-sm-6">
				<heading>
					<h1><span class="colorpick--red" style="display: block;">Bye bye </span> buy-to-let</h1>
					<p class="light">As proven properly investors, we’ve opened the doors to our £54m residential property fund and we’re helping thousands of customers like you invest in a whole new way.</p>
				</heading>

				<div class="video-prompt" id="videoModalHook">
					<a href="" class="video-prompt--btn">
						<span></span>
					</a>
					<p>See how it works in 60 seconds</p>
				</div>

				<div class="video-modal" data-widget="video-modal">
					<a href="#" class="video-modal--close"><span>+</span></a>
					<div data-type="vimeo" data-video-id="143418951"></div>
					<div class="centered-heading">
						<a href="#" class="video-prompt--btn lrg">
							<span></span>
						</a>
					</div>
				</div>
				<div class="video-modal--bg" id="videoModalBgHook"></div>
			</div>
			<div class="col-md-6 col-sm-6">

				<!--investment calculator-->
				<div class="calculator" data-widget="calculator">
					<div class="calculator--section">
						<div class="calculator__amount">
							<dl>
							  <dt>An Investment 5 Years ago of...</dt>
							  <dd>£<span class="calculator__amount--unit">25,000</span></dd>
							</dl>
						</div>
						<div class="calculator--slider">
							<input
							type="range"
							min="100"
							max="150000"
							step="1000"
							data-buffer="60" />
						</div>
						<ul class="calculator--slider--range">
							<li>£<span>100</span></li>
							<li>£<span>150,000</span></li>
						</ul>
					</div>
					<div class="calculator--section">
						<p class="calculator__total--title">Would now be worth</p>
						<div class="row">
							<div class="col-md-6">
								<ul class="calculator__total">
									<li>£<span class="calculator__standard-rate">27,290</span></li>
									<li>Highstreet ISA 1.8% / year</li>
								</ul>
							</div>
							<div class="col-md-6">
								<ul class="calculator__total">
									<li class="colorpick--red">£<span class="calculator__fund-rate">34,056</span></li>
									<li>homeinvestor.fund 35.73%<br /> total return</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="calculator--section">
						<ul class="calculator--rates">
							<li>
								homeinvestor.fund
							</li>
							<li>
								<span>2016</span>
								<span>3.40%</span>
							</li>
							<li>
								<span>2015</span>
								<span>3.11%</span>
							</li>
							<li>
								<span>2014</span>
								<span>14.19%</span>
							</li>
							<li>
								<span>2013</span>
								<span>7.96%</span>
							</li>
							<li>
								<span>2012</span>
								<span>n/a</span>
							</li>
						</ul>
					</div>
					<div class="calculator--section">
						<div class="calculator--cta">
							<p><a href="" data-target>Find out</a> how these numbers were calculated</a></p>
							<a href="#" class="btn__primary--red">Get started</a>
						</div>
					</div>
				</div>
				<!--end investment calculator-->

			</div>
		</div>
	</div>

	<div class="section-bg section-bg__hero-home">
		<img src="./dist/images/bg/hero-home.png" alt="" />
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
							<p>We’re authorised by the <br />Financial Conduct Authority</p>
						</div>
					</div>
					<div class="attributes__unit">
						<div class="attributes__unit--icon">
							<svg>
								<use xlink:href="./dist/svg/svg-sprite.svg#smile-red" />
							</svg>
						</div>
						<div class="attributes__unit--p">
							<ul>
								<li class="lrg">10,000+</li>
								<li>Customers and growing</li>
							</ul>
						</div>
					</div>
					<div class="attributes__unit">
						<div class="attributes__unit--icon">
							<svg>
								<use xlink:href="./dist/svg/svg-sprite.svg#stack-red" />
							</svg>
						</div>
						<div class="attributes__unit--p">
							<ul>
								<li>Invest from as little as</li>
								<li class="lrg">£100</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="fw-wrap--blue double-padding section-bg__smart-alec">
	<div class="container">
		<div class="row">
			<div class="col-md-6 col-sm-6">
				<heading>
					<h2>Why own one property when you can own streetfuls?</h2>
				</heading>
				<p class="light">We know you want to expand your investment portfolio and you may be considering buy-to-let. You want your money to be safe and to be managed intelligently, but also for it to work hard. In today’s unpredictable climate though, many investment opportunities are overly complex  and lacking in rewards. Being a landlord comes with its own complications too.</p>
			</div>
			<div class="col-md-6 col-sm-6">

			</div>
		</div>
	</div>
</section>

<section class="fw-wrap">
	<div class="container">
		<div class="row">
			<div class="col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10">
				<div class="centered-heading">
					<heading>
						<h2>A better home for your money</h2>
					</heading>
					<p>The UK buy-to-let market can be a complicated space. Mortgage applications, high deposit demands, tax, dodgy tenants and leaky taps. homeinvestor.fund takes all that hassle out of property investment. From finding the best properties, to maintaining and the eventual re-sale  of them — it’s all managed by our expert team. Adding diversity to your portfolio and leaving with you with more time to spend doing the things you love.</p>
				</div>
			</div>
		</div>

		<div class="row" data-widget="equal-heights">
			<div class="col-md-4">
				<div class="feature-panel teal eq">
					<svg class="feature-panel--maze">
						<use xlink:href="./dist/svg/svg-sprite.svg#maze" />
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

		<?php include 'components/map-teaser.php'; ?>

	</div>
</section>

<?php include 'components/homepage-carousel.php'; ?>

<?php include 'components/homepage-video.php'; ?>

<?php include 'components/homepage-faqs.php'; ?>

<?php include 'components/guide-sign-up.php'; ?>

<?php include 'components/call-out.php'; ?>

<?php include 'components/nav-options.php'; ?>

<?php include 'components/footer.php'; ?>

<?php include 'components/foot.php'; ?>
