const navlink = document.querySelectorAll(".navlinklist");
const menu = document.getElementById("menu");
const nav = document.querySelector('.navbar');
const closebtn = document.querySelector("#closebtn");
const nav_icon1 = document.querySelector("#nav-icon1");
const back_to_top =document.querySelector("#back-to-top");



const sections = document.querySelectorAll('.sections');

function changeLinkState() {
  let index = sections.length;
  while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
  navlink.forEach((link) => {
    link.classList.remove('active')
  });
  navlink[index].classList.add('active');
  const navscroll=navlink[index].getAttribute("data-target");
  addtoevryelhaveclass(navscroll)
}

window.addEventListener('scroll', changeLinkState);

function openFunction(e){
  e.preventDefault();
  menu.setAttribute("class",'sidemenu slide-in')
 }
function closeFunction(e){
  e.preventDefault();
  menu.setAttribute("class",'sidemenu slide-out')
}

closebtn.addEventListener("click",closeFunction);
nav_icon1.addEventListener("click",openFunction);


for (var i = 0; i < navlink.length; ++i) {
  navlink[i].addEventListener("click", function (e) {
      e.preventDefault();
      [].forEach.call(navlink, function (el) {
          el.classList.remove("active")
      });
      let scrollt = this.getAttribute("data-target");
      scrollTo(document.getElementById(scrollt));
      addtoevryelhaveclass(scrollt)
  });
}
function addtoevryelhaveclass(ele){
  const linkaddactive= document.querySelectorAll(`.${ele}`)
  linkaddactive.forEach(item=>{
    item.classList.add("active");   
  })
}
function scrollTo(element) {
  window.scroll({
      behavior: 'smooth',
      top: element.offsetTop,
  });
}

window.onscroll = function () {
  if ((document.body.scrollTop >= 40 || document.documentElement.scrollTop >=40)) {
      nav.classList.add("nav-onscrol");
      if ((document.body.scrollTop >= 250 || document.documentElement.scrollTop >=250)){
        back_to_top.classList.add("on");
      }
  }
 
  else{
      nav.classList.remove("nav-onscrol");
      back_to_top.classList.remove("on");
  }
};

back_to_top.addEventListener("click" , (e)=>{
  e.preventDefault();
  window.scroll({
    behavior: 'smooth',
    top: 0
});
})
