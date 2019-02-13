import Vue from 'vue';
import Start from '../components/pages/Start/Start.vue';
import ITree from '../components/pages/ITree/ITree.vue';
import WeTree from '../components/pages/WeTree/WeTree.vue';
import EnergyRanking from '../components/pages/EnergyRanking/EnergyRanking.vue';
import Invitation from '../components/pages/InvitationActivitie/InvitationActivitie.vue';


import Router from 'vue-router';
Vue.use(Router);
export default new Router({
  routes: [
		{path: '/',redirect: '/start'},
		{path: '/start',name: 'Start',component: Start},
		{path: '/iTree',name: 'ITree',component: ITree},    //我要种树
		{path: '/weTree',name: 'WeTree',component: WeTree},//我们种树
		{path: '/energyRanking',name: 'EnergyRanking',component: EnergyRanking},//能量排行
		{path: '/invitation',name: 'Invitation',component: Invitation}  //
  ]
})
