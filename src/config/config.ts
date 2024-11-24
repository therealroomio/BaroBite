// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string;
	alt: string;
  }
  
  export type Mode = 'auto' | 'light' | 'dark';
  
  export interface Config {
	siteTitle: string;
	siteDescription: string;
	ogImage: string;
	logo: Logo;
	canonical: boolean;
	noindex: boolean;
	mode: Mode;
	scrollAnimations: boolean;
  }
  
  export const configData: Config = {
	siteTitle: 'BaroBite | AI-Powered Marketing Automation SaaS',
	siteDescription:
	  'BaroBite leverages AI to automate and optimize your business marketing, social media growth, and email list building. Boost your digital presence with our intelligent SaaS platform.',
	ogImage: '/og-BaroBite-saas.jpg',
	logo: {
	  src: '/logo.svg',
	  alt: 'BaroBite logo',
	},
	canonical: true,
	noindex: false,
	mode: 'light',
	scrollAnimations: true,
  };
  
