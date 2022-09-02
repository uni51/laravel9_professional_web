import './bootstrap';
// import Alpine from 'alpinejs';
import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";

// window.Alpine = Alpine;
// Alpine.start();

// import App from './vue/welcome.vue'
// createApp(App).mount('#welcome-vue')

/**
 * Imports the given page component from the page record.
 * See: https://laravel-vite.dev/guide/extra-topics/inertia.html#example-implementation
 */
function resolvePageComponent(name, pages) {
    for (const path in pages) {
        if (path.endsWith(`${name.replace('.', '/')}.vue`)) {
            return typeof pages[path] === 'function'
                ? pages[path]()
                : pages[path]
        }
    }

    throw new Error(`Page not found: ${name}`)
}

if (typeof app != 'undefined') {
    createInertiaApp({
        // resolve: async name => {
        //     if (import.meta.env.DEV) {
        //         return await import(`./Pages/${name}.vue`)
        //     } else {
        //         let pages = import.meta.glob('./Pages/**/*.vue')
        //         const importPage = pages[`./Pages/${name}.vue`]
        //         return importPage().then(module)
        //     }
        // },
        resolve: (name) => resolvePageComponent(name, import.meta.glob('./Pages/**/*.vue')),
        setup({el, App, props, plugin}) {
            createApp({render: () => h(App, props)})
                .use(plugin)
                .mount(el);
        },
    });
}
