var menu = document.querySelector('nav ul');
var barMenu = document.querySelector('nav .icone-menu');
var iconMenu = document.querySelector('nav .icone-menu img');

barMenu.addEventListener('click',function(){

    if (iconMenu.getAttribute("src") == 'menuimg.png'){
        iconMenu.getAttribute("src") =='sair.png';
    }else{
        iconMenu.setAttribute("src","menuimg.png");
    }
    menu.classList.toggle('active')

})

/*function cursos(){
    window.location = "cursos.html"
}*/