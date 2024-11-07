<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-family: Arial, sans-serif;
    }
    h1 {
      font-size: 2rem;
      color: #333;
    }
  </style>
<body>
  <h1 id="mensagem">Pressione uma tecla...</h1>
</body>
<script>
    // Seleciona o elemento da mensagem
    const mensagem = document.getElementById('mensagem');

    // Adiciona um ouvinte para o evento 'keydown'
    document.addEventListener('keydown', (event) => {
      // Atualiza o conteúdo da mensagem com o nome da tecla pressionada
      mensagem.innerText = `Você pressionou: ${event.key}`;
    });
</script>


</html>
