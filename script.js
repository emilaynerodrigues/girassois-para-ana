const frases = [
  "Ana, fique bem.",
];

const texto = document.getElementById("texto");

let frase = 0;
let letra = 0;

function escrever() {
  if (letra < frases[frase].length) {
    texto.innerHTML += frases[frase][letra];
    letra++;

    setTimeout(escrever, 70);
  } else {
    if (frase === frases.length - 1) {
      return;
    }

    setTimeout(() => {
      texto.innerHTML = "";
      frase++;
      letra = 0;
      escrever();
    }, 3000);
  }
}

escrever();

// =====================================================
// NOTIFICAÇÃO - CARTA 11
// =====================================================

const parametros = new URLSearchParams(window.location.search);
const origem = parametros.get("origem");

console.log("Origem:", origem);

if (origem === "noctis") {

  emailjs
    .send("service_yd4mgxk", "template_4gzu3ls", {
      message: `
        A Ana abriu o site dos girassóis através do Ana Noctis.
      `,
      footer: "O girassol foi encontrado.",
    })
    .then(() => {
      console.log("✅ Notificação enviada pelo EmailJS.");
    })
    .catch((error) => {
      console.error("❌ Erro ao enviar pelo EmailJS:", error);
    });
}
