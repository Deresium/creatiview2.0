import CvHome from "../views/CvHome.vue";
import CvServices from "../views/CvServices.vue";
import CvProjects from "../views/CvProjects.vue";
import CvContact from "../views/CvContact.vue";

export default [
    {path: '/', name: 'home', component: CvHome},
    {path: '/services', name: 'services', component: CvServices},
    {path: '/projects', name: 'projects', component: CvProjects},
    {path: '/contact', name: 'contact', component: CvContact},
]