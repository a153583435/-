/**
 * Created by Apple on 2020/1/4.

 do{
          var msg=prompt('请输入口令','联系作者索要口令');
           if(msg!=='芝麻开门'){
                alert('输入错误，请重新输入');
           }else{
                        alert('欢迎来访');
           }
        }while(msg!=='芝麻开门');
 */

//音乐敲击播放
function a(){
    var audio = document.getElementById('music');
    if(audio.paused){
        audio.play();//audio.play();// 播放
    }
}

//联系作者
function lianxi(){
    if(confirm('确定需要投稿或者加入我们吗?')!=false){
        alert('作者暂未公布联系方式');
    }
}
//注册/进度查询
function zc(){
    var result=  alert('暂未开放注册');
}
function jindu(){
    var result=  alert('网站正处于内测阶段,上线时间敬请期待！');
}
//返回顶部
window.onscroll=function(){
    console.log(document.documentElement.scrollTop);
}
var tream=null;
var but=document.querySelector('.GoTop');
 function GoTop() {
    //每隔一秒向上滚动100距离
    tream= setInterval(function(){
        var top=document.documentElement.scrollTop||document.body.scrollTop;
        top=top-100;
        document.documentElement.scrollTop=top;
        document.body.scrollTop=top;
        if(top<=0){
            clearInterval(tream);
        }
    },50)
}
//轮播图
var lefbtn=document.querySelector('#leftBtn');
var rightbtn=document.querySelector('#rightBtn');
var menuLis=document.querySelectorAll('.menu_ul>li');
lunbo(menuLis);
function lunbo(lis){
    if(lis.length==1){
        lefbtn.style.display='none';
        rightbtn.style.display='none';
    }else{
        //定义轮播图片下标
        var index=0;
        //设置自动轮播
        var timer=setInterval(function(){
            lis[index].classList.remove("select");
            index++;
            if(index==lis.length){
                index=0;
            }
            lis[index].classList.add("select");
        },4000);

//构建右按钮点击切换函数
        rightbtn.onclick=function(){
//为当前图片移除选中class类，消失
            lis[index].classList.remove("select");
//下标自增1
            index++;
//如果下标自增超过轮播图片长度，则设置为0，即返回第一张图片
            if(index==lis.length){
                index=0;
            }
//为下一张图片增加选中class类，显示
            lis[index].classList.add("select");
        }
//构建左按钮点击切换函数
        lefbtn.onclick=function(){
            lis[index].classList.remove("select");
            index--;
            if(index==-1){
                index=lis.length-1;
            }
            lis[index].classList.add("select");
        }

    }
}
//轮播热帖

