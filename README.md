<!DOCTYPE html>
<html lang="pt.br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
         body {
            font: normal 20pt Arial: 
    }
    </style>   
</head>
<body>
    <script>
        var nome = window.prompt('Qual é seu Nome? ')
        document.write(` Ola, <strong>${nome}</strong>! Seu nome tem ${nome.length} letras.<br/>`)
        document.write(`Seu nome em maiusculas é ${nome.toUpperCase()}<br/>`)
        document.write(`Seu nome em minusculas é ${nome.toLowerCase()}`) 
    </script>
    
</body>
</html>
