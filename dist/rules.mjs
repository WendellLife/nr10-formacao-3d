// Regras do jogo NR 10 • Formação (curso básico de 40 h (Anexo III, item 1)), no mesmo padrão dos demais jogos da série.
// Cada etapa traz as referências normativas em "refs". O campo "kind" diz de onde vem o conteúdo:
//  vigente → texto em vigor da NR 10 (Portaria MTE 598/2004, alterada pelas Portarias MTPS 508/2016 e SEPRT 915/2019)
//            e normas citadas por ela (NR 1, NR 6, NR 7, NR 23, NR 35). No texto em vigor, a zona controlada é o Anexo II
//            e o treinamento é o Anexo III.
//  nova    → nova redação da NR 10 aprovada pela Portaria MTE 737/2026 (DOU 01/06/2026). Só vigora a partir de 01/06/2027.
//  pratica → boa prática técnica, que não é item de NR.
// cam:"alto" afasta a câmera para mostrar o poste, o cesto e a rede.
// "check:true" marca número de subitem que deve ser conferido no texto consolidado antes de usar em treinamento.
import {spots,live} from './layout.mjs';
export const KINDS = {
 vigente:'Em vigor',
 nova:'Nova NR 10 publicada — vigora em 01/06/2027',
 pratica:'Boa prática — não é item de NR'
};
export const NOVA_NR10 = {portaria:'Portaria MTE 737/2026',publicacao:'01/06/2026',vigencia:'01/06/2027'};
const nr10=item=>({norm:'NR 10',item,kind:'vigente'});
const anexo2=item=>({norm:'NR 10 • Anexo II (zonas)',item,kind:'vigente'});
const anexo3=item=>({norm:'NR 10 • Anexo III (treinamento)',item,kind:'vigente'});
const glossario=item=>({norm:'NR 10 • Glossário',item,kind:'vigente'});
const nova=item=>({norm:'Nova NR 10 (Portaria MTE 737/2026)',item,kind:'nova'});
const pratica=(norm,item)=>({norm,item,kind:'pratica'});
const at=(p,r)=>({x:p.x,z:p.z,r});

