let bttn = document.querySelector("#login");

bttn.addEventListener('click',function(){
    bttn.firstElementChild.classList.toggle('open')
    bttn.lastElementChild.classList.toggle('list')
})

function loginPopup(){
    window.open("popup.html","login","width=453,height=432")
}

function fnGoJoin(){
    window.open("register.html","register")
}