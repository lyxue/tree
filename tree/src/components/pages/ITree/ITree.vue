<template>
	<div id="plantTree">
		<div class="dingwei">
			<Header></Header>
		</div>
		<div class="top">
			<div class="left" @click="paihang">
				<img src="../../../assets/paihang.png" alt="能量排行榜">
			</div>
			<div class="right">
				<img src="../../../assets/zhongshu.png">
				<span class="zhiliang">1980g</span>
				<span class="text">种树</span>
			</div>
			<!-- 主题 -->
			<div class="theme"></div>
			<!-- 规则 -->
			<i class="gonglv" @click="gonglve"><img src="../../../assets/gonglv.png" alt="攻略"></i>
			<i class="guize" @click="close"><img src="../../../assets/guize.png" alt="规则"></i>
			<!-- 树苗=======>需要更换 -->
			<img src="../../../assets/xiaoshu.png" alt="小树" class="shu">
			<!-- 4个能量 -->
			<div class="nengliang nengliang1">充值成功 +50g能量</div>
			<div class="nengliang nengliang2">签到成功 +100g能量</div>
			<div class="nengliang nengliang3">邀请好友 +300g能量</div>
			<div class="nengliang nengliang4">订购成功 +50g能量</div>
			<div class="heanniu" @click="xianshi"><img src="../../../assets/hezhonganniu.png" alt="合种按钮"></div>
			<div class="getNl"><img src="../../../assets/getnengliang.png" alt="获取更多能量"></div>
		</div>
		<!--===================================那两个规则与弹窗========================================== -->
		<!-- 遮罩层 -->
		<div class="mask" v-if="show||IsShow"></div>
		<!--攻略弹窗-->
		<div class="gonglvtanchuang tanchuang" v-if="IsShow">
			<div class="guanbi" @click="gonglve"><img src="../../../assets/common_shut@2x.png"></div>
			<div class="biaoti">种树攻略</div>
			<div class="neirong">
				<p class="fangshi">您可通过完成以下几种任务获取能量：</p>
				<p class="p">
					<i class=" xuhao">1</i>
					<span>每日签到可获得100g能量</span>
				</p>
				<p class="p">
					<i class="xuhao">2</i>
					<span>充值一笔可获得50g能量</span>
				</p>
				<p class="p">
					<i class="xuhao">3</i>
					<span>订购流量包一次可获得50g能量</span>
				</p>
				<p class="p">
					<i class="xuhao">4</i>
					<span>邀请好友参与活动可获得300g能量</span>
				</p>
			</div>
		</div>
		<!-- 活动规则的弹窗 -->
		<div class="guizetanchuang tanchuang" v-if="show">
			<div class="guanbi" @click="close"><img src="../../../assets/common_shut@2x.png"></div>
			<div class="biaoti">活动规则</div>
			<div class="neirong">
				<p class="p">
					<i class=" xuhao">1</i>
					<span>关注云南联通微信公众号用户均可参与</span>
				</p>
				<p class="p">
					<i class="xuhao">2</i>
					<span>活动期间，能量到达1700g即可种树一颗，每人仅可种一棵树。3月12日将在XX地方种上小树苗。</span>
				</p>
				<p class="p">
					<i class="xuhao">3</i>
					<span>活动期间每日签到、充值交费 、订购流量、邀请好友均可获得能量。</span>
				</p>
			</div>
		</div>
		<!--=============================== 分享========================================== -->
		<!-- 遮罩层 -->
		<div class="mask" v-if="fenxiang" @click="yincang"></div>
		<div class="fenxiangtu1" v-if="fenxiang">
			<span>分享活动，邀请好友参与,获得能量</span>
		</div>
		<div class="fenxiangtu2" v-if="fenxiang">
			<img src="../../../assets/fenxiang.png">
		</div>
		<!--==================================种树成功弹窗=========================================== -->
		<div class="mask" v-if="success"></div>
		<div class="successTanchuang" v-if="success">
			<i class="closeSuccess" @click="successClose"><img src="../../../assets/common_shut@2x.png"></i>
			<span class="zhongshuchenggong">种树成功</span>
			<p>XXXXXXX将在XXXXXX种植第N棵树</p>
		</div>
		<!--==================================合种弹窗=========================================== -->
		<div class="mask" v-if="hezhong"></div>
		<div class="hezhongTanchuang" v-if="hezhong">
			<div class="tu">
				<img src="../../../assets/popup_image1.png">
				<i class="closehezhong" @click="hezhongclose"><img src="../../../assets/common_shut@2x.png"></i>
			</div>
			<p>给您的小树取个名字哦～</p>
			<input type="text" placeholder="请输入小树名称" />
			<span>*建议4～6位字符</span>
			<button type="primary" class="faqihezhong">发起合种</button>
		</div>
		<div class="bottom">
			<div class="dibu">
				<div class="tishengNL">
					<span class="textShow">做任务提升能量</span>
				</div>
				<!-- 去签到 -->
				<div class="nengliangtisheng qiandao">
					<div class="left">
						<span class="qiandao1">每日签到可获能量100g/天</span>
						<div class="qiandao2">
							<i class="qiandao2-1"><img src="../../../assets/nengliang.png" alt="能量"></i>
							<span class="qiandao2-2">100g能量</span>
						</div>
					</div>
					<div class="right">
						<div class="quqiandao">去签到</div>
						<span class="yiwancheng">已完成1/12</span>
					</div>
				</div>
				<!-- 去充值 -->
				<div class="nengliangtisheng chongzhi">
					<div class="left">
						<span class="qiandao1">话费充值可获能量50g/次</span>
						<div class="qiandao2">
							<i class="qiandao2-1"><img src="../../../assets/nengliang.png" alt="能量"></i>
							<span class="qiandao2-2">50g能量</span>
						</div>
					</div>
					<div class="right">
						<div class="quqiandao">去充值</div>
						<span class="yiwancheng">已完成1/N</span>
					</div>
				</div>
				<!-- 去订购 -->
				<div class="nengliangtisheng dinggou">
					<div class="left">
						<span class="qiandao1">订购流量包可获得能量50g/次</span>
						<div class="qiandao2">
							<i class="qiandao2-1"><img src="../../../assets/nengliang.png" alt="能量"></i>
							<span class="qiandao2-2">50g能量</span>
						</div>
					</div>
					<div class="right">
						<div class="quqiandao">去订购</div>
						<span class="yiwancheng">已完成1/N</span>
					</div>
				</div>
				<!-- 去邀请 -->
				<div class="nengliangtisheng yaoqing">
					<div class="left">
						<span class="qiandao1">邀请好友参与活动可获得能量300g</span>
						<div class="qiandao2">
							<i class="qiandao2-1"><img src="../../../assets/nengliang.png" alt="能量"></i>
							<span class="qiandao2-2">300g能量</span>
						</div>
					</div>
					<div class="right">
						<div class="quqiandao">去邀请</div>
						<span class="yiwancheng">已完成0/1</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Header from "./Header.vue";
