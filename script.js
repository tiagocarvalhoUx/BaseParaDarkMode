document.getElementById("calcular").addEventListener("click", function () {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const operacao = document.getElementById("operacao").value;

  //verificar se os inputs estao preenchidos

  if (isNaN(num1) || isNaN(num2) || operacao === "") {
    alert(
      "Dados inválidos: Por favor, insira um valor e selecione uma operação"
    );
    return;
  }

  let result;
  switch (operacao) {
    case "adicao":
      result = num1 + num2;
      break;
    case "subtracao":
      result = num1 - num2;
      break;
    case "multiplicacao":
      result = num1 * num2;
      break;
    case "divisao":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = "Erro Divisão por zero";
      }
      break;

    default:
      result = "Selecione uma operação";
      break;
  }
  document.getElementById("resultado").innerText = `Resultado: ${result}`;
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
});

//DARK MODE

const toggleButton = document.getElementById("toggle-theme");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

toggleButton.addEventListener("click", function () {
  body.classList.toggle("dark");

  //ATUALIZAR ICONE DO BOTÃO

  if (body.classList.contains("dark")) {
    themeIcon.classList.remove("bi-moon");
    themeIcon.classList.add("bi-sun");
  } else {
    themeIcon.classList.remove("bi-sun");
    themeIcon.classList.add("bi-moon");
  }
});
