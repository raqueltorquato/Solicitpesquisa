Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"Solicitação para Pesquisas","publishDate":"24/04/2021 12:36:55","pages":[{"id":"820cf676-7cde-4e10-99dc-4c45c298526e","name":"Solicitação para pesquisas","description":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Fluxo que descreve as atividades relacionadas ao processo de  Solicita&ccedil;&atilde;o para Pesquisas. </span></p>","mainProcessId":"322d77ed-1178-4adf-a1f7-ce0517503e3d","version":"1.0","author":"GOSS - UFERSA","image":"files\\diagrams\\Solicitacao_para_pesquisas.png","isSubprocessPage":false,"properties":[],"elements":[{"id":"322d77ed-1178-4adf-a1f7-ce0517503e3d","name":"Solicitação para Pesquisa ","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":8.0,"y":5.0}],"radius":0.0,"height":350.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"b6488fc6-6061-43e3-80ae-914daa7319ce","name":"Imagem","elementImage":"files\\bpmnElements\\b6488fc6-6061-43e3-80ae-914daa7319ce.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":60.0,"width":240.0,"shape":"rect"},"elementType":"ImageArtifact"}]},{"id":"df1adbe5-9162-48c1-bc5d-10af390dd3ec","name":"Solicitação para pesquisas ","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":73.0,"y":245.0}],"radius":0.0,"height":1267.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"53b0719e-74a4-4e09-9af9-048c14f76ed2","name":"Carta de Anuência","description":"","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":1086.0,"y":907.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"id":"DataObjectState","name":"Estado","value":"","type":"text"},{"id":"e8bddf60-0be4-46df-8543-202235a17cc1","name":"CARTA DE ANUÊNCIA ","value":"files\\attachments\\Modelo_de_Carta_de_Anuencia.doc","type":"url","urlText":"Modelo de Carta de Anuência.doc"}]},{"id":"74754b63-b087-4d86-8dc8-44c71041e089","name":"Modelo de Relatório Parcial","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":3877.0,"y":534.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"id":"DataObjectState","name":"Estado","value":"","type":"text"},{"id":"3057023c-5a7e-4754-acd3-50c832b68ff9","name":"Modelo de Relatório Parcial ","value":"files\\attachments\\Modelo_de_Relatorio_Parcial.docx","type":"url","urlText":"Modelo de Relatório Parcial.docx"}]},{"id":"9bb18069-6126-4729-81b8-4a8f7b824edb","name":"Modelo de Relatório Final","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":4027.0,"y":530.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"id":"DataObjectState","name":"Estado","value":"","type":"text"},{"id":"7b6c296d-2ceb-46bb-abc8-9ef55ec2459b","name":"Modelo de Relatório Final ","value":"files\\attachments\\Modelo_de_Relatorio_Final.docx","type":"url","urlText":"Modelo de Relatório Final.docx"}]},{"id":"125d2310-95ac-4d6b-b011-994af14b8f52","name":"Início ","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":194.0,"y":434.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"dead7ce3-f183-4cb4-88a3-ea127a6d7031","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":875.0,"y":841.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Projeto reprovado ","elementType":"SequenceFlow","properties":[]},{"name":"Projeto aprovado ","elementType":"SequenceFlow","properties":[]},{"name":"Necessita de adequações ","elementType":"SequenceFlow","properties":[]}]},{"id":"590e1e24-a43a-4dbe-b3c8-f5262137b8f1","name":"Prazo de até 30 dias ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">No prazo de at&eacute; 30 dias o comit&ecirc; delibera </span></p>","elementImage":"files\\bpmnElements\\TimerIntermediate.png","imageBounds":{"points":[{"x":818.0,"y":846.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TimerIntermediate","properties":[{"id":"TimerEventDefinitionType","name":"Data do timer","value":"2021-04-05T00:00:00","type":"text"}]},{"id":"1ceb6248-a1d8-41a5-9739-e6d3224b7a32","name":"REALIZAR ajustes ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">O pesquisador realiza os ajustes necess&aacute;rios e solicita novamente a carta de anu&ecirc;ncia. </span></p>","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1174.0,"y":419.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"138fbe32-76fd-4238-b41a-1920ffb6f729","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1828.0,"y":1273.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Projeto aprovado com pendências ","elementType":"SequenceFlow","properties":[]},{"name":"Projeto aprovado ","elementType":"SequenceFlow","properties":[]},{"name":"Projeto reprovado ","elementType":"SequenceFlow","properties":[]}]},{"id":"649e7ddc-b8f0-424f-9f0a-307681f7781d","name":"De acordo com calendário ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Caso o pesquisador submeta o projeto dentro dos prazos estipulados, o projeto &eacute; avaliado na primeira reuni&atilde;o ordin&aacute;ria ocorrida ap&oacute;s a submiss&atilde;o. </span></p>","elementImage":"files\\bpmnElements\\TimerIntermediate.png","imageBounds":{"points":[{"x":1636.0,"y":1278.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TimerIntermediate","properties":[{"id":"TimerEventDefinitionType","name":"Data do timer","value":"2021-04-13T00:00:00","type":"text"}]},{"id":"bf2c4ee1-aaa6-40d3-a17a-1ed5f5c89818","name":"Projeto rejeitado","elementImage":"files\\bpmnElements\\MessageEnd.png","imageBounds":{"points":[{"x":1172.0,"y":1029.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageEnd"},{"id":"96d50dcb-e3ca-4c85-a3ba-80d38208f957","name":"Até 30 dias ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">O prazo estibulado para realizar corre&ccedil;&otilde;es &eacute; de at&eacute; 30 dias, no entanto, caso o pesquisador realize as corre&ccedil;&otilde;es em tempo h&aacute;bil o projeto j&aacute; &eacute; avaliado na primeira reuni&atilde;o subsequente.  </span></p>","elementImage":"files\\bpmnElements\\TimerIntermediate.png","imageBounds":{"points":[{"x":2097.0,"y":439.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TimerIntermediate","properties":[{"id":"TimerEventDefinitionType","name":"Data do timer","value":"2021-04-16T00:00:00","type":"text"}]},{"id":"8d129148-3bbe-46bb-a473-40608bebf8ed","name":"De acordo com calendário ","elementImage":"files\\bpmnElements\\TimerIntermediate.png","imageBounds":{"points":[{"x":2471.0,"y":1289.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TimerIntermediate","properties":[{"id":"TimerEventDefinitionType","name":"Data do timer","value":"2021-04-13T00:00:00","type":"text"}]},{"id":"671d7127-22de-4bc5-89b9-e4d48bd4fafb","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":2546.0,"y":1284.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Projeto reprovado ","elementType":"SequenceFlow","properties":[]},{"name":"Projeto aprovado ","elementType":"SequenceFlow","properties":[]}]},{"id":"81f6833e-1f29-402d-b962-2060ca32734b","name":"Projeto reprovado","elementImage":"files\\bpmnElements\\MessageEnd.png","imageBounds":{"points":[{"x":1988.0,"y":1278.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageEnd"},{"id":"4ef10123-a8e4-472c-bb26-b8e6d3e05e8f","name":"Projeto reprovado","elementImage":"files\\bpmnElements\\MessageEnd.png","imageBounds":{"points":[{"x":2689.0,"y":1174.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageEnd"},{"id":"696e226b-be04-4d10-aa1d-4b9f3ae3578e","name":"Pesquisa finalizada","elementImage":"files\\bpmnElements\\MessageEnd.png","imageBounds":{"points":[{"x":4375.0,"y":850.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageEnd"},{"id":"5f61257b-e863-45ad-a235-ce2eafd65d53","name":"    VERIFICAR documentos necessários","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">O pesquisador dever&aacute; acessar a p&aacute;gina do </span><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:bold;font-style:normal;\">Comit&ecirc; de &Eacute;tica em Pesquisa (CEP-UERN)</span><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\"> , para submiss&atilde;o de projetos de pesquisa em humanos. </span></p>","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":288.0,"y":419.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[{"id":"5ed5ba29-06f4-41f1-bc90-fa6247246e7f","name":"Comitê de Ética em Pesquisa","value":"http://propeg.uern.br/default.asp?item=propeg-comissoes-cep","type":"url","urlText":""}]},{"id":"0efe2158-9d88-4def-9164-f9ba1b25cf26","name":"    ELABORAR projeto de pesquisa ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">O pesquisador dever&aacute; elaborar o projeto de pesquisa de acordo com as orienta&ccedil;&otilde;es constantes no </span><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:bold;font-style:normal;\">Roteiro para Elabora&ccedil;&atilde;o de Projeto.</span><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\"> </span></p>","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":414.0,"y":419.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[{"id":"1b1a88a3-01c6-4a7a-9833-ac4a77bf4e41","name":"Roteiro para Elaboração de Projeto ","value":"http://www.uern.br/controledepaginas/propeg-comissoes-cep/arquivos/3121roteiro_elaboracao_de_projeto_2015.pdf","type":"url","urlText":""}]},{"id":"a504ab8e-36d1-4b0a-9b64-92efa3e45575","name":"SOLICITAR anuência ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">O pesquisador dever&aacute; encaminhar e-mail para o Instituto de Ensino Pesquisa e Extens&atilde;o (iepe.hmac@gmail.com) solicitando anu&ecirc;ncia para realizar pesquisa. </span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">No email deve constar: </span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Symbol;font-size:8pt;font-weight:normal;font-style:normal;\">&middot; </span><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Projeto de Pesquisa, conforme modelo do CEP; </span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Symbol;font-size:8pt;font-weight:normal;font-style:normal;\">&middot; </span><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Documentos complementares, de acordo com a &aacute;rea de pesquisa.</span></p>","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":553.0,"y":419.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[]},{"id":"ec5ef8d2-d967-47d9-ba61-83a034092489","name":"AVALIAR projeto de pesquisa ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">O colegiado do IEPE, composto por quatro membros, recebe o e-mail, avalia a solicita&ccedil;&atilde;o para pesquisa no &acirc;mbito do Hospital Maternidade Almeida Castro e do Consult&oacute;rio Familiar. </span></p>","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":684.0,"y":831.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[]},{"id":"0ac6f385-285b-4f0c-9f4a-de914406499b","name":"SOLICITAR adequações ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Caso sejam necess&aacute;rias adequa&ccedil;&otilde;es m&iacute;nimas para que o projeto seja aprovado, s&atilde;o encaminhados, por email, as adequa&ccedil;&otilde;es necess&aacute;rias. </span></p>","elementImage":"files\\bpmnElements\\SendTask.png","imageBounds":{"points":[{"x":1031.0,"y":709.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SendTask","properties":[{"id":"SendTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"9a03c125-dde4-4fc9-a80f-bd5cccacb6dd","name":"  CONCEDER carta de anuência ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Caso o projeto de pesquisa seja aprovado &eacute; emitida, em papel timbrado, a carta de anu&ecirc;ncia. </span></p>","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":1034.0,"y":831.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[]},{"id":"93919117-af7b-48a6-a40f-5ed0ad4f1e51","name":"REJEITAR proposta","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Caso o projeto n&atilde;o esteja de acordo com os preceitos &eacute;ticos e/ou n&atilde;o se adeque de alguma maneira aos objetivos da Maternidade Almeida Castro ou do Consult&oacute;rio Familiar, ele &eacute; rejeitado </span></p>","elementImage":"files\\bpmnElements\\SendTask.png","imageBounds":{"points":[{"x":1042.0,"y":1014.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SendTask","properties":[{"id":"SendTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"c9ba8d53-2ba8-48d5-95f7-ce7fbbbd9fea","name":"   CADASTRAR na Plataforma Brasil  ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">O pesquisador deve se cadastrar e realizar o cadastro do projeto na </span><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:bold;font-style:normal;\">Plataforma Brasil</span><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\"> conforme orienta&ccedil;&otilde;es do </span><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:bold;font-style:normal;\">Manual do Pesquisador. </span></p>","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":1370.0,"y":427.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","properties":[{"id":"9e1ead6c-be08-46fe-b04f-b824bd5df281","name":"Plataforma Brasil","value":"https://plataformabrasil.saude.gov.br/login.jsf","type":"url","urlText":""},{"id":"46895e4f-c297-4dd8-a820-54dcfbe5cbad","name":"Manual Pesquisador ","value":"https://plataformabrasil.saude.gov.br/login.jsf;jsessionid=EB4A63F8909DA87D4497B8B2CF4C0FCD.server-plataformabrasil-srvjpdf132","type":"url","urlText":""}]},{"id":"8a0a95d6-8b6b-41a9-a4a4-245307044cb8","name":"AVALIAR projeto e analisar docs. ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">A avalia&ccedil;&atilde;o dos projetos &eacute; realizada em reuni&otilde;es ordin&aacute;rias do CEP- UERN, que acontecem mensalmente, nas datas previstas em calend&aacute;rio anual.</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p>","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":1502.0,"y":1263.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[]},{"id":"f6701d79-0642-40f0-a01a-5428a3085fae","name":"REALIZAR correções ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">O pesquisador dever&aacute; realizar corre&ccedil;&atilde;o de pend&ecirc;ncias para que o projeto seja novamente submetido. </span></p>","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":1971.0,"y":424.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[]},{"id":"89af6df5-4540-4b37-bf20-e39cb4cc0ca5","name":"      SUBMETER projeto ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">O pesquisador deve, na Plataforma Brasil, submeter novamente o projeto, que poder&aacute; ser aprovado ou reprovado. </span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p>","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":2163.0,"y":424.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"8e4fbd4c-0f60-4db7-9085-6c60ed0dcda5","name":"REAVALIAR projeto","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":2336.0,"y":1274.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[]},{"id":"b15e0ce7-bb5a-476f-b5ad-720716815091","name":"ENVIAR certificado para o IEPE ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">O Certificado de Apresenta&ccedil;&atilde;o e Aprecia&ccedil;&atilde;o &Eacute;tica dever&aacute; ser encaminhado para o IEPE (iepe.hmac@gmail.com), comprovando a aprova&ccedil;&atilde;o do projeto. </span></p>","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":3017.0,"y":427.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[]},{"id":"27a9b0ab-e923-41c7-a06c-26c0438f624e","name":"   PREENCHER planilha ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Atualizar planilha eletr&ocirc;nica com os dados do projeto a ser desenvolvido. </span></p>","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":3202.0,"y":861.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[{"id":"1d3bc59b-3bfd-4375-844e-25e16ea5b485","name":"Planilha de Acompanhamento de Pesquisas","value":"https://1drv.ms/x/s!AnCtrgSn82oVtGlqRO5zFYW5tb-S","type":"url","urlText":""}]},{"id":"7fed8791-b562-40a5-a0d9-b10397acbc82","name":"   EMITIR Termo de Autorização ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">&Eacute; encaminhado para o pesquisador um Termo de Autoriza&ccedil;&atilde;o de Entrada, para que o mesmo possa acessar as depend&ecirc;ncias da maternidade. </span></p>","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":3340.14282,"y":861.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[]},{"id":"67a92cc4-deb2-48f6-97a8-6d44a3989f6e","name":"NOTIFICAR chefe de setor","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">O chefe do setor no qual a pesquisa ser&aacute; realizada &eacute; notificado para acompanhar o pesquisador quando necess&aacute;rio. </span></p>","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":3479.0,"y":861.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[]},{"id":"38414158-171b-4f63-b62d-cfef14d3dbd8","name":"DESENVOLVER pesquisa ","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":3707.0,"y":434.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[]},{"id":"a4656fdc-e2cd-4c3d-9b85-3f0fba3edc4f","name":"ELABORAR relatório parcial ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Durante o desenvolvimento do projeto, o pesquisador dever&aacute; elaborar Relat&oacute;rio Parcial de Pesquisa, conforme modelo</span><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:bold;font-style:normal;\"> </span><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">e encaminhar para: </span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Symbol;font-size:8pt;font-weight:normal;font-style:normal;\">&middot; </span><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Comit&ecirc; de &Eacute;tica em Pesquisa, via Plataforma Brasil;</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Symbol;font-size:8pt;font-weight:normal;font-style:normal;\">&middot; </span><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Colegiado do IEPE, via email;</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Symbol;font-size:8pt;font-weight:normal;font-style:normal;\">&middot; </span><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">e apresentar em evento, caso solicitado pelo IEPE. </span></p>","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":3830.0,"y":434.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[]},{"id":"67ed3ff4-7179-4db7-811e-7e06b9f87aed","name":"ELABORAR Relatório Final ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Elaborar Relat&oacute;rio Final, conforme modelo. </span></p>","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":3967.0,"y":434.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[]},{"id":"372bcd6c-73c4-4193-8063-dbed838d22fd","name":"  EMITIR Parecer do CEP- Aprovado","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">&Eacute; emitido, via plataforma Brasil o Certificado de Apresenta&ccedil;&atilde;o de Aprecia&ccedil;&atilde;o &Eacute;tica </span></p>","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":2683.0,"y":1392.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"a9051a73-ee2d-456e-8d67-4de8d92f0b53","name":"  EMITIR Parecer do CEP ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Emitir, via Plataforma Brasil, o Parecer &nbsp;Consubst&acirc;nciado do CEP que pode apresentar as seguintes situa&ccedil;&otilde;es : </span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Symbol;font-size:8pt;font-weight:normal;font-style:normal;\">&middot; </span><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Aprovado com pend&ecirc;ncias </span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Symbol;font-size:8pt;font-weight:normal;font-style:normal;\">&middot; </span><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Reprovado</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Symbol;font-size:8pt;font-weight:normal;font-style:normal;\">&middot; </span><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Aprovado </span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p>","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":1720.0,"y":1263.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"0c86fecc-818d-4029-bdb9-50aff8295ef5","name":"ATUALIZAR Planilha ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">O IEPE, recebe o Relat&oacute;rio Final, aprecia os resultados e atualiza a planilha com as informa&ccedil;&otilde;es pertinentes e o arquivo do relat&oacute;rio, mudando o satus da pesquisa para Conclu&iacute;da. </span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p>","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":4237.0,"y":835.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[{"id":"1d3bc59b-3bfd-4375-844e-25e16ea5b485","name":"Planilha de Acompanhamento de Pesquisas","value":"https://1drv.ms/x/s!AnCtrgSn82oVtGlqRO5zFYW5tb-S","type":"url","urlText":""}]},{"id":"2f430f42-3f35-49f5-9b51-6bec4d514f25","name":"ENCAMINHAR Relatório Final ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">O pesquisador deve encaminhar o Relat&oacute;rio Final para: </span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Symbol;font-size:8pt;font-weight:normal;font-style:normal;\">&middot; </span><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Comit&ecirc; de &Eacute;tica em Pesquisa, via Plataforma Brasil;</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Symbol;font-size:8pt;font-weight:normal;font-style:normal;\">&middot; </span><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Colegiado do IEPE, via email;</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p>","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":4097.0,"y":434.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","properties":[]},{"id":"a9244166-4d31-480a-82a2-520622ee4626","name":"Pesquisador (Discente/Doscente)","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":123.0,"y":245.0}],"radius":0.0,"height":425.7,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"d2d9d597-d748-4b14-9a0c-a35a49853076","name":"Colegiado do Instituto de Ensino, Pesquisa e Extensão (IEPE)","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":123.0,"y":670.7}],"radius":0.0,"height":433.3,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"0ab2cae8-7224-463e-84b6-e7ad1d949a03","name":"Comissão de Ética em Pesquisa (CEP- UERN)","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":123.0,"y":1104.0}],"radius":0.0,"height":408.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"9c8e5b7a-aae2-491f-81ee-ecb4cb7af343","name":"Submissão do projeto ","elementImage":"files\\bpmnElements\\Milestone.png","imageBounds":{"points":[{"x":123.0,"y":245.0}],"radius":0.0,"height":30.0,"width":2805.0,"shape":"rect"},"elementType":"Milestone","properties":[],"pageElements":[]},{"id":"ad17c145-f59e-4420-8191-8978abfd530a","name":"Desenvolvimento da pesquisa","elementImage":"files\\bpmnElements\\Milestone.png","imageBounds":{"points":[{"x":2928.0,"y":245.0}],"radius":0.0,"height":30.0,"width":1595.0,"shape":"rect"},"elementType":"Milestone","properties":[],"pageElements":[]}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"resourcePage":{"id":"Resources","name":"Resources","isSubprocessPage":false,"elements":[{"id":"498092e8-cbdb-4ab6-9249-7f07d0a78903","name":"Escritório de Processos","rol":"Função"}]},"searchMap":[{"containerId":"820cf676-7cde-4e10-99dc-4c45c298526e","containerName":"Solicitação para pesquisas","isSubprocess":false,"elements":[{"id":"b6488fc6-6061-43e3-80ae-914daa7319ce","value":""},{"id":"9243e047-5916-4348-8be5-ffd49e72d935"},{"id":"df1adbe5-9162-48c1-bc5d-10af390dd3ec","value":"Solicitação para pesquisas "},{"id":"a9244166-4d31-480a-82a2-520622ee4626","value":"Pesquisador (Discente/Doscente)"},{"id":"d2d9d597-d748-4b14-9a0c-a35a49853076","value":"Colegiado do Instituto de Ensino, Pesquisa e Extensão (IEPE)"},{"id":"0ab2cae8-7224-463e-84b6-e7ad1d949a03","value":"Comissão de Ética em Pesquisa (CEP- UERN)"},{"id":"9c8e5b7a-aae2-491f-81ee-ecb4cb7af343","value":"Submissão do projeto "},{"id":"ad17c145-f59e-4420-8191-8978abfd530a","value":"Desenvolvimento da pesquisa"},{"id":"53b0719e-74a4-4e09-9af9-048c14f76ed2","value":"Carta de Anuência"},{"id":"74754b63-b087-4d86-8dc8-44c71041e089","value":"Modelo de Relatório Parcial"},{"id":"9bb18069-6126-4729-81b8-4a8f7b824edb","value":"Modelo de Relatório Final"},{"id":"125d2310-95ac-4d6b-b011-994af14b8f52","value":"Início "},{"id":"dead7ce3-f183-4cb4-88a3-ea127a6d7031","value":""},{"id":"590e1e24-a43a-4dbe-b3c8-f5262137b8f1","value":"Prazo de até 30 dias "},{"id":"1ceb6248-a1d8-41a5-9739-e6d3224b7a32","value":"REALIZAR ajustes "},{"id":"138fbe32-76fd-4238-b41a-1920ffb6f729","value":""},{"id":"649e7ddc-b8f0-424f-9f0a-307681f7781d","value":"De acordo com calendário "},{"id":"bf2c4ee1-aaa6-40d3-a17a-1ed5f5c89818","value":"Projeto rejeitado"},{"id":"96d50dcb-e3ca-4c85-a3ba-80d38208f957","value":"Até 30 dias "},{"id":"8d129148-3bbe-46bb-a473-40608bebf8ed","value":"De acordo com calendário "},{"id":"671d7127-22de-4bc5-89b9-e4d48bd4fafb","value":""},{"id":"81f6833e-1f29-402d-b962-2060ca32734b","value":"Projeto reprovado"},{"id":"4ef10123-a8e4-472c-bb26-b8e6d3e05e8f","value":"Projeto reprovado"},{"id":"696e226b-be04-4d10-aa1d-4b9f3ae3578e","value":"Pesquisa finalizada"},{"id":"5f61257b-e863-45ad-a235-ce2eafd65d53","value":"    VERIFICAR documentos necessários"},{"id":"0efe2158-9d88-4def-9164-f9ba1b25cf26","value":"    ELABORAR projeto de pesquisa "},{"id":"a504ab8e-36d1-4b0a-9b64-92efa3e45575","value":"SOLICITAR anuência "},{"id":"ec5ef8d2-d967-47d9-ba61-83a034092489","value":"AVALIAR projeto de pesquisa "},{"id":"0ac6f385-285b-4f0c-9f4a-de914406499b","value":"SOLICITAR adequações "},{"id":"9a03c125-dde4-4fc9-a80f-bd5cccacb6dd","value":"  CONCEDER carta de anuência "},{"id":"93919117-af7b-48a6-a40f-5ed0ad4f1e51","value":"REJEITAR proposta"},{"id":"c9ba8d53-2ba8-48d5-95f7-ce7fbbbd9fea","value":"   CADASTRAR na Plataforma Brasil  "},{"id":"8a0a95d6-8b6b-41a9-a4a4-245307044cb8","value":"AVALIAR projeto e analisar docs. "},{"id":"f6701d79-0642-40f0-a01a-5428a3085fae","value":"REALIZAR correções "},{"id":"89af6df5-4540-4b37-bf20-e39cb4cc0ca5","value":"      SUBMETER projeto "},{"id":"8e4fbd4c-0f60-4db7-9085-6c60ed0dcda5","value":"REAVALIAR projeto"},{"id":"b15e0ce7-bb5a-476f-b5ad-720716815091","value":"ENVIAR certificado para o IEPE "},{"id":"27a9b0ab-e923-41c7-a06c-26c0438f624e","value":"   PREENCHER planilha "},{"id":"7fed8791-b562-40a5-a0d9-b10397acbc82","value":"   EMITIR Termo de Autorização "},{"id":"67a92cc4-deb2-48f6-97a8-6d44a3989f6e","value":"NOTIFICAR chefe de setor"},{"id":"38414158-171b-4f63-b62d-cfef14d3dbd8","value":"DESENVOLVER pesquisa "},{"id":"a4656fdc-e2cd-4c3d-9b85-3f0fba3edc4f","value":"ELABORAR relatório parcial "},{"id":"67ed3ff4-7179-4db7-811e-7e06b9f87aed","value":"ELABORAR Relatório Final "},{"id":"372bcd6c-73c4-4193-8063-dbed838d22fd","value":"  EMITIR Parecer do CEP- Aprovado"},{"id":"a9051a73-ee2d-456e-8d67-4de8d92f0b53","value":"  EMITIR Parecer do CEP "},{"id":"0c86fecc-818d-4029-bdb9-50aff8295ef5","value":"ATUALIZAR Planilha "},{"id":"2f430f42-3f35-49f5-9b51-6bec4d514f25","value":"ENCAMINHAR Relatório Final "},{"id":"b7ce67a7-62ab-4c89-81e6-d8e78a9377ba"},{"id":"53237b5b-2d2c-4dcb-9cc6-de2353650475"},{"id":"722c3a25-3357-4715-965a-173b7b9eaddc"}]}]}