
var liNodes=document.querySelectorAll('.headerMain li');
var arrow =document.querySelector('.arrow');
arrow.style.left=liNodes[0].getBoundingClientRect().left+liNodes[0].offsetWidth/2-arrow.offsetWidth/2+'px';
for (var i = 0; i < liNodes.length; i++) {
    liNodes[i].num=i;
    liNodes[i].onclick=function () {

        contentMain.style.top=-contentHeight*this.num+'px';
        arrow.style.left=this.getBoundingClientRect().left+this.offsetWidth/2-arrow.offsetWidth/2+'px';
    }
}
var contentMain=document.querySelector('.contentMain');
var content=document.querySelector('.content');
var contentHeight=content.offsetHeight;
var index=0;


    document.onmousewheel=wheel;
document.addEventListener('DOMMouseScroll',wheel);
function wheel(event) {
    event = event || window.event;

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
            if(index>0){
                index --;
                contentMain.style.top=-contentHeight*index+'px';
                arrow.style.left=liNodes[index].getBoundingClientRect().left+liNodes[index].offsetWidth/2-arrow.offsetWidth/2+'px';
            };
            break;
        case 'down' :
            if(index<4){
                index ++;
                contentMain.style.top=-contentHeight*index+'px';
                arrow.style.left=liNodes[index].getBoundingClientRect().left+liNodes[index].offsetWidth/2-arrow.offsetWidth/2+'px';
            }
            break;
    }

    //禁止默认行为
    event.preventDefault && event.preventDefault();
    return false;
}