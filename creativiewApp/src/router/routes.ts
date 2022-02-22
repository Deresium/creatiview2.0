import CvHome from "../views/CvHome.vue";
import CvServices from "../views/CvServices.vue";
import CvProjects from "../views/CvProjects.vue";
import CvContact from "../views/CvContact.vue";

export default [
    {path: '/', name: 'home', component: CvHome, meta: {title: 'Creatiview - Home'}},
    {path: '/services', name: 'services', component: CvServices, meta: {title: 'Creatiview - Services'}},
    {path: '/projects', name: 'projects', component: CvProjects, meta: {title: 'Creatiview - Projects'}},
    {path: '/contact', name: 'contact', component: CvContact, meta: {title: 'Creatiview - Contact'}},
]