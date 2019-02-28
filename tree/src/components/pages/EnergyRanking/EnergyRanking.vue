<template>
	<!-- 能量排行 -->
	<div id="EnergyRanking">
		<div class="dingwei">
			<Header></Header>
		</div>
		<div class="main">
			<ul>
				<li>
					<i class="number number1"></i>
					<div class="nickname">
						<!-- 网络请求图片路径 -->
						<img src="../../../assets/touxiang.png">
						1790458441
					</div>
					<span class="energy">2000g</span>
				</li>
				<li>
					<i class="number number2"></i>
					<div class="nickname">
						<img src="../../../assets/touxiang.png">
						1790458441
					</div>
					<span class="energy">1800g</span>
				</li>
				<li>
					<i class="number number3"></i>
					<div class="nickname">
						<img src="../../../assets/touxiang.png">
						1790458441
					</div>
					<span class="energy">2000g</span>
				</li>
				<li>
					<i class="number">4</i>
					<div class="nickname">
						<img src="../../../assets/touxiang.png">
						1790458441
					</div>
					<span class="energy">1800g</span>
				</li>
				<li>
					<i class="number">5</i>
					<div class="nickname">
						<img src="../../../assets/touxiang.png">
						1790458441
					</div>
					<span class="energy">2000g</span>
				</li>
				<li>
					<i class="number">6</i>
					<div class="nickname">
						<img src="../../../assets/touxiang.png">
						1790458441
					</div>
					<span class="energy">1800g</span>
				</li>
				<li>
					<i class="number">7</i>
					<div class="nickname">
						<img src="../../../assets/touxiang.png">
						1790458441
					</div>
					<span class="energy">2000g</span>
				</li>
				<li>
					<i class="number">8</i>
					<div class="nickname">
						<img src="../../../assets/touxiang.png">
						1790458441
					</div>
					<span class="energy">1800g</span>
				</li>
				<li>
					<i class="number">9</i>
					<div class="nickname">
						<img src="../../../assets/touxiang.png">
						1790458441
					</div>
					<span class="energy">2000g</span>
				</li>
				<li>
					<i class="number">10</i>
					<div class="nickname">
						<img src="../../../assets/touxiang.png">
						1790458441
					</div>
					<span class="energy">1800g</span>
				</li>
				<li>
					<i class="number">11</i>
					<div class="nickname">
						<img src="../../../assets/touxiang.png">
						1790458441
					</div>
					<span class="energy">2000g</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import Header from "./Header.vue";
export default {
	name:"PlantTree",
	components:{
		Header
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
	#EnergyRanking{
		.dingwei{
			position: fixed;
			top: 0;
			right: 0;
			left: 0;
			z-index: 99999;
		}
		.main{
			margin-top: 1.33rem;
			ul{
				list-style: none;
				li{
					width: 10rem;
					height: 1.33rem;
					padding-left: 0.8rem;
					padding-right: 0.82rem;
					line-height: 1.33rem;
					.number{
						margin-top: 0.45rem;
						font-style:normal;
						float: left;
						display: inline-block;
						width: 0.42rem;
						height: 0.53rem;
						line-height: 0.53rem;
						img{
							width: 0.42rem;
							height: 0.53rem;
						}
					}
					.number1{
						// background: url("../../../assets/TreePlanting.fw.png") no-repeat -2.66rem -2.66rem;
						background: url("data:image/png;base64,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") no-repeat;
						background-size:0.42rem 0.53rem;
					}
					.number2{
						background: url("data:image/png;base64,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") no-repeat;
						background-size:0.42rem 0.53rem;
					}
					.number3{
						background: url("data:image/png;base64,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") no-repeat;
						background-size:0.42rem 0.53rem;
					}
					.nickname{
						display: inline-block;
						padding-left: 0.8rem;
						font-family: PingFangSC-Regular;
						font-size: 0.37rem;
						color: #505052;
						letter-spacing: 0;
						text-align: left;
						img{
							width: 0.81rem;
							height: 0.81rem;
						}
					}
					.energy{
						float: right;
						font-family: PingFangSC-Semibold;
						font-size: 0.37rem;
						color: #49B86F;
						text-align: left;
						font-weight: bold;
					}
				}
				li:nth-child(odd){
					background: #FBFAF9;
				} 
				li:nth-child(even){
					background: #FFFFFF;
					
				} 
			}
		}
	}
</style>