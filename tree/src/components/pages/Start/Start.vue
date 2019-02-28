<template>
	<div id="home">
		<!-- <Header></Header> -->
		<div class="main">
			<!-- 遮罩层 -->
			<div class="zhezhao" v-if="isShow"></div>
			<!-- 二维码 -->
			<div class="Popup" v-if="show">
				<img src="http://wx.yn10010.com/wx_webs/tree/static/img/gongzhonghao.png" alt="扫描二维码关注公众号">
			</div>
			<!-- 身份验证 -->
			<div class="login" v-if="guanbi">
				<i class="close" @click="close"></i>
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
// import Header from "../../commons/Header.vue";
export default {
	name:"Start",
	components:{
	
	},
	data(){
		return {
			isShow:true,   		    //遮罩层
			show:false,				//关注公众号
			guanbi:true,			//关闭绑定手机号的弹窗
			tanchu:false,			//黑色提示框
			timer: null, 		    // 定时器名称
			shumiao:[
				
			]
		}
	},
	created:function(){ 
		console.log(window.location.href);
	},
	methods:{
		close(){     //关闭绑定号码弹窗
			this.guanbi=false;
			this.isShow=false;
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
			this.$router.push("/wePlantTrees")		//我们种树
		}
	},
	beforeDestroy() {
		clearInterval(this.timer);        
		this.timer = null;
	}
}
</script>

<style type="text/css" lang="less" scoped>
	#home{
		.main{
			background: url("http://wx.yn10010.com/wx_webs/tree/static/img/login_background@2x.png") no-repeat;
			background-size:10rem 17.78rem;
			height:17.78rem;
			width:10rem;
			position: relative;
			.zhezhao{					//遮罩
				position: absolute;
				left:0rem;
				right:0rem;
				bottom:0rem;
				top: 0rem;
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
				border-radius: 0.53rem;
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
				border-radius: 0.53rem;
				text-align: center;
				.close{
					position: absolute;
					top: -0.29rem;
					right: -0.24rem;
					display: inline-block;
					width: 0.74rem;
					height: 0.74rem;
					background: url("data:image/png;base64,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") no-repeat;
					background-size:0.74rem 0.74rem;
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
						border: 0.02rem solid #D0D0D0;
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
							border: 0.02rem solid #D0D0D0;
						}
						.number3{
							width: 2.4rem;
							height: 1.09rem;
							float: right;
							border-radius: 0.21rem;
							background: #FFFFFF;
							color: #FAC538;
							border: 0.02rem solid #F9B707;
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
				border: 0rem;
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