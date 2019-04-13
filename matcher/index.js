'use strict';


const patterns = require('../patterns');
const XRegExp = require('xregexp');

// cái này để lấy str tìm đuowjc để phàn hồi
let createEntities = (str, pattern) => {
  //console.log("hello meo");
  return XRegExp.exec(str,XRegExp(pattern,"i"));
}

// cái này để tìm chuỗi, dùng callback function khi tim chu trong string
let matchPattern =(str, c) =>{
    let getResult = patterns.find(it =>{
       if(XRegExp.test(str,XRegExp(it.pattern,"i"))){
          return true;
       }
    });
    if(getResult){
        //console.log("hello cho");
        return c({
            intent: getResult.intent,
            entities : createEntities(str, getResult.pattern)

        });
    }else{
      console.log("nam oi nam")
    	return c({

      });
    }


}

module.exports = matchPattern;