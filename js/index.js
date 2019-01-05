
var liNodes=document.querySelectorAll('.headerMain li');
var dowmNodes=document.querySelectorAll('.nav .down');
var arrow =document.querySelector('.arrow');
arrow.style.left=liNodes[0].getBoundingClientRect().left+liNodes[0].offsetWidth/2-arrow.offsetWidth/2+'px';
for (var i = 0; i < liNodes.length; i++) {
    liNodes[i].index=i;

    liNodes[i].onclick=function () {
        this.index=nowindex;

        for(var j=0;j<dowmNodes.length;j++){
            dowmNodes[j].style.width=0;
        }
        dowmNodes[this.index].style.width='100%';
        contentMain.style.top=-contentHeight*this.index+'px';
        arrow.style.left=this.getBoundingClientRect().left+this.offsetWidth/2-arrow.offsetWidth/2+'px';
    }
}
var contentMain=document.querySelector('.contentMain');
var content=document.querySelector('.content');
var contentHeight=content.offsetHeight;
var nowindex=0;
var timer=null;

    document.onmousewheel=wheel;
document.addEventListener('DOMMouseScroll',wheel);
function wheel(event) {
    event = event || window.event;
       clearTimeout(timer)
       timer=setTimeout(function () {
           var flag = '';
           if (event.wheelDelta) {
               //ie/chrome
               if (event.wheelDelta > 0) {
                   flag = 'up';

               } else {
                   flag = 'down';


               }
           } else if (event.detail) {
               //firefox
               if (event.detail < 0) {
                   flag = 'up';
               } else {
                   flag = 'down'
               }
           }

           switch (flag) {
               case 'up' :
                   if(nowindex>0){
                       nowindex --;
                       contentMain.style.top=-contentHeight*nowindex+'px';
                       arrow.style.left=liNodes[nowindex].getBoundingClientRect().left+liNodes[nowindex].offsetWidth/2-arrow.offsetWidth/2+'px';
                       for(var j=0;j<dowmNodes.length;j++){
                           dowmNodes[j].style.width=0;
                       }
                       dowmNodes[nowindex].style.width='100%';
                   };
                   break;
               case 'down' :
                   if(nowindex<4){
                       nowindex ++;
                       contentMain.style.top=-contentHeight*nowindex+'px';
                       arrow.style.left=liNodes[nowindex].getBoundingClientRect().left+liNodes[nowindex].offsetWidth/2-arrow.offsetWidth/2+'px';
                       for(var j=0;j<dowmNodes.length;j++){
                           dowmNodes[j].style.width=0;
                       }
                       dowmNodes[nowindex].style.width='100%';
                   }
                   break;
           }
       },200)


      //禁止默认行为


    event.preventDefault && event.preventDefault();
    return false;
}
window.onresize=function () {
    arrow.style.left=liNodes[nowindex].getBoundingClientRect().left+liNodes[nowindex].offsetWidth/2-arrow.offsetWidth/2+'px';
}
// 小圆点切换，图片旋转操作
var licircleNodes=document.querySelectorAll('.circle li');
var lichangeNodes=document.querySelectorAll('.fourmain li');
var nowNum=0;
var lastNum=0;
for (var i = 0; i < licircleNodes.length; i++) {
    licircleNodes[i].num=i;
    licircleNodes[i].onclick=function () {
        for (var j = 0; j < licircleNodes.length; j++) {
            licircleNodes[j].className='';
            lichangeNodes[j].style.visibility='hidden';
             nowNum=this.num;
            // console.log(nowNum)

        }
        lichangeNodes[nowNum].style.visibility='visible';
        lichangeNodes[lastNum].style.visibility='visible';

        this.className='active';
        if(nowNum==lastNum){return};
        if(nowNum>lastNum){
            lichangeNodes[nowNum].className='rightShow';
            lichangeNodes[lastNum].className='leftHide';

        }else{
            lichangeNodes[nowNum].className='leftShow';
            lichangeNodes[lastNum].className='rightHide';
        }

        lastNum=nowNum;

    }


}
// 自动轮播
var timer=0;
var count=0;
var lastcount=0;
autoPlay();
function autoPlay() {
    timer=setInterval(function () {
        count++;
        if(count>3){
            count=0;
        }
        // console.log(count)
        for (var i = 0; i < licircleNodes.length; i++) {
            licircleNodes[i].className='';
            lichangeNodes[i].style.visibility='hidden';

        }

        licircleNodes[count].className='active';
        lichangeNodes[count].style.visibility='visible'
        lichangeNodes[lastcount].style.visibility='visible'
        lichangeNodes[count].className='rightShow';
        lichangeNodes[lastcount].className='leftHide';
        lastcount=count;
    },2500);
}

var contentCenter=document.querySelector('.contentCenter');
contentCenter.onmouseenter=function () {
    clearInterval(timer);
};
contentCenter.onmouseleave=function () {
    autoPlay();
}