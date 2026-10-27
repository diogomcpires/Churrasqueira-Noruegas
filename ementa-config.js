/* ------------------------------------------------------------------
   Churrasqueira Noruegas — configuração da "Ementa do Dia"
   Este ficheiro é lido pelo site (index) e pela página de gestão
   (ementa-admin.html). Fica na mesma pasta que eles no GitHub.
   ------------------------------------------------------------------ */

/* Cole aqui o URL da "Aplicação Web" do Google Apps Script
   (é o que termina em /exec). Enquanto estiver vazio, o site mostra
   a lista normal das especialidades, sem mudar sozinho. */
window.EMENTA_API = 'https://script.google.com/macros/s/AKfycbzQsvaPHvzImoGx4qRoNubILckscrBLkl7aAN2PI7_nK0H-Vgrvsxl2khEEUWDptUKZ/exec';

/* Só para demonstração (?demo=1 no site e na página de gestão):
   lista de pratos usada quando não há ligação à folha Google. */
window.EMENTA_PRATOS_DEMO = [
  'Bacalhau à Noruegas',
  'Bacalhau à lagareiro',
  'Bacalhau à minhota',
  'Bacalhau c/ natas',
  'Arroz de pato',
  'Delícias de frango',
  'Dobrada c/ feijão branco',
  'Mão de vaca c/ grão',
  'Favas c/ entrecosto',
  'Choco à lagareiro',
  'Polvo à lagareiro'
];