// ---------------- Formação (curso básico, 40 h) ----------------
const formacao = [
 {id:'integracao',refs:[nr10('10.8.1'),nr10('10.8.2'),nr10('10.8.3'),nr10('10.8.4')],...at(spots.board,2),
  title:'Entenda quem pode intervir',description:'No quadro da área de treinamento, Paula pergunta quem, na empresa, pode intervir nas instalações elétricas.',
  tip:'Qualificado: curso da área elétrica reconhecido pelo Sistema Oficial de Ensino. Habilitado: qualificado com registro no conselho de classe. Capacitado: capacitado e trabalhando sob responsabilidade de profissional habilitado e autorizado. Autorizado: qualquer um deles, com anuência formal da empresa.',
  choices:[
   {id:'autorizado',correct:true,label:'Só intervém quem é autorizado: trabalhador qualificado, capacitado ou profissional habilitado, com anuência formal da empresa.',feedback:'Exato: diploma ou registro não bastam sozinhos. Para intervir, a empresa precisa autorizar formalmente (10.8.4).'},
   {id:'diploma',label:'Quem tem curso técnico de eletrotécnica já pode intervir em qualquer instalação, porque é qualificado.',feedback:'Ser qualificado (10.8.1) é só uma das condições. Sem a anuência formal da empresa (10.8.4), ninguém intervém.'},
   {id:'experiencia',label:'Quem tem muitos anos de prática em elétrica pode intervir, mesmo sem curso nem autorização escrita.',feedback:'Experiência não substitui qualificação, capacitação nem autorização. O capacitado, por exemplo, trabalha sob responsabilidade de profissional habilitado e autorizado (10.8.3).'}
  ]},
 {id:'autorizacao',who:'Helena',refs:[nr10('10.8.5'),nr10('10.8.6'),nr10('10.8.7'),nr10('10.8.8.1')],
  title:'Confira a sua autorização',description:'Helena, engenheira responsável, vai liberar você para o serviço no CCM-2. Diga o que precisa estar em ordem.',
  tip:'A autorização exige treinamento do Anexo III com aproveitamento satisfatório, exame de saúde compatível (NR 7), registro no sistema de registro de empregado e identificação da abrangência da autorização.',
  choices:[
   {id:'completa',correct:true,label:'Curso básico concluído com aproveitamento, ASO compatível com a atividade, autorização registrada no sistema de registro de empregado e identificação que mostre a abrangência dela.',feedback:'Tudo em ordem: treinamento, saúde, registro e identificação da abrangência (10.8.5 a 10.8.8.1).'},
   {id:'certificado',label:'Basta apresentar o certificado do curso básico; o resto é burocracia do RH.',feedback:'O certificado é necessário, mas a autorização também exige exame de saúde compatível (10.8.7) e registro formal (10.8.6).'},
   {id:'verbal',label:'Se a engenheira disser em voz alta “pode ir”, isso já vale como autorização.',feedback:'A anuência da empresa é formal e fica registrada (10.8.4 e 10.8.6), com identificação da abrangência de cada autorizado (10.8.5).'}
  ]},
 {id:'riscos',refs:[anexo3('item 1, tópico 2 (choque, arco e campos)'),pratica('Boa prática','efeitos da corrente no corpo humano (IEC 60479)')],...at(spots.didatico,1.8),
  title:'Reconheça os riscos da eletricidade',description:'No painel didático, Paula provoca a turma: “220 V de tomada mata?”. Escolha a explicação certa.',
  tip:'O que fere é a corrente que passa pelo corpo. Ela depende da tensão e da resistência do corpo (pele úmida, suor, piso molhado). Dezenas de miliampères pelo tórax podem causar fibrilação. O arco elétrico queima e projeta material mesmo sem contato.',
  choices:[
   {id:'corrente',correct:true,label:'Mata, sim. O perigo é a corrente pelo corpo: com pele úmida ou suada, 220 V já fazem passar dezenas de miliampères, que podem parar o coração. E o arco elétrico queima mesmo sem tocar.',feedback:'Correto: o risco depende da corrente e do caminho dela pelo corpo, e o arco é um risco à parte (Anexo III, item 1).'},
   {id:'alta',label:'Só alta tensão mata. Em baixa tensão o choque só dá um susto.',feedback:'Choques fatais acontecem em baixa tensão. A corrente pelo tórax, e não o rótulo de alta ou baixa, é o que importa.'},
   {id:'luva',label:'Com luva de raspa e qualquer bota de borracha, não tem como tomar choque.',feedback:'Luva de raspa não é isolante e bota comum não garante isolação. A proteção contra choque começa pela desenergização.'}
  ]},
 {id:'vestimenta',refs:[nr10('10.2.9.1'),nr10('10.2.9.2'),nr10('10.2.9.3'),{norm:'NR 6',item:'EPI adequado ao risco',kind:'vigente'}],...at(spots.bancada,1.8),
  title:'Vista-se para o serviço',description:'Na bancada de EPI, prepare-se para trabalhar no CCM-2. Você chegou de aliança, relógio e corrente no pescoço.',
  tip:'A vestimenta deve considerar condutibilidade, inflamabilidade e influências eletromagnéticas (10.2.9.2). Adornos pessoais são proibidos nos trabalhos com instalações elétricas ou perto delas (10.2.9.3).',
  choices:[
   {id:'sem',correct:true,label:'Tirar aliança, relógio e corrente; vestir a roupa antichama indicada para o risco de arco; usar capacete com jugular, óculos e calçado sem partes metálicas.',feedback:'Sem adornos e com vestimenta adequada ao risco de arco e de choque (10.2.9.2 e 10.2.9.3).'},
   {id:'fita',label:'Manter a aliança e passar fita isolante por cima, porque ela não sai do dedo.',feedback:'Adorno é proibido mesmo encapado (10.2.9.3). Se a aliança não sai, procure o serviço de saúde para retirá-la com segurança.'},
   {id:'sintetica',label:'Usar a camiseta de poliéster da empresa, mais fresca, por baixo do colete refletivo.',feedback:'Tecido sintético comum derrete e gruda na pele num arco elétrico. A vestimenta precisa considerar a inflamabilidade (10.2.9.2).'}
  ]},
 {id:'ferramentas',refs:[nr10('10.4.3.1'),pratica('Boa prática','teste de ar da luva isolante antes de cada uso')],...at(spots.ferramentas,1.6),
  title:'Inspecione luvas e ferramentas',description:'No armário de ferramentas, separe o material do serviço: luvas isolantes, ferramentas isoladas e detector de tensão.',
  tip:'Ferramentas e equipamentos com isolamento devem ser adequados às tensões envolvidas e inspecionados e testados conforme as regulamentações ou o fabricante (10.4.3.1). A luva isolante se confere com o teste de ar antes de cada uso.',
  choices:[
   {id:'conferido',correct:true,label:'Luva isolante de classe adequada à tensão, com ensaio em dia e sem vazamento no teste de ar; ferramentas isoladas sem trincas; detector de tensão testado e com bateria.',feedback:'Material conferido e adequado à tensão, como pede o 10.4.3.1.'},
   {id:'remendo',label:'A luva tem um furinho na ponta do dedo: passar um remendo de borracha e usar assim mesmo.',feedback:'Luva isolante furada ou remendada perde a isolação. Ela é substituída, nunca remendada.'},
   {id:'fita',label:'Ferramenta comum com o cabo enrolado em fita isolante serve como ferramenta isolada.',feedback:'Fita isolante não transforma ferramenta comum em ferramenta isolada e ensaiada para a tensão (10.4.3.1).'}
  ]},
 {id:'documentacao',refs:[nr10('10.2.3'),nr10('10.2.4')],...at(spots.prontuario,1.5),
  title:'Consulte o diagrama e o prontuário',description:'Na sala elétrica, localize no diagrama unifilar o circuito da bomba de recalque, que sai do CCM-2.',
  tip:'Esquemas unifilares atualizados, com aterramento e dispositivos de proteção, são obrigatórios (10.2.3). Estabelecimento com carga instalada acima de 75 kW mantém o Prontuário de Instalações Elétricas (10.2.4).',
  choices:[
   {id:'unifilar',correct:true,label:'Conferir no unifilar atualizado de onde o circuito é alimentado, que dispositivo o secciona e se há outra fonte que possa energizá-lo. O prontuário fica à mão, porque a fábrica tem mais de 75 kW.',feedback:'Circuito e fontes identificados pelo documento atualizado (10.2.3 e 10.2.4).'},
   {id:'etiqueta',label:'Não precisa de diagrama: a etiqueta “bomba”, escrita à mão na porta da gaveta, basta.',feedback:'Etiqueta antiga pode estar errada. O unifilar atualizado mostra de onde vem a energia e se há outras fontes.'},
   {id:'antigo',label:'Usar o diagrama de 2015 que está na gaveta, mesmo com o painel reformado no ano passado.',feedback:'O esquema precisa estar atualizado (10.2.3). Diagrama desatualizado leva a seccionar o circuito errado.'}
  ]},
 {id:'os',refs:[nr10('10.11.1'),nr10('10.11.2'),anexo3('item 1, tópico 3 (técnicas de análise de risco)')],...at(spots.osDesk,1.6),
  title:'Pegue a ordem de serviço',description:'Antes de abrir o CCM-2, confira na mesa de planejamento se a ordem de serviço está completa.',
  tip:'Todo serviço é precedido de ordem de serviço específica, aprovada por trabalhador autorizado, com tipo, data, local e referência aos procedimentos (10.11.2). O procedimento é passo a passo e assinado (10.11.1).',
  choices:[
   {id:'especifica',correct:true,label:'OS específica para a troca do contator da bomba, com data, local (CCM-2), referência ao procedimento de desenergização, análise de risco feita e aprovação de trabalhador autorizado.',feedback:'OS completa e ligada ao procedimento, como pedem 10.11.1 e 10.11.2.'},
   {id:'generica',label:'Uma OS genérica de “manutenção elétrica geral do mês” cobre este serviço.',feedback:'A OS é específica: tipo, data, local e procedimentos do serviço (10.11.2).'},
   {id:'depois',label:'Fazer o serviço agora e preencher a OS no fim do dia, que é mais rápido.',feedback:'A OS vem antes do serviço (10.11.2). Planejar depois é não planejar.'}
  ]},
 {id:'seccionar',refs:[nr10('10.5.1 a) seccionamento'),nr10('10.2.8.2')],...at(spots.ccm,1.3),
  title:'Seccione o circuito',description:'Diante do CCM-2, desligue a alimentação da bomba de recalque. Veja o estado do circuito no painel elétrico.',
  tip:'Desenergizar é a medida de proteção coletiva prioritária (10.2.8.2). Seccionar é abrir o dispositivo que separa o circuito da fonte, depois de conferir no unifilar que é o circuito certo.',
  choices:[
   {id:'gaveta',correct:true,label:'Abrir a gaveta da bomba no CCM-2 pelo dispositivo de seccionamento, conferindo a identificação com o unifilar e avisando quem opera a bomba.',feedback:'Seccionamento feito no dispositivo certo e com aviso à operação: alínea a) do 10.5.1.'},
   {id:'comando',label:'Apertar o botão “desliga” da bomba no painel da produção; o motor parou, então está desenergizado.',feedback:'O botão de comando para o motor, mas não secciona o circuito de força. Contator e bornes continuam energizados.'},
   {id:'geral',label:'Desligar o disjuntor geral do QGBT e parar a fábrica inteira, por garantia.',feedback:'Desligar tudo cria outros riscos (paradas, iluminação, outras áreas) e não substitui identificar o circuito certo.'}
  ]},
 {id:'bloquear',refs:[nr10('10.5.1 b) impedimento de reenergização'),nr10('10.10.1 b)')],...at(spots.ccm,1.3),
  title:'Impeça a reenergização',description:'Com a gaveta aberta, use o kit da caixa de bloqueio e trave o dispositivo de seccionamento.',
  tip:'Impedimento de reenergização: trava mecânica com cadeado pessoal e etiqueta de identificação. Cada pessoa que trabalha no circuito põe o próprio cadeado e guarda a própria chave.',
  choices:[
   {id:'cadeado',correct:true,label:'Travar a manopla na posição desligada com dispositivo de bloqueio, cadeado pessoal e etiqueta com meu nome; a chave fica comigo e cada colega põe o próprio cadeado.',feedback:'Impedimento real: só quem pôs o cadeado o retira (10.5.1 b).'},
   {id:'aviso',label:'Pedir a quem estiver na sala que não religue a gaveta enquanto eu trabalho.',feedback:'Aviso verbal não impede a religação. É preciso trava mecânica com cadeado pessoal.'},
   {id:'chave',label:'Colocar um cadeado coletivo e deixar a chave pendurada no painel para quem precisar.',feedback:'Chave à vista anula o bloqueio. O cadeado é pessoal e a chave fica com quem trabalha.'}
  ]},
 {id:'testar',refs:[nr10('10.5.1 c) constatação da ausência de tensão'),pratica('Boa prática','testar o instrumento antes e depois da medição'),pratica('Boa prática','instrumento de categoria adequada (IEC 61010)')],...at(spots.ccm,1.3),
  title:'Constate a ausência de tensão',description:'Com o circuito bloqueado, confirme que não há tensão nos bornes de saída da gaveta.',
  tip:'Só se considera desenergizado depois de constatar a ausência de tensão (10.5.1 c). Teste o instrumento numa fonte conhecida, meça entre fases e entre fases e terra e teste o instrumento de novo.',
  choices:[
   {id:'completo',correct:true,label:'Testar o detector numa fonte conhecida, medir entre todas as fases e entre cada fase e a terra nos bornes, e testar o detector de novo para confirmar que ele funcionava.',feedback:'Teste antes, medição completa e teste depois: ausência de tensão constatada.'},
   {id:'mao',label:'Encostar rapidinho as costas da mão no borne: se não formigar, está sem tensão.',feedback:'Nunca use o corpo como detector. A constatação se faz com instrumento adequado e testado.'},
   {id:'uma',label:'Medir só entre duas fases; se der zero, já está bom.',feedback:'Uma medida só não basta: pode haver tensão em outra fase ou entre fase e terra. Meça todas as combinações.'}
  ]},
 {id:'aterrar',refs:[nr10('10.5.1 d) aterramento temporário e equipotencialização'),glossario('aterramento elétrico temporário'),nr10('10.5.3')],...at(spots.ccm,1.3),
  title:'Instale o aterramento temporário',description:'Com a ausência de tensão constatada, instale o conjunto de aterramento temporário nos bornes de saída da gaveta.',
  tip:'O aterramento temporário garante a equipotencialidade durante toda a intervenção. Ligue primeiro à terra e depois aos condutores; na retirada, faça o inverso.',
  choices:[
   {id:'terra',correct:true,label:'Ligar primeiro o grampo de terra à barra de aterramento e depois as fases, uma a uma, com o conjunto de aterramento e equipotencialização adequado.',feedback:'Ordem certa: terra primeiro, fases depois. Se o circuito for energizado por engano, a proteção atua e o ponto de trabalho fica equipotencial (10.5.1 d).'},
   {id:'fases',label:'Ligar primeiro os grampos nas fases e por último na terra, que é o lado mais seguro.',feedback:'Se houver tensão inesperada, você estaria segurando um cabo energizado. Conecte primeiro à terra.'},
   {id:'dispensa',label:'Em baixa tensão, o aterramento temporário é dispensável, porque o circuito já está bloqueado.',feedback:'O 10.5.1 vale para baixa e alta tensão. Só um profissional legalmente habilitado pode alterar a sequência, com justificativa técnica formal e o mesmo nível de segurança (10.5.3).'}
  ]},
 {id:'proteger',refs:[nr10('10.5.1 e) proteção dos elementos energizados'),anexo2('até 1 kV: Rr 0,20 m • Rc 0,70 m'),nr10('10.6.2')],...at(spots.qgbt,1.3),
  title:'Proteja o que segue energizado',description:'Ao lado do CCM-2, o barramento do QGBT continua energizado. Veja os anéis da zona de risco e da zona controlada no piso.',
  tip:'Até 1 kV, o raio da zona de risco é 0,20 m e o da zona controlada, 0,70 m (Anexo II). Partes energizadas que ficam na zona controlada do serviço recebem proteção: anteparos, coberturas isolantes ou barreiras.',
  choices:[
   {id:'anteparo',correct:true,label:'Instalar anteparo isolante sobre o barramento exposto do QGBT, manter a porta dele fechada e delimitar a área no piso.',feedback:'Elementos energizados na zona controlada protegidos com anteparo: alínea e) do 10.5.1.'},
   {id:'cuidado',label:'Trabalhar “com cuidado” perto do barramento energizado, sem colocar nada.',feedback:'Cuidado não é medida de controle. Partes energizadas na zona controlada precisam de proteção física.'},
   {id:'papelao',label:'Colocar uma folha de papelão sobre o barramento para ninguém encostar.',feedback:'Papelão não é material isolante especificado e pode pegar fogo. Use anteparo ou cobertura isolante adequada.'}
  ]},
 {id:'sinalizar',refs:[nr10('10.5.1 f) sinalização de impedimento de reenergização'),nr10('10.10.1 f) e g)')],...at(spots.ccm,1.3),
  title:'Sinalize o impedimento',description:'Fixe a placa “Não energize — em manutenção” na gaveta bloqueada. Pressione AÇÃO diante do CCM-2.',
  tip:'A última etapa da desenergização é a sinalização de impedimento de reenergização (10.5.1 f), com identificação do equipamento impedido (10.10.1 g).'},
 {id:'choque',who:'Jair',refs:[nr10('10.12.1'),nr10('10.12.2'),pratica('Boa prática','não tocar na vítima antes de cortar a energia')],
  title:'Socorra o Jair',description:'Grito no galpão: Jair encostou na carcaça da furadeira e não consegue soltar. A máquina continua ligada.',
  tip:'Nunca toque na vítima presa ao circuito. Corte a energia no dispositivo mais próximo; se não for possível de imediato, em baixa tensão, afaste a vítima com material isolante seco. Acione o plano de emergência (10.12.1).',
  choices:[
   {id:'desligar',correct:true,label:'Não tocar nele; desligar na hora o disjuntor da furadeira no quadro do galpão, pedir que alguém chame o 192 e a brigada e só então me aproximar.',feedback:'Fonte cortada antes do contato e socorro acionado: você não virou a segunda vítima.'},
   {id:'puxar',label:'Agarrar o Jair pelo braço e puxar com força para soltá-lo da máquina.',feedback:'Quem toca na vítima energizada entra no mesmo circuito. Primeiro corte a energia.'},
   {id:'agua',label:'Jogar água para “esfriar” a máquina e soltar a mão dele.',feedback:'Água conduz eletricidade e amplia o risco para todos. Corte a energia.'}
  ]},
 {id:'rcp',who:'Jair',refs:[nr10('10.12.2'),pratica('Boa prática','RCP: 100 a 120 compressões por minuto e DEA o quanto antes')],
  title:'Faça a reanimação',description:'Com a energia cortada, Jair está no chão, não responde e não respira normalmente. Paula traz o DEA.',
  tip:'Trabalhadores autorizados devem estar aptos a resgatar e prestar primeiros socorros, especialmente a reanimação cardiorrespiratória (10.12.2). Compressões fortes e rápidas no centro do peito e DEA assim que chegar.',
  choices:[
   {id:'rcp',correct:true,label:'Confirmar que o 192 foi acionado, iniciar compressões no centro do peito (100 a 120 por minuto, cerca de 5 cm) e usar o DEA assim que chegar, seguindo as instruções do aparelho.',feedback:'RCP de qualidade e DEA cedo aumentam muito a chance de sobrevivência.'},
   {id:'agua',label:'Sentar o Jair e dar água com açúcar para ele se recuperar.',feedback:'Vítima que não responde e não respira normalmente precisa de RCP imediata, não de líquidos.'},
   {id:'esperar',label:'Não mexer em nada e só esperar o SAMU chegar.',feedback:'Cada minuto sem compressões reduz a chance de sobreviver. Comece a RCP e use o DEA enquanto o socorro chega.'}
  ]},
 {id:'reenergizar',refs:[nr10('10.5.2 a) a e)')],...at(spots.ccm,1.3),
  title:'Reenergize o circuito',description:'Lúcia terminou de trocar o contator. Escolha a sequência para devolver a bomba à operação.',
  tip:'A reenergização segue o 10.5.2: retirar ferramentas; retirar da zona controlada quem não participa; remover aterramento, equipotencialização e proteções; remover a sinalização; por fim, destravar e religar.',
  choices:[
   {id:'sequencia',correct:true,label:'Recolher ferramentas; tirar da zona controlada quem não participa; remover aterramento e anteparo; retirar a placa; cada um tira o próprio cadeado; e então religar.',feedback:'Sequência do 10.5.2 respeitada: circuito reenergizado com segurança.'},
   {id:'religa',label:'Religar primeiro para testar a bomba e depois recolher o aterramento e as ferramentas.',feedback:'Religar com o aterramento instalado provoca curto-circuito e arco. O aterramento sai antes da religação.'},
   {id:'cortar',label:'Cortar o cadeado do Rogério, que foi almoçar, para não atrasar a liberação.',feedback:'O cadeado só é retirado por quem o colocou. Cortar cadeado alheio anula o bloqueio e põe o colega em risco.'}
  ]}
];

