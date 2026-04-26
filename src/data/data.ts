import { type props } from '#/components/ProjectCard'
import i from './reactflow.png'
const link = "https://images.pexels.com/photos/32324508/pexels-photo-32324508.jpeg"

export const data:Array<props> = [
  {
    Title: "Codeboard",
    Desc : "Visualize your code in a 2-D flowchart",
    Image : i,
    live : true,
    link : 'https://floweditor3.netlify.app/',
    git : 'https://github.com/vikashprgm/CodeBoard',
    stack : ["Tanstack Start","Typescript", "Reactflow"]
  },
  {
    Title: "RimJhim",
    Desc : "A local first, minimalist, AI-powered note taking app",
    Image : link,
    live : true,
    link : 'https://github.com/vikashprgm/rimjhim/releases/',
    git : 'https://github.com/vikashprgm/rimjhim',
    stack : ["Rust", "Ollama", "Tauri","LanceDB"]
  },
    {
    Title: "MetaBlogger",
    Desc : "Blogging Site with Media Support",
    Image : link,
    live : true,
    link : 'https://google.com/',
    git : 'https://github.com/vikashprgm/',
    stack : ["MongoDB" ,"React" , "Tailwind", "Typescript"]
  },
  {
    Title: "CampusKart",
    Desc : "C2C platform for Campus Students",
    Image : link,
    live : true,
    link : 'https://google.com/',
    git : 'https://github.com/vikashprgm/',
    stack : ["PostGres" ,"React" , "Tailwind", "Typescript"]
  },
  {
    Title: "PayTM",
    Desc : "Minimalist CRUD app with transactions and Friends utility",
    Image : link,
    live : true,
    link : 'https://google.com/',
    git : 'https://github.com/vikashprgm/Paytm',
    stack : ["React" ,"MongoDB", "Tailwind"]
  },
    {
    Title: "Aggrow",
    Desc : "AI based recommendation system for Farmers",
    Image : link,
    live : true,
    link : 'https://google.com/',
    git : 'https://github.com/vikashprgm/',
    stack : ["Python" ,"HuggingFace"]
  },
  {
    Title: "Project",
    Desc : "Description",
    Image : link,
    live : true,
    link : 'https://google.com/',
    git : 'https://github.com/vikashprgm/',
    stack : ["Stack" ,"Goes", "Here"]
  },
]
