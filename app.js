let encryptedMessage = "";
let decryptedMessage = "";
const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function copyText() {
    const getResults = document.getElementById("result").value;

    navigator.clipboard.writeText(getResults).then(
        () => {
            console.log("Text copied to clipboard");
        },
        () => {
            console.error("Failed to copy text to clipboard");
        }
    );
}

function inputValidate(text) {
    const isValidInput = /^[a-zA-Z\s]*$/.test(text);

    if (text.length > 50 || text.length < 1) {
        alert("Por favor, insira um texto com menos de 1 e 150 caracteres.");
        return false;
    }
    if (!isValidInput) {
        alert("Por favor, digite apenas letras e espaços.");
        return false;
    }

    return true;
}

function decryptText() {
    const getEntrada = encryptedMessage;
    const getResults = document.getElementById("result");

    // Limpar a variável ao clicar pela segunda vez
    if (decryptedMessage) {
        decryptedMessage = "";
    }

    for (const letter of getEntrada) {
        if (letter === "a") {
            decryptedMessage = decryptedMessage.concat("", "z");
        } else if (letter === "A") {
            decryptedMessage = decryptedMessage.concat("", "Z");
        } else if (letter === " ") {
            decryptedMessage = decryptedMessage.concat("", " ");
        } else {
            decryptedMessage = decryptedMessage.concat(
                "",
                alph[alph.indexOf(letter) - 1]
            );
        }
    }
    getResults.value = `${decryptedMessage}`;
}

function encryptText() {
    const getEntrada = document.getElementById("entrada").value;
    const getResults = document.getElementById("result");
    const text = getEntrada.trim();

    if (!inputValidate(text)) {
        return;
    }

    // Limpar a variável ao clicar pela segunda vez
    if (encryptedMessage) {
        encryptedMessage = "";
    }

    for (const letter of text) {
        if (letter === "z") {
            encryptedMessage += "a";
        } else if (letter === "Z") {
            encryptedMessage += "A";
        } else if (letter === " ") {
            encryptedMessage += " ";
        } else {
            const index = alph.indexOf(letter);
            encryptedMessage += alph[index + 1];
        }
    }

    getResults.value = encryptedMessage;
    document.getElementById("entrada").value = "";
}
