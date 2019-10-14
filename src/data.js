const color_yellow="#FFD166";
const color_red="#EF476F";
const color_blue="#62B1D0";
const color_green="#06D6A0";
const color_black="#888888";



export default [

////////// Opensource //////////
{
  title: "Opensource",
  text: "As someone who relies and greatly benefits from open source software, I believe it's important to give back, so here's a short list of project I've made contributions to:",
  pic: require('images/opensource.png'),
  linkstyle: "ilink",
  links: [
    {
      text: " numpy-ml",
      url: "https://github.com/ddbourgin/numpy-ml",
      icon: "fa brand fa-github",
    },
    {
      text: " tensorflow/estimator",
      url: "https://github.com/tensorflow/estimator",
      icon: "fa brand fa-github",
    },
  ],
  tags: [
  ],
},


////////// Brawler64 //////////
{
  title: "Brawler64",
  text: "PvE beat ’em up video game featuring a controlled <b>game loop</b>, <b>graphics</b>, <b>sound</b>, and a <b>decision-tree computer opponent</b>.",
  pic: require('images/brawlerico.png'),
  linkstyle: "ilink",
  links: [
    {
      text: " Github",
      url: "https://github.com/JayMody/Brawler64",
      icon: "fa brand fa-github",
    },
  ],
  tags: [
    {
      text: "Java",
      color: color_yellow,
    },
    {
      text: "SWT",
      color: color_green,
    },
    {
      text: "OOP",
      color: color_black,
    },
  ],
},



////////// Leetcode //////////
{
  title: "Leetcode",
  text: "In my spare time, I have fun times with <b>algorithims</b>, <b>data structures</b>, and <b>problem solving</b> on my joruney to complete a leetcode problem a day (keyword \"try\").",
  pic: require('images/leetcode.png'),
  linkstyle: "ilink",
  links: [
    {
      text: " Github",
      url: "https://github.com/JayMody/LeetCode",
      icon: "fa brand fa-github",
    },
    {
      text: " Leetcode Profile",
      url: "https://leetcode.com/jaymody/",
      icon: "fa fa-code",
    },
  ],
  tags: [
    {
      text: "C++",
      color: color_red,
    },
    {
      text: "Python",
      color: color_blue,
    },
    {
      text: "Java",
      color: color_yellow,
    },
  ],
},


////////// MLP Visualizer //////////
{
  title: "MLP Vizualizer",
  text: "A visualization of how a <b>Multi-Layer Perceptron Neural Network</b> classifies clusters of data.",
  pic: require('images/mlp.gif'),
  linkstyle: "ilink",
  links: [
    {
      text: " Github",
      url: "https://github.com/JayMody/MLP-Visualizer",
      icon: "fa brand fa-github",
    },
  ],
  tags: [
    {
      text: "Python",
      color: color_blue,
    },
    {
      text: "SKLearn",
      color: color_green,
    },
    {
      text: "NumPy",
      color: color_black,
    },
  ],
},


////////// Hack Wescam //////////
{
  title: "HackWescam",
  text: "My first ever hackathon! The competition involved complete various challenges involving <b>drone control</b>, <b>object detection</b>, and <b>object recognition</b>. It was an amazing first hackathon and we ended up <b>placing 1st",
  pic: require('images/drone.jpg'),
  linkstyle: "ilink",
  links: [
    {
      text: " Github",
      url: "https://github.com/JayMody/Hackwescam",
      icon: "fa brand fa-github",
    },
    {
      text: " Article",
      url: "https://www.wescam.com/blog/wescam-hackathon-drone-swarm/",
      icon: "fa fa-newspaper-o",
    },
  ],
  tags: [
    {
      text: "C++",
      color: color_red,
    },
    {
      text: "OpenCV",
      color: color_green,
    },
  ],
},


////////// Sesame //////////
{
  title: "Genomics NLP",
  text: "Adapting <b>Google’s BERT</b> model to get contextual embeddings for <b>genomic data</b>, trained on <b>cloud TPUs</b>. Packaged and documented for <b>open source release</b> as a tool for the research community",
  pic: require('images/bert.png'),
  linkstyle: "ilink",
  links: [
    {
      text: " Github",
      url: "https://github.com/magarveylab",
      icon: "fa brand fa-github",
    },
  ],
  tags: [
    {
      text: "Python",
      color: color_blue,
    },
    {
      text: "Tensorflow",
      color: color_green,
    },
    {
      text: "GCloud",
      color: color_black,
    }
  ],
},


////////// Sesame //////////
{
  title: "A little about me ...",
  text: "I'm a second year <b>software engineering student</b> and a <b>data scientist</b> at <b>McMaster University</b>.\n\nOther than hacking away on my laptop, I also enjoy maintaining my passions for <b>music</b>, <b>travel</b>, <b>personal fitness</b>, <b>sports</b>, <b>reading</b> and <b>video games</b>.\n\nCheck out my <a target=\"_blank\" href=\"jaymody_resume.pdf\">resume</a> or keep swiping to learn more about some cool project I've worked on.",
  pic: require('images/music.png'),
  linkstyle: "ilink",
  links: [
  ],
  tags: [
  ],
},


////////// Main Home Card //////////
{
  title: "Jay Mody",
  text: "Hello there!\nYou've stumbled across my personal website.\n<b>Swipe</b> to learn more about me.",
  pic: require('images/avatar.jpg'),
  linkstyle: "icons",
  links: [
    {
      text: "",
      url: "https://github.com/jaymody",
      icon: "fa brand fa-github",
    },
    {
      text: "",
      url: "https://linkedin.com/in/jaym",
      icon: "fa brand fa-linkedin",
    },
    {
      text: "",
      url: "mailto:JayKMody@gmail.com",
      icon: "fa fa-envelope",
    },
    {
      text: "",
      url: "jaymody_resume.pdf",
      icon: "fa fa-file",
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
    }
  ],
}


];


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