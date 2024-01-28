function mostrarAlert() {
  // Obtém os valores dos campos do formulário
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const profissao = document.getElementById("profissao").value;
  const salario = document.getElementById("salario").value;
  const casado = document.getElementById("casado_sim").checked;
  const filhos = document.getElementById("filhos_sim").checked;

  // Cria o texto do alert
  const texto = ` Dados alterados com sucesso!
  Nome: ${nome}
  E-mail: ${email}
  Profissão: ${profissao}
  Salário: ${salario}
  Casado: ${casado ? "Sim" : "Não"}
  Filhos: ${filhos ? "Sim" : "Não"}
`;


  // Mostra o alert
  alert(texto);

  // Retorna false para impedir o envio do formulário (para evitar que a página recarregue)
  return true;
}
