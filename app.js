document.addEventListener("DOMContentLoaded", function () {
    const inputUserEncrypter = document.querySelector(".inputUser");
    const eOut = document.querySelector(".rightView");

    const inputUserDecrypter = document.querySelector(".inputUser");
    const dOut = document.querySelector(".rightView");

    const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let encryptedMessage = "";
    let decryptedMessage = "";

    // Adiciona manipulador de evento ao botão "Cripitografar"
    document
        .querySelector(".cripitografar button")
        .addEventListener("click", function () {
            const text = inputUserEncrypter.value.trim();
            encryptText(text);
            console.log(text);
        });

    // Adiciona manipulador de evento ao botão "Descripitografar"
    document
        .querySelector(".descripitografar button")
        .addEventListener("click", function () {
            const text = inputUserDecrypter.value.trim();
            decryptText(text);
        });

    function encryptText(text) {
        // Lógica de criptografia aqui
        // Atualiza a visualização
        eOut.innerHTML = `Texto criptografado: ${encryptedMessage}`;
    }

    function decryptText(text) {
        // Lógica de descriptografia aqui
        // Atualiza a visualização
        dOut.innerHTML = `Texto descriptografado: ${decryptedMessage}`;
    }
});
