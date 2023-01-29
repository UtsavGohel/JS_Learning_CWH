// NN BB SS U -- premitive data types
// let a = null;
// let b = 12;
// let c = true;
// let d = BigInt(14);
// let e = "utsav";
// let f = Symbol('This is symbol');
// let g = undefined;

// console.log(a,b,c,d,e,f,g);

// const ob = {
//     "name" : "utsav12",
//     "contact" : "123456"
// }
// console.log(ob);
// console.log(ob['name']);
// console.log(ob.name);

// let name = "utsav"
// console.log(name+1414);
// console.log(typeof(name));

// const obj1 = {
//     name : "abcd"
// }

// obj1 = {
//     number : 1
// }

// const dict = {
//     w1 : "hello",
//     w2 : "hello1",
//     w3 : "hello2",
//     w4 : "hello3",
//     w5 : "hello4"
// }
// console.log(dict);
// const age = prompt("enter your age")
// if(age>=18){
//     alert("You can drive")
// }else{
//     alert("You cann't drive")
// }
// const age = 18;
// age >= 18 ? console.log("you can drive") : console.log("you can't");


// if(age>10 && age<20){
//     console.log("age btn 10 and 20");
// }else{
//     console.log("age not");
// }

// switch (age){
//     case 18:
//         console.log("age = 18");
//         break
//     default:
//         console.log("not >18");
//         break    
// }
// if(age%2==0 && age%3==0){
//     console.log("divisible by 2 and 3");
// }else{
//     console.log("Not divisible by 2 and 3");
// }
// if(age%2==0 || age%3==0){
//     console.log("divisible by 2 and 3");
// }else{
//     console.log("Not divisible by 2 and 3");
// }
// let age = 19;
// switch (age){
//     case age>=18:
//         console.log("age is 18");
//         break;
//     default:
//         console.log("not 18");  
//         break;  
// }
// let i = 0;
// do {
//     console.log(i);
//     i++
// }while(i<10)
// let a =10;
// let b =15;
// let c =20;

// const sum = function(arg1,arg2){
//     return (arg1+arg2)/2
// //    return Math.trunc((arg1+arg2)/2)
// }
// console.log(sum(a,b));
// console.log(sum(b,c));
// console.log(sum(a,c));

// const sums = (arg11,arg22)=>{
//     return arg11+arg22
// } 
// console.log(10+11);
// const hello = ()=>{
//     console.log("hello");
//     return "hi"
// }
// console.log(hello());
// let marks = {
//     utsav : 99,
//     cc : 100,
//     apollo : 100
// }
//acces objects with method-1
// for(let i=0;i<Object.keys(marks).length;i++){
//     console.log(`The mark of ${Object.keys(marks)[i]} is ${Object.values(marks)[i]}`);
// }

//best way to acces objects. method-2
// for(let key in marks){
//     console.log("the mark of "+key+ " is " + marks[key]);
// }

// const info = {
//     name:"Utsav",
//     contact:989898989,
//     email:"utsav@gmail.com",
//     isDriverLicense:true
// }
// for(let val in info){
//     console.log(`His ${val} is ${info[val]}`);
// }

// let cn=5;
// let i;
// while(i!=cn){
//     console.log("try again");
//     i = prompt("enter a number again")
// }
// console.log("entered Right number");

// const mean = (a,b,c,d)=>{
//     return (a+b+c+d)/2
// }
// console.log(mean(10,20,30,40));

// const name = "utsav GOHEL"
// console.log(name.length);
// console.log(name.toLowerCase());
// console.log(name.slice(2,4));
// console.log(name.slice(1));
// console.log(name.replace("utsav","hemangini"));
// console.log(name.concat(" is developer"));
// const namee = "      abcdef      "
// console.log(namee.trim())
// for(let i=0;i<name.length;i++){
//     console.log(name[i]);
// }

// const sentense = "the quick brown fox is there"
// const word = "fox"
// console.log(`the word ${word} ${sentense.includes(word)?'is':'is not'} in the sentence`);

// const sent = "The winner is utsav"
// const word = 'utsav'
// console.log(`the winner is ${sent.includes(word)? 'utsav': 'not utsav'}`);
// console.log(word.startsWith('u'),word.endsWith('a'));
// const money = "i have rs 1000"
// console.log(money.slice(10,14));
// money[4] = 'q' // we cannot change string as its immutable.
// console.log(money[4]);

