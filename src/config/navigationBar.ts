// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.svg',
		alt: 'The BaroBite logo',
		text: 'BaroBite'
	},
	navItems: [
		{ name: 'Home', link: '/' },
		{ name: 'Features', link: '/features' },
		{ name: 'Pricing', link: '/pricing' },
		{
			name: 'Solutions',
			link: '#',
			submenu: [
				{ name: 'AI Marketing', link: '/ai-marketing' },
				{ name: 'Social Growth', link: '/social-growth' },
				{ name: 'Email Automation', link: '/email-automation' }
			]
		},
		{ name: 'Blog', link: '/blog' },
		{ name: 'Contact', link: '/contact' }
	],
	navActions: [{ name: 'Get Started', link: '/signup', style: 'primary', size: 'lg' }]
}
