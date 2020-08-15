Vue.directive('clickoutside', {
	bind: function(el, binding, vnode) {
		function documentHandler(e) {
			if(el.contains(e.target)) {//判断点击的区域是否是指令所在的元素内部
				return false;
			}
			if(binding.expression) {//判断的是当前的指令v-clickoutside 有没有写表达式
				binding.value(e);
			}
		}
		el.__vueClickOutside__ = documentHandler;
		document.addEventListener('click', documentHandler);
	},
	unbind: function(el, binding) {
		document.removeEventListener('click', el.__vueClickOutside__);
		delete el.__vueClickOutside__;
	}
})