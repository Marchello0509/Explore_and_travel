const htmlEl = {
    btnModal: document.querySelector('#btnModal'),
    btnLogin: document.querySelector('#btnLogin'),
    btnCancel: document.querySelector('#btnCancel'),
    modal: document.querySelector('#modal'),
    btnModal2: document.querySelector('#btnModal2'),
    btnLogin2: document.querySelector('#btnLogin2'),
    btnCancel2: document.querySelector('#btnCancel2'),
    modal2: document.querySelector('#modal2')
}

htmlEl.btnModal.addEventListener('click', () => {
    htmlEl.modal.style.display = "flex"
})

htmlEl.btnCancel.addEventListener('click', () => {
    htmlEl.modal.style.display = "none"
})

htmlEl.btnModal2.addEventListener('click', () => {
    htmlEl.modal2.style.display = "flex"
})

htmlEl.btnCancel2.addEventListener('click', () => {
    htmlEl.modal2.style.display = "none"
})