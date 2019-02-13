<template>
	<div id="home">
		<Header></Header>
		<div class="main">
			<!-- 遮罩层 -->
			<div class="zhezhao" v-if="isShow"></div>
			<!-- 二维码 -->
			<div class="Popup" v-if="show">
				<img src="../../../assets/gongzhonghao.png" alt="扫描二维码关注公众号">
			</div>
			<!-- 身份验证 -->
			<div class="login" v-if="guanbi">
				<i class="close" @click="close"><img src="../../../assets/common_shut@2x.png" alt="点击关闭窗口"></i>
				<div class="login1">参与活动需先绑定您的手机号</div>
				<div class="login2">
					<input type="text" placeholder="请输入您的手机号" class="number1"/>
					<span class="yanzhengmatanchaung" v-show="tanchu">验证码已发送到你的手机</span>
					<div class="yanzhengma">
						<input type="text" placeholder="请输入验证码" class="number2"/>
						<button type="primary" class="number3" @click="getNumber">获取验证码</button>
					</div>
				</div>
				<div class="login3">
					<button type="button" class="button">绑定手机号</button>
				</div>
			</div>
			<button type="button" class="btn1" @click="weTree">我们种树</button>
			<button type="button" class="btn2" @click="Itree">我要种树</button>
		</div>
	</div>
</template>
<script>
import Header from "../../commons/Header.vue";
export default {
	name:"Start",
	components:{
		Header
	},
	data(){
		return {
			isShow:false,   		//遮罩层
			show:false,				//关注公众号
			guanbi:true,			//关闭绑定手机号的弹窗
			tanchu:false,			//黑色提示框
			shumiao:[
				
			]
		}
	},
	created:function(){ 

	},
	methods:{
		close(){     //关闭绑定号码弹窗
			this.guanbi=false;
		},
		getNumber(){  //获取验证码===========》弹出黑色弹窗
			this.tanchu=true;
			let that=this;
			var timer = setTimeout(
				function(){
					that.tanchu=false;
					return ;
			},2000);
		},
		Itree(){
			this.$router.push("/iTree")		//我要种树
		},
		weTree(){
			this.$router.push("/weTree")		//我们种树
		}
	}
}
</script>

<style type="text/css" lang="less" scoped>
	#home{
		.main{
			background: url("../../../assets/login_background@2x.png") no-repeat;
			background-size:cover;
			height:16.08rem;
			width:10rem;
			position: relative;
			.zhezhao{					//遮罩
				margin-top: 65px;
				position: fixed;
				left:0px;
				right:0px;
				bottom:0px;
				top: 0px;
				z-index: 99;
				opacity: 0.7;
				background: #030303;
			}		
			.Popup{ 					//弹窗
				position: absolute;
				top: 2.92rem;
				right: 1.2rem;
				width: 7.6rem;
				height: 10rem;
				background: #FFFFFF;
				z-index: 9999999;
				border-radius: 20px;
				img{
					width: 7.6rem;
					height: 10rem;
				}
			}
			.login{
				position: absolute;
				top: 4.24rem;
				right: 1.2rem;
				left: 1.2rem;
				width: 7.6rem;
				height: 7.6rem;
				background: #FFFFFF;
				z-index: 9999999;
				border-radius: 20px;
				text-align: center;
				.close{
					position: absolute;
					top: -11px;
					right: -9px;
					img{
						width: 28px;
						height: 28px;
					}
				}
				.login1{
					width: 5.54rem;
					height: 2.45rem;
					line-height:2.24rem;
					margin: 0 auto;
					font-family: PingFangSC-Regular;
					font-size: 0.42rem;
					color: #333333;
					letter-spacing: 0;
					text-align: center;
				}
				.login2{
					.number1{
						padding-left: 0.4rem;
						width: 6.13rem;
						height: 1.09rem;
						background: #F7F7F7;
						border: 1px solid #D0D0D0;
						border-radius: 0.21rem;
					}
					.yanzhengmatanchaung{
						position: absolute;
						top: 3.09rem;
						right: 0.88rem;
						width: 5.82rem;
						height: 1.22rem;
						background: #000000;
						opacity: 0.7;
						border-radius: 0.21rem;
						font-family: PingFangSC-Regular;
						font-size: 0.42rem;
						color: #FFFFFF;
						letter-spacing: 0;
						text-align: center;
						line-height: 1.22rem;
					}
					.yanzhengma{
						width: 6.13rem;
						height: 1.09rem;
						margin: 0 auto;
						margin-top: 0.37rem;
						.number2{
							width: 3.46rem;
							height: 1.09rem;
							float: left;
							padding-left: 0.4rem;
							background: #F7F7F7;
							border-radius: 0.21rem;
							border: 1px solid #D0D0D0;
						}
						.number3{
							width: 2.4rem;
							height: 1.09rem;
							float: right;
							border-radius: 0.21rem;
							background: #FFFFFF;
							color: #FAC538;
							border: 1px solid #F9B707;
						}
					}
				}
				.login3{
					margin: 0 auto;
					.button{
						width: 6.13rem;
						height: 1.09rem;
						margin-top: 0.66rem;
						border-radius: 0.66rem;
						background: #F9B707;
						border: 0;
						color: #4E1D0E;
						font-family: PingFangSC-Medium;
						font-size: 0.45rem;
						letter-spacing: 0;
						line-height: 1.09rem;
					}
				}
			}
			.btn1{
				position: absolute;
				bottom: 1.2rem;
				left:0.74rem;
				width: 4rem;
				height: 1.28rem;
				border-radius: 0.66rem;
				background: #F9B707;
				border: 0px;
				color: #4E1D0E;
				font-size: 0.45rem;
				font-family:"PingFangSC-Medium";
				font-weight: bold;
			}
			.btn2{
				position: absolute;
				bottom: 1.2rem;
				right: 0.74rem;
				width: 4rem;
				height: 1.28rem;
				border-radius: 0.66rem;
				background: #F9B707;
				border: 0rem;
				color: #4E1D0E;
				font-size: 0.45rem;
				font-family:"PingFangSC-Medium";
				font-weight: bold;
			}
		}	
	}
</style>