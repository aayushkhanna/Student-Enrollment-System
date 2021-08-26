/**
 * Aayush Khanna
 * Trainee Technology
 * 
 * This file is of JavaScript Functions
 * 
 */

//The enroll function works as a submit form 
function Enroll() {
    var elements = document.getElementById("form").elements;
    var obj ={};
    for(var i = 0 ; i < elements.length ; i++){
        var item = elements.item(i);
        if(item.type == "checkbox" || item.type == 'radio'){
            obj[item.name] = item.checked;
        }
        else
        obj[item.name] = item.value;
    }
    console.log(obj)

    //This function checks the validity of either of the checkboxes and either of the radio button must be selected
   if(validation(obj)) {
        var node = htmlToElements(`<div class="row" >
        <div class="col-xs-8 col-sm-8">
           <h5>${obj.name}</h5>
           <h5>${ obj.male ? 'Male'  : 'Female' }</h5>
           <h5>${obj.email}</h5>
           <a target="_blank" href="${obj.website}" >${obj.website}</a>
           <h5>${obj.java ? 'Java, ' : ''} ${obj.css ? 'Css, ' : ''} ${obj.html ? 'Html' : ''}</h5>
    
    
    
        </div>
        <div style="text-align:center" class="col-xs-4 col-sm-4">
           <image style="height:80px;margin:auto" src="${obj.image}" ></image>            
        </div>  
    </div>`)
        document.querySelector('.data').appendChild(node[0])
    }
 

    
}
//This function is used for reseting the form to its initial state
function Reset(){
    var elements = document.getElementById("form").elements;
    for(var i = 0 ; i < elements.length ; i++){
        var item = elements.item(i);
        if(item.type == "checkbox" ){
            item.checked = false
        }
        else
        item.value = ''
    }
}
//This function validates all the fields in the form
function validation(obj){
    
    //This is inital value assigned to flag
    var flag = 0

    //Checking name validation
    if(obj.name == "" || !/^[A-z ]+$/.test(obj.name)){
        document.querySelector('.error.name').classList.add('show');
        flag = 1;
    }else{
        document.querySelector('.error.name').classList.remove('show');
    }

    //Checking email validation
    if( obj.email == "" || !validateEmail(obj.email)){
        document.querySelector('.error.email').classList.add('show');
        flag = 1
    }else{
        document.querySelector('.error.email').classList.remove('show');
    }
    
    //checking website link validation
    if( obj.website == "" || !isURL(obj.website)){
        document.querySelector('.error.website').classList.add('show');
        flag = 1
    }else{
        document.querySelector('.error.website').classList.remove('show');
    }

    //checking if the image can be displayed i.e. the link is appropriate or not
    if( obj.image == "" || !isURL(obj.image)){
        document.querySelector('.error.image').classList.add('show');
        flag = 1
    }else{
        document.querySelector('.error.image').classList.remove('show');
    }

    //Checking whether any one of the skills have been selected or not
    if( !obj.java && !obj.css && !obj.html){
        document.querySelector('.error.skill').classList.add('show');
        flag = 1
    }else{
        document.querySelector('.error.skill').classList.remove('show');
    }

    //If the value of flags remain same means no error. It will update the right hand side division!!
    if(flag==0)
    return true;
    else return false;
}
function htmlToElements(html) {
    var template = document.createElement('template');
    template.innerHTML = html;
    return template.content.childNodes;
}

//Checking the email validaiton 
function validateEmail(email) {
    const symbols = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return symbols.test(String(email).toLowerCase());
}

//checking website validation
function websitevalidity(str) {
    var websymbols = new RegExp('^(https?:\\/\\/)?'+ 
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ 
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
    '(\\#[-a-z\\d_]*)?$','i'); 
    return websymbols.test(str);
  }