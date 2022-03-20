import CvHome from "../views/CvHome.vue";
import CvServices from "../views/CvServices.vue";
import CvProjects from "../views/CvProjects.vue";
import CvContact from "../views/CvContact.vue";
import CvServicesPro from "../views/services/CvServicesPro.vue";
import CvServicesIT from "../views/services/CvServicesIT.vue";

export default [
    {path: '/', name: 'home', component: CvHome, meta: {title: 'Creatiview - Home'}},
    {
        path: '/services',
        name: 'services',
        component: CvServices,
        meta: {title: 'Creatiview - Services'},
    },
    {
        path: '/services/serviceWeb',
        name: 'serviceWeb',
        component: CvServicesPro,
        meta: {title: 'Creatiview - Services Web'}
    }, {
        path: '/services/serviceIT',
        name: 'serviceIT',
        component: CvServicesIT,
        meta: {title: 'Creatiview - Services Developer'}
    },
    {path: '/projects', name: 'projects', component: CvProjects, meta: {title: 'Creatiview - Projects'}},
    {path: '/contact', name: 'contact', component: CvContact, meta: {title: 'Creatiview - Contact'}},
]