const frases = [
  "Ana, você tem sido meu segundo girassol.",
  "Todos os nossos momentos, mesmo os mais breves, me fazem sentir paz.",
  "Todos os dias, assim como o girassol procura a luz...",
  "... meus pensamentos sempre procuram você.",
  "Mesmo nas diferenças, você tem sido minha luz, minha alegria...",
  "É você quem tenho escolhido.",
  "Você poderia ser minha?",
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

if (origem === "carta11") {
  console.log("Carta 11 detectada. Enviando notificação...");

  emailjs
    .send("service_yd4mgxk", "template_4gzu3ls", {
      name: "Ana",
      message:
        "A Ana abriu o site dos girassóis através da Carta 11 do Ana Noctis.",
    })
    .then(() => {
      console.log("✅ Notificação enviada pelo EmailJS.");
    })
    .catch((error) => {
      console.error("❌ Erro ao enviar pelo EmailJS:", error);
    });
}
