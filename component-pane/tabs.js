Vue.component('tabs', {
	template: '\
		<div class="tabs">\
			<div class="tabs-bar">\
				<!-- 标签页标题，这里要用v-for -->\
				<div \
					:class="tabCls(item)" \
					v-for="(item, index") in navList" \
					@click="handleChange(index)">\
						{{ item.lable }}\
				</div>\
			</div>\
			<div class="tabs-content">\
				<!-- 这里的slot就是嵌套的pane -->\
				<slot></slot>\
			</div>\
		</div>',
	props: {
		value: {
			type: [String, Number]
		}
	},
	data: function() {
		return {
			currentValue: this.value,
			navList: []
		}
	},
	watch: {
		currentValue: function(val) {
			this.updateStatus();
		},
		value: function(val) {
			this.currentValue = val;
		}
	},
	methods: {
		tabCls: function(item) {
			return [
				'tabs-tab',
				{
					'tabs-tab-active': item.name === this.currentValue
				}
			]
		},
		getTabs: function() {
			return this.$children.filter(function(item) {
				return item.$options.name === 'pane';
			});
		},
		updateNav: function() {
			this.navList = [];
			var _this = this;

			this.getTabs.forEach(function(pane, index){
				_this.navList.push({
					lable: pane.lable,
					name: pane.name || index
				});
				if(!pane.name) pane.name = index;
				if(index === 0) {
					if(!_this.currentValue) {
						_this.currentValue = pane.name || index;
					}
				}
			});
			this.updateStatus();
		},
		updateStatus: function(event) {
			var tabs = this.getTabs();
			var _this = this;

			tabs.forEach(function(tab) {
				return tab.show = tab.name === _this.currentValue;
			});
		},
		handleChange: function(index) {
			var nav = this.navList[index];
			var name = nav.name;
			this.currentValue = name;
			this.$emit('input', name);
			this.$emit('on-click', name);
		}
	}
})