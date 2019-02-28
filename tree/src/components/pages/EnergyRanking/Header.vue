<template>
	<div id="header">
		<!-- <div class="daohang">
			<ul>
				<li class="left" @click="fanhui"></li>
				<li class="center">能量排行</li>
				<li class="right"></li>
			</ul>
		</div> -->
		<div class="paiming">
			<ul>
				<li class="left">排名</li>
				<li class="center">昵称</li>
				<li class="right">能量值</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	name:"Start",
	components:{
		
	},
	data(){
		return {
			
		}
	},
	created:function(){ 

	},
	methods:{
		fanhui(){
			this.$router.push("/iTree")		//跳到能量排行
		}
	}
}
</script>

<style type="text/css" lang="less" scoped>
	#header{
// 		.daohang{
// 			position:flex;
// 			top:0rem;
// 			right:0rem;
// 			left:0rem;
// 			z-index: 99999;
// 			background: #FFFFFF;
// 			height: 1.2rem;
// 			padding-top: 0.4rem;
// 			ul{
// 				height: 0.46rem;
// 				list-style: none;
// 				display: flex;
// 				justify-content: space-between;
// 				.left{
// 					margin-left: 0.37rem;
// 					padding-left: 0.34rem;
// 					font-size: 0.48rem;
// 					color: #333333;
// 					height: 0.46rem;
// 					text-align: left;
// 					line-height:0.46rem;
// 					width: 0.26rem;
// 					height: 0.5rem;
// 					background: url("../../../assets/TreePlanting.fw.png") no-repeat -2.66rem -5.33rem;
// 				}
// 				.center{
// 					padding-right: 0.4rem;
// 					font-size: 0.48rem;
// 					color: #333333;
// 					height: 0.46rem;
// 					text-align: center;
// 					line-height:0.46rem;
// 					letter-spacing: 0;
// 					font-family: PingFangSC-Regular;
// 					font-weight: 600;
// 				}
// 			}
// 		}
		.paiming{
			width: 10rem;
			height: 1.33rem;
			background: #F2F2F2;
			ul{
				list-style: none;
				display: flex;
				justify-content: space-between;
				padding-left: 0.72rem;
				line-height: 1.33rem;
				padding-right: 0.8rem;
				.center{
					margin-right: 2.13rem;
				}
			}
		}
	}
</style>