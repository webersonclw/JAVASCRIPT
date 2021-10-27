<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificador de Idade</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <header>
        <h1>Verificar Idade</h1>
    </header>
    <section>
        <div>
            <p>Ano de Nascimento:
                <input type="number" name="txtano" id="txtano" min="0">
            </p>
            <p>Sexo:
                <input type="radio" name="radsex" id="masc">
                <label for="masc">Masculino</label>
                <input type="radio" name="radsex" id="fem">
                <label for="fem">Feminino</label>
            </p>
            <p>
                <input type="button" value="verificar" onclick="verificar()">
            </p>
        </div>
        <div id="res">
            Preencha os dados acima para o resultado!!
        </div>
    </section>
    <footer>
        <p>&copy; CursoemVideo</p>

    </footer>
    <script src="script.js"></script>
</body>
</html>
