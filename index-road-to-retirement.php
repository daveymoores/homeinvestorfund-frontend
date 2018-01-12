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
					<h1><span class="colorpick--red">Finally, some good news </span> for first time buyers</h1>
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
							<ul>
								<li>Start small - invest from as little as</li>
								<li class="lrg">£100</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="fw-wrap--blue double-padding index-bg--retirement">
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

	<img src="./dist/images/index-blue-bg/index-road-to-retirement/ladders.png" class="index-bg--mob" />
	<img src="./dist/images/index-blue-bg/index-road-to-retirement/ladders.png" class="index-bg--tablet" />
	<img src="./dist/images/index-blue-bg/index-road-to-retirement/ladders.png" class="index-bg--desktop" />
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
					<svg class="feature-panel--house-safe">
						<use xlink:href="./dist/svg/svg-sprite.svg#tap" />
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
				<div class="feature-panel yellow eq">
					<svg class="feature-panel--balloons">
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
