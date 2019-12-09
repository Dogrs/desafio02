const modalOverlay  = document.querySelector('.modal_overlay')
const cards         = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click",function(){
        const img_id    = card.getAttribute("id_img")
        const text_id   = card.getAttribute("id_texto")
        const cheff_id  = card.getAttribute("id_cheffe")

        modalOverlay.classList.add("active")
        modalOverlay.querySelector("img").src=`/Imagens/${img_id}`
        modalOverlay.querySelector(".card_content").innerHTML=text_id
        modalOverlay.querySelector(".txt_cheffe").innerHTML=cheff_id
    })
}

document.querySelector(".close_modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})

