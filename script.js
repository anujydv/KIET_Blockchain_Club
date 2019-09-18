//variable introduction and concatination
/*
var firstName='divakar';
var lastName='verma';
console.log(firstName);
console.log(lastName);
console.log('your first name is:'+firstName+ ' and last name is:' +lastName);
*/
//variable manuplition 
/*
var firstName,lastName,age;
firstName='divakar';
lastName='verma';
age=21;
console.log(firstName+lastName+age);
age='twenty one ';
console.log(firstName+lastName+age);
*/
//mathmatical operator
/*
var year=2019;
age=21;
var yearJohn=year-age;
console.log(yearJohn);
var num1,num2;
num1=12;
num2=32;
console.log(num1+num2);
//logical operator
var name='john';
var age=21;
var ageJohn=age>32;
console.log(ageJohn);
// typeof operator

// user input
var firstName=prompt('enter your first name');
var lastName=prompt('enter your last name');
alert('Hellow'+firstName+lastName);
*/
// coding chalange 1
/*
var johnMass=56;
var johnHeight=1.5;
var markMass=67;
var markHeight=2;
var john_BMI,mark_BMI;
john_BMI=johnMass/(johnHeight*johnHeight);
mark_BMI=markMass/(markHeight*markHeight);
var johnBMI=john_BMI>mark_BMI;
console.log('john BMI is greater then mark '+johnBMI);
*/
//if else statement
/*
var name='john';
var age=2;
if(age>19){
    console.log(name+" is young");
}
else{
    console.log(name+'not young');
}
//second mathod
var johnAge=age<16;
if(johnAge){
   console.log(name+'not young'); 
}
else{
    console.log(name+' young')
}
*/
//nested if else
/*
var name='john';
var age=22;
if(age<13){
    console.log(name+' is chiled');
}
else if(age>=13 && age<21){
    console.log(name+' is teenion');
}
else if(age>=21 && age<30){
    console.log(name+' is young');
}
else{
    console.log(name+' is man')
}
*/
// typeof operator
/*
var nam='divakar';
console.log(typeof nam);
var a= 12;
console.log(typeof a);
//ternary operator
var name='john';
var age=2;
age>=21? console.log(name+' is young'):console.log(name+' is not young');
*/
//var age=2;
//var drink=age>=21? 'bear':'jusce';
//console.log(drink);
//switch statement
/*
var name='divakar';
var job='doctor';
switch(job){
        case'teacher':
        console.log(name+' teaches kids code');
        break;
        case'engineer':
        console.log(name+' design software');
        break;
        case'doctor':
        console.log(name+' see patent');
        break;
    default:
        console.log(name+' do somthing');
        break;
}

var age =21;
switch(true){
    case age<13:
        console.log(name+' is a child');
        break;
    case age>=13 && age<21:
        console.log(name+' is teenager');
        break;
    case age>=21 && age<40:
        console.log(name+' is young boy');
        break;
    default:
        console.log(name+' is man');
        break;
}
*/
//falsy undefined, '',NaN etc
/*
var height=0;
if(height){
    console.log('defined');
}
else{
    console.log('undefined');
}

var age =21;
if(age=='21'){
    console.log('your age is '+age);
}
else{
    console.log('tour age is not '+age);
}
var age =21;
if(age==='21'){
    console.log('your age is '+age);
}
else{
    console.log('tour age is not '+age);
}
*/
//**************
// coding chalange 2
/*
var johnScore1,johnScore2,johnScore3;
johnScore1=89;
johnScore2=130;
johnScore3=103;
var johnAvg=(johnScore1+johnScore2+johnScore3)/3;
var mikeScore1,mikeScore2,mikeScore3;
mikeScore1=116;
mikeScore2=99;
mikeScore3=123;
var mikeAvg=(mikeScore1+mikeScore2+mikeScore3)/3;
switch(true){
    case johnAvg>mikeAvg:
        console.log("john win the game and it's score is "+johnAvg);
        break;
    case mikeAvg>johnAvg:
        console.log("mike win the game and it's score is "+mikeAvg);
        break;
    default:
        console.log('draw the match');
}

var johnScore=(97+87+130)/3;
var mikeScore=(216+99+123)/3;
var marryScore=(197+134+185)/3;
console.log(johnScore,mikeScore,marryScore);
switch(true){
    case johnScore>mikeScore && johnScore>marryScore:
        console.log('john win the match and its score '+johnScore+'points');
        break;
    case mikeScore>johnScore && mikeScore>marryScore:
    console.log('mike win the match and its score '+mikeScore+'points');  
        break;
        case marryScore>johnScore&&
        marryScore>mikeScore:
        console.log('marry win the match and its score '+marryScore+'points');
        break;
    default:
        console.log('draw the match');
}
*/
//*************
//function
/*
function ageCalculate(year){
    return 2019-year;
}
console.log(ageCalculate(1998));
console.log(ageCalculate(1988));
console.log(ageCalculate(1978));
console.log(ageCalculate(1968));

// function inside function

function isretired(year,name){
    var age=ageCalculate(year);
    var retiredment=65-age;
    if(retiredment>0){
        console.log(name+' is retired after '+retiredment);
    }
    else{
        console.log(name+' already retired');
    }
    
}
isretired(1998,'divakar');
isretired(1989,'john');
isretired(1967,'make');
isretired(1950,'janae');
//**********
//function expresion
var whatYouDo=function(job,name){
    switch(job){
    case 'teacher':
        return name+' teaches kids code';
        case 'engineer':
            return name+' design software';
        case 'doctor':
            return name+' see patent';
            case'desinor':
            return name+' design best website';
    default:
        return name+' does something else';
}
}

console.log(whatYouDo('teacher','divakar'));
console.log(whatYouDo('doctor','john'));
console.log(whatYouDo('engineer','divakar'));
console.log(whatYouDo('developer','divakar'));
console.log(whatYouDo('desinor','divakar'));
*/
//******************
// arrey
/*
var name=['divakar','dhurv','prerna'];
var year=new Array(1998,1999,2000,'divakar');
console.log(name);
console.log(year);
// array operation
year.push('divya','verma');
year.unshift('Mr.')
console.log(year);
//pop operation
year.pop();
console.log(year);
year.shift();
console.log(year);
//indexOf
console.log(year.indexOf('divya'));

var name=new Array('divakar',1998,'verma','divya');
var test=name.indexOf('prerna')>=0? 'present':'not present';
console.log(test);
*/
//***********
//coding chalange 3
/*
function calculateBill(bill){
    switch(true){
        case bill<50:
            return  b1=.2*bill;
        case bill>=50&&bill<200:
            return  b2=.15*bill;
        case bill>=200:
            return  b3=.1*bill;
        default:
            return 'none';
    }
}
function totalAmount(bill){
  var payBill=calculateBill(bill);
    var pay=[payBill];
    console.log('John give the tips '+pay);
}

totalAmount(67);
totalAmount(45);
totalAmount(256);
*/
//******
/*
function calculateTip(bill){
    var percantage;
    switch(true){
        case bill<50:
            percantage=.2;
            break;
        case bill>=50&&bill<200:
            percantage=.15;
            break;
        case bill>=200:
             percantage=.1;
            break;
        default:
            percantage=-1;
            
            
            
    }
    return percantage*100;
}
var bills=[67,456,45];
var tip=[calculateTip(bills[0]),calculateTip(bills[1]),calculateTip(bills[2])];
console.log('Tip '+tip);
var finalAmount=[bills[0]+tip[0],bills[1]+tip[1],bills[2]+tip[2]];
console.log('final Amount '+finalAmount);
*/
/***********/
// object
/*
var john={
    firstName:'john',
    lastName:'smith',
    birthYear:1998,
    age:21,
    family:['mike','marry','jany'],
    music:['s1','s2','s3'],
   
};
console.log(john);
console.log(john.firstName);
console.log(john['firstName']);
//***********
var john=new Object()
john.firstname='john';
john.lastname='smith';
john.age=21;
console.log(john);

 //********
var john={
    firstName:'john',
    lastName:'smith',
    birthYear:1998,
    
    family:['mike','marry','jany'],
    music:['s1','s2','s3'],
    calculateAge:function(birthYear){
        return 2019-birthYear;
    }
   
};
console.log(john.calculateAge(1998));
          
 var john={
    firstName:'john',
    lastName:'smith',
    birthYear:1998,
    
    family:['mike','marry','jany'],
    music:['s1','s2','s3'],
     calculateAge:function(){
         return 2019-this.birthYear;
     }
 };

console.log(john.calculateAge());


var john={
    firstName:'john',
    lastName:'smith',
    birthYear:1998,
    
    family:['mike','marry','jany'],
    music:['s1','s2','s3'],
     calculateAge:function(){
         this.age=2019-this.birthYear;
     }
 };

john.calculateAge();
console.log(john);
********** coading chalange 4*/
var john={
    firstName:'john',
    mass:67,
    height:1.7,
    caljohnBMI:function(){
    this.johnBMI=this.mass/(this.height*this.height);
}
};
var mark={
    frrstName:'mark',
    mass:185,
    height:2.6,
    calmarkBMI:function(){
        this.markBMI=this.mass/(this.height*this.height)
    }
};

john.caljohnBMI();
mark.calmarkBMI();
console.log(john);
console.log(mark);
switch(true){
    case john['johnBMI']>mark['markBMI']:
        console.log('John BMI is greater than mark and its value is '+john.johnBMI);
        break;
    case john['johnBMI']<mark['markBMI']:
       console.log('Mark BMI is greater than John and its value is '+mark.markBMI); 
        break;
    default:
        console.log('Both BMI is equal '+john['johnBMI']);
}











