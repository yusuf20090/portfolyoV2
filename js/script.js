const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav__links');
const navLinksAll = document.querySelectorAll('.nav__links a');
hamburger.onclick = function () {
    hamburger.classList.toggle('hamburger_active');
    navLinks.classList.toggle('nav__links_active');
}
for (let i = 0; i < 4; i++) {
    navLinksAll[i].onclick = function () {
        hamburger.classList.remove('hamburger_active');
        navLinks.classList.remove('nav__links_active');
    }
}

const form = document.querySelector('form');
form.onsubmit = function(){
    
  const chatToken = '6918080790:AAHoIeIwYct_KD1QigjBorbVJr1lKo3HMc0';
  const chatId = '6008968432';

  const Name = document.querySelector('#name').value;
  const Emil = document.querySelector('#tel').value;
  const Commit = document.querySelector('#message').value;
  const messageText = `Новая заявка с сайта\n Имя -  ${Name}\n Tel - ${Emil}\n Комментарий - ${Commit}`;

  const url = `https://api.telegram.org/bot${chatToken}/sendMessage`;
  const params = {
    chat_id: chatId,
    text: messageText,
  };
  
  axios.post(url, params)
    .then(response => {
        alert('gönder artık yeter!');
        form.reset();
      console.log('Сообщение успешно отправлено:', response.data);
    })
    .catch(error => {
      console.error('Ошибка при отправке сообщения:', error);
    });
    return false
}