export const MODULES = {
 formacao:{id:'formacao',name:'Formação',course:'Curso básico • 40 h',role:'Eletricista em formação',place:'SALA ELÉTRICA • CCM-2 E GALPÃO',
  intro:'Você conclui o curso básico e vai a campo: troca do contator da bomba de recalque no CCM-2, com a sequência completa de desenergização, e um choque elétrico no galpão.',
  summary:'Você aplicou a sequência de desenergização do 10.5.1, socorreu um colega vítima de choque e reenergizou o circuito pelo 10.5.2.',objectives:formacao}
};
export const MODULE_IDS = Object.keys(MODULES);
export const objectivesOf = m => MODULES[m].objectives;
export const indexOf = (m,id) => objectivesOf(m).findIndex(o => o.id === id);
export const refLabel = r => `${r.norm} • ${/^\d/.test(r.item)?'item ':''}${r.item}`;
// Linha de referência mostrada no painel. A origem (em vigor, nova NR 10 ou boa prática) sempre aparece.
export const refSummary = o => o.refs.map(r => ({label:refLabel(r),kind:r.kind,status:KINDS[r.kind],check:!!r.check}));

// ---------------- Anexo II: zonas de risco e controlada ----------------
// Faixas de tensão nominal (kV) com os raios Rr (zona de risco) e Rc (zona controlada), em metros.
export const ANEXO_II = [
 [1,.20,.70],[3,.22,1.22],[6,.25,1.25],[10,.35,1.35],[15,.38,1.38],[20,.40,1.40],[30,.56,1.56],[36,.58,1.58],[45,.63,1.63],[60,.83,1.83],
 [70,.90,1.90],[110,1.00,2.00],[132,1.10,3.10],[150,1.20,3.20],[220,1.60,3.60],[275,1.80,3.80],[380,2.50,4.50],[480,3.20,5.20],[700,5.20,7.20]
];
export function radii(kv){const row=ANEXO_II.find(([max])=>kv<max)||ANEXO_II.at(-1);return {rr:row[1],rc:row[2]};}
export function zoneOf(kv,d){const {rr,rc}=radii(kv);return d<=rr?'risco':d<=rc?'controlada':'livre';}
export const ZONE_LABEL = {risco:'ZONA DE RISCO',controlada:'ZONA CONTROLADA',livre:'ZONA LIVRE'};

