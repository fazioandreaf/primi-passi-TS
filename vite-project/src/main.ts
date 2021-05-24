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



// // typeof é solo con dei elementi non primitii
// function dosomething(v:number|string)
// {
//   //queste si chiamano guardie
//   if( typeof v==='number'){
//     return console.log(v*v)
//   }else return console.log(v.toLowerCase)
// }
// dosomething(1000)

// class admin{
//   id:number;
//   permission:string;
// }
// class guest{
//   id:number;
//   city:string;
//   emil:string;
// }
// function ds(v:guest|admin){
//   if(v instanceof guest){
//     v.email
//   }else{

//     v.permission
//   }
// }
// ds(new admin())



// uso kind per aver una proprieta comune ad entrambi e eseguire un if
// class rectangle{
//   kind:'rectangle';
//   id:number;
//   x:number;
// }
// class circle{
//   kind:'circle';
//   r:number;
// }
// function ds1(shape:rectangle|circle){
//   if(shape.kind==="rectangle"){
//     shape.
//   }else{

//   }
// }
// const c:circle={r:30};
// ds1(c)



// in operator per descriminare attraverso una proprietà che non è presente in quella classe
// class admin{
//   id:number;
//   permission:string;
// }
// class guest{
//   id:number;
//   city:string;
//   email:string;
// }


// //in questo modo gia li differenzio con un booleano
// function isAdmin(v:guest|admin):v is admin{
//   return(v as admin).permission!==undefined;
  
//   // return true;
// }
// function ds2(v:guest|admin){
// if(isAdmin(v)){
//   console.log('admin',v.permission)
// }else{
//    console.log('guest',v.email)
// }}
// // in questo modo vaado da guest
//   ds2({id:1,city:'',email:'ilfazio@gmail.com'})
//   // in questo vado da admin
//   ds2({id:1,permission:'autorizzato'})
