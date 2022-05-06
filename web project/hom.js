const openModelButtons = document.querySelectorAll('[data-model-target]')
const closeModelButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('ov')

openModelButtons.forEach(button =>{
    button.addEventListener('click',() =>{
        const about = document.querySelector(button.dataset.modalTarget)
        openModel(about)
    })
})
openModelButtons.forEach(button =>{
    button.addEventListener('click',() =>{
        const about = button.closest('.about')
        closeModel(about)
    })
})

function openModel(about){
if(about == null) return
    about.classList.add('active')
    overlay.classList.add('active')
}

function closeModel(about){
if(about == null)return
    about.classList.remove('active')
    overlay.classList.remove('active')
}






