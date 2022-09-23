let displayEl = document.querySelector(".project-display");
let details = [
  {
    background: "green",
    image: "images/maths quiz.jpg",
    heading: "Maths Quiz CLI App (Mark 1)",
    tech: [
      {
        span: "js",
        used: "Javascript",
      },
      {
        span: "",
        used: "",
      },
      {
        span: "",
        used: "",
      },
    ],
    url1: "https://github.com/aman3113/CLI-app-Maths-Quiz-mark1",
    url2: "https://replit.com/@aman3113/CLI-app-Maths-Quiz-Mark1#index.js?embed=1&output=1",
  },
  {
    background: "blue",
    image: "images/HTML quiz.jpg",
    heading: "HTML Quiz CLI app (Mark2)",
    tech: [
      {
        span: "js",
        used: "Javascript",
      },
      {
        span: "",
        used: "",
      },
      {
        span: "",
        used: "",
      },
    ],
    url1: "https://github.com/aman3113/HTML-QUIZ-Mark2",
    url2: "https://replit.com/@aman3113/HTML-QUIZ-mark2#index.js?embed=1&output=1",
  },
  {
    background: "green",
    image: "images/groot.avif",
    heading: "Groot Translator (Mark6)",
    tech: [
      {
        span: "html",
        used: "HTML",
      },
      {
        span: "css",
        used: "CSS",
      },
      {
        span: "js",
        used: "Javascript",
      },
    ],
    url1: "https://github.com/aman3113/Groot-translator-mark6",
    url2: "https://let-groot-translate.netlify.app",
  },
  {
    background: "pink",
    image: "images/minions.avif",
    heading: "Let Banana Talks (Mark7)",
    tech: [
      {
        span: "html",
        used: "HTML",
      },
      {
        span: "css",
        used: "CSS",
      },
      {
        span: "js",
        used: "Javascript",
      },
    ],
    url1: "https://github.com/aman3113/Banana-talks-mark7",
    url2: "https://minions-transalator.netlify.app",
  },
  {
    background: "orange",
    image: "images/emoji.avif",
    heading: "Emoji Descriptor (Mark8)",
    tech: [
      {
        span: "html",
        used: "HTML",
      },
      {
        span: "css",
        used: "CSS",
      },
      {
        span: "react",
        used: "React",
      },
    ],
    url1: "https://github.com/aman3113/Emoji-app-Mark-eight",
    url2: "https://emoji-interpretor-mark8.netlify.app",
  },
  {
    background: "pink",
    image: "images/movie.jpg",
    heading: "My Movie Recommendations (mark9)",
    tech: [
      {
        span: "html",
        used: "HTML",
      },
      {
        span: "css",
        used: "CSS",
      },
      {
        span: "react",
        used: "React",
      },
    ],
    url1: "https://github.com/aman3113/Movie-recommendation-mark9",
    url2: "https://movie-recommendation-aman.netlify.app",
  },
  {
    background: "green",
    image: "images/cash register.jpg",
    heading: "Cash Register App (Mark10)",
    tech: [
      {
        span: "html",
        used: "HTML",
      },
      {
        span: "css",
        used: "CSS",
      },
      {
        span: "js",
        used: "Javascript",
      },
    ],
    url1: "https://github.com/aman3113/cash-register-mark-ten",
    url2: "https://cash-manager-aman.netlify.app",
  },
  {
    background: "pink",
    image: "images/lucky birthday.jpg",
    heading: "Is Your Birthday Lucky? (Mark11)",
    tech: [
      {
        span: "html",
        used: "HTML",
      },
      {
        span: "css",
        used: "CSS",
      },
      {
        span: "js",
        used: "Javascript",
      },
    ],
    url1: "https://github.com/aman3113/lucky-birthday-mark-11",
    url2: "https://lucky-birthday-aman.netlify.app",
  },
  {
    background: "blue",
    image: "images/fun triangles.jpg",
    heading: "Lets have Fun with Triangles (Mark12)",
    tech: [
      {
        span: "html",
        used: "HTML",
      },
      {
        span: "css",
        used: "CSS",
      },
      {
        span: "js",
        used: "Javascript",
      },
    ],
    url1: "https://github.com/aman3113/Fun-with-Triangles-mark12",
    url2: "https://know-the-triangles-mark12.netlify.app/",
  },
  {
    background: "orange",
    image: "images/palindrome.jpg",
    heading: "Is Your Birthday Palindrome? (Mark13)",
    tech: [
      {
        span: "html",
        used: "HTML",
      },
      {
        span: "css",
        used: "CSS",
      },
      {
        span: "js",
        used: "Javascript",
      },
    ],
    url1: "https://github.com/aman3113/Birthday-Palindrome-mark13",
    url2: "https://birthday-palindrome-aman.netlify.app",
  },
  {
    background: "blue",
    image: "images/profit loss.jpg",
    heading: "Check out your Profit/Loss (Mark14)",
    tech: [
      {
        span: "html",
        used: "HTML",
      },
      {
        span: "css",
        used: "CSS",
      },
      {
        span: "js",
        used: "Javascript",
      },
    ],
    url1: "https://github.com/aman3113/stock-profit-loss-mark14",
    url2: "https://basic-profit-loss-calculator.netlify.app",
  },
];
let html = "";

for (let item of details) {
  html += `
    <div class="row-elements ${item.background}">
        <div class="image">
          <img src="${item.image}" alt="Stock profit loss wallpaper" />
        </div>
        <div class="about">
          <h3>${item.heading}</h3>
          <div class="tech-stack">
            <span class="span-${item.tech[0].span}">${item.tech[0].used}</span>
            <span class="span-${item.tech[1].span}">${item.tech[1].used}</span>
            <span class="span-${item.tech[2].span}">${item.tech[2].used}</span>
          </div>
          <div class="code-buttons display">
            <a
              href="${item.url1}"
              target="_blank"
              >CODE</a
            >
            <a
              href="${item.url2}"
              target="_blank"
              >LIVE</a
            >
          </div>
        </div>
    </div>
`;
}

console.log(html);

displayEl.innerHTML = html;
