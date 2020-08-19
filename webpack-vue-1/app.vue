<template>
    <div>
        <v-title title="Vue组件化"></v-title>
        <v-button @click="handleClick">点击按钮</v-button>
        <p>
            <img src="./images/image.jpg" style="width: 200px;">
        </p>
    </div>
</template>
<script>
    import vTitle from './title.vue';
    import vButton from './button.vue';

    export default {
        components: {//对象字面量缩写。当对象的key 和value名称一致时，可以缩写成一个。
            vTitle,
            vButton
        },
        methods: {
            handleClick (e) {
                console.log(e);
            }
        }
    }
</script>