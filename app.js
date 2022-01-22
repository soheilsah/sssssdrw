const btn_modal = document.getElementById('btn-login-modal');
const container_modal = document.querySelector('.container-modal');
const modal = document.querySelector('.modal-form');
const modal_close = document.querySelector('.modal-form__close');
const modal_cover = document.querySelector('.modal-form__cover');

btn_modal.addEventListener('click',()=>{
    container_modal.classList.toggle('show');
    modal.classList.toggle('show');
});

modal_close.addEventListener('click',()=>{
    container_modal.classList.remove('show');
    modal.classList.remove('show');
});

container_modal.addEventListener('click',(e)=>{
    console.log(e.target);
    if(e.target.classList.contains('container-modal')){

        container_modal.classList.remove('show');
        modal.classList.remove('show');
    }
});

modal.addEventListener('mouseover',(e)=>{
    console.log(e);
    modal_cover.style.filter = `hue-rotate(${e.clientX}deg)`;
});