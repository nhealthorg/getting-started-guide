export default defineNuxtConfig({
  	extends: [
		'./getting-started',
		'@nhealth/app',
		"@nhealth/admin"
  	],
	modules: [
		'@nuxt/ui-pro',
		"@nuxt/content",
		"@nuxt/eslint",
		"@nuxt/image",
	],
	css: [
		'~/assets/css/tailwind.css',
  	],
	fhir: {
		serverUrl: {
			server: 'http://localhost:8080',
			browser: 'http://localhost:8080'
		}
  	},
	content: {
		build: {
			markdown: {
				toc: {
					searchDepth: 1
				}
			}
		}
	},
})