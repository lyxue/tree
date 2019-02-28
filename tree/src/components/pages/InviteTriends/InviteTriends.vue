<template>
	<div id="invitation">
	<!-- 	<div class="dingwei">
			<Header></Header>
		</div> -->
		<div class="main">
			<div class="zhuti"></div>
			<div class="biaoti">会飞的小鱼儿邀请你和他/她一起种树啦~</div>
			<button type="primary" class="canyu ziji">自己种树</button>
			<button type="primary" class="canyu hezhong">参与合种</button>
		</div>
	</div>
</template>
<script>
// import Header from "./Header.vue";
export default {
	name:"Start",
	components:{
		
	},
	data(){
		return {
			
		}
	},
	methods:{
		
	}
}
</script>

<style type="text/css" lang="less" scoped>
	#invitation{
// 		.dingwei{
// 			position: fixed;
// 			top: 0;
// 			right: 0;
// 			left: 0;
// 			z-index: 99999;
// 		}
		.main{
			// margin-top: 1.2rem;
			width: 10rem;
			height: 17.78rem;
			background: url("http://wx.yn10010.com/wx_webs/tree/static/img/invitation.png") no-repeat;
			background-size:cover;
			position: relative;
			.canyu{
				width: 4rem;
				height: 1.28rem;
				background: #F9B707;
				border: 0;
				font-size: 0.45rem;
				color: #4E1D0E;
				font-weight: bold;
				border-radius: 0.8rem;
			}
			.ziji{
				margin-top: 14.93rem;
				margin-left: 0.73rem;
			}
			.hezhong{
				margin-top: 14.93rem;
				margin-right:  0.73rem;
			}
			.zhuti{
				width: 5.94rem;
				height: 3.21rem;
				background: url("http://wx.yn10010.com/wx_webs/tree/static/img/theme.png") no-repeat;
				background-size:cover;
				position: absolute;
				top: 1.2rem;
				right: 2.02rem;
			}
			.biaoti{
				position: absolute;
				top: 4.66rem;
				right: 2.22rem;
				font-size: 0.34rem;
				color: #666666;
			}
		}
	}
</style>