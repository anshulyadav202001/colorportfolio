const menu=document.querySelector('#mobile-menu')
const menuLinks=document.querySelector('.navbar_menu')
const navLogo=document.querySelector('#navbar_logo')

//display mobile menu

const mobileMenu=()=>{
 menu.classList.toggle('is-active');
 menuLinks.classList.toggle('active');
};


menu.addEventListener('click', mobileMenu);

//show active menu when scrolling
const highlightMenu=()=>{
     const elem=document.querySelector('.highlight')
     const homeMenu=document.querySelector('#home-page')
     const aboutMenu=document.querySelector('#about-page')
     const servicesMenu=document.querySelector('#services-page')
     let scrollPas= window.scrollY

     //add 'highlight' class to my menu items
     if(window.innerWidth > 960 && scrollPas < 600)
     {
        homeMenu.classList.add('highlight')  
        aboutMenu.classList.add('highlight') 
        return
     }
}