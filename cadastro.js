function enviarFormulario() {
    // Obtenha os dados do formulário
    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;
  
    // Crie um objeto JSON com os dados do usuário
    const usuario = {
      nome,
      email,
      senha,
    };
  
    // Adicione o ID do usuário ao objeto
    usuario.id = Math.floor(Math.random() * 1000000);
  
    // Envie os dados para o servidor
    fetch("/cadastro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    })
      .then((response) => {
        if (response.ok) {
          // Sucesso
          alert("Usuário cadastrado com sucesso.");
        } else {
          // Erro
          alert("Erro ao cadastrar usuário.");
        }
      })
      .catch((err) => {
        // Erro
        console.error(err);
      });
  }
  
  