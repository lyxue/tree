<template>
	<div id="header">
		<div class="daohang">
			<ul>
				<li class="left">
					<i></i>
				</li>
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
				padding-left: 12.5px;
				.left{
					font-size: 0.48rem;
					width: 30px;
					height: 30px;
					// background: url("../../assets/TreePlanting.fw.png") no-repeat 2px 0;
					i{
						display: inline-block;
						width: 30px;
						height: 30px;
						background: url("../../assets/TreePlanting.fw.png") no-repeat 50px 0;
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