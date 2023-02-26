<script>
	import { MY_TWITTER_HANDLE, SITE_URL } from '$lib/siteConfig';
	// import Comments from '../../components/Comments.svelte';

	// import 'prism-themes/themes/prism-shades-of-purple.min.css';
	import Newsletter from '../../components/Newsletter.svelte';
	import Reactions from '../../components/Reactions.svelte';
	import LatestPosts from '../../components/LatestPosts.svelte';
	import { page } from '$app/stores';

	// https://svelte-put.vnphanquang.com/docs/toc
	import { toc, createTocStore } from '@svelte-put/toc';
	import TableOfContents from './TableOfContents.svelte';
	import utterances, { injectScript } from './loadUtterances';

	// table of contennts
	const tocStore = createTocStore();

	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {import('$lib/types').ContentItem} */
	$: json = data.json; // warning: if you try to destructure content here, make sure to make it reactive, or your page content will not update when your user navigates

	export let commentsEl;
	$: issueNumber = json?.ghMetadata?.issueUrl?.split('/')?.pop();

	$: canonical = json?.canonical ? json.canonical : SITE_URL + $page.url.pathname;

	// customize this with https://tailgraph.com/
	// discuss this decision at https://github.com/sw-yx/swyxkit/pull/161
	$: image =
		json?.image ||
		`https://og.tailgraph.com/og
															?fontFamily=Roboto
															&title=${encodeURIComponent(json?.title)}
															&titleTailwind=font-bold%20bg-transparent%20text-7xl
															&titleFontFamily=Poppins
															${json?.subtitle ? '&text=' + encodeURIComponent(json?.subtitle) : ''}
															&textTailwind=text-2xl%20mt-4
															&logoTailwind=h-8
															&bgUrl=https%3A%2F%2Fwallpaper.dog%2Flarge%2F20455104.jpg
															&footer=${encodeURIComponent(SITE_URL)}
															&footerTailwind=text-teal-900
															&containerTailwind=border-2%20border-orange-200%20bg-transparent%20p-4
															`.replace(/\s/g, ''); // remove whitespace
</script>

