module.exports =  `
// 每次构建 CLI 自动生成，切勿修改（修改后，构建时也将重写此文件）。
import TripPage from './{name}.vue';
import Ready from 'static/js/ready';
Ready(() => {
	//引入公共组件
	//Vue.component('crm-nav', 	require('{parents}../components/nav/nav.vue'));
	new Vue({
		el: '#js_container',
		components: {
			TripPage
		}
	})
})
`;

