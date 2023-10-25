export default {
	test:async () =>{
		Api1.run()
		showModal('Modal1')
	},
	setupTable: () => {
		postWindowMessage({
			message: "update_table",
			
		}, 'Iframe1', '*')
	},
	emptyTable: () => {
	window.postMessage({
			message: "update_table22",
			config: {
				isEmpty: true,
				columns: [
					{ title: "Email", field: "email" },
					{ title: "Cell", field: "cell" },
					{ title: "Gender", field: "gender" },
					{ title: "Phone", field: "phone" }
				],
				placeholder: "No Data available",
				footerElement:"<button>Custom Button</button>"
			}
		}, 'Iframe1', '*')
	}
}