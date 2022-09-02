import './bootstrap';
// import Alpine from 'alpinejs';
import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";

// window.Alpine = Alpine;
// Alpine.start();

// import App from './vue/welcome.vue'
// createApp(App).mount('#welcome-vue')

createInertiaApp({
    resolve: async name => {
        if (import.meta.env.DEV) {
            return await import(`./Pages/${name}.vue`)
        } else {
            let pages = import.meta.glob('./Pages/**/*.vue')
            const importPage = pages[`./Pages/${name}.vue`]
            return importPage().then(module)
        }
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el);
    },
});
