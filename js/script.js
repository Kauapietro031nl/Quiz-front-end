// Declaração de variáveis
const question = document.querySelector("#question");
const answersBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ['a', 'b', 'c', 'd'];
let points = 0;
let actualQuestion = 0;

// Perguntas
const questions = [

  {
    "question": " PHP foi desenvolvido para qual fim?",
    "answers": [
      {
        "answer": "back-end",
        "correct": true
      },
      {
        "answer": "front-end",
        "correct": false
      },
      {
        "answer": "Sistema operacional",
        "correct": false
      },
      {
        "answer": "Banco de dados",
        "correct": false
      }
    ]
  },
  {
    "question": " Uma forma de declarar variável em JavaScript:",
    "answers": [
      {
        "answer": "$var",
        "correct": false
      },
      {
        "answer": "var",
        "correct": true
      },
      {
        "answer": "@var",
        "correct": false
      },
      {
        "answer": "#let",
        "correct": false
      }
    ]
  },
  {
    "question": " Qual o seletor de id no CSS?",
    "answers": [
      {
        "answer": "#",
        "correct": true
      },
      {
        "answer": ".",
        "correct": false
      },
      {
        "answer": "@",
        "correct": false
      },
      {
        "answer": "/",
        "correct": false
      }
    ]
  },
  {
    "question": " Qual a tag HTML usada para criar um link?",
    "answers": [
      {
        "answer": "<link>",
        "correct": false
      },
      {
        "answer": "<a>",
        "correct": true
      },
      {
        "answer": "<href>",
        "correct": false
      },
      {
        "answer": "<url>",
        "correct": false
      }
    ]
  },
  {
    "question": " Qual a propriedade CSS usada para mudar a cor de fundo de um elemento?",
    "answers": [
      {
        "answer": "background-color",
        "correct": true
      },
      {
        "answer": "color",
        "correct": false
      },
      {
        "answer": "border-color",
        "correct": false
      },
      {
        "answer": "background",
        "correct": false
      }
    ]
  },
  {
    "question": " Qual é o comportamento padrão do display de um <div>?",
    "answers": [
      {
        "answer": "block",
        "correct": true
      },
      {
        "answer": "inline",
        "correct": false
      },
      {
        "answer": "inline-block",
        "correct": false
      },
      {
        "answer": "flex",
        "correct": false
      }
    ]
  },
  {
    "question": " Qual é a tag HTML usada para inserir um parágrafo?",
    "answers": [
      {
        "answer": "<paragraph>",
        "correct": false
      },
      {
        "answer": "<p>",
        "correct": true
      },
      {
        "answer": "<text>",
        "correct": false
      },
      {
        "answer": "<section>",
        "correct": false
      }
    ]
  },
  {
    "question": " Como você pode centralizar um texto com CSS?",
    "answers": [
      {
        "answer": "text-align: center;",
        "correct": true
      },
      {
        "answer": "align-text: center;",
        "correct": false
      },
      {
        "answer": "center-text: true;",
        "correct": false
      },
      {
        "answer": "justify: center;",
        "correct": false
      }
    ]
  },
  {
    "question": " Qual o tipo de dado padrão para uma variável declarada com `let` em JavaScript?",
    "answers": [
      {
        "answer": "Número",
        "correct": false
      },
      {
        "answer": "String",
        "correct": false
      },
      {
        "answer": "Objeto",
        "correct": false
      },
      {
        "answer": "Indefinido",
        "correct": true
      }
    ]
  },
  {
    "question": " Qual a tag HTML usada para adicionar uma imagem?",
    "answers": [
      {
        "answer": "<img>",
        "correct": true
      },
      {
        "answer": "<picture>",
        "correct": false
      },
      {
        "answer": "<src>",
        "correct": false
      },
      {
        "answer": "<image>",
        "correct": false
      }
    ]
  },
  {
    "question": " O que faz o método `push()` em JavaScript?",
    "answers": [
      {
        "answer": "Adiciona um item no início de um array",
        "correct": false
      },
      {
        "answer": "Adiciona um item no final de um array",
        "correct": true
      },
      {
        "answer": "Remove um item do final de um array",
        "correct": false
      },
      {
        "answer": "Ordena um array",
        "correct": false
      }
    ]
  },
  {
    "question": " Qual a propriedade CSS utilizada para definir o tamanho da fonte?",
    "answers": [
      {
        "answer": "font-size",
        "correct": true
      },
      {
        "answer": "font-weight",
        "correct": false
      },
      {
        "answer": "font-style",
        "correct": false
      },
      {
        "answer": "text-size",
        "correct": false
      }
    ]
  },
  {
    "question": " Qual é a função do `console.log()` em JavaScript?",
    "answers": [
      {
        "answer": "Exibe uma mensagem no console do navegador",
        "correct": true
      },
      {
        "answer": "Cria um novo arquivo",
        "correct": false
      },
      {
        "answer": "Armazena dados em um arquivo",
        "correct": false
      },
      {
        "answer": "Encerra a execução do código",
        "correct": false
      }
    ]
  },
  {
    "question": " Qual tag HTML é usada para criar uma lista não ordenada?",
    "answers": [
      {
        "answer": "<ul>",
        "correct": true
      },
      {
        "answer": "<ol>",
        "correct": false
      },
      {
        "answer": "<list>",
        "correct": false
      },
      {
        "answer": "<li>",
        "correct": false
      }
    ]
  }
  ,
  {
    "question": " Qual é a linguagem de marcação ?",
    "answers": [
      {
        "answer": "Css",
        "correct": false
      },
      {
        "answer": "Java",
        "correct": false
      },
      {
        "answer": "Html",
        "correct": true
      },
      {
        "answer": "Ruby",
        "correct": false
      }
    ]
  }



]

