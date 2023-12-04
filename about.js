
// JOIN NOW FUNCTIONALITY //////////////////////////////
function toJoin() {
  const joinBtn = document.querySelector('.js-join-now');

  if (joinBtn.innerText === 'Join Now') {
    joinBtn.innerHTML = 'Joined!';
    joinBtn.classList.add('joined');
  } else {
    joinBtn.innerHTML = 'Join Now';
    joinBtn.classList.remove('joined');
  }
};


// SUBSCRIBE FUNCTIONALITY //////////////////////////////

let userEmail = [];

function subscribing() {
  const subMsg = document.querySelector('.subMsg');
  const emailInput = document.querySelector('.email-input');
  const emailValue = emailInput.value
  const subBtn = document.querySelector('.js-subscribe-btn');


  if (emailValue === '') {
    subMsg.innerHTML = 'Input an Email!!'
    subBtn.innerHTML = 'Subscribe';
    subBtn.classList.remove('subsribedd');
  } else {
    const emailInput = document.querySelector('.email-input');
    const emailValue = emailInput.value;

    userEmail.push(emailValue);
    console.log(userEmail);

    subBtn.innerHTML = 'Subscribed!';
    subBtn.classList.add('subsribedd');

    emailInput.value = '';

    subMsg.innerHTML = ''
  }
}
