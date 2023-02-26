/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.svelte',
		// may also want to include HTML files
		'./src/**/*.html'
	],
	darkMode: 'class',
	theme: {
		extend: {
			typography: (theme) => ({
				DEFAULT: {
					css: {
						'--tw-prose-bullets': theme('colors.black'),
						'code::before': false,
						'code::after': false,
						'h1, h2, h3, h4, h5, h6': {
							'@apply tracking-tighter font-medium': {}
						},
						h1: {
							'--tw-prose-links': theme('colors.200'),
							'@apply text-3xl': {}
						},
						h2: {
							'--tw-prose-links': 'hsl(215, 85%, 65%)',
							'@apply text-2xl': {},
							paddingBottom: '2px',
							borderBottom: '2px solid hsl(215, 85%, 65%)'
						},
						h3: {
							'--tw-prose-links': 'rgb(62, 101, 236)',
							'@apply text-2xl': {}
						},
						h4: {
							'--tw-prose-links': 'rgb(229, 181, 103)',
							'@apply text-xl': {}
						},
						h5: {
							'--tw-prose-links': 'rgb(232, 62, 62)',
							'@apply text-lg': {}
						},
						h6: {
							'@apply text-base': {}
						},
						hr: {
							'@apply text-200 border-t-2 my-3': {}
						},
						mark: {
							'@apply rounded-sm text-text-200 tracking-wide bg-highlight-cold': {},
							padding: '1px 3px',
							fontWeight: 600
						},
						pre: {
							'@apply rounded-md': {},
							padding: '1rem',
							backgroundColor: theme('colors.code.DEFAULT')
						},
						ol: {
							'@apply list-decimal': {}
						},
						'ul, ol': {
							'padding-inline-start': '20px'
						},
						'ul ul': {
							'list-style-type': 'circle'
						},
						'li, ul, ol': {
							// margin: 0
						},
						'li > img': {
							margin: 0,
							display: 'inline'
						},
						'ol > li::marker': {
							color: 'var(--tw-prose-body)'
						},
						'ul > li::marker': {
							color: 'var(--tw-prose-body)'
						},
						'ul > li > p': {
							marginTop: 0,
							marginBottom: 0
						},
						'a code': {
							color: 'unset'
						},
						table: {
							overflow: 'hidden'
						},
						blockquote: {
							fontSize: 'inherit',
							fontStyle: 'inherit',
							fontWeight: 'normal',
							'@apply p-2 pl-4 rounded-sm border-l-2 border-highlight-warm': {}
						},
						'blockquote p:first-of-type::before': {
							content: ''
						},
						'blockquote p:last-of-type::after': {
							content: ''
						}
					}
				}
			}),
			colors: {
				text: {
					DEFAULT: 'hsl(240, 0%, 78%)',
					100: 'hsl(240, 0%, 85%)',
					200: 'hsl(240, 0%, 97%)'
				},
				DEFAULT: 'hsl(240, 0%, 78%)',
				100: 'hsl(240, 0%, 85%)',
				200: 'hsl(240, 0%, 97%)',
				bg: {
					DEFAULT: 'hsl(240, 56%, 8%)',
					100: 'hsl(240, 56%, 12%)',
					200: 'hsl(240, 56%, 16%)',
					300: 'hsl(240, 56%, 25%)'
				},
				code: {
					DEFAULT: 'hsl(240, 55%, 12%)',
					100: 'hsl(240, 65%, 26%)'
				},
				highlight: {
					cold: 'hsla(240, 94%, 53%, 1)',
					warm: {
						DEFAULT: 'hsla(34, 94%, 53%, 1)',
						100: 'hsla(34, 97%, 85%, 1)'
					}
				}
			}
		}
	},
	variants: {},
	plugins: [require('@tailwindcss/typography')]
};
