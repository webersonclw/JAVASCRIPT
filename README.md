<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Primeiros Passos com DOM</title>
    <style>
        body {
            background: rgba(68, 125, 199);
            color: white;
            font: normal 18pt Arial;
        }

    </style>
</head>
<body>
    <h1>Iniciando estudo com DOM</h1>
    <p>Aqui vai o resultado</p>
    <p>Aprendendo a usar o <strong>DOM</strong> em JavScript.</p>
    <div id="msg">Clique aqui</div>
    <script>
        var corpo = window.document.body
        var p1 = window.document.getElementsByTagName('p')[0]
        window.document.write(p1.innerText)
        var d =window.document.getElementById('msg')
        d.style.background = 'green'
        d.innerText = 'Estou aguardando'
        p1.style.color = 'black'
    </script>
</body>
</html>
