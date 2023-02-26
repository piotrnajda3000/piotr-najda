<script>
	import '../tailwind.scss';
	import Nav from '../components/Nav.svelte';
	import { SITE_TITLE } from '$lib/siteConfig';
</script>

<svelte:head>
	<link
		rel="alternate"
		type="application/rss+xml"
		title={'RSS Feed for ' + SITE_TITLE}
		href="/rss.xml"
	/>
</svelte:head>

<div class="flex  flex-col justify-center  dark:bg-bg">
	<Nav />
</div>
<main class="flex flex-col justify-center  dark:bg-bg">
	<slot />
</main>
<!-- <footer>
	<hr />
	<p class="text-center">
		This blog is based on the
		<a href="https://swyxkit.netlify.app/">swyxkit</a>
		template.
	</p>
</footer> -->
