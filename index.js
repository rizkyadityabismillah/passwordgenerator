let passwordlength = document.getElementById("passwordlength")
let password = document.getElementById("password")
let savebutton = document.getElementById("saveButton")

function generatePassword(len) {
    const loweralphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperalphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numerik = "0123456789";
    const simbol = "!@#$%^&*()_+=-;:<?>/|~`{}[],."

    data = loweralphabet + upperalphabet + numerik + simbol

    let generator = '';
    for (let index = 0; index < len; index++) {
        generator += data[~~(Math.random() * data.length)]
    }
    return generator;
}

function getPassword() {
    const newPassword = generatePassword(passwordlength.value)
    password.value = newPassword

    setTimeout(() => {
        alert("password has been generate")
    }, 1000)
}

function savePassword() {
    document.title = password.value
    savebutton.setAttribute('href','data:text/plain;charseutf-8,' + encodeURIComponent(`password saya : ${document.title}`))

    savebutton.setAttribute('download','MyPasswordGeneratorLog.txt')
    setTimeout(() => {
        alert("password tersimpan")
    }, 1000)
}