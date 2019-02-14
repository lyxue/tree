import Vue from 'vue';

import Start from '../components/pages/Start/Start.vue';
import ITree from '../components/pages/ITree/ITree.vue';
import EnergyRanking from '../components/pages/EnergyRanking/EnergyRanking.vue';
import Invitation from '../components/pages/InvitationActivitie/InvitationActivitie.vue';
import WePlantTrees from '../components/pages/WePlantTrees/WePlantTrees.vue';
import TreeList from '../components/pages/TreeList/TreeList.vue';
import InviteTriends from '../components/pages/InviteTriends/InviteTriends.vue';


import Router from 'vue-router';
Vue.use(Router);
export default new Router({
  routes: [
		{path: '/',redirect: '/start'},
		{path: '/start',name: 'Start',component: Start},
		{path: '/iTree',name: 'ITree',component: ITree},    //我要种树
		{path: '/energyRanking',name: 'EnergyRanking',component: EnergyRanking},//能量排行
		{path: '/invitation',name: 'Invitation',component: Invitation},//邀请好友参与活动
		{path: '/wePlantTrees',name: 'WePlantTrees',component: WePlantTrees},//我们种树
		{path: '/treeList',name: 'TreeList',component: TreeList}  ,//种树排行
		{path: '/inviteTriends',name: 'InviteTriends',component: InviteTriends}  //邀请好友一起合种页
  ]
})
