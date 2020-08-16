var app = new Vue({
	el: '#app',
	data: {
		columns: [
			{
				title: '姓名',
				key: 'name'
			},
			{
				title: '年龄',
				key: 'age',
				sortable: true
			},
			{
				title: '出生日期',
				key: 'birthday',
				sortable: true
			},
			{
				title: '地址',
				key: 'address'
			}
		],
		data: [
			{
				name: '王一明',
				age: 18,
				birthday: '1991-06-01',
				address: '上海市一区'
			},
			{
				name: '王二明',
				age: 19,
				birthday: '1992-06-01',
				address: '上海市二区'
			},
			{
				name: '王三明',
				age: 20,
				birthday: '1993-06-01',
				address: '上海市三区'
			},
			{
				name: '王四明',
				age: 21,
				birthday: '1994-06-01',
				address: '上海市四区'
			}
		]
	},
	methods: {
		handleAddData: function() {
			this.data.push({
				name: '张三',
				age: 35,
				birthday: '1976-06-01',
				address: '上海市四区'
			});
		}
	}
});