<svelte:head>
	<title>{json.title}</title>
	<meta name="description" content="swyxkit blog" />
	<!-- reference: https://gist.github.com/whitingx/3840905 -->

	<link rel="canonical" href={canonical} />
	<meta property="og:url" content={canonical} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={json.title} />
	{#if json.subtitle}
		<meta property="subtitle" content={json.subtitle} />
	{/if}
	<meta name="Description" content={json.description} />
	<meta property="og:description" content={json.description} />
	<meta name="twitter:card" content={json.image ? 'summary_large_image' : 'summary'} />
	<meta name="twitter:creator" content={'@' + MY_TWITTER_HANDLE} />
	<meta name="twitter:title" content={json.title} />
	<meta name="twitter:description" content={json.description} />
	<meta property="og:image" content={image} />
	<meta name="twitter:image" content={image} />
</svelte:head>

<TableOfContents {tocStore} />

<article
	use:toc={{ store: tocStore, anchor: false, observe: true, selector: ':where(h1, h2, h3)' }}
	class="swyxcontent prose mx-auto mb-32 w-full max-w-none items-start
justify-center  dark:prose-invert "
>
	<h1 class="mt-3 mb-0 text-center text-4xl text-black dark:text-white">
		{json.title}
	</h1>
	<div class="flex w-full justify-between sm:items-start md:flex-row md:items-center">
		<p class="ml-auto  flex items-center self-end text-sm text-gray-600 dark:text-gray-400">
			<a
				href={json.ghMetadata.issueUrl}
				rel="external noreferrer"
				class="no-underline"
				target="_blank"
			>
				{new Date(json.date).toISOString().slice(0, 10)}
			</a>
		</p>
	</div>
	<div
		class="gradient my-2 -mx-4 flex h-1 w-[95vw] max-w-[611px] 
	sm:mx-0"
	/>
	{@html json.content}
</article>
<div class="mx-auto ">
	{#if json?.tags?.length}
		<p class="mb-4 flex-auto  !text-slate-400">
			Tagged in:
			{#each json.tags as tag}
				<span class="px-1">
					<a href={`/blog?filter=hashtag-${tag}`}>#{tag}</a>
				</span>
			{/each}
		</p>
	{/if}
	<div class="prose mb-12 max-w-full border-t border-b border-blue-800 p-4 dark:prose-invert">
		{#if json.ghMetadata.reactions.total_count > 0}
			Reactions: <Reactions
				issueUrl={json.ghMetadata.issueUrl}
				reactions={json.ghMetadata.reactions}
			/>
		{:else}
			<a href={json.ghMetadata.issueUrl}>You can leave a reaction</a>
		{/if}
	</div>
	<div
		class="mb-8 text-black dark:text-white "
		bind:this={commentsEl}
		use:utterances={{ number: issueNumber }}
	>
		Loading comments...
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<button
			class="my-4 rounded-lg bg-blue-200 p-2 text-black hover:bg-blue-100"
			on:click={() => injectScript(commentsEl, issueNumber)}
			on:mouseover={() => injectScript(commentsEl, issueNumber)}>Load now</button
		>
		<!-- <Comments ghMetadata={json.ghMetadata} /> -->
	</div>
	<!-- <Newsletter /> -->
	<!-- <LatestPosts items={data.list} /> -->
</div>

<style>
	/* https://ryanmulligan.dev/blog/layout-breakouts/ */
	.gradient {
		background-image: linear-gradient(
			90deg,
			hsl(240deg 94% 53%) 0%,
			hsl(282deg 100% 43%) 21%,
			hsl(306deg 100% 41%) 30%,
			hsl(322deg 100% 47%) 39%,
			hsl(331deg 100% 50%) 46%,
			hsl(338deg 100% 50%) 54%,
			hsl(348deg 100% 55%) 61%,
			hsl(11deg 100% 60%) 69%,
			hsl(24deg 100% 56%) 79%,
			hsl(34deg 94% 53%) 100%
		);
	}

	.swyxcontent {
		--gap: clamp(1rem, 6vw, 3rem);
		--full: minmax(var(--gap), 1fr);
		/* --content: min(611px, 100% - var(--gap) * 2); */
		--content: 611px;
		--popout: minmax(0, 2rem);
		--feature: minmax(0, 5rem);

		display: grid;
		grid-template-columns:
			[full-start] var(--full)
			[feature-start] 0rem
			[popout-start] 0rem
			[content-start] var(--content) [content-end]
			[popout-end] 0rem
			[feature-end] 0rem
			var(--full) [full-end];
	}

	@media (min-width: 768px) {
		.swyxcontent {
			grid-template-columns:
				[full-start] var(--full)
				[feature-start] var(--feature)
				[popout-start] var(--popout)
				[content-start] var(--content) [content-end]
				var(--popout) [popout-end]
				var(--feature) [feature-end]
				var(--full) [full-end];
		}
	}

	:global(.swyxcontent > *) {
		grid-column: content;
	}

	article :global(pre) {
		grid-column: feature;
		margin-left: -1rem;
		margin-right: -1rem;
	}

	/* hacky thing because otherwise the summary>pre causes overflow */
	article :global(summary > pre) {
		max-width: 90vw;
	}

	article :global(.popout) {
		grid-column: popout;
	}
	article :global(.feature) {
		grid-column: feature;
	}
	article :global(.full) {
		grid-column: full;
		width: 100%;
	}

	article :global(.admonition) {
		@apply border-4 border-red-500 p-8;
	}

	/* fix github codefence diff styling from our chosen prismjs theme */
	article :global(.token.inserted) {
		background: #00ff0044;
	}

	article :global(.token.deleted) {
		background: #ff000d44;
	}
</style>
