var text="cryptography";
console.log(text);
//concept of var:there can be redaclare and reassign
var a=3;
console.log("a",a);
var a=5;
console.log("a",a);
//concept of let:there can be reassign but can not be redeclare
let b=3;
console.log("b",b);
b=5;
console.log("b",b);
//const:there can not be redeclare and reassign
const c=5;
console.log("c",c);
let x=5;
console.log("x:",x);
if(true)
{
    let x=6;
    console.log("x:",x);
}
console.log("x:",x);
var y=5;
console.log("y:",y);
if(true)
{
    var y=6;
    console.log("y:",y);
}
console.log("y:",y);
var name="gamalgorithm";
console.log(name);
var age=21;
console.log( typeof age);
var work=true;
console.log(work);
var abc=null;
console.log(abc);
var abc1=BigInt(123456789101112131415161718);
console.log(abc1);
var n=Symbol('gamalgorithm');
var m=Symbol('gamalgorithm');
console.log(m==n);
var num=[1,2,3,4];
console.log(num);
var info={
    name:"gamal",
    age:22,
    post:"abc",
};
console.log(info);
var q=12;
var r=3;
var s='3';
console.log(q+r);
console.log(q*r);
console.log(q-r);
console.log(q/r);
console.log(q**r);
console.log(r++);
console.log(r);
console.log(r--);
console.log(r);
console.log(q%r);
console.log(q+=r);
console.log(q*=r);
console.log(q==r);
console.log(r);
console.log(r==s);
console.log(r===s);
console.log(q>r);
console.log(q<=r);
aa=true;
bb=false;
console.log(aa&&bb);
console.log(aa||bb);
console.log((5>3)?"true":"false");
if(5>3)
{
    console.log("true");
}
else{
    console.log('false');
}
var div=prompt("Enter mark");
if(div<40)
{
    console.log("Result:Fail");
}
else if(div>=40 && div<=59)
{
    console.log("Result:Pass division");
}
else if(div>=60 && div<=79)
{
    console.log("Result:First division");
}
else if(div>=80 && div<=100)
{
    console.log("Result:Distinction");
}
else{
    document.write("Invalid input");
}
for(var a=0;a<10;a++)
{
    console.log("for loop:",a);
}
var count=0;
while(count<10)
{
    console.log("while loop:",count);
}