// ---------------- Estado do jogo ----------------
export const initialState = (module=MODULE_IDS[0]) => ({module,step:0,feedback:'',errors:0,completed:[],finished:false});
export const done = (s,id) => s.completed.includes(id);
export const currentTarget = s => objectivesOf(s.module)[s.step];
function advance(s,next,id){
 const list=objectivesOf(s.module);next.completed=[...s.completed,id];next.step=s.step+1;next.finished=next.step===list.length;
 return next;
}
export function answer(s,choiceId){
 const o=currentTarget(s);const c=o?.choices?.find(x=>x.id===choiceId);if(!c)return s;
 if(!c.correct)return {...s,errors:s.errors+1,feedback:c.feedback};
 return advance(s,{...s,feedback:c.feedback},o.id);
}
const ACTION_FEEDBACK = {
 sinalizar:'Circuito liberado para o serviço: seccionado, bloqueado, sem tensão, aterrado, protegido e sinalizado.',
 sinalizacao:'Área isolada e sinalizada: cones, fita zebrada e placas de homens trabalhando.'
};
export function interact(s,id){
 const o=currentTarget(s);if(!o||o.id!==id)return s;
 if(o.choices)return {...s,feedback:'Escolha uma das opções.'};
 return advance(s,{...s,feedback:ACTION_FEEDBACK[id]||''},id);
}

