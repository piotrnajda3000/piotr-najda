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
				invert: {
					css: {
						h1: {
							'--tw-prose-links': theme('colors.200')
						},
						h2: {
							'--tw-prose-links': theme('colors.heading.2'),
							borderBottom: `2px solid ${theme('colors.heading.2')}`
						},
						blockquote: {
							'@apply border-highlight-warm': {}
						}
					}
				},
				DEFAULT: {
					css: {
						'--tw-prose-invert-bullets': theme('colors.highlight.warm'),
						'--tw-prose-invert-counters': theme('colors.highlight.warm'),
						'--tw-prose-bullets': theme('colors.black'),
						'--tw-prose-counters': theme('colors.black'),
						'code::before': false,
						'code::after': false,
						'h1, h2, h3, h4, h5, h6': {
							'@apply tracking-tighter font-medium': {}
						},

						h1: {
							'--tw-prose-links': theme('colors.text.gray.900'),
							'@apply text-3xl': {}
						},
						h2: {
							'@apply text-2xl': {},
							paddingBottom: '2px',
							borderBottom: `2px solid ${theme('colors.headingLight.2')}`,
							'--tw-prose-links': theme('colors.headingLight.2')
						},
						h3: {
							'--tw-prose-links': theme('colors.heading.3'),
							'@apply text-2xl': {}
						},
						h4: {
							'--tw-prose-links': theme('colors.heading.4'),
							'@apply text-xl': {}
						},
						h5: {
							'--tw-prose-links': theme('colors.heading.5'),
							'@apply text-lg': {}
						},
						h6: {
							'@apply text-base': {}
						},
						hr: {
							'@apply text-200 border-t-2 my-3': {}
						},
						mark: {
							'@apply rounded-md text-text-200 text-sm tracking-wide bg-highlight-warm': {},
							padding: '2px 5px'
						},
						pre: {
							'@apply rounded-md': {},
							padding: '1rem'
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
							'@apply p-2 pl-4 rounded-sm border-l-2 border-gray-300': {}
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
					300: 'hsl(240, 56%, 25%)',
					light: 'hsl(217, 97%, 97%)'
				},
				code: {
					DEFAULT: 'hsl(207deg 95% 8%)',
					100: 'hsl(207deg 95% 16%)'
				},
				highlight: {
					cold: 'hsla(240, 94%, 53%, 1)',
					warm: {
						DEFAULT: 'hsla(30, 94%, 55%, 1)',
						100: 'hsla(34, 97%, 85%, 1)'
					}
				},
				heading: {
					1: 'hsl(240, 0%, 97%)',
					2: 'hsl(192, 94%, 78%)',
					3: 'hsl(227, 94%, 55%)',
					4: 'hsl(30, 94%, 55%)',
					5: 'hsl(0, 94%, 55%)'
				},
				headingLight: {
					2: 'hsl(217, 94%, 58%)'
				}
			}
		}
	},
	variants: {},
	plugins: [require('@tailwindcss/typography')]
};
