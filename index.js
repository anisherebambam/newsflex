
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

function toJoin2() {
  const joinBtnn = document.querySelector('.js-join-noww');

  if (joinBtnn.innerText === 'Join Now') {
    joinBtnn.innerHTML = 'Joined!';
    joinBtnn.classList.add('joined2');
  } else {
    joinBtnn.innerHTML = 'Join Now';
    joinBtnn.classList.remove('joined2');
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
  } else if (!(emailValue === '')) {


    userEmail.push(emailValue);
    console.log(userEmail);

    subBtn.innerHTML = 'Subscribed!';
    subBtn.classList.add('subsribedd');

    emailInput.value = '';

    subMsg.innerHTML = ''
  }
}
