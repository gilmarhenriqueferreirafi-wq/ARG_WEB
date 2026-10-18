/* ==========================================================================
   STATIC SLICE — Capítulo 1 — DATABASE DE E-MAILS
   ========================================================================== */

const EMAIL_DATABASE = {
  inicio: [
    {
      id: "A1", de: "static.slice.1997@webmail.net",
      assunto: "Bem-vindo ao turno de segurança", data: "09/03/2001 23:00",
      corpo: "Olá.\n\nSeu cadastro como responsável pelo turno noturno da Static Slice foi concluído.\n\nO horário de trabalho é das 23:00 às 06:00. Durante esse período, mantenha o desktop ligado, verifique as câmeras regularmente e registre qualquer irregularidade encontrada nas dependências.\n\nNão há motivo para preocupação. A instalação permanece fechada durante a noite.\n\nEm caso de dúvida, consulte os arquivos históricos disponíveis no computador.\n\nBom turno.\n\n— Sistema Static Slice",
    },
    {
      id: "A2", de: "static.slice.1997@webmail.net",
      assunto: "Instruções básicas do computador", data: "09/03/2001 23:05",
      corpo: "O computador central contém os registros de funcionamento da locadora, relatórios antigos, histórico de funcionários e arquivos administrativos.\n\nRecomendamos verificar a caixa de entrada ao início de cada turno.\n\nAlguns documentos antigos podem estar incompletos devido à migração realizada em 2001.\n\nNão altere arquivos marcados como CONFIDENCIAL.\n\nPara encerrar o turno, utilize sempre a opção \"Relatório de Segurança\".\n\nObrigado pela colaboração.\n\n— Administração",
    },
    {
      id: "A3", de: "static.slice.1997@webmail.net",
      assunto: "Consulta ao histórico interno", data: "09/03/2001 23:10",
      corpo: "O histórico de funcionários foi mantido como referência administrativa.\n\nHá registros antigos que podem parecer incomuns devido às reformas realizadas ao longo dos anos.\n\nAlguns nomes aparecem associados a documentos de 1997.\n\nA administração recomenda consultar os arquivos antes de fazer qualquer alteração nas instalações.\n\nInformações pessoais devem ser tratadas como confidenciais.\n\nCaso encontre um documento sem identificação, deixe-o no local original.\n\n— Administração Static Slice",
    },
    {
      id: "A4", de: "static.slice.1997@webmail.net",
      assunto: "Monitoramento noturno", data: "09/03/2001 23:15",
      corpo: "As câmeras foram instaladas para auxiliar na segurança da loja.\n\nAtenção especial deve ser dada à Câmera 3, localizada próxima à área dos animatrônicos.\n\nPequenas oscilações de sinal podem ocorrer durante a madrugada.\n\nSe uma câmera ficar indisponível, aguarde alguns minutos antes de reiniciar o sistema.\n\nNão é necessário entrar na área dos personagens para corrigir falhas.\n\n— Sistema de Segurança",
    },
    {
      id: "A5", de: "static.slice.1997@webmail.net",
      assunto: "Registro histórico — maio de 1997", data: "09/03/2001 23:20",
      corpo: "Um acidente envolvendo um funcionário ocorreu nas dependências da Static Slice em 22/05/1997.\n\nO assunto foi registrado nos documentos administrativos da época e posteriormente encerrado pelas autoridades competentes.\n\nDurante seu turno, não é necessário investigar ocorrências antigas.\n\nCaso encontre informações relacionadas ao período, apenas registre onde o documento foi localizado.\n\nA administração agradece a discrição.\n\n— Administração",
    },
  ],

  aleatorios: [
    { id: "B1", de: "manutencao.squawk@fornecedores.net", assunto: "Pedido de manutenção — peça 08", data: "", corpo: "Sr. Valadão,\n\nConforme solicitado, estamos verificando disponibilidade da peça nº 08, utilizada no conjunto interno do Squawk.\n\nO modelo é antigo e algumas peças já não são fabricadas.\n\nTambém encontramos uma anotação antiga indicando que a peça havia sido substituída durante uma manutenção anterior, mas não consta quem autorizou o serviço.\n\nSe houver interesse, podemos consultar o estoque antigo.\n\nAtenciosamente,\nDepartamento Técnico" },
    { id: "B2", de: "roberto.valadao@webmail.net", assunto: "Reforma — área dos personagens", data: "", corpo: "A reforma do Squawk será retomada conforme planejamento.\n\nPeço que ninguém movimente o personagem sem autorização.\n\nO equipamento apresenta componentes antigos que devem permanecer exatamente onde foram encontrados.\n\nA equipe de manutenção deve registrar qualquer alteração.\n\nNão precisamos repetir problemas ocorridos em 1997.\n\nEste assunto é administrativo e deve permanecer CONFIDENCIAL.\n\nRoberto Valadão" },
    { id: "B3", de: "administrativo@staticslice.net", assunto: "Verificação de patrimônio", data: "", corpo: "Durante a organização dos arquivos antigos, foi localizado um armário identificado como 51.\n\nO conteúdo não consta no inventário digital.\n\nA porta permanece trancada.\n\nCaso seja necessário retirar materiais do local, favor comunicar a administração antes.\n\nHá referência a um \"bloco pessoal\" em documentos antigos, mas não encontramos o responsável.\n\n— Administração" },
    { id: "B4", de: "compras@staticslice.net", assunto: "Cotação — pequenos mecanismos musicais", data: "", corpo: "Recebemos uma solicitação antiga referente a pequenas caixinhas de música.\n\nO pedido menciona apenas \"três notas\" e não especifica a finalidade.\n\nO fornecedor informou que modelos semelhantes eram utilizados em brinquedos promocionais.\n\nA solicitação foi arquivada.\n\nCaso alguém reconheça a referência, favor informar ao setor administrativo." },
    { id: "B5", de: "seguranca@staticslice.net", assunto: "Checklist noturno", data: "", corpo: "Verificar:\n\n1. Câmera 1 — entrada.\n2. Câmera 2 — corredor.\n3. Câmera 3 — área dos animatrônicos.\n4. Câmera 4 — corredor lateral.\n5. Câmera 5 — depósito.\n\nRegistrar perda de sinal.\n\nObservação escrita à mão no formulário original:\n\n\"Se a 3 cair exatamente às 03:17, não reiniciar imediatamente.\"\n\nA anotação não possui assinatura." },
    { id: "B6", de: "arquivo@staticslice.net", assunto: "Materiais antigos", data: "", corpo: "As fitas K7 encontradas durante a limpeza de 2001 foram separadas por número.\n\nAs fitas 1 e 2 apresentam gravações administrativas.\n\nA fita nº 3 não possui identificação completa.\n\nA etiqueta foi removida parcialmente.\n\nSolicita-se que nenhuma gravação seja descartada até segunda ordem." },
    { id: "B7", de: "noticias.internas@staticslice.net", assunto: "Recorte de arquivo — Static Slice", data: "", corpo: "A documentação referente ao fechamento da unidade em setembro de 1997 foi digitalizada.\n\nParte dos arquivos apresenta datas incompatíveis com o restante do material.\n\nUm relatório aparece como encerrado em 16/09/1997, enquanto outros documentos indicam movimentações posteriores.\n\nProvavelmente trata-se de erro de arquivamento.\n\nArquivo disponível no histórico do navegador." },
    { id: "B8", de: "roberto.valadao@webmail.net", assunto: "Procedimento", data: "", corpo: "Lembrete ao segurança:\n\nNão deixe portas internas abertas.\n\nNão desligue o computador central.\n\nNão altere documentos históricos.\n\nNão entre na área dos personagens sem necessidade.\n\nA Static Slice passou por uma reforma completa.\n\nO que aconteceu antes não deve interferir no funcionamento atual.\n\nObrigado pela atenção.\n\nR. Valadão" },
  ],

  conclusao: {
    portal:       { id: "C1", de: "livia.lacerda@webmail.net", assunto: "Você encontrou o acesso", data: "", corpo: "Então você conseguiu entrar.\n\nSe apareceu um portal que não deveria estar disponível, não feche ainda.\n\nO acesso não estava ali por acaso.\n\nMeu irmão, Sérgio, trabalhou naquela loja.\n\nDurante anos disseram que o acidente de 1997 tinha sido apenas um problema técnico.\n\nEu nunca acreditei completamente nessa versão.\n\nContinue procurando.\n\nE, por favor, não confie em tudo que estiver assinado por Valadão.\n\n— L." },
    fita:         { id: "C2", de: "livia.lacerda@webmail.net", assunto: "A fita", data: "", corpo: "Você ouviu a fita.\n\nAgora entende por que eu precisava que alguém encontrasse isso.\n\nEu não sei quem gravou tudo aquilo.\n\nA voz parece a do Sérgio, mas a fita foi catalogada como material recolhido por Ademar.\n\nHá coisas ali que não deveriam estar numa gravação feita em 1997.\n\nPrincipalmente aquele horário.\n\n03:17.\n\nNão pare agora.\n\n— L." },
    cofre:        { id: "C3", de: "static.slice.1997@webmail.net", assunto: "Cofre desbloqueado", data: "", corpo: "ACESSO CONFIRMADO\n\nCódigo aceito: 4713.\n\nArquivo interno liberado.\n\n[SISTEMA]" },
    arquivoOculto:{ id: "C4", de: "livia.lacerda@webmail.net", assunto: "Você sabe agora", data: "", corpo: "O fragmento 34 vem de um lugar que você já viu.\n\nO fragmento 08 também.\n\nE o 51... você encontrou durante a procura.\n\nSe juntou tudo, então sabe que Valadão mentiu.\n\nSabe que Ademar tentou avisar.\n\nE sabe que o Sérgio não foi um acidente.\n\nGuarde isso.\n\nO que vem depois vai fazer mais sentido.\n\n— L." },
    todosConcluido:{ id: "C5", de: "livia.lacerda@webmail.net", assunto: "O fim do começo", data: "", corpo: "Você descobriu tudo que havia pra descobrir no Capítulo 1.\n\nA fita está segura.\n\nOs documentos estão lidos.\n\nE o Valadão sabe que alguém finalmente sabe.\n\nAgora vem a parte difícil.\n\nPassar pra frente.\n\n— L." },
    final:        { id: "C6", de: "livia.lacerda@webmail.net", assunto: "Capítulo 2", data: "", corpo: "Você terminou seu turno.\n\nMas a história não termina aqui.\n\nHá mais. Sempre há mais.\n\nClique para continuar.\n\n— L." },
  },
};

function sortearEmailsAleatorios(quantidade) {
  quantidade = quantidade || 3;
  var pool = EMAIL_DATABASE.aleatorios;
  var sorteados = []; var indices = [];
  while (indices.length < Math.min(quantidade, pool.length)) {
    var idx = Math.floor(Math.random() * pool.length);
    if (indices.indexOf(idx) === -1) indices.push(idx);
  }
  indices.forEach(function(i) { sorteados.push(Object.assign({}, pool[i])); });
  return sorteados;
}

window.EMAIL_DATABASE = EMAIL_DATABASE;
window.sortearEmailsAleatorios = sortearEmailsAleatorios;
