export default defineAppConfig({
	ui: {
		colors: {
		  primary: 'red',
		  neutral: 'zinc'
		}
	},
	navigation: {
		main: {
			items: [{
				label: 'Getting Started',
				icon: 'i-heroicons-book-open',
				to: '/getting-started'
			},{
				label: 'FHIR Server',
				icon: 'i-heroicons:fire',
				children: [{
					label: 'System',
					to: '/system',
					icon: 'i-heroicons-square-3-stack-3d'
				},
				{
					label: 'Resources',
					to: '/resources',
					icon: 'i-heroicons-circle-stack'
				}]
			}],
		}
	}
})