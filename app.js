'use strict';


const Readline = require('readline');
const rl = Readline.createInterface({
    input : process.stdin,
    output : process.stdout,
    terminal : false
});
const matcher = require('./matcher');

rl.setPrompt('> ');
rl.prompt();

rl.on('line', reply=>{
	matcher(reply, data =>{
       switch(data.intent){
          case 'Hello':
            console.log(`chao anh ${data.entities.greeting}.Rat vui lam quen voi anh`);
            rl.prompt();
            break;
          case 'Exit':
            console.log("Bye bye !!!");
            process.exit(0);
            break;
          default : {
          	console.log("T k hieu");
          	rl.prompt();
          }  
       }
	});
});
