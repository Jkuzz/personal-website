import typescriptLogo from '../assets/Typescript-logo.svg'
import vueLogo from '../assets/Vue-logo.svg'
import tailwindLogo from '../assets/Tailwind-logo.svg'
import viteLogo from '../assets/Vitejs-logo.svg'
import astroLogo from '../assets/Astro-logo.svg'
import svelteLogo from '../assets/Svelte-logo.svg'
import pythonLogo from '../assets/Python-logo.svg'
import javaLogo from '../assets/Java-logo.svg'
import gitLogo from '../assets/Github-logo.svg'

export const tools = [
  {
    title: 'TypeScript',
    text: 'TypeScript is my primary web development language. The safety and maintainability it provides makes it essential.',
    img: typescriptLogo,
  },
  {
    title: 'VueJS',
    text: "I've had a great experience with Vue when building websites in a team. The docs, the tooling and the community are very helpful and the development process is smooth.",
    img: vueLogo,
  },
  {
    title: 'Tailwind',
    text: 'Tailwind is my go-to solution for styling pages. I find its clarity, scalability and performance very useful.',
    img: tailwindLogo,
  },
  {
    title: 'Vite',
    text: "Vite's speed and comfort of use makes it my obvious choice as a bundler and build tool. Since finding it, I have used it in every website project.",
    img: viteLogo,
  },
  {
    title: 'Astro',
    text: 'Astro has become my solution for building static sites such as this one. I love the performance and simplicity of only shipping snippets of JS.',
    img: astroLogo,
  },
  {
    title: 'Python',
    text: 'When I need to process or explore data, I usually use Python.',
    img: pythonLogo,
  },
  {
    title: 'Java',
    text: 'When I need an Object-oriented language, I use Java. I am familiar with it from the advanced courses I took at university.',
    img: javaLogo,
  },
  // {
  //   title: 'Unity',
  //   text: 'Sometimes, I like to dabble in game development. When not developing web games, I reach for Unity.',
  //   img: 'Unity_2021.svg',
  // },
  {
    title: 'Git',
    text: 'I use Git for version control on every project, host most of repositories on GitHub and deploy some on Pages. For larger projects, I use GitHub Actions for CI.',
    img: gitLogo,
  },
  {
    title: 'Svelte',
    text: 'I am learning Svelte as a lightweight framework alternative and made this website using it to test it out!',
    img: svelteLogo,
  },
]

export const projects = [
  {
    title: 'Impromptu',
    text: 'Impromptu is a party game in which you and your friends give prompts to an AI art generator and try to trick each other into guessing your fake prompts. <br/> I am the main frontend contributor for Impromptu and am responsible for developing new features and implementing designs.',
    img: 'Impromptu.webp',
    alt: 'Impromptu logo',
    tools: ['TypeScript', 'Vue', 'Tailwind', 'OpenAPI', 'Pinia', 'Vite', 'Cypress'],
    demoUrl: 'https://impromptu.fun',
  },
  {
    title: 'TypeSPARQ ✨',
    text: 'This tool facilitates schema extraction from public SPARQL endpoints. Created to simplify the exploration process, TypeSPARQ automatically extracts and visualises the schema. Finally, the extracted schema can be exported into TypeScript code to start issuing type-safe queries within minutes via <strong><a href="https://ldkit.io/" target="_blank">LDKit</a></strong>.',
    img: 'typesparq.webp',
    alt: 'TypeSPARQ screenshot',
    tools: ['TypeScript', 'Vue', 'Tailwind', 'SPARQL', 'Pinia', 'Vite'],
    demoUrl: 'https://jkuzz.github.io/sparql-explorer',
    githubUrl: 'https://github.com/Jkuzz/sparql-explorer',
  },
  {
    title: 'TSReporter',
    text: 'This app was developed for the SCS Software QA team to streamline the bug reporting process. Uses Selenium to automatically pre-fill bug report forms from file metadata. It also includes features like GIF generation from in-game bug screenshots and automatic batch reporting. TSReporter reduced the reporting time per bug from around 2 minutes to under 30 seconds.',
    img: 'TSReporter.webp',
    alt: 'TSReporter screenshot',
    tools: ['Python', 'Tkinter', 'Selenium'],
  },
  {
    title: 'Portfolio',
    text: "I designed and developed this small static site to showcase myself and my projects. I used this opportunity to get familiar with Svelte and improve my responsive design skills. You're looking at it right now!",
    img: 'portfolio.webp',
    alt: 'Portfolio screenshot',
    tools: ['TypeScript', 'Astro', 'Svelte', 'Tailwind', 'Vite'],
    githubUrl: 'https://github.com/Jkuzz/personal-website',
  },
  {
    title: 'Car leasing catalogue',
    text: 'Created a full stack application for a car leasing site. Includes a PHP + MySQL backend connected via REST API. The site provides filtering functionality and responsive design. I only worked on the car list and display functionality.',
    img: 'auta.webp',
    alt: 'Car catalogue screenshot',
    tools: ['JavaScript', 'PHP', 'Bootstrap', 'MySQL'],
    demoUrl: 'https://baleasing.cz/auta/',
  },
  {
    title: 'Tower Tower-Defence Defence',
    text: "Our recursive tower defence game created for Ludum Dare in 48 hours by 5 developers. Each tower in this game has a whole other tower defence game inside of it! Clear those inner levels to upgrade the tower. We ranked 13th in inovation out of the event's 3866 entries.",
    img: 'TTDD.webp',
    alt: 'Tower Tower-Defence Defence screenshot',
    tools: ['TypeScript', 'PhaserJS'],
    demoUrl: 'https://ldjam.com/events/ludum-dare/48/tower-tower-defence-defence',
    githubUrl: 'https://github.com/allemansratten/LD48/',
  },
  // {
  //   title: 'Significant Other(S)',
  //   text: "A funky partner-management game in which you're trying to not let them meet. Developed for Ludum Dare in 48 hours. As an extra challenge, the time included learning Godot and GDScript from scratch.",
  //   img: 'SOS.webp',
  //   alt: 'Significant Other(S) screenshot',
  //   tools: ['Godot', 'GDScript'],
  //   demoUrl: 'https://ldjam.com/events/ludum-dare/50/significant-others',
  //   githubUrl: 'https://github.com/allemansratten/sos/',
  // },
  {
    title: 'Point of Sale app',
    text: 'This is a fully modular Point of Sale application in Java. It provides features necessary for a restaurant to keep track of tables, tabs, products and inventory. This app was created as a project for my university Java course. As such, it was not thoroughly tested so bugs/crashes may be present :).',
    img: 'point-of-sale.webp',
    alt: 'Point of Sale App',
    tools: ['Java', 'Swing', 'MySQL', 'Maven'],
    githubUrl: 'https://github.com/Jkuzz/java-point-of-sale',
  },
  // {
  //   title: 'Landmass Generation',
  //   text: 'Example text about the project. Here I will say how it was created and what purpose it serves. I will also list which technologies were used in making it. ',
  //   img: 'Impromptu.webp',
  //   tools: ['C#', 'Unity'],
  // },
]

export const coursework = [
  {
    title: 'Point of Sale App',
    text: 'Example text about the project. Here I will say how it was created and what purpose it serves. I will also list which technologies were used in making it. ',
    img: 'Vue_Logo.svg',
  },
  {
    title: 'GraphQL server',
    text: 'Example text about the project. Here I will say how it was created and what purpose it serves. I will also list which technologies were used in making it. ',
    img: 'Vue_Logo.svg',
  },
]
