const color_yellow = "#FFD166";
const color_red = "#EF476F";
const color_blue = "#62B1D0";
const color_green = "#06D6A0";
const color_black = "#888888";

export default [
  ////////// Main Home Card //////////
  {
    title: "Jay Mody",
    text:
      "Hello there!\nYou've stumbled across my personal website.\n<b>Swipe</b> to learn more about me.",
    pic: "images/avatar.jpg",
    linkstyle: "icons",
    links: [
      {
        text: "",
        url: "https://github.com/jaymody",
        icon: "fab fa-github",
      },
      {
        text: "",
        url: "https://linkedin.com/in/jaykmody",
        icon: "fab fa-linkedin-in",
      },
      {
        text: "",
        url: "mailto:JayKMody@gmail.com",
        icon: "fas fa-envelope",
      },
      {
        text: "",
        url: "jaymody_resume.pdf",
        icon: "fas fa-file",
      },
    ],
    tags: [
      {
        text: "Coder",
        color: color_yellow,
      },
      {
        text: "Student",
        color: color_red,
      },
      {
        text: "Musician",
        color: color_blue,
      },
    ],
  },

  ////////// About Me //////////
  {
    title: "A little about me ...",
    text:
      'I\'m a third year <b>software engineering student</b> at <b>McMaster University</b>.\n\n Please know that this website is just for fun, and is not a portfolio. That\'s what my <a target="_blank" href="jaymody_resume.pdf">Resume</a>, <a target="_blank" href="https://www.linkedin.com/in/jaykmody">LinkedIn</a>, and <a target="_blank" href="https://github.com/jaymody">Github</a> are for :).\n\nHowever, I\'d be remiss if I didn\'t mention that I was a <b>top 5 finalist</b> in a <b>$1,000,000 AI competition</b> and want to work with interesting people to tackle interesting problems.\n\nIf you want to collaborate, think I can add value, or just want to have a chat, reach out to me at my <a href=mailto:JayKMody@gmail.com>email</a> (or schedule a chat with me using the blue button in the bottom right). Enough about my credentials, what else am I up to?',
    pic: "",
    linkstyle: "ilink",
    links: [],
    tags: [],
  },

  ////////// Music //////////
  {
    title: "🎵🎵🎵",
    text:
      "I play a lot of different instruments, but as of late I'm really enjoying picking up my <b>guitar</b> 🎸. I'm currently learning how to solo over various chord progressions popular in <b>classic rock</b> and <b>blues</b> (I'm a massive <b>Led Zeppelin</b> fan).\n\nIn high school, I was part of a specialized musical arts program where I was <b>double bass</b> major for 4 years (aka big cello). Here's me performing <a target=\"_blank\" href=\"https://youtu.be/4nVHOQA9EjM\">Air on the G String by Bach</a> on the double bass.",
    pic: "images/music.png",
    linkstyle: "ilink",
    links: [],
    tags: [
      {
        text: "Guitar",
        color: color_blue,
      },
      {
        text: "Drums",
        color: color_red,
      },
      {
        text: "Bass",
        color: color_yellow,
      },
    ],
  },

  ////////// Reader //////////
  {
    title: "Books are cheatcodes for life",
    text:
      "I recently finished reading <b>Atomic Habits</b> by James Clear (great read for those looking to get their 💩 together). \n\nI'm currently cracking away at <b>Coddling of the American Mind</b>, a book about how bad ideas with good intentions are ruining a generation.\n\nIf you have any recommendations for books/articles that really shifted the way you think (or just a good fiction book tbh), drop em in my <a href=mailto:JayKMody@gmail.com>email</a>, I'd be super grateful :).",
    pic:
      "https://i.pinimg.com/originals/dd/64/da/dd64da585bc57cb05e5fd4d8ce873f57.png",
    linkstyle: "ilink",
    links: [],
    tags: [],
  },

  ////////// StackOverflow //////////
  {
    title: "segmentation fault 11",
    text:
      "If you've ever had your <b>python</b> question answered on StackOverflow, check the responders user tag, there's a very tiny (but non-zero!) chance it might be me!\n\nIt wouldn't be an exaggeration to say <b>StackOverflow</b> has done more for my career than my education (no shade to McMaster University, it's an awesome school!), so in my spare time, I sometimes go on StackOverflow and answer people's presssing programming questions.",
    pic:
      "https://cdn4.iconfinder.com/data/icons/miu-gloss-social/60/stackoverflow-512.png",
    linkstyle: "ilink",
    links: [
      {
        text: " StackOverflow Profile",
        url: "https://stackoverflow.com/users/11070463/jay-mody",
        icon: "fab fa-stack-overflow",
      },
    ],
    tags: [],
  },

  ////////// Opensource //////////
  {
    title: "Opensource",
    text:
      "As someone who relies and greatly benefits from open source software, the least I can do is give back. Here's a short list of project I've made contributions to (filling issues, fixing bugs, adding features, updating documentation, etc ...):",
    pic:
      "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    linkstyle: "ilink",
    links: [
      {
        text: " numpy-ml",
        url: "https://github.com/ddbourgin/numpy-ml",
        icon: "fab fa-github",
      },
      {
        text: " huggingface/transformers",
        url: "https://github.com/huggingface/transformers",
        icon: "fab fa-github",
      },
      {
        text: " tensorflow/estimator",
        url: "https://github.com/tensorflow/estimator",
        icon: "fab fa-github",
      },
      {
        text: " tensorflow/tensorflow",
        url: "https://github.com/tensorflow/tensorflow",
        icon: "fab fa-github",
      },
      {
        text: " huggingface/tokenizers",
        url: "https://github.com/huggingface/tokenizers",
        icon: "fab fa-github",
      },
    ],
    tags: [],
  },

  ////////// Video Games //////////
  {
    title: "Video Games",
    text:
      "When it comes to video games, I've play a bit of everything: real-time strategies, massive open world games, online shooters, and classics like <b>animal crossing</b> and <b>mario</b>. Lately I've been really into linear narrative driven games (<b>Last of Us I and II</b>, or really anything made my Naughty Dog).\n\nOh, I also occasionally play some not-so friendly games of <b>Smash Bros</b> with my friends (as the picture indicates, I'm a Donkey Kong main).\n\nHowever, the crown for favourite game of all time definetly goes to <b>Skyrim</b>.",
    pic: "images/donkey.png",
    linkstyle: "ilink",
    links: [],
    tags: [],
  },
].reverse();

//////// EXAMPLE ENTRY ////////
// {
//   title: "title",
//   text: "main card text content\nsupports <b>inline html tags</b>!",
//   pic: "",
//   linkstyle: "",
//   links: [
//     {
//       text: "",
//       url: "",
//       icon: "",
//     },
//   ],
//   tags: [
//     {
//       text: "",
//       color: "",
//     },
//   ],
// }
