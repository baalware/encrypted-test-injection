const axios = require('axios');

const webhookUrl = 'https://discord.com/api/webhooks/1104355996580708453/NhE4D96tF-l0-bWyRiO8Ot_2LVTEo7PM1ee9WVRSn7kSvjT9wxfjvp7elvt03c9r5EPA'; // Substitua pelo seu URL do webhook

const message = {
  content: 'TESTE INJECT',
};

async function enviarMensagem() {
  try {
    await axios.post(webhookUrl, message);
    console.log('Mensagem enviada com sucesso para o webhook.');
  } catch (error) {
    console.error('Erro ao enviar a mensagem para o webhook:', error);
  }
}

enviarMensagem();
