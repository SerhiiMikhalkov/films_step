alert('в этом сайте возможно зайти только на первый фильм, все кнопки работают, в врапере переход работает только на гит хаб, увеличте размер сайта до 110% для коретного пользования, нажмите "ok"');

// come back fastly

let docTitle = document.title;
window.addEventListener("blur", () =>{
    document.title = "Возвращаяся скорее :(";
})
window.addEventListener("focus", () =>{
    document.title = docTitle;
})

// time_another

linkBtn = document.querySelector('#cards');

linkBtn.onclick = function() {
    alert('У меня на эти страницы ксожалению не хватило времени, попробуй другой раз ;)')
    return
}