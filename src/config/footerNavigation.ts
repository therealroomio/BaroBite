// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'BaroBite',
		aboutText:
			'BaroBite leverages AI to automate and optimize your business marketing, social media growth, and email list building. Our intelligent SaaS platform helps you boost your digital presence and drive customer engagement.',
		logo: {
			src: '/logo.svg',
			alt: 'The BaroBite logo',
			text: 'BaroBite'
		}
	},
	footerColumns: [
		{
			category: 'Product',
			subCategories: [
				{
					subCategory: 'Features',
					subCategoryLink: '/features'
				},
				{
					subCategory: 'Pricing',
					subCategoryLink: '/pricing'
				},
				{
					subCategory: 'AI Marketing',
					subCategoryLink: '/ai-marketing'
				},
				{
					subCategory: 'Social Growth',
					subCategoryLink: '/social-growth'
				},
				{
					subCategory: 'Email Automation',
					subCategoryLink: '/email-automation'
				}
			]
		},
		{
			category: 'Company',
			subCategories: [
				{
					subCategory: 'About Us',
					subCategoryLink: '/about'
				},
				{
					subCategory: 'Blog',
					subCategoryLink: '/blog'
				},
				{
					subCategory: 'Careers',
					subCategoryLink: '/careers'
				}
			]
		},
		{
			category: 'Support',
			subCategories: [
				{
					subCategory: 'Contact',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'FAQ',
					subCategoryLink: '/faq'
				},
				{
					subCategory: 'Documentation',
					subCategoryLink: '/docs'
				}
			]
		}
	],
	subFooter: {
		copywriteText: '© BaroBite 2024. All rights reserved.'
	}
}
