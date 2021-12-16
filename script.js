// Mobile Menu
document.querySelector('#menuicon').addEventListener('click', () => {
  document.querySelector('.hamburger').style.display = 'flex';
});

document.querySelector('.closemenu').addEventListener('click', () => {
  document.querySelector('.hamburger').style.display = 'none';
});

document.querySelectorAll('#whitebox a').forEach((element) => {
  element.addEventListener('click', () => {
    document.querySelector('.hamburger').style.display = 'none';
  });
});
window.onresize = () => {
  if (window.innerWidth > 992) {
    document.querySelector('.hamburger').style.display = 'none';
  }
};

// Project Popup
const work = document.querySelector('.work-container');
const projects = [
  {
    id: 1,
    title: 'Tonic',
    image: './images/modal-popup.png',
    imageAlt: 'First Project Image',
    description:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident doloribus odio sunt, quaerat unde nostrum numquam soluta nam eos voluptas est quas aperiam enim asperiores, exercitationem accusantium quasi saepe deleniti.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id perspiciatis corrupti, in blanditiis dignissimos soluta impedit illo ea. Ea ducimus pariatur dolorum earum distinctio eum possimus esse obcaecati, doloribus architecto.',
    langs: ['html', 'css', 'javaScript'],
    gitLink: 'https://github.com/selma-belhadj/My-1st-Portfolio',
    srcLink: 'https://selma-belhadj.github.io/My-1st-Portfolio/',

  },
  {
    id: 2,
    title: 'Batman',
    image: './images/work-2.png',
    imageAlt: 'Second Project Image',
    description:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident doloribus odio sunt, quaerat unde nostrum numquam soluta nam eos voluptas est quas aperiam enim asperiores, exercitationem accusantium quasi saepe deleniti.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id perspiciatis corrupti, in blanditiis dignissimos soluta impedit illo ea. Ea ducimus pariatur dolorum earum distinctio eum possimus esse obcaecati, doloribus architecto.',
    langs: ['html', 'css', 'javaScript'],
    gitLink: 'https://github.com/selma-belhadj/My-1st-Portfolio',
    srcLink: 'https://selma-belhadj.github.io/My-1st-Portfolio/',

  },
  {
    id: 3,
    title: 'Husky Cat',
    image: './images/modal-popup.png',
    imageAlt: 'Third Project Image',
    description:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident doloribus odio sunt, quaerat unde nostrum numquam soluta nam eos voluptas est quas aperiam enim asperiores, exercitationem accusantium quasi saepe deleniti.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id perspiciatis corrupti, in blanditiis dignissimos soluta impedit illo ea. Ea ducimus pariatur dolorum earum distinctio eum possimus esse obcaecati, doloribus architecto.',
    langs: ['html', 'css', 'javaScript'],
    gitLink: 'https://github.com/selma-belhadj/My-1st-Portfolio',
    srcLink: 'https://selma-belhadj.github.io/My-1st-Portfolio/',
  },
  {
    id: 4,
    title: 'Bender Project',
    image: './images/work-2.png',
    imageAlt: 'Fourth Project Image',
    description:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident doloribus odio sunt, quaerat unde nostrum numquam soluta nam eos voluptas est quas aperiam enim asperiores, exercitationem accusantium quasi saepe deleniti.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id perspiciatis corrupti, in blanditiis dignissimos soluta impedit illo ea. Ea ducimus pariatur dolorum earum distinctio eum possimus esse obcaecati, doloribus architecto.',
    langs: ['html', 'css', 'javaScript'],
    gitLink: 'https://github.com/selma-belhadj/My-1st-Portfolio',
    srcLink: 'https://selma-belhadj.github.io/My-1st-Portfolio/',
  },
  {
    id: 5,
    title: 'Canary',
    image: './images/modal-popup.png',
    imageAlt: 'Fifth Project Image',
    description:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident doloribus odio sunt, quaerat unde nostrum numquam soluta nam eos voluptas est quas aperiam enim asperiores, exercitationem accusantium quasi saepe deleniti.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id perspiciatis corrupti, in blanditiis dignissimos soluta impedit illo ea. Ea ducimus pariatur dolorum earum distinctio eum possimus esse obcaecati, doloribus architecto.',
    langs: ['html', 'css', 'javaScript'],
    gitLink: 'https://github.com/selma-belhadj/My-1st-Portfolio',
    srcLink: 'https://selma-belhadj.github.io/My-1st-Portfolio/',
  },
  {
    id: 6,
    title: 'BigFish',
    image: './images/work-2.png',
    imageAlt: 'Sixth Project Image',
    description:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident doloribus odio sunt, quaerat unde nostrum numquam soluta nam eos voluptas est quas aperiam enim asperiores, exercitationem accusantium quasi saepe deleniti.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id perspiciatis corrupti, in blanditiis dignissimos soluta impedit illo ea. Ea ducimus pariatur dolorum earum distinctio eum possimus esse obcaecati, doloribus architecto.',
    langs: ['Ruby on rails', 'css', 'javaScript', 'html'],
    gitLink: 'https://github.com/selma-belhadj/My-1st-Portfolio',
    srcLink: 'https://selma-belhadj.github.io/My-1st-Portfolio/',

  },
];

for (let i = 0; i < projects.length; i += 1) {
  const project = projects[i];

  work.innerHTML += `
    <div class="work-div" id="project-${project.id}">
      <img class="projectimg" src="${project.image}" alt="${project.imageAlt}" />
      <h3>${project.title}</h3>
        <ul class="work-list">
          ${project.langs.map((l) => `<li>${l}</li>`).join('')}
        </ul>
        <button class="work-button work-btn" type="button">See Project</button>
    </div>
  `;
}

const workDetail = document.querySelector('.grey-div');
const close = document.querySelector('.close-details');
const img = document.querySelector('.img-prj');
const titleElm = document.querySelector('.card-work-detail-title');
const languages = document.querySelector('.card-work-detail .work-list');
const paragraph = document.querySelector('.card-work-detail p');
const githubLink = document.querySelector('.github-btn');
const sourceLink = document.querySelector('.source-btn');

//
document.querySelectorAll('.work-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const id = Number(btn.parentNode.id.split('-')[1]);
    const {
      title,
      image,
      imageAlt,
      description,
      langs,
      gitLink,
      srcLink,
    } = projects.find((p) => p.id === id);

    titleElm.innerText = title;
    img.setAttribute('src', image);
    img.setAttribute('alt', imageAlt);
    paragraph.innerText = description;
    languages.innerHTML = langs.map((l) => `<li>${l}</li>`).join('');
    githubLink.setAttribute('href', gitLink);
    sourceLink.setAttribute('href', srcLink);

    workDetail.style.display = 'flex';
  });
});

close.addEventListener('click', () => {
  workDetail.style.display = 'none';
});

// validate email
const form = document.querySelector('#form-section form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email');
  if (email.value.toLowerCase() !== email.value) {
    const span = document.getElementById('email');
    span.innerText = 'Your email is not valid, it should be lowercase';
    span.style.color = 'red';
    console.log(span)
    return false;
  }
  form.submit();
  return true;
});