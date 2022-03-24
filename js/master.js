(function ($) {

  const container = document.getElementById("entry-template");
  const source = container.innerHTML;
  const template = Handlebars.compile(source);
  const current_lang = 'EN';

  Handlebars.registerHelper('blankLink', function (text, url) {
    url = Handlebars.escapeExpression(url); //экранирование выражения
    return new Handlebars.SafeString(`<a target='_blank' href='${url}'>${text}</a>`);
  });

  Handlebars.registerHelper('img', function (src, alt) {
    src = Handlebars.escapeExpression(src); //экранирование выражения
    alt = Handlebars.escapeExpression(alt);
    return new Handlebars.SafeString(`<img src="${src}" alt="${alt}">`);
  });

  Handlebars.registerHelper('percent', function (amount) {
    return new Handlebars.SafeString(`<div class="skill-percentage" style="width: ${amount}% !important;"></div>`);
  })

  // .

  const en = {
    fullName: "Dmitrij Rudenko",
    profession: "Javascript Developer",
    menu: {
      home: "Home",
      about: "About me",
      resume: "Resume",
      portfolio: "Portfolio",
      contacts: "Contacts"
    },
    contactLinks: {
      linkedin: "https://www.linkedin.com/in/dmitry--rudenko/",
      telegram: "https://t.me/frog_ocean",
      freelancehunt: "https://freelancehunt.com/freelancer/dmitrijrudenko.html?r=mjXZO",
      github: "https://github.com/dmitrij-rudenko",
    },
    socialIcons: {
      linkedin: `<i class="fab fa-linkedin-in"></i>`,
      github: `<i class="fab fa-github" aria-hidden="true"></i>`,
      telegram: `<i class="fab fa-telegram"></i>`
    },
    email: 'ph.dmitry.rudenko@gmail.com',
    currentYear: new Date().getFullYear(),
    copyright: "All rights reserved",
    mainSkills: [
      'Backend Development',
      'Frontend Development',
    ],
    about: {
      title: 'About <span>me</span>',
      information: `I am a full-stack developer. I have been programming for the last 6 years. Over the years of practice, I managed to work with various programming languages and technologies. I have big experience in developing sites, writing full-fledged web applications and services in node.js. Always open to new interesting projects.
      `,
      fields: [{
        key: 'Age',
        value: '26'
      },
      {
        key: 'Country',
        value: 'Ukraine'
      },
      {
        key: 'E-mail',
        value: `<a href="mailto:ph.dmitry.rudenko@gmail.com">ph.dmitry.rudenko@gmail.com</a>`
      },
      {
        key: 'Telegram',
        value: `<a target="_blank" href="https://t.me/frog_ocean">@frog_ocean</a>`
      }
      ],
      skillsTitle: 'What <span>I Do</span>',
      skills: {
        left: [{
          title: "Setup",
          icon: `<i class="lnr lnr-store"></i>`,
          description: 'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.'
        },
        {
          title: "Design",
          icon: `<i class="lnr lnr-store"></i>`,
          description: 'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.'
        }
        ],
        right: [{
          title: "Setup",
          icon: `<i class="lnr lnr-store"></i>`,
          description: 'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.'
        },
        {
          title: "Design",
          icon: `<i class="lnr lnr-store"></i>`,
          description: 'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.'
        }
        ]
      },
      reviewsTitle: "Reviews",
      reviews: [{
        imageSource: 'img/testimonials/testimonial-1.jpg',
        author: 'Dima PC',
        review: `Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas dolor. Nulla condimentum nunc sit amet urna tempus finibus. Duis mollis leo id ligula pellentesque, at vehicula dui ultrices.`
      }],
      factsTitle: 'Fun <span>Facts</span> About <span>Me</span>',
      facts: [{
        icon: `<i class="lnr lnr-heart"></i>`,
        title: 'Happy Clients',
        value: '51'
      },
      {
        icon: `<i class="lnr lnr-clock"></i>`,
        title: 'Working Hours',
        value: '5,021'
      },
      {
        icon: `<i class="fas fa-coffee"></i>`,
        title: 'Teas drink',
        value: '600'
      }
      ]
    },
    resume: {
      title: 'Resume',
      experience: 'Experience',
      works: [
        {
          period: '2021 - 2022',
          company: 'YugContract',
          title: 'Javascript Developer',
          desc: ''
        },
        {
          period: '2021 - 2021',
          company: 'Enjoy Logic',
          title: 'Javascript Developer',
          desc: ''
        },
        {
          period: '2020 - 2021',
          company: 'FoxprimeTV',
          title: 'Chief Technology Officer',
          desc: ''
        },
        {
          period: '2020 - 2021',
          company: 'MediacastTV',
          title: 'Javascript Developer',
          desc: ''
        },
        {
          period: '2019 - 2020',
          company: 'Springbear Agency',
          title: 'Team Lead',
          desc: ''
        },
        {
          period: '2016 - 2019',
          company: 'Exit Technologies',
          title: 'Wordpress Developer',
          desc: ''
        }
      ],
      skillsTitle: 'Coding <span>Skills</span>',
      skills: [{
        name: 'Javascript/ES6/Vue',
        percents: '99'
      },
      {
        name: 'Node.js/Express/MongoDB',
        percents: '99'
      },
      {
        name: 'TypeScript/NestJS/PostgreSQL',
        percents: '95'
      },
      {
        name: "Ubuntu/Bash",
        percents: "85"
      }
      ],
      techTitle: 'Technologies',
      technologies: [
        'Express.js',
        'Nuxt.js',
        'HapiJS',
        'VueJS 2/3',
        'NestJS',
        'PostgreSQL, MySQL',
        'Mongoose',
        'SSH',
        'Git',
        'Bash',
        'Bulma',
        'Bootstrap',
        'Vuetify',
        'Prisma',
        'Sequelize',
        'JWT'
      ]
    },
    contacts: {
      title: 'Contacts',
      email: 'E-mail',
      telegram: 'telegram',
      my_freelancehunt_page: 'I am on freelancehunt',
    }
  };

  // Я фуллстек разработчик. Занимаюсь программированием последние 5 лет.
  //     За годы практики успел поработать с различными языками программирования и технологиями.
  //     Есть большой опыть в разработке сайтов используя CMS Wordpress и написания полноценных
  //     веб-приложени на node.js. Всегда открыт для новых интересных проектов.

  const html = current_lang == 'EN' ? template(en) : template(ua);
  container.innerHTML = html;
})(jQuery);