// ---------------- Circuito em trabalho (painel elétrico) ----------------
// tone: perigo (energizado), atencao (seccionado/bloqueado, ainda não constatado), seguro (sem tensão, aterrado).
export function circuit(s){
 const d=id=>done(s,id),o=currentTarget(s);
 if(s.module==='formacao'){
  const c={name:'CCM-2 • bomba de recalque',kv:.38};
  if(d('reenergizar'))return {...c,state:'Reenergizado',tone:'perigo'};
  if(d('sinalizar'))return {...c,state:'Liberado para serviço',tone:'seguro'};
  if(d('aterrar'))return {...c,state:d('proteger')?'Aterrado • QGBT protegido':'Aterrado',tone:'seguro'};
  if(d('testar'))return {...c,state:'Sem tensão (constatado)',tone:'seguro'};
  if(d('bloquear'))return {...c,state:'Seccionado e bloqueado',tone:'atencao'};
  if(d('seccionar'))return {...c,state:'Seccionado',tone:'atencao'};
  return {...c,state:'Energizado',tone:'perigo'};
 }
 if(s.module==='reciclagem'){
  if(o?.id==='capacitor')return {name:'Banco de capacitores',kv:.38,state:'Bloqueado • carga armazenada',tone:'atencao'};
  if(o?.id==='gerador')return {name:'String box fotovoltaica',kv:.8,dc:true,state:'Lado CC energizado (sol)',tone:'perigo'};
  if(o?.id==='incendio')return {name:'Banco de capacitores',kv:.38,state:'Fumaça e chama',tone:'perigo'};
  if(d('capacitor')&&!d('incendio'))return {name:'QGBT-2 (novo)',kv:.38,state:'Energizado',tone:'perigo'};
  return {name:'QGBT-2 (novo)',kv:.38,state:'Energizado',tone:'perigo'};
 }
 const c={name:'Ramal 13,8 kV • poste de entrada',kv:13.8};
 if(d('liberacao'))return {...c,state:'Liberado ao centro de operação',tone:'perigo'};
 if(d('aterramento'))return {...c,state:'Sem tensão e aterrado',tone:'seguro'};
 if(d('detector'))return {...c,state:'Sem tensão (constatado)',tone:'seguro'};
 if(d('manobra'))return {...c,state:'Chave aberta e bloqueada',tone:'atencao'};
 return {...c,state:'Energizado',tone:'perigo'};
}
// Partes energizadas expostas no momento (para as zonas no cenário e a distância no painel).
export function hazards(s){
 const d=id=>done(s,id),o=currentTarget(s),list=[live.rede];
 if(s.module==='sep'){if(!d('detector')||d('liberacao'))list.push(live.ramal);}
 else list.push(live.ramal);
 if(s.module==='formacao'){
  list.push(live.qgbt);
  if(!d('testar')||d('reenergizar'))list.push(live.ccm);
  if(o?.id==='choque')list.push(live.maquina);
 }
 if(s.module==='reciclagem'){
  list.push(live.qgbt,live.stringBox);
  if(!d('capacitor'))list.push(live.capacitor);
 }
 return list;
}