// typeof "John"                 // Returns "string"
// typeof 3.14                   // Returns "number"
// typeof NaN                    // Returns "number"
// typeof false                  // Returns "boolean"
// typeof [1,2,3,4]              // Returns "object"
// typeof {name:'John', age:34}  // Returns "object"
// typeof new Date()             // Returns "object"
// typeof function () {}         // Returns "function"
// typeof myCar                  // Returns "undefined" *
// typeof null                   // Returns "object"

// let compare = (a,b)=>{
//     console.log(a,b);
//     console.log(a-b);
//     return a-b
// }
// const arr = [10,1,9,5,11,55]
// arr.sort(compare)
// console.log(arr);
// console.log(arr.reverse());

// const arr = [10,1,9,5,11,55]
// arr.splice(1,2,101,102);  //first arg where to add element second arg how may add element
// console.log(arr);

// const arr = [10,1,9,5,11,55]
// const num = arr.slice(2,4)
// console.log(num);

// const arr = [10,1,9,5,11,55]

// arr.forEach((element)=>{
//     console.log(element);
// })

// for(let i of arr){
//     console.log(i);
// }

// for(let i in arr){
//     console.log(arr[i]);
// }

// Example of map --- map create always new array
// const arr = [10,1,9,5,11,55]
// arr.map((val)=>{
//     // console.log(val);
//     return val;
// })
// console.log(arr);

//Example of filter 
// const arr = [10,1,9,5,11,55]
// const newArr = arr.filter((a)=>{   // Here we are filtering value who are < 10
//     return a<10;
// })
// console.log(newArr);

// const arr = [10,1,9,5,11,55]
// const val = arr.reduce((h1,h2)=>{
//     return h1+h2;
// })
// console.log(val);

// const arr = [10,20,30]
// let val;
// do{
//     val = prompt('enter value')
//     val = Number.parseInt(val)
//     arr.push(val)
//     console.log(arr);
    
// }while(val!=0);
// console.log(arr);

// const arr = [5,20,1,77,200]
// arr.filter((val)=>{
//     if(val%10 == 0 ){
//         let data = val
//         console.log(data);
//     }
// })

// let num = prompt("enter val")

// let ans = [10,20,30,40]
// // ans = num*num
// ans.map((val)=>{
//     // let val = prompt('enter val')
//     let mydata = val*val
//     console.log(mydata);
// })
// console.log(ans);
// console.log(typeof ans);

// let arr = [1,2,3,4]
// let n = arr.reduce((x1,x2)=>{
//     return x1*x2;
// })
// console.log(n);

// let NumGen = Math.trunc(Math.random()*5) 
// console.log(NumGen);
// let input,count;
// let i;

//         while(NumGen !=input){
//             input = prompt("enter val")
//                 if(input>NumGen){
//                     console.log("entered no is too high");
//                 }else if(input<NumGen){
//                     console.log("entered no is too low");
//                 }else if(input == NumGen){
//                     console.log("correct");
//                 }
//             }

// let data = prompt("enter val")
// data = Number(data);
// alert("you have entered value of "+ typeof data)

// let write = confirm("you want to write entered value to page")
// if(write == true){
//     document.write(data)
// }else{

// }


// let age = prompt("enter your age")
// age = Number(age)
// if(age>=18){
//     alert("You can drive")
// }else{
//     alert("You can not drive")
// }
// let runagain = true
// while(runagain == true){
//     let conf = confirm("you want to enter your age again ")
//     let age = prompt("enter your age")
//     if(age<0){
//         console.error("please enter correct value")
//         break;
//     }
//     if(age==4){
//         location.href = 'https://www.google.com/gmail/'
//     } 
//         if(age>=18){
            
//             alert("You can drive")
          
//         }else{
//             alert("You can not drive")
//         }  
//     runagain = conf
// }


// let color = prompt("enter your fav color")
// document.querySelector('body').style.backgroundColor = "red"

// let a = document.getElementById('id1').innerHTML
// a.innerHTML = a.innerHTML +'<h1>Hello World</h1>'

