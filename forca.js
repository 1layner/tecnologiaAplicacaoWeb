//window.location.reload();

angular.module("jogo", []).controller("sudoku", function($scope) {
  var palavraSortiada = [
      "zeus",
      "poseidon",
      "ares",
      "athenas",
      "artemis",
      "marte",
      "saturno",
      "cronos",
      "apolo",
      "hermes",
      "hercules",
      "hades",
      "dionisio"
  ];
  var numeroSorteado  = Math.floor(Math.random()*palavraSortiada.length);

  var palavra = palavraSortiada[numeroSorteado];

  $scope.cont=0;
  mudaimg=0;
  $scope.palavraSecreta = new Array(palavra.length);
  for (i = 0; i < palavra.length; i++) {
    $scope.palavraSecreta[i] = "_ "
  }

  $scope.verificaletra = function(letra) {

    digitados.push(letra);
    for (i = 0; i < palavra.length; i++) {
      if (palavra[i] == letra) {
        mudaimg = 1;
        $scope.palavraSecreta[i] = letra;
      }
    }
    if(mudaimg===0){
        $scope.cont++;
    }

mudaImagem();
  }

  var digitados=[];
  $scope.desabilitar = function(letra){
    return digitados.indexOf(letra) !== -1;
  }


    function mudaImagem(){
        if($scope.cont===1){
          document.getElementById("muda").src = "imagens/cabeca.jpg";
        }
        if($scope.cont===2){
          document.getElementById("muda").src = "imagens/cabecacorpo.jpg";
        }
        if(  $scope.cont===3){
          document.getElementById("muda").src="imagens/bracoesq.jpg";
        }
        if(  $scope.cont===4){
          document.getElementById("muda").src="imagens/bracodir.jpg";
        }
        if(  $scope.cont===5){
           document.getElementById("muda").src="imagens/pernaesq.jpg";
        }
        if(  $scope.cont==6){
          document.getElementById("muda").src="imagens/completo.jpg";
        }
    }

    $scope.ganhador = function(){
      if(palavra[i].lenght){
        alert("Parabens voce ganhou!!");
      }
    }

});