// ---------------- Hora e clima ----------------
// Só o módulo SEP tem tempestade, na etapa "tempo". Atraso do trovão em segundos; null = sem raios.
const CLOCK = {
 formacao:['07:30','07:45','08:00','08:15','08:25','08:35','08:45','09:00','09:05','09:10','09:15','09:20','09:25','10:10','10:15','11:30'],
 reciclagem:['08:00','08:20','08:40','09:10','09:40','10:10','10:40','11:00','13:30','14:10','15:00','16:00'],
 sep:['07:00','07:10','07:20','07:30','07:40','07:45','07:50','08:00','08:10','08:20','08:30','08:40','09:30','10:10','11:20']
};
export function weather(m,step){
 const list=objectivesOf(m),i=Math.max(0,Math.min(list.length-1,step)),clock=CLOCK[m][i];
 if(m!=='sep')return {clock,dark:0,rain:0,wind:.1,thunderDelay:null};
 const t=indexOf('sep','tempo');
 if(i===t)return {clock,dark:.85,rain:.7,wind:.7,thunderDelay:12};
 if(i===t+1)return {clock,dark:.12,rain:0,wind:.2,thunderDelay:null};
 if(i===t-1)return {clock,dark:.2,rain:0,wind:.3,thunderDelay:null};
 return {clock,dark:0,rain:0,wind:.15,thunderDelay:null};
}
export const thunderDistance = seconds => Math.round(343*seconds);
export const inDangerRange = seconds => seconds<=30;
// Áreas caminháveis: pátio da fábrica; estruturas entram como obstáculos {x,z,w,d}.
export function canMove(x,z,obstacles){
 const site=x>-21&&x<26&&z>-13.4&&z<12.4;
 return site&&!obstacles.some(o=>Math.abs(x-o.x)<o.w/2+.32&&Math.abs(z-o.z)<o.d/2+.32);
}
