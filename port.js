burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
leftnav = document.querySelector('.leftnav')


burger.addEventListenar('click',()=>{
    leftnav.classlist.toggle('v-class');
    navbar.classlist.toggle('h-nav');


})