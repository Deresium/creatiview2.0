import {createRouter, createWebHistory} from "vue-router";
import routes from "./routes";

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return {top: 0}
    }
});

router.beforeEach((to, from, next) => {
    let title = 'Creatiview';
    if(to.meta && to.meta.title){
        title = <string>to.meta.title;
    }
    document.title = title;

    // @ts-ignore
    gtag('event', 'page_view', {
        page_title: <string>to.meta.title,
        page_location: to.fullPath,
        page_path: to.path,
        send_to: 'G-YFLGTMH7KP'
    });

    next();
});

export default router;