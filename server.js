function xyz(name,id){
    this.name=name;
    this.id=id

}

xyz.prototype.clog=function(){
    return `My name is ${this.name}. My Id is ${this.id}. My University name is Iqra University`

}

var myobj=new xyz("Zeeshan",43798)

console.log(myobj.clog());




function abc(name,id){
    this.name=name;
    this.id=id

}

abc.prototype=Object.create(xyz.prototype)

var myobj1=new abc("Omar",91155)

console.log(myobj1.clog());




