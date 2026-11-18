// Configuração do formulário de briefing.
// ENDPOINT: para onde as respostas vão. Opções grátis:
//   - Web3Forms:  crie uma access key em https://web3forms.com (recebe por e-mail, 250/mês grátis)
//                 e use ENDPOINT = 'https://api.web3forms.com/submit' + WEB3FORMS_KEY abaixo.
//   - FormSubmit: ENDPOINT = 'https://formsubmit.co/ajax/SEU-EMAIL' (confirme o 1º envio no e-mail).
//   - Webhook do n8n / Formspree / API própria: qualquer URL que aceite POST JSON.
// Sem endpoint, o cliente ainda consegue mandar o resumo pelo WhatsApp (abaixo).
window.BRIEFING_CONFIG = {
  ENDPOINT: '',
  WEB3FORMS_KEY: '',
  WHATSAPP: '', // número comercial, só dígitos com 55 + DDD
  EMPRESA: 'Alderige Solutions',
  SITE: 'https://gabrielalderige.github.io/alderige-solutions',
}
