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
					<h1><span class="colorpick--red" style="display: block;">Bye bye </span> buy-to-let</h1>
					<p class="light">As proven properly investors, we’ve opened the doors to our £54m residential property fund and we’re helping thousands of customers like you invest in a whole new way.</p>
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
							<p>Intelligent fund management</p>
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
					<div class="attributes__unit">
						<div class="attributes__unit--icon">
							<svg>
								<use xlink:href="./dist/svg/svg-sprite.svg#stack-red" />
							</svg>
						</div>
						<div class="attributes__unit--p">
							<p>Diversity in your portfolio</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="fw-wrap--blue double-padding index-bg--smart-alec">
	<div class="container">
		<div class="row">
			<div class="col-md-6 col-sm-12">
				<heading>
					<h2>Why own one property when you can own streetfuls?</h2>
				</heading>
				<p class="light">We know you want to expand your investment portfolio and you may be considering buy-to-let. You want your money to be safe and to be managed intelligently, but also for it to work hard. In today’s unpredictable climate though, many investment opportunities are overly complex  and lacking in rewards. Being a landlord comes with its own complications too.</p>
			</div>
			<div class="col-md-6 col-sm-12"></div>
		</div>
	</div>

	<img src="./dist/images/index-blue-bg/index-smart-alec/row-houses-mob.png" class="index-bg--mob" />
	<img src="./dist/images/index-blue-bg/index-smart-alec/row-houses-tablet.png" class="index-bg--tablet" />
	<img src="./dist/images/index-blue-bg/index-smart-alec/row-houses.png" class="index-bg--desktop" />
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

<?php include 'components/homepage-faqs.php'; ?>

<?php include 'components/guide-sign-up.php'; ?>

<?php include 'components/call-out.php'; ?>

<?php include 'components/nav-options.php'; ?>

<?php include 'components/footer.php'; ?>

<?php include 'components/foot.php'; ?>
