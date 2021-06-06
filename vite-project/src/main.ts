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

// 6/6
// class DataCollection{
//   private _data=[];
//   // non sto tipizzando i metodi, per farlo dovremmo mettere ex item=number /string ma non sto veramente restringendo la scelta
//   add(item){
//     this._data.push(item);
//   }
//   getData(){
//     return this._data;
//   }
//   // Metodo arrow
//   // add=(item)=>this._data.push(item);
//   // getData=()->this._data;
// }
// // posso inizializzare il costruttore inserndo numeri nella riga sottostante e dichiarando il costruttore dentro la classe
// const container= new DataCollection()
// container.add(1)
// container.add(10)
// // Cosi mi ritorna un oggetto che contiene un array
// console.log(container)
// // cosi mi ritorna un array
// console.log(container.getData())


// specifichiamo i nostri generic
// interface Car {
//   model:string;
// }
// class DataCollection<T>{
//   private _data=[];
//    add=(item:T)=>this._data.push(item);
//    getData=():T[]=>this._data;
// }
// // la T passo il tipo di dato, ex con numbero ho un errore sulla riga 139 e ho i consigli sulle funzione da utilizzare sull elemento
// const container= new DataCollection<number>()
// container.add(1);
// container.add(10);
// container.add('hello');
// console.log(container.getData()[0])
// // l interfaccia è un oggetto che presenta delle chiavi e dichiariamo il tipo di dato a cui deve esse affiancato
// const concessionario= new DataCollection<Car>()
// concessionario.add({model:'Fiat'});
// console.log(concessionario.getData())


// class Utility{
//   getValues<T>(array):T[]{
//    return Object.values(array) 
//   }
// }
// const util: Utility = new Utility();
// const number=util.getValues<number>({x:15,y:15});
// // const obj={x:10,y:10}
// // console.log(Object.entries(obj))

// // usare il generic per tipizzare il profilo e usare tutte le intefacce
// interface Guest{
//   name:string;
//   data:{
//     city:string;
//     gender:'M'|'F';
//   }
// }interface Admin{
//   name:string;
//   data:{
//     permission:string;
//     email:string;
//   }
// }
// type User<T> = {
//   id: number;
//   profile: T;
// }
// const guest: User<Guest>;
// guest.profile.data.city
// let Admin: User<Admin>;
// Admin.profile.data.permission

// classico metodo per prendere dati da un api
// fetch('https://api.tvmaze.com/search/shows?q=cats')
// .then(res=>res.json())
// // .then(res => console.log(res.json()))
// .then(res => console.log(res))
//
// type TVSeries ={
//   score:number;
//   show:any;
// }
// // generalizzo la chiamata con una funzione
// function load<T>(url:string):Promise<T>{
//   return fetch(url)
//   .then(res=>res.json())
// }
// load<TVSeries[]>('https://api.tvmaze.com/search/shows?q=cats')
// .then(res=>console.log(res))

// interface User {
//   id:number;
//   name:string;
// }
// load<Users[]>('https://jsonplaceholder.typicode.com/users')
// .then(res=>console.log(res[0].name))
//Utilizzo tramite una classe
class Fetcher{
  async load<T>(url:string):Promise<T>{
    const response= await fetch(url)
    return response.json()
  }
}
type TVSeries ={
  score:number;
  show:any;
}
const f= new Fetcher();
f.load<TVSeries[]>('https://api.tvmaze.com/search/shows?q=cats')
.then(res=>console.log(res))