// setTimeout(()=>{
//     alert("after 3 sec")
//     let h = prompt("you want to run again say Y or N");
//     if(h == "N"){
//         clearTimeout()
//     }else{
//         setTimeout(() => {
//             alert("fine")
//         }, 1000);
//     }
// },3000)

// const sum = (a,b)=>{
//     console.log("Sum of A and B is",(a+b));
// }

// setTimeout(()=>{
//     sum(10,20)
// },2000)


// const sum = (a,b)=>{
//     console.log(a+b);
//     return a+b
// }
// setInterval(()=>{
//    console.log("sum is ",sum(10,20))
// }, 1000);
// clearInterval()

// let btn = document.getElementById('btn')

// btn.addEventListener('click',function(e){
//     alert("added event")
// })
// console.log(e);

//callbacks
// function loadSrc(src,callback){
//     var script = document.createElement("script");
//     script.src = src

//     //method -1 but in pc not working
//     // script.onload(function(){
//         //     console.log("script added"+src);
//         // })
            
//     //method -2 just checking that is our scr added or not?
//     script.addEventListener('load',function(){
//         console.log("script added "+src);
//         callback(null,src)
//     })
//     script.addEventListener('error',function(){
//         alert('error while loading the script')
//         callback(src)
//     })
//     document.body.appendChild(script)
// }

// function hello(error,src){
//     if(error){
//         alert("error in script "+error);
//     }else{
//         alert("hello function "+src );
//     }
// }

// loadSrc("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",hello)


// function loadSrc(src,callback){
// var script = document.createElement("script")
// script.src = src

// script.addEventListener('load',function(){
//     alert('src added '+src)
//     console.log("src added "+src);
//     callback(null,src)
// })
// script.addEventListener('error',function(){
//     alert('src contains error')
//     console.log("src contains error");
//     callback(new Error("src contains error"))
// })
// document.body.appendChild(script)
// }

// function isLoaded(error,src){
//     if(error){
//         alert("Error with script")
//     }else if(src){
//         alert("Src loaded")
//     }
// }

// loadSrc("https://www.google.com/gmail/",isLoaded)


// let promise1 = new Promise((resolve,reject)=>{
//     console.log("Promise is pending");  
//     setTimeout(()=>{
//         console.log("I am promise and I am rejected");
//         reject(new Error("I am error"))
//     },3000)
// }).catch((err)=>{
//     console.log(err);
// })


// let promise2 = new Promise((val,err)=>{
//     console.log("Promise is pending");  
//     setTimeout(()=>{
//         console.log("I am promise and I am resolved");
//         val(alert("promise resolved"))
//     },3000)
// }).then((val)=>{
//     console.log(val,"val");
// },(err)=>console.log(err,"err"))



// let p = new Promise((resolve,reject)=>{
//     console.log("pending promise");
//     setTimeout(() => {
//         console.log("I am promise and resolved");            
//         resolve(alert("I am resolved"))
//     }, 2000);
// })

// let p3 = new Promise((val,err)=>{
//     // console.log("inside p3");
//     setTimeout(()=>{
//         console.log("resolved after 2 sec");
//         val(12)
//     },2000)
// }).then((val)=>{
//     console.log("val",val);
//     let p4 = new Promise((val)=>{
//         setTimeout(()=>{
//             val("promise 2")
//         },2000)
//     })
//     return p4
// }).then((val)=>{
//     console.log("we are done");
//     return 3;
// }).then((val)=>{
//     console.log(val);
//     return val*2
// }).then((val)=>{
//     console.log("Last value is",val);
// })


const loadcript = ((src)=>{
    return new Promise((val,err)=>{
        let srcipt = document.createElement("script")
        srcipt.src = src;
        document.body.appendChild(srcipt)
        srcipt.addEventListener('load',()=>{
            console.log("added src ",src);
            val(3);
        })
        srcipt.addEventListener('error',()=>{
            console.log("not added src");
            err(0);
        })
    })
})


loadcript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js").
then((val)=>{
    console.log("value is ",val);
    return 16;
},(err)=>{
    console.log("error",err);
}).then((val)=>{
    console.log("new value is now ",val);
},(err)=>{
    console.log("error in new value ",err);
})





























