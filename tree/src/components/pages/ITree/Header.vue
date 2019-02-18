<template>
	<div id="header">
		<div class="daohang">
			<ul>
				<li class="left" @click="fanhui">
					<i></i>
				</li>
				<li class="center">我要种树</li>
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
		fanhui(){
			this.$router.push("/start")		//跳到能量排行
		}
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
					padding-left: 0.33rem;
					.left{
						font-size: 0.48rem;
						width: 0.8rem;
						height: 0.8rem;
						i{
							display: inline-block;
							width: 0.8rem;
							height: 0.8rem;
							background: url("../../../assets/TreePlanting.fw.png") no-repeat -2.66rem -5.33rem;
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