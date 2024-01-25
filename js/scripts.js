const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("qr-form button");

const qrCodeInput = document.querySelector("qr-form input");

const qrCodeImg = document.querySelector("qr-code img");

// Eventos //


// Gerar QR Code //

function generateQrCode (){

    const qrCodeInputValue = qrCodeInput.value;

    if (!qrCodeInputValue) return;

    qrCodeBtn.innerText = "Gerando código...";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrCodeImg.addEventListener("load", () => { 
        // Só mostra o QR code após o carregamento //
        container.classList.add("active");
        qrCodeBtn.innerText = "Código criado";
    });   
}

qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
})

qrCodeInput.addEventListener("keydown", () => {
    if (e.code === "enter");
});

//Limpar área do QR Code //
qrCodeInput.addEventListener("keyup", () => {
    if(!qrCodeInputValue) {
        container.classList.remove("active");
        qrCodeBtn.innerText = "Gerar QR Code";
    }
});