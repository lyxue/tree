<template>
	<div id="header">
		<div class="daohang">
			<ul>
				<li class="left" @click="fanhui"><img src="../../../assets/return.png"></li>
				<li class="center">植树节活动</li>
				<li class="right"></li>
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
		
	}
}
</script>

<style type="text/css" lang="less" scoped>
	#header{
		.daohang{
			position:flex;
			top:0rem;
			right:0rem;
			left:0rem;
			z-index: 99999;
			background: #FFFFFF;
			height: 1.2rem;
			padding-top: 0.4rem;
			ul{
				height: 0.46rem;
				list-style: none;
				display: flex;
				justify-content: space-between;
				.left{
					padding-left: 0.34rem;
					font-size: 0.48rem;
					color: #333333;
					height: 0.46rem;
					text-align: left;
					line-height:0.46rem;
					img{
						width: 0.26rem;
						height: 0.5rem;
					}
				}
				.center{
					font-size: 0.48rem;
					color: #333333;
					height: 0.46rem;
					text-align: center;
					line-height:0.46rem;
					letter-spacing: 0;
					font-family: PingFangSC-Regular;
					font-weight: 600;
				}
			}
		}
	}
</style>