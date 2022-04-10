import CvBillingList from "../views/CvBillingList.vue";
import CvAddBill from "../views/CvAddBill.vue";

export default [
    {path: '/', name: 'billingsList', component: CvBillingList, meta: {title: 'Creatiview Billing - Billings list'}},
    {path: '/addBill', name: 'addBill', component: CvAddBill, meta: {title: 'Creatiview Billing - Add bill'}},
]