import { type props } from '#/components/ProjectCard'
import i from './reactflow.png'
import j from './rimjhim.png'
import k from './campuskart.png'
import l from './blukoin.png'
const link = "https://images.pexels.com/photos/32324508/pexels-photo-32324508.jpeg"

export const data:Array<props> = [
    {
    Title: "CampusKart",
    Desc : "Platform for college students to exchange their essentials",
    Image : k,
    live : true,
    link : 'http://campuskartapp.netlify.app/',
    git : 'https://github.com/vikashprgm/',
    stack : ["Tanstack Start" ,"React", "ShadCN"]
  },
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
    Image : j,
    live : true,
    link : 'https://github.com/vikashprgm/rimjhim/releases/',
    git : 'https://github.com/vikashprgm/rimjhim',
    stack : ["Rust", "Ollama", "Tauri","LanceDB"]
  },
    {
    Title: "Blu-Koin",
    Desc : "Block chain based carbon registry system for farmers",
    Image : l,
    live : true,
    link : 'https://blu-koin.vercel.app/',
    git : 'https://github.com/vikashprgm/',
    stack : ["React" ,"Tailwind", "Javascript"]
  }
]