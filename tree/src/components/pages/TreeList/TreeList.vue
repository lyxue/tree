<template>
	<div id="EnergyRanking">
		<div class="dingwei">
			<Header></Header>
		</div>
		<div class="main">
			<ul>
				<li>
					<i class="number number1"></i>
					<div class="nickname">这是合种树的名称</div>
					<span class="energy">2000g</span>
				</li>
				<li>
					<i class="number number1"></i>
					<div class="nickname">这是合种树的名称</div>
					<span class="energy">1800g</span>
				</li>
				<li>
					<i class="number number1"></i>
					<div class="nickname">这是合种树的名称</div>
					<span class="energy">2000g</span>
				</li>
				<li>
					<i class="number">4</i>
					<div class="nickname">这是合种树的名称</div>
					<span class="energy">1800g</span>
				</li>
				<li>
					<i class="number">5</i>
					<div class="nickname">这是合种树的名称</div>
					<span class="energy">2000g</span>
				</li>
				<li>
					<i class="number">6</i>
					<div class="nickname">这是合种树的名称</div>
					<span class="energy">1800g</span>
				</li>
				<li>
					<i class="number">7</i>
					<div class="nickname">这是合种树的名称</div>
					<span class="energy">2000g</span>
				</li>
				<li>
					<i class="number">8</i>
					<div class="nickname">这是合种树的名称</div>
					<span class="energy">1800g</span>
				</li>
				<li>
					<i class="number">9</i>
					<div class="nickname">这是合种树的名称</div>
					<span class="energy">2000g</span>
				</li>
				<li>
					<i class="number">10</i>
					<div class="nickname">这是合种树的名称</div>
					<span class="energy">1800g</span>
				</li>
				<li>
					<i class="number">11</i>
					<div class="nickname">这是合种树的名称</div>
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
			margin-top: 2.56rem;
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
						font-size: 0.37rem;
						color: #999999;
						text-align: center;
					}
					.number1{
						background: url("../../../assets/TreePlanting.fw.png") no-repeat -2.66rem -2.66rem;
					}
					.number2{
						background: url("../../../assets/TreePlanting.fw.png") no-repeat -4rem -2.66rem;
					}
					.number3{
						background: url("../../../assets/TreePlanting.fw.png") no-repeat -5.33rem -2.66rem;
					}
					.nickname{
						display: inline-block;
						padding-left: 1.73rem;
						font-family: PingFangSC-Regular;
						font-size: 0.37rem;
						color: #505052;
						text-align: left;
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