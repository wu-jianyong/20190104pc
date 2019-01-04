
var liNodes=document.querySelectorAll('.headerMain li');
var arrow =document.querySelector('.arrow');
arrow.style.left=liNodes[0].getBoundingClientRect().left+liNodes[0].offsetWidth/2-arrow.offsetWidth/2+'px';
for (var i = 0; i < liNodes.length; i++) {
    liNodes[i].onclick=function () {
        arrow.style.left=this.getBoundingClientRect().left+this.offsetWidth/2-arrow.offsetWidth/2+'px';
    }
}
