<template>
    <div>
        <h1>首页</h1>
        <p>{{ count }}</p>
        <p>{{ $store.state.list }}</p>
        <p>{{ list }}</p>
        <p>{{ list_2 }}</p>
        <p>{{ listCount }}</p>
        <button @click="handleIncrement(number)">+{{ this.number }}</button>
        <button @click="handleDecrement">-1</button>
        <button @click="actionHandleIncrement">+1</button>
        <button @click="actionHandleAsyncIncrement">+9</button>
        <router-link to="/about">跳转到 about</router-link>
    </div>
</template>
<script>
    export default {
    	data() {
    		return {
    			number: 5
    		}
    	},
    	computed: {
    		count() {
    			return this.$store.state.count;
    		},
    		list() {
    			return this.$store.state.list.filter(item => item<10);
    		},
    		list_2() {
    			return this.$store.getters.filteredList;
    		},
    		listCount() {
    			return this.$store.getters.listCount;
    		}
    	},
    	methods: {
    		//handleIncrement(number) {
    		//	this.$store.commit('increment', number);
    		//},
    		handleIncrement(number) {
    			this.$store.commit({
    				type: 'increment', 
    				count: number
    			});
    		},
    		handleDecrement() {
    			this.$store.commit('decrement');
    		},
    		actionHandleIncrement() {
    			this.$store.dispatch('actionsIncrement');
    		},
    		actionHandleAsyncIncrement() {
    			this.$store.dispatch('asyncIncrement');
    		}
    	}

    }
</script>