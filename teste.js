document.addEventListener('DOMContentLoaded', function () {
    const eIn = document.querySelector('.inputUser');
    const eOut = document.querySelector('.rightView');

    const dIn = document.querySelector('.inputUser');
    const dOut = document.querySelector('.rightView');

    const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let encryptedMessage = '';
    let decryptedMessage = '';

    // Adiciona manipulador de evento ao botão "Cripitografar"
    document.querySelector('.cripitografar button').addEventListener('click', function () {
        const text = eIn.value.trim();
        encryptText(text);
    });

    // Adiciona manipulador de evento ao botão "Descripitografar"
    /* document.querySelector('.descripitografar button').addEventListener('click', function () {
        const text = dIn.value.trim();
        decryptText(text);
    }); */
    document.querySelector('.descripitografar button').addEventListener('click', function () {
        decryptText(encryptedMessage);
    });

    function encryptText(text) {
        encryptedMessage = '';

        for (const letter of text) {
            if (letter === 'z') {
                encryptedMessage = encryptedMessage.concat('', 'a');
            } else if (letter === 'Z') {
                encryptedMessage = encryptedMessage.concat('', 'A');
            } else if (letter === ' ') {
                encryptedMessage = encryptedMessage.concat('', ' ');
            } else {
                encryptedMessage = encryptedMessage.concat('', alph[alph.indexOf(letter) + 1]);
            }
        }
        eOut.innerHTML = ` ${encryptedMessage}`;
    }

    function decryptText(text) {
        decryptedMessage = '';

        for (const letter of text) {
            if (letter === 'a') {
                decryptedMessage = decryptedMessage.concat('', 'z');
            } else if (letter === 'A') {
                decryptedMessage = decryptedMessage.concat('', 'Z');
            } else if (letter === ' ') {
                decryptedMessage = decryptedMessage.concat('', ' ');
            } else {
                decryptedMessage = decryptedMessage.concat('', alph[alph.indexOf(letter) - 1]);
            }
        }
        dOut.innerHTML = `Texto descriptografado: ${decryptedMessage}`;
    }
});
