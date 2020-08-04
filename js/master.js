(function($) {

  const container = document.getElementById("entry-template");
  const source = container.innerHTML;
  const template = Handlebars.compile(source);
  const current_lang = 'EN';

  Handlebars.registerHelper('blankLink', function(text, url) {
    url = Handlebars.escapeExpression(url); //экранирование выражения
    return new Handlebars.SafeString(`<a target='_blank' href='${url}'>${text}</a>`);
  });

  const flToken = '8c1a3053268c14272647341c032a4b103c02476a';

  $.ajax({
    url: "https://api.freelancehunt.com/v2/freelancers/dmitrijrudenko/reviews",
    method: "GET",
    timeout: 0,
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
      contacts: "contacts"
    },
    contactLinks: {
      linkedin: "https://www.linkedin.com/in/dmitry--rudenko/",
      telegram: "https://t.me/frog_ocean",
      freelancehunt: "https://freelancehunt.com/freelancer/dmitrijrudenko.html?r=mjXZO",
      instagram: "https://www.instagram.com/rudenkodmitrij/"
    },
    socialIcons: {
      linkedin: `<i class="fab fa-linkedin-in"></i>`,
      instagram: `<i class="fab fa-instagram"></i>`,
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
      }
    }
  };

  // Я фуллстек разработчик. Занимаюсь программированием последние 5 лет.
  //     За годы практики успел поработать с различными языками программирования и технологиями.
  //     Есть большой опыть в разработке сайтов используя CMS Wordpress и написания полноценных
  //     веб-приложени на node.js. Всегда открыт для новых интересных проектов.

  const html = current_lang == 'EN' ? template(en) : template(ua);
  container.innerHTML = html;
})(jQuery);