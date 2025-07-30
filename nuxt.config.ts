export default defineNuxtConfig({
  	extends: [
		'@nhealth/app',
		"@nhealth/admin"
  	],
	modules: [
		'@nuxt/ui',
		"@nuxt/content",
		"@nuxt/eslint",
		"@nuxt/image",
	],
	css: [
    	'~/assets/main.css'
  	],
	fhir: {
		serverUrl: {
			server: 'http://localhost:8080',
			browser: 'http://localhost:8080'
		}
  	}
})