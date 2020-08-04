(function($) {

  const container = document.getElementById("entry-template");
  const source = container.innerHTML;
  const template = Handlebars.compile(source);
  const current_lang = 'EN';

  Handlebars.registerHelper('blankLink', function(text, url) {
    url = Handlebars.escapeExpression(url); //экранирование выражения
    return new Handlebars.SafeString(`<a target='_blank' href='${url}'>${text}</a>`);
  });

  Handlebars.registerHelper('img', function(src, alt) {
    src = Handlebars.escapeExpression(src); //экранирование выражения
    alt = Handlebars.escapeExpression(alt);
    return new Handlebars.SafeString(`<img src="${src}" alt="${alt}">`);
  });

  Handlebars.registerHelper('percent', function(amount) {
    return new Handlebars.SafeString(`<div class="skill-percentage" style="width: ${amount}% !important;"></div>`);
  })

  const flToken = '8c1a3053268c14272647341c032a4b103c02476a';

  $.ajax({
    url: "https://api.freelancehunt.com/v2/freelancers/dmitrijrudenko/reviews",
    method: "GET",
    headers: {
      "Authorization": `Bearer ${flToken}`
    },
    failed: function(err) {
      console.log(err);
    },
    success: function(res) {
      console.log(res);
    }
  })

  const en = {
    fullName: "Dmitrij Rudenko",
    profession: "Full Stack Developer",
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
    currentYear: 2020,
    copyright: "All rights reserved",
    mainSkills: [
      'Frontend/Backend Development',
      'UX/UI Design'
    ],
    about: {
      title: 'About <span>me</span>',
      information: `I am a full stack developer. I have been programming for the last 5 years.
      Over the years of practice, he managed to work with various programming languages and technologies.
      There is a lot of experience in developing sites using CMS Wordpress and writing full-fledged web applications in node.js.
      Always open to new interesting projects.
      `,
      fields: [{
          key: 'Age',
          value: '25'
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
          title: 'Working Hourse',
          value: '5,021'
        },
        {
          icon: `<i class="fas fa-coffee"></i>`,
          title: 'Coffies drink',
          value: '600'
        }
      ]
    },
    resume: {
      title: 'Resume',
      experience: 'Experience',
      works: [{
          period: '2020 - Now',
          company: 'Mediacast',
          title: 'Middle Javascript Developer',
          desc: 'Praesent dignissim sollicitudin justo, sed elementum quam lacinia quis. Phasellus eleifend tristique posuere. Sed vitae dui nec magna.'
        },
        {
          period: '2019 - 2020',
          company: 'Springbear Agency',
          title: 'Team Lead',
          desc: 'Praesent dignissim sollicitudin justo, sed elementum quam lacinia quis. Phasellus eleifend tristique posuere. Sed vitae dui nec magna.'
        },
        {
          period: '2016 - 2019',
          company: 'Exit Technologies',
          title: 'Wordpress Developer',
          desc: 'Praesent dignissim sollicitudin justo, sed elementum quam lacinia quis. Phasellus eleifend tristique posuere. Sed vitae dui nec magna.'
        }
      ],
      skillsTitle: 'Coding <span>Skills</span>',
      skills: [{
        name: 'HTML/CSS/SCSS',
        percents: '100'
      }, {
        name: 'Javascript/ES6',
        percents: '90'
      },
      {
        name: 'Wordpress/PHP',
        percents: '85'
      },
      {
        name: 'MongoDB/Node.js',
        percents: '90'
      },
      {
        name: "Ubuntu",
        percents: "77"
      }
      ],
      techTitle: 'Technologies',
      technologies: [
        'Express.js',
        'Vue.js',
        'WooCommerce',
        'Mongoose',
        'Webpack',
        'SSH',
        'Git',
        'Bash',
        'Bulma',
        'Bootstrap',
        'Nuxt.js'
      ]
    },
    contacts: {
      title: 'Contacts',
      email: 'E-mail',
      telegram: 'telegram',
      my_freelancehunt_page: 'My freelancehunt page'
    }
  };

  // Я фуллстек разработчик. Занимаюсь программированием последние 5 лет.
  //     За годы практики успел поработать с различными языками программирования и технологиями.
  //     Есть большой опыть в разработке сайтов используя CMS Wordpress и написания полноценных
  //     веб-приложени на node.js. Всегда открыт для новых интересных проектов.

  const html = current_lang == 'EN' ? template(en) : template(ua);
  container.innerHTML = html;
})(jQuery);