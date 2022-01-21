// locastorage
const contactForm = document.querySelector('#form-section form');
const { fullname, emailuser, mailtext } = contactForm.elements;

// storing the form data in local storage
contactForm.addEventListener('change', () => {
  const obj = {};

  if (fullname.value.trim() !== '') {
    obj.userName = fullname.value.trim();
  }

  if (emailuser.value.trim() !== '') {
    obj.userEmail = emailuser.value.trim();
  }

  if (mailtext.value.trim() !== '') {
    obj.userMessage = mailtext.value.trim();
  }

  localStorage.setItem('formData', JSON.stringify(obj));
});

// set the localStorage data to the form

const formObj = JSON.parse(localStorage.getItem('formData'));
const { userName, userEmail, userMessage } = formObj;

fullname.value = userName || '';
emailuser.value = userEmail || '';
mailtext.value = userMessage || '';