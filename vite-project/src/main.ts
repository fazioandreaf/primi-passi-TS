import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
// type userData={
//   id:number;
//   name:string;
//   phone?:number;
// }
// interface UserAddes {
//   city:string;
//   street:string;
// }
// type User = userData & Useraddes;
// let user:User;
function dosomething(v:number|string)
{
  //queste si chiamano guardie
  if( typeof v==='number'){
    return console.log(v*v)
  }else return console.log(v.toLowerCase)
}
dosomething(100)