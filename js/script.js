const htmlEl = {
    btnModal: document.querySelector('#btnModal'),
    btnLogin: document.querySelector('#btnLogin'),
    btnCancel: document.querySelector('#btnCancel'),
    modal: document.querySelector('#modal'),
    btnModal2: document.querySelector('#btnModal2'),
    btnReg: document.querySelector('#btnReg'),
    btnCancel2: document.querySelector('#btnCancel2'),
    modal2: document.querySelector('#modal2'),
    inpEmail: document.querySelector('#inpEmail'),
    inpPassword: document.querySelector('#inpPassword'),
    emailNew: document.querySelector('#emailNew'),
    passNew: document.querySelector('#passNew'),
    passNewVer: document.querySelector('#passNewVer'),
}

const dataBase = [
    {
        email: "marchello0509@gmail.com",
        password: "Marchello0509"
    },
    {
        emailReg: "marchello0509@gmail.com",
        passwordReg: "Marchello0509",
        passwordRegVer: "Marchello0509",
    }
]

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

htmlEl.btnLogin.addEventListener('click', () => {
    const userEmail = htmlEl.inpEmail.value
    const userPass = htmlEl.inpPassword.value
    dataBase.forEach((user) => {
        if (userEmail === user.email && userPass === user.password) {
            console.log(true)
            window.location.href = './account.html'
        } else {
            console.log(false)
        }
    })
})

htmlEl.btnReg.addEventListener('click', () => {
    const userEmailNew = htmlEl.emailNew.value
    const userPassNew = htmlEl.passNew.value
    const userPassNewVer = htmlEl.passNewVer.value
    dataBase.forEach((newUser) => {
        if (userEmailNew === newUser.emailReg && userPassNew === newUser.passwordReg && userPassNewVer === newUser.passwordRegVer) {
            console.log(true)
            window.location.href = './account.html'
        } else {
            console.log(false)
        }
    })
})