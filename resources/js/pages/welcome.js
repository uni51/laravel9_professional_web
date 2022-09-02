import { createApp, ref } from 'vue/dist/vue.esm-bundler';

createApp({
    setup() {
        const greeting = ref('おはよ！');
        return {
            greeting,
        }
    },
    delimiters: ['[[', ']]']
}).mount('#welcome');
