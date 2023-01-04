
function gerarSenha(atualizou) {
    var seletor = document.querySelector("#seletor");
    var opValor = seletor.options[seletor.selectedIndex];
    var valor = opValor.value;
    var caracters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";
    var senha = "";

    for (var i = 0; i < valor; i++) {
      var randomNumber = Math.floor(Math.random() * caracters.length);
      senha += caracters.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById('senha').value = senha
  }
  function btncopiar() {

    const copiarTexto = document.getElementById("senha");

    navigator.clipboard.writeText(copiarTexto.value);
}
