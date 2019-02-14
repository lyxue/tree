<template>
	<div id="plantTree">
		<div class="dingwei">
			<Header></Header>
		</div>
		<div class="top">
			<div class="left">
				<img src="../../../assets/zhongshupaihang.png" alt="种树排行" @click="paihang">
				<div class="weyaoqing">
					<img src="../../../assets/yaoqing.png" alt="邀请">
				</div>
			</div>
			<!-- 主题 -->
			<div class="theme"></div>
			<div class="fendui">
				<div class="zuobian">
					<p class="p1">
						<i><img src="../../../assets/xiaoqizi.png" alt="小旗子"></i>
						<span>植树小分队111</span>
					</p>
					<p class="p2">
						<i><img src="../../../assets/nengliangtubiao.png" alt="能量图标"></i>
						<span>1980g</span>
					</p>
				</div>
				<div class="youbian">
					<span>种树</span>
				</div>
			</div>
			<!-- 规则 -->
			<i class="gonglv" @click="gonglve"><img src="../../../assets/gonglv.png" alt="攻略"></i>
			<i class="guize" @click="close"><img src="../../../assets/guize.png" alt="规则"></i>
			<!-- 树苗=======>需要更换 -->
			<img src="../../../assets/dashu.png" alt="大树" class="shu">
			<!-- 4个能量 -->
			<!-- <div class="nengliang nengliang1">充值成功 +50g能量</div>
			<div class="nengliang nengliang2">签到成功 +100g能量</div>
			<div class="nengliang nengliang3">邀请好友 +300g能量</div>
			<div class="nengliang nengliang4">订购成功 +50g能量</div> -->
			<div class="jiaoshui">
				<div class="jiaoshuitu" @click="jiaoshuitu"></div>
			</div>
			
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
			<span>分享邀请好友参与一起种树</span>
		</div>
		<div class="fenxiangtu2" v-if="fenxiang">
			<img src="../../../assets/fenxiang.png">
		</div>
		<!-- ================================浇水成功弹窗============================================ -->
		<div class="mask" v-if="jiaoshui"></div>
		<div class="jiaoshuichenggong" v-if="jiaoshui">
			<div class="jiaoshuitu"></div>
			<i class="jiaoshuiclose" @click="closejiaoshui"><img src="../../../assets/common_shut@2x.png"></i>
			<p class="pp1">浇水成功！</p>
			<p class="pp2">成功浇水100g能量</p>
			<button type="primary" class="know">我知道了</button>
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
export default {
	name:"PlantTree",
	components:{
		Header
	},
	data(){
		return {
			cishu:0,
			show:false,					//规则
			IsShow:false,				//攻略
			fenxiang:false,				//分享
			jiaoshui:true				//浇水成功弹窗
			
		}
	},
	created:function(){ 
		
	},
	methods:{
		paihang(){//跳到种树排行
			this.$router.push("/treeList")		
		},
		gonglve(){  //显示种树攻略
			this.IsShow=!this.IsShow;
		},
		close(){	//显示种树规则
			this.show=!this.show;
		},
		yincang(){    //分享层
			this.fenxiang=false;
		},
		closejiaoshui(){//浇水成功
			this.jiaoshui=false;
		},
		jiaoshuitu(){//浇水那个图
			this.jiaoshui=true;
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
			background: url("../../../assets/hezhongSBJ.png") no-repeat;
			background-size:cover;
			height:16.29rem;
			width:10rem;
			position: relative;
			.left{
				display: inline-block;
				position: absolute;
				left: 0;
				top: 1.13rem;
				width: 1.61rem;
				height: 6.16rem;
				text-align: center;
				line-height:1.6rem; 
				img{
					width: 1.61rem;
					height: 5.13rem;
				}
				.weyaoqing{
					width: 1.61rem;
					height: 1.02rem;
					background: #48B76E;
					border-radius:0rem 0pc 0.26rem 0rem;
					text-align: center;
					line-height: 1.02rem;
					img{
						width: 1.05rem;
						height: 0.44rem;
					}
				}
			}
			.theme{
				width: 5.94rem;
				height: 3.21rem;
				background: url("../../../assets/theme.png") no-repeat;
				background-size:cover;
				position: absolute;
				top:1.2rem;
				left: 2.02rem;
				right: 2.02rem;
			}
			.fendui{
				width: 5.33rem;
				height: 1.2rem;
				background: #F2F2F2;
				position: absolute;
				top:4.41rem;
				left: 2.02rem;
				right: 2.02rem;
				border-radius: 0.8rem;
				margin-left: 0.32rem;
				padding-left: 0.5rem;
				padding-top: 0.08rem;
				padding-right: 0.25rem;
				border: 0.04rem solid #F1F9FD;
				.zuobian{
					display: inline-block;
					width:3.2rem;
					height: 0.93rem;
					
					float: left;
					.p1{
						line-height: 0.34rem;
						i{
							margin-top: 0.05rem; 
							img{
								width: 0.4rem;
								height: 0.34rem;
							}
						}
						span{
							display: inline-block;
							width: 2.44rem;
							height: 0.34rem;
							font-size: 0.32rem;
							color: #666666;
							margin-left: 0.08rem;
						}
					}
					.p2{
						margin-top: 0.13rem;
						i{
							img{
								width: 0.4rem;
								height: 0.34rem;
							}
						}
						span{
							display: inline-block;
							width: 2.44rem;
							height: 0.34rem;
							font-size: 0.42rem;
							color: #378F22;
							margin-left: 0.08rem;
						}
					}
				}
				.youbian{
					width:1.2rem;
					height: 0.74rem;
					background: #378F22;
					display: inline-block;
					float: right;
					text-align: center;
					line-height: 0.74rem;
					border-radius: 0.8rem;
					margin-top: 0.1rem;
					span{
						font-size: 0.34rem;
						color: #FFFFFF;
					}
				}
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
				top: 6.13rem;
				left: 2.45rem;
				width: 4.88rem;
				height: 6.2rem;
			}
			.jiaoshui{
				position: absolute;
				top:14.66rem;
				left: 0rem;
				width: 10rem;
				height: 2.32rem;
				background: url("../../../assets/hezhongzhezhao.png") no-repeat;
				background-size:cover;
				.jiaoshuitu{
					width: 2.13rem;
					height: 2.41rem;
					background: url("../../../assets/jiaoshui.png") no-repeat;
					background-size:cover;
					margin: -1.2rem 4rem;
				}
			}
// 			.nengliang{
// 				width:3.52rem;
// 				height: 0.74rem;
// 				border-radius: 0.53rem;
// 				font-size: 0.32rem;
// 				color: #FFFFFF;
// 				letter-spacing: 0;
// 				text-align: center;
// 				line-height: 0.74rem;
// 				background: rgba(118,187,21,0.64);
// 				box-shadow: inset 0 0 0.64rem 0 rgba(96,143,30,0.63);
// 			}
// 			.nengliang1{
// 				position: absolute;
// 				top: 5.24rem;
// 				left:0;
// 			}
// 			.nengliang2{
// 				position: absolute;
// 				top: 6.16rem;
// 				right:1.74rem;
// 			}
// 			.nengliang3{
// 				position: absolute;
// 				top: 7.34rem;
// 				left:1.33rem;
// 			}
// 			.nengliang4{
// 				position: absolute;
// 				top: 8.69rem;
// 				right:0.62rem;
// 			}
		}	
		.mask{
			position: absolute;
			top: 1.22rem;
			left: 0rem;
			width: 10rem;
			height: 30.64rem;
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
				width: 4.45rem;
				height: 0.96rem;
				font-size: 0.37rem;
				color: #FFFFFF;
				text-align: center;
				margin-top: 0.66rem;
				margin-left: 0.26rem;
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
		.jiaoshuichenggong{
			position: fixed;
			top: 5.84rem;
			left: 2rem;
			width: 6.01rem;
			height: 6.36rem;
			border-radius: 0.4rem;
			background: #FFFFFF;
			z-index: 99999;
			text-align: center;
			.jiaoshuitu{
				position: fixed;
				top: 4.53rem;
				left: 2.45rem;
				width: 4.98rem;
				height:3.33rem;
				background: url("../../../assets/popup_image3.png") no-repeat;
				background-size:cover;
				z-index: 9999999999;
			}
			.jiaoshuiclose{
				position: absolute;
				top: -0.26rem;
				right: -0.16rem;
				img{
					width: 0.74rem;
					height: 0.74rem;
				}
			}
			.pp1{
				margin-top: 2.48rem;
				font-size: 0.4rem;
				color: #333333;
			}
			.pp2{
				margin-top: 0.37rem;
				font-size: 0.34rem;
				color: #666666;
			}
			.know{
				margin-top: 0.82rem;
				width: 5.22rem;
				height: 1.09rem;
				background: #F9B707;
				border-radius:0.8rem;
				border: 0;
				font-size: 0.42rem;
				color: #4E1D0E;
			}
		}
		.bottom{
			position: absolute;
			top: 17.2rem;
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