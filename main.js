const compra = document.getElementById("purchase");
const valorCompra = document.getElementById("original");
const valorDesconto = document.getElementById("discount");
const valorFinal = document.getElementById("total");
const porcentagem = document.getElementById("rate");
const economia = document.getElementById("saved");
const mensagem = document.getElementById("status");
const limpar = document.getElementById("reset");

function calcular() {
  let valor = Number(compra.value);
  let desconto = 0;

  if (valor > 500) {
    desconto = valor * 0.1;
  } else if (valor > 100) {
    desconto = valor * 0.05;
  }

  let total = valor - desconto;

  valorCompra.innerText = valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  valorDesconto.innerText =
    "- " +
    desconto.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  valorFinal.innerText = total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  porcentagem.innerText =
    "(" + ((desconto / (valor || 1)) * 100).toFixed(0) + "%)";

  economia.innerText =
    "Você economiza R$ " + desconto.toFixed(2).replace(".", ",");

  if (valor > 500) {
    mensagem.innerText = "Desconto de 10% aplicado!";
  } else if (valor > 100) {
    mensagem.innerText = "Desconto de 5% aplicado!";
  } else {
    mensagem.innerText = "Esta compra não recebe desconto.";
  }
}

compra.addEventListener("input", calcular);

limpar.addEventListener("click", function () {
  compra.value = "";
  calcular();
});
