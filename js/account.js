const htmlEl = {
    btnOut: document.querySelector('#btnOut'),
    btnCancel: document.querySelector('#btnCancel3'),
    btnAccount: document.querySelector('#btnAccount'),
    modal: document.querySelector('#modal')
}

htmlEl.btnAccount.addEventListener('click', () => {
    htmlEl.modal.style.display = "flex"
})

htmlEl.btnCancel.addEventListener('click', () => {
    htmlEl.modal.style.display = "none"
})

htmlEl.btnOut.addEventListener('click', () => {
    window.location.href = './index.html'
})