// Substituição do layout pela primeira questão
function init() {
  answersBox.innerHTML = ''; // Limpar alternativas anteriores
  createQuestion(0);
}

// Criação de uma nova pergunta
function createQuestion(i) {

  // Limpa questão anterior
  const oldButtons = answersBox.querySelectorAll("button");
  oldButtons.forEach(function (btn) {
    btn.remove();
  });

  // Altera texto da pergunta
  const questionText = question.querySelector("#question-text");
  const questionNumber = question.querySelector("#question-number");
  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // Insere alternativas
  questions[i].answers.forEach(function (answer, i) {

    // Altera texto do template
    const answerTemplate = document.querySelector(".answer-template").cloneNode(true);
    const letterBtn = answerTemplate.querySelector(".btn-letter");
    const answerText = answerTemplate.querySelector(".question-answer");

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute("correct-answer", answer["correct"]);

    // Remove classe de hide e template do template
    answerTemplate.classList.remove("hide");
    answerTemplate.classList.remove("answer-template");

    // Insere template na tela
    answersBox.appendChild(answerTemplate);
  });

  // Cria evento em todos os botões
  const buttons = answersBox.querySelectorAll("button");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      checkAnswer(this, buttons);
    });
  });

  // Incrementa o número atual de questões
  actualQuestion++;
}

// Verificando se resposta está correta
function checkAnswer(btn, buttons) {
  buttons.forEach(function (button) {
    if (button.getAttribute("correct-answer") === "true") {
      button.classList.add("correct-answer");
      if (btn === button) {
        points++;
      }
    } else {
      button.classList.add("wrong-answer");
    }
  });

  nextQuestion();
}

// Exibe a próxima pergunta
function nextQuestion() {
  setTimeout(function () {
    if (actualQuestion >= questions.length) {
      showSuccessMessage();
      return;
    }
    createQuestion(actualQuestion);
  }, 1000);
}

// Tela final
function showSuccessMessage() {
  hideOrShowQuizz();

  const score = ((points / questions.length) * 100).toFixed(2);
  const scoreDisplay = document.querySelector("#display-score span");
  scoreDisplay.textContent = score.toString();

  const correctAnswers = document.querySelector("#correct-answers");
  correctAnswers.textContent = points;

  const totalQuestions = document.querySelector("#question-qty");
  totalQuestions.textContent = questions.length;
}

// Reiniciar Quizz
const restartBtn = document.querySelector("#restart");
restartBtn.addEventListener("click", function () {
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

// Mostra ou exibe o quizz
function hideOrShowQuizz() {
  quizzContainer.classList.toggle("hide");
  scoreContainer.classList.toggle("hide");
}

// Inicialização
init();
