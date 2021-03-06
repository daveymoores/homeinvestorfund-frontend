<?php include 'components/head.php'; ?>
<?php include 'components/navigation.php'; ?>

<section class="hero--contact">
	<div class="centered-heading">
		<heading>
			<h2>Contact us today</h2>
		</heading>
	</div>

	<div class="section-bg section-bg__hero-contact">
		<img src="./dist/images/bg/hero-contact.png" alt="" />
	</div>
</section>

<section class="contact--map">
	<div class="map--unit" data-widget="contact-map"></div>
</section>

<section class="ghost-panel--section-padding">
	<div class="container">
		<div class="row" data-widget="equal-heights">
			<div class="col-md-4">
				<div class="ghost-panel eq">
					<div class="ghost-panel--content">
						<h4>Drop us an email</h4>
						<a href="mailto:hi@homeinvestor.fund">hi@homeinvestor.fund</a>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="ghost-panel eq">
					<div class="ghost-panel--content">
						<h4>homeinvestor.fund</h4>
						<ul>
							<li>60 Gresham Street</li>
							<li>London</li>
							<li>EC2V 7BB</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="ghost-panel eq">
					<div class="ghost-panel--content">
						<h4>Find us on Twitter</h4>
						<a href="">Find out more</a>
						<svg class="ghost-panel--twitter-icon">
							<use xlink:href="./dist/svg/svg-sprite.svg#twitter-logo" />
						</svg>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="contact--form">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="centered-heading">
					<heading>
						<h2>Get in touch</h2>
					</heading>
				</div>
			</div>
		</div>

		<div class="formtype--contact-us">
			<div class="row">
				<div class="col-sm-offset-1 col-sm-10">
					<form class="formtype">
						<div class="row">
							<div class="col-md-6">
								<input type="text" placeholder="Name" />
							</div>
							<div class="col-md-6">
								<input type="email" placeholder="Email" />
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								<textarea type="text" placeholder="Message"></textarea>
								<button class="btn__primary--red right">Send</button>
							</div>
						</div>
					</form>
				</div>
			</div>

		</div>
	</div>
</section>

<?php include 'components/call-out.php'; ?>

<?php include 'components/footer.php'; ?>

<?php include 'components/foot.php'; ?>
