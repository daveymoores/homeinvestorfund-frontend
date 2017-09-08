<?php include 'components/head.php'; ?>
<?php include 'components/navigation.php'; ?>

<section class="hero--news-content-hub">
	<div class="centered-heading">
		<heading>
			<h2>Financial Advisor News</h2>
		</heading>
	</div>
</section>

<section data-widget="matrix" class="grid--wrapper">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<ul class="grid--navigation">
					<li class="active"><a href="" data-filter="">All posts</a></li>
					<li><a href="" data-filter=".video">Video</a></li>
					<li><a href="" data-filter=".downloads">Downloads</a></li>
					<li><a href="" data-filter=".category">Category 2</a></li>
				</ul>
			</div>
		</div>
		<div class="row">
			<div class="grid--matrix grid">
				<div class="grid-item grid-item--width2"></div>
				<div class="grid-item video"></div>
				<div class="grid-item"></div>

				<div class="grid-item video"></div>
				<div class="grid-item video"></div>
				<div class="grid-item grid-item--width2 downloads"></div>

				<div class="grid-item grid-item--width2 downloads"></div>
				<div class="grid-item category"></div>
				<div class="grid-item"></div>

				<div class="grid-item category"></div>
				<div class="grid-item category"></div>
				<div class="grid-item grid-item--width2 category"></div>
			</div>
		</div>

		<div class="row">
			<div class="col-md-12">
				<a href="" class="btn__primary--teal btn--centered">See more</a>
			</div>
		</div>
	</div>
</section>

<?php include 'components/call-out.php'; ?>

<?php include 'components/footer.php'; ?>

<?php include 'components/foot.php'; ?>
