<script>
	export let title = 'Untitled post';
	export let href = '#';
	/** @type {string} */
	export let stringData; // we intentionally force this prop to be a string, not children, because dont want to allow arbitrary display of components for such a small contained component. feel free to refactor this if you need to
</script>

<a
	class=" w-full transform rounded-xl no-underline
  transition-all hover:scale-[1.01] 
md:w-1/3"
	{href}
>
	<div class="dark:gradient-45 gradient-light-45 rounded-lg p-1">
		<div class="flex h-full flex-col justify-between rounded-lg p-4  dark:bg-bg">
			<div class="flex flex-col justify-between md:flex-row">
				<h4 class="w-full  text-200 dark:text-200 sm:mb-10 md:text-lg">
					{title}
				</h4>
			</div>
			<div class="capsize flex items-center text-200 dark:text-200">
				{stringData}
			</div>
		</div>
	</div>
</a>
