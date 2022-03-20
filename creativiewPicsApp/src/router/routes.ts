import CvHome from "../views/CvHome.vue";
import CvPictures from "../views/CvPictures.vue";
import CvContact from "../views/CvContact.vue";
import CvAlbum from "../views/CvAlbum.vue";
import CvTermsOfUse from "../views/CvTermsOfUse.vue";

export default [
    {path: '/', name: 'home', component: CvHome, meta: {title: 'Creatiview Pictures - Home'}},
    {path: '/pictures', name: 'pictures', component: CvPictures, meta: {title: 'Creatiview Pictures - Pictures'}},
    {path: '/contact', name: 'contact', component: CvContact, meta: {title: 'Creatiview Pictures - Contact'}},
    {path: '/album/:albumId', name: 'album', component: CvAlbum, meta: {title: 'Creatiview Pictures - Album'}},
    {path: '/termsOfUse', name: 'termsOfUse', component: CvTermsOfUse, meta: {title: 'Creatiview Pictures - Conditions générales'}}
]