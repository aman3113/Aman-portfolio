let blogEl = document.querySelector(".blog-display");

const blogDetails = [
  {
    title: "This is Blog title",
    image: "images/palindrome.jpg",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, optio. Dignissimos consequatur optio nihil alias magni perferendis quo ab nobis.",
    url: "https://www.google.com/",
  },
  {
    title: "This is Blog title",
    image: "images/palindrome.jpg",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, optio. Dignissimos consequatur optio nihil alias magni perferendis quo ab nobis.",
    url: "https://www.google.com/",
  },
  {
    title: "This is Blog title",
    image: "images/palindrome.jpg",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, optio. Dignissimos consequatur optio nihil alias magni perferendis quo ab nobis.",
    url: "https://www.google.com/",
  },
];

let html = "";

for (let item of blogDetails) {
  html += `
  <a href="${item.url}"
  ><div class="blog-container">
    <h2>
    ${item.title}
    </h2>
    <img src="${item.image}" alt="" />
    <p>${item.text}</p></div
></a>
`;
}

console.log(html);

blogEl.innerHTML = html;
