import CvHome from "../views/CvHome.vue";
import CvAboutMe from "../views/CvAboutMe.vue";
import CvProjects from "../views/CvProjects.vue";
import CvContact from "../views/CvContact.vue";

export default [
    {path: '/', name: 'home', component: CvHome},
    {path: '/aboutMe', name: 'aboutMe', component: CvAboutMe},
    {path: '/projects', name: 'projects', component: CvProjects},
    {path: '/contact', name: 'contact', component: CvContact},
]