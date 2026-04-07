const chatToggle = document.getElementById("chatToggle");
const chatClose = document.getElementById("chatClose");
const chatbot = document.getElementById("chatbot");
const chatBody = document.getElementById("chatBody");
const botoesResposta = document.querySelectorAll(".chat-btn");
const botoesDiretos = document.querySelectorAll(".quick-btn");

function toggleChat() {
  chatbot.classList.toggle("open");
}

function adicionarMensagem(texto) {
  const mensagem = document.createElement("div");
  mensagem.className = "bot-message";
  mensagem.innerHTML = texto;
  chatBody.appendChild(mensagem);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function mostrarTyping() {
  const typing = document.createElement("div");
  typing.className = "typing";
  typing.id = "typingIndicator";
  typing.innerHTML = "<span></span><span></span><span></span>";
  chatBody.appendChild(typing);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function removerTyping() {
  const typing = document.getElementById("typingIndicator");
  if (typing) typing.remove();
}

function responder(tipo) {
  const respostas = {
    perguntas: [
      "🐾 O <strong>VetControl</strong> é um sistema pensado para clínicas veterinárias que querem mais organização, praticidade e cuidado no dia a dia.",
      "🐶 O sistema ajuda a centralizar informações importantes e deixar a rotina mais eficiente para quem cuida dos pets.",
      "💛 A ideia do VetControl é unir tecnologia, organização e carinho pelos animais em um só lugar.",
      "📋 Ele foi criado para facilitar processos e tornar o atendimento mais moderno e intuitivo.",
      "🐾 O foco é simples: ajudar profissionais a cuidarem melhor dos animais com apoio da tecnologia.",
    ],
    equipe: [
      "👨‍💻 <strong>Vinicius Santos</strong> atua no front-end e banco de dados. Ama bichos e tem uma cachorrinha bem mansa chamada <strong>Wandinha</strong> 🐶",
      "💻 <strong>Clara</strong> é dedicada, inteligente e peça essencial no back-end do projeto.",
      "🎤 <strong>João Lucas</strong> tem uma oratória que prende sua atenção como ninguém.",
      "😎 <strong>Victor</strong> trabalha com front-end e banco de dados, sempre com sabedoria, lealdade e bom humor.",
      "😂 <strong>Gustavo</strong> cuida do back-end, é cativante, engraçado e tem um grande coração.",
    ],
    bastidores: [
      "🎓 É no <strong>Salotti</strong> que projetos assim saem com formação de verdade e apoio de professores marcantes.",
      "📊 <strong>João de Lucca</strong>, professor de banco de dados, ensina de um jeito dinâmico que faz você prestar atenção e fixar o conteúdo.",
      "📱 <strong>Sidney</strong>, professor de back-end e mobile, é organizado, atento às dificuldades e sempre está lá para ajudar.",
      "🧠 <strong>Gabriel</strong>, professor de versionamento de código, mostra hábitos e práticas reais do mundo profissional.",
      "🚀 Tudo isso está à disposição do <strong>3DM</strong>, uma turma forte e preparada para competir no mercado de trabalho.",
    ],
  };

  const lista = respostas[tipo];
  const resposta = lista[Math.floor(Math.random() * lista.length)];

  mostrarTyping();

  setTimeout(() => {
    removerTyping();
    adicionarMensagem(resposta);
  }, 900);
}

function responderDireto(pergunta) {
  const texto = pergunta.toLowerCase();
  let resposta = "";

  if (texto.includes("o que é") || texto.includes("sistema")) {
    resposta =
      "🐾 O <strong>VetControl</strong> é uma plataforma moderna de gestão veterinária, criada para organizar processos e melhorar o cuidado com os animais.";
  } else if (texto.includes("como funciona")) {
    resposta =
      "⚙️ Ele funciona como um sistema que centraliza informações importantes e deixa a rotina veterinária mais prática, intuitiva e eficiente.";
  } else if (texto.includes("quem fez") || texto.includes("projeto")) {
    resposta =
      "👨‍💻 O projeto foi desenvolvido pela equipe do <strong>3DM</strong>, com talento, dedicação e muita vontade de criar algo profissional.";
  } else if (texto.includes("equipe")) {
    resposta =
      "🐶 A equipe é formada por <strong>Vinicius Santos</strong>, <strong>Clara</strong>, <strong>João Lucas</strong>, <strong>Victor</strong> e <strong>Gustavo</strong> — cada um contribuindo com suas qualidades para o VetControl.";
  } else if (texto.includes("escola")) {
    resposta =
      "🎓 O <strong>Salotti</strong> é um lugar onde projetos ganham força com apoio de professores que realmente preparam os alunos para a vida dev e para o mercado.";
  } else if (texto.includes("diferencial")) {
    resposta =
      "⭐ O diferencial do VetControl é unir tecnologia, organização e carinho pelos animais em uma interface moderna e pensada para facilitar a rotina veterinária.";
  } else {
    resposta =
      "🐾 Não entendi muito bem, humano… mas posso falar sobre o sistema, a equipe, a escola e os bastidores.";
  }

  mostrarTyping();

  setTimeout(() => {
    removerTyping();
    adicionarMensagem(resposta);
  }, 900);
}

chatToggle.addEventListener("click", toggleChat);
chatClose.addEventListener("click", toggleChat);

botoesResposta.forEach((botao) => {
  botao.addEventListener("click", () => {
    const tipo = botao.getAttribute("data-resposta");
    responder(tipo);
  });
});

botoesDiretos.forEach((botao) => {
  botao.addEventListener("click", () => {
    const pergunta = botao.getAttribute("data-direto");
    responderDireto(pergunta);
  });
});
