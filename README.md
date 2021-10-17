<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MEU PRIMEIRO JS</title>
    <style>
        body{
            background-color: rgb(0, 102, 255);
            color: white; /*comentarios no css*/
            font: normal 20pt Arial;
        }
        h1 {
            color: yellow;
         }

    </style>
</head>
<body>
    <h1>Ola, Mundo!</h1> <!--comentario no html-->
    <p>Ja me livrei da maldição</p>
    <script>//essas duas barras serve para comentar o codigo javascript
        var nome = window.prompt('Qual é seu nome?')
        window.alert('É um prazer conhece-lo, ' + nome + '!' ) //isso se chama contanenação
    </script>
</body>
</html>
