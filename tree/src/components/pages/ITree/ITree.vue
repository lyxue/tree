<template>
	<div id="plantTree">
		<div class="dingwei">
			<Header></Header>
		</div>
		<div class="top">
			<div class="left" @click="paihang">
				<!-- <img src="../../../assets/paihang.png" alt="能量排行榜"> -->
			</div>
			<div class="right">
				<img src="../../../assets/zhongshu.png">
				<span class="zhiliang">1980g</span>
				<span class="text">种树</span>
			</div>
			<!-- 主题 -->
			<div class="theme"></div>
			<!-- 规则 -->
			<i class="gonglv" @click="gonglve"></i>
			<i class="guize" @click="close"></i>
			<!-- 树苗=======>需要网络请求更换 -->
			<img src="../../../assets/xiaoshu.png" alt="小树" class="shu">
			<!-- 4个能量 -->
			<div class="nengliang nengliang1">充值成功 +50g能量</div>
			<div class="nengliang nengliang2">签到成功 +100g能量</div>
			<div class="nengliang nengliang3">邀请好友 +300g能量</div>
			<div class="nengliang nengliang4">订购成功 +50g能量</div>
			<div class="heanniu" @click="xianshi"></div>
			<div class="getNl"></div>
		</div>
		<!--===================================那两个规则与弹窗========================================== -->
		<!-- 遮罩层 -->
		<div class="mask" v-if="show||IsShow"></div>
		<!--攻略弹窗-->
		<div class="gonglvtanchuang tanchuang" v-if="IsShow">
			<div class="guanbi" @click="gonglve"></div>
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
			<div class="guanbi" @click="close"></div>
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
			<!-- <img src="../../../assets/fenxiang.png"> -->
		</div>
		<!--==================================种树成功弹窗=========================================== -->
		<div class="mask" v-if="success"></div>
		<div class="successTanchuang" v-if="success">
			<i class="closeSuccess" @click="successClose"></i>
			<span class="zhongshuchenggong">种树成功</span>
			<p>XXXXXXX将在XXXXXX种植第N棵树</p>
		</div>
		<!--==================================合种弹窗===（给小树取名字）======================================== -->
		<div class="mask" v-if="hezhong"></div>
		<div class="hezhongTanchuang" v-if="hezhong">
			<div class="tu">
				<img src="data:image/png;base64,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">
				<i class="closehezhong" @click="hezhongclose"></i>
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
							<i class="qiandao2-1"><!-- <img src="../../../assets/nengliang.png" alt="能量"> --></i>
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
							<i class="qiandao2-1"></i>
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
							<i class="qiandao2-1"></i>
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
							<i class="qiandao2-1"></i>
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
			fenxiang:true,				//分享
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
			background: url("http://wx.yn10010.com/wx_webs/tree/static/img/ItreeBackgroundS.png") no-repeat;
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
				background: url("../../../assets/TreePlanting.fw.png") no-repeat 0 -5.33rem;
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
				// 需要转base64
				background: url("http://wx.yn10010.com/wx_webs/tree/static/img/theme.png") no-repeat;
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
				display: inline-block;
				width: 1.01rem;
				height: 1.16rem;
				background: url("../../../assets/TreePlanting.fw.png") no-repeat -4rem 0;
			}
			.guize{
				position: absolute;
				top: 4.65rem;
				right: 0.38rem;
				display: inline-block;
				width: 1.01rem;
				height: 1.16rem;
				background: url("../../../assets/TreePlanting.fw.png") no-repeat -4rem 0;
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
				width: 1.52rem;
				height: 1.72rem;
				background: url("../../../assets/TreePlanting.fw.png") no-repeat -6.66rem 0;
			}
			.getNl{
				position: absolute;
				top: 11.26rem;
				right:0.66rem;
				width: 2.37rem;
				height: 1.64rem;
				background: url("../../../assets/TreePlanting.fw.png") no-repeat -1.33rem 0;
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
				width: 0.74rem;
				height: 0.74rem;
				background: url("../../../assets/TreePlanting.fw.png") no-repeat -0.05rem 0;
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
			background: url("data:image/png;base64,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") no-repeat;
			background-size:cover;
			z-index: 9999;
			span{
				display: inline-block;
				width: 4rem;
				height: 0.96rem;
				font-size: 0.37rem;
				color: #FFFFFF;
				text-align: center;
				margin-top: 0.45rem;
				margin-left: 0.53rem;
			}
		}
		.fenxiangtu2{
			position: fixed;
			top: 1.61rem;
			right: 0.38rem;
			width: 3.85rem;
			height: 2.4rem;
			z-index: 9999999999;
			background: url("data:image/png;base64,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") no-repeat;
			background-size:3.84rem 2.37rem;
		}
		.successTanchuang{
			position: fixed;
			top: 3.36rem;
			right: 1.2rem;
			width: 7.6rem;
			height: 10rem;
			background: url("http://wx.yn10010.com/wx_webs/tree/static/img/popup_over.png") no-repeat;
			background-size:cover;
			z-index: 99999;
			border-radius: 0.53rem;
			text-align: center;
			.closeSuccess{
				position: absolute;
				top: -0.26rem;
				right: -0.13rem;
				display: inline-block;
				width: 0.74rem;
				height: 0.74rem;
				background: url("../../../assets/TreePlanting.fw.png") no-repeat -0.05rem 0;
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
			position: absolute;
			top:5.68rem;
			right: 1.2rem;
			width: 7.6rem;
			height: 7.64rem;
			background: #FFFFFF;
			z-index: 99999;
			border-radius: 0.53rem;
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
					display: inline-block;
					width: 0.74rem;
					height: 0.74rem;
					background: url("../../../assets/TreePlanting.fw.png") no-repeat -0.05rem 0;
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
			background: url("http://wx.yn10010.com/wx_webs/tree/static/img/ItreeBackgroundX.png") no-repeat;
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
					background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArIAAADICAYAAAFjWDKYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkM3MDQwMkYxQjlDMTFFOUIxMzJDMTM0NDNFN0FDMDEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkM3MDQwMzAxQjlDMTFFOUIxMzJDMTM0NDNFN0FDMDEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyQzcwNDAyRDFCOUMxMUU5QjEzMkMxMzQ0M0U3QUMwMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyQzcwNDAyRTFCOUMxMUU5QjEzMkMxMzQ0M0U3QUMwMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PthBLNoAACbMSURBVHja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") no-repeat;
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
								display: inline-block;
								width: 0.29rem;
								height: 0.29rem;
								background: url("../../../assets/TreePlanting.fw.png") no-repeat -6.66rem -2.66rem;
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