import shumiao1 from "@/assets/xiaoshu.png";
import shumiao2 from "@/assets/zhongshumiao.png";
import shumiao3 from "@/assets/dashu.png";
export default {
	name:"PlantTree",
	components:{
		Header
	},
	data(){
		return {
			shumiao:[
				{shumiao:shumiao1}
			],
			cishu:0,
			show:false,					//规则
			IsShow:false,				//攻略
			fenxiang:false,				//分享
			success:false,				//种树成功弹窗
			hezhong:false				//合种弹窗
		}
	},
	created:function(){ 
		
	},
	methods:{
		paihang(){
			this.$router.push("/energyRanking")		//跳到能量排行
		},
		gonglve(){
			this.IsShow=!this.IsShow;
		},
		close(){
			this.show=!this.show;
			console.log("点到我了")
		},
		yincang(){
			this.fenxiang=false;
		},
		successClose(){
			this.success=false;
		},
		hezhongclose(){
			this.hezhong=false;
			console.log("点到我了")
		},
		xianshi(){  //合种按钮
			this.hezhong=true;
		}
	}
}
</script>

<style type="text/css" lang="less" scoped>
	#plantTree{
		.dingwei{
			position: fixed;
			top: 0;
			right: 0;
			left: 0;
			z-index: 99999;
		}
		.top{
			margin-top: 1.2rem;
			background: url("../../../assets/ItreeBackgroundS.png") no-repeat;
			background-size:cover;
			height:13.92rem;
			width:10rem;
			position: relative;
			.left{
				display: inline-block;
				position: absolute;
				left: 0;
				top: 1.13rem;
				width: 1.6rem;
				height: 1.6rem;
				text-align: center;
				line-height:1.6rem; 
				img{
					width: 1.6rem;
					height: 1.6rem;
				}
			}
			.right{
				width: 3.2rem;
				height: 1.01rem;
				border-top: 0.04rem solid  #FFFFFF;
				border-left: 0.04rem solid  #FFFFFF;
				border-bottom: 0.04rem solid  #FFFFFF;
				border-right: 0;
				border-radius:0.66rem 0 0 0.66rem;
				position: absolute;
				top: 0.57rem;
				right: 0rem;
				background: #DDE9F3;
				text-align: left;
				line-height: 1.01rem;
				img{
					width: 0.98rem;
					height: 0.9rem;
				}
				.zhiliang{
					width: 0.97rem;
					height: 0.34rem;
					font-family: PingFangSC-Medium;
					font-size: 0.34rem;
					color: #4E1D0E;
					letter-spacing: 0;
					line-height:0.34rem;
				}
				.text{
					display: inline-block;
					width: 0.93rem;
					height: 0.64rem;
					background: #378F22;
					border-radius: 0.53rem;
					line-height: 0.64rem;
					text-align: center;
					font-family: PingFang-SC-Regular;
					font-size: 0.32rem;
					color: #FFFFFF;
					letter-spacing: 0;
				}
			}
			.theme{
				width: 5.94rem;
				height: 3.21rem;
				background: url("../../../assets/theme.png") no-repeat;
				background-size:cover;
				position: absolute;
				top: 1.73rem;
				left: 2.02rem;
				right: 2.02rem;
			}
			.gonglv{
				position: absolute;
				top: 3.18rem;
				right: 0.38rem;
				img{
					width: 1.01rem;
					height: 1.16rem;
				}
			}
			.guize{
				position: absolute;
				top: 4.65rem;
				right: 0.38rem;
				img{
					width: 1.01rem;
					height: 1.16rem;
				}
			}
			.shu{
				position: absolute;
				top: 6.42rem;
				left: 3.97rem;
				width: 2.84rem;
				height:4.5rem;
			}
			.nengliang{
				width:3.52rem;
				height: 0.74rem;
				border-radius: 0.53rem;
				font-size: 0.32rem;
				color: #FFFFFF;
				letter-spacing: 0;
				text-align: center;
				line-height: 0.74rem;
				background: rgba(118,187,21,0.64);
				box-shadow: inset 0 0 0.64rem 0 rgba(96,143,30,0.63);
			}
			.nengliang1{
				position: absolute;
				top: 5.24rem;
				left:0;
			}
			.nengliang2{
				position: absolute;
				top: 6.16rem;
				right:1.74rem;
			}
			.nengliang3{
				position: absolute;
				top: 7.34rem;
				left:1.33rem;
			}
			.nengliang4{
				position: absolute;
				top: 8.69rem;
				right:0.62rem;
			}
			.heanniu{
				position: absolute;
				top: 11.24rem;
				left:0.77rem;
				img{
					width: 1.52rem;
					height: 1.72rem;
				}
			}
			.getNl{
				position: absolute;
				top: 11.26rem;
				right:0.66rem;
				img{
					width: 2.37rem;
					height: 1.64rem;
				}
			}
		}	
		.mask{
			position: absolute;
			top: 1.22rem;
			left: 0rem;
			width: 10rem;
			height: 27.54rem;
			opacity: 0.7;
			background: #000000;
			z-index: 9;
		}
		.tanchuang{
			position: fixed;
			top: 4.86rem;
			left: 1.2rem;
			width: 7.6rem;
			height: 6.4rem;
			background: #FFFFFF;
			z-index: 999999;
			padding-left: 0.53rem;
			padding-right: 0.53rem;
			border-radius: 0.32rem;
			.guanbi{
				position: absolute;
				top: -0.26rem;
				right: -0.18rem;
				img{
					width: 0.74rem;
					height: 0.74rem;
				}
			}
			.biaoti{
				width: 6.65rem;
				height:1.32rem;
				border-bottom: 0.02rem solid #E9E9E9;
				text-align: center;
				line-height: 1.32rem;
				font-family: PingFangSC-Medium;
				font-size: 0.42rem;
				color: #333333;
				letter-spacing: 0;
			}
			.neirong{
				width: 6.61rem;
				height:5.06rem;
				.fangshi{
					margin-top: 0.37rem;
				}
				.p{
					margin-top: 0.32rem;
					.xuhao{
						margin-top: 0.05rem;
						margin-right: 0.1rem;
						display: inline-block;
						text-align: center;
						line-height: 0.4rem;
						width: 0.4rem;
						height: 0.4rem;
						border-radius: 1.06rem;
						background: #FFCD04;
						font-size: 0.29rem;
						color: #333333;
						font-style:normal;
						vertical-align:top;
					}
					span{
						font-size: 0.34rem;
						color: #333333;
						letter-spacing: 0;
						text-align: justify;
						line-height: 0.58rem;
						display: inline-block;
						width: 5.89rem;
						vertical-align:text-bottom;
					}
				}
			}
		}
		.fenxiangtu1{
			position: absolute;
			top: 5.68rem;
			left: 2.44rem;
			width: 5.13rem;
			height: 6.42rem;
			background: url("../../../assets/popup_share.png") no-repeat;
			background-size:cover;
			z-index: 9999;
			span{
				display: inline-block;
				width: 4rem;
				height: 0.96rem;
				font-size: 14px;
				color: #FFFFFF;
				text-align: center;
				margin-top: 0.37rem;
				margin-left: 0.53rem;
			}
		}
		.fenxiangtu2{
			position: fixed;
			top: 1.61rem;
			right: 0.38rem;
			width: 3.85rem;
			height: 2.41rem;
			z-index: 9999999999;
			img{
				width: 3.85rem;
				height: 2.41rem;
			}
		}
		.successTanchuang{
			position: fixed;
			top: 3.36rem;
			right: 1.2rem;
			width: 7.6rem;
			height: 10rem;
			background: url("../../../assets/popup_over.png") no-repeat;
			background-size:cover;
			z-index: 99999;
			border-radius: 20px;
			text-align: center;
			.closeSuccess{
				position: absolute;
				top: -0.26rem;
				right: -0.13rem;
				img{
					width: 0.74rem;
					height: 0.74rem;
				}
			}
			.zhongshuchenggong{
				display: inline-block;
				width: 2.13rem;
				height: 0.74rem;
				margin-top: 0.88rem;
				font-size: 0.53rem;
				color: #4E1D0E;
			}
			p{
				margin-top: 0.32rem;
				font-size: 0.34rem;
				color: #666666;
			}
		}
		.hezhongTanchuang{
			position: fixed;
			top:5.72rem;
			right: 1.2rem;
			width: 7.6rem;
			height: 7.64rem;
			background: #FFFFFF;
			z-index: 99999;
			border-radius: 20px;
			text-align: center;
			.tu{
				position: absolute;
				top:-2.45rem;
				right: 0;
				width: 7.6rem;
				height: 4.82rem;
				img{
					width:5.58rem;
					height: 4.1rem;
				}
				.closehezhong{
					position: absolute;
					top: 2.18rem;
					right: -0.18rem;
					img{
						width: 0.74rem;
						height: 0.74rem;
					}
				}
			}
			p{
				margin-top: 2.13rem;
				font-size: 0.42rem;
				color: #333333;
			}
			input{
				width: 6.13rem;
				height: 1.09rem;
				border-radius: 0.26rem;
				background: #F7F7F7;
				margin-top: 0.66rem;
				border: 0.02rem;
				box-shadow: inset 0 0.02rem 0.08rem 0 rgba(0,0,0,0.25);
				padding-left: 0.72rem;
				font-size: 0.34rem;
				color: #9A9A9A;
			}
			span{
				margin-top: 0.26rem;
				padding-right: 2.16rem;
				display: inline-block;
				font-size: 0.29rem;
				color: #9A9A9A;
			}
			.faqihezhong{
				width: 6.13rem;
				height: 1.09rem;
				background: #F9B707;
				border: 0;
				font-weight: bold;
				margin-top: 0.69rem;
				border-radius: 0.8rem;
				font-size: 0.42rem;
				color: #4E1D0E;
			}
		}
		.bottom{
			position: absolute;
			top: 14.13rem;
			left: 0rem;
			background: url("../../../assets/ItreeBackgroundX.png") no-repeat;
			background-size:cover;
			height:14.66rem;
			width:10rem;
			.dibu{
				width: 10rem;
				height: 13.11rem;
				position: relative;
				.tishengNL{
					background: #3E3421;
					width: 4.16rem;
					height:0.34rem;
					border-radius:0.53rem;
					margin-top: 1.57rem;
					margin-left: 0.4rem;
					.textShow{
						display: inline-block;
						width: 3.36rem;
						height: 0.66rem;
						font-size: 0.48rem;
						color: #FFAA0E;
						letter-spacing: 0;
						position: absolute;
						top: -0.32rem;
						left: 0.85rem;
					}
				}
				.nengliangtisheng{
					width: 9.2rem;
					height: 2.66rem;
					background: url("../../../assets/renwubeijing.png") no-repeat;
					background-size: cover;
					margin-top: 0.4rem;
					margin-left: 0.4rem;
					border-radius: 0.32rem;
					.left{
						width:6.13rem;
						height: 2.66rem;
						display: inline-block;
						padding-left: 0.53rem;
						.qiandao1{
							display: inline-block;
							width: 6.13rem;
							height: 0.56rem;
							margin-top: 0.73rem;
							font-size: 0.4rem;
							color: #333333;
							letter-spacing: 0;
						}
						.qiandao2{
							margin-top: 0.14rem;
							.qiandao2-1{
								img{
									width: 0.29rem;
									height: 0.29rem;
								}
							}
							.qiandao2-2{
								width: 1.41rem;
								height: 0.44rem;
								font-size: 0.32rem;
								color: #A1A1A1;
								letter-spacing: 0;
							}
						}
					}
					.right{
						width:2.93rem;
						height: 2.66rem;
						display: inline-block;
						vertical-align: bottom;
						.quqiandao{
							width: 1.92rem;
							height: 0.77rem;
							border-radius: 0.53rem;
							background-image: linear-gradient(-30deg, #FC8C08 0%, #FFC52A 100%);
							box-shadow: 0 0.1rem 0.05rem 0 #FFD394;
							margin-top: 0.72rem;
							margin-left:0.69rem;
							text-align: center;
							font-size: 0.32rem;
							color: #FFFFFF;
							line-height: 0.77rem;
						}
						.yiwancheng{
							display: inline-block;
							width: 1.92rem;
							height: 0.37rem;
							margin-top: 0.2rem;
							margin-left: 0.61rem;
							font-size: 0.26rem;
							color: #A1A1A1;
							letter-spacing: 0;
							text-align: center;
							line-height: 0.37rem;
						}
					}
				}
			}
		}
	}
</style>