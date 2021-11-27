function Person(firstName,lastName,officeAddress) {
    this.FirstName=firstName;
    this.LastName=lastName;
    this["Office Address"]=officeAddress;
}

var person1=new Person("Priyansh","Upadhyay","Bareilly");
console.log("FirstName: "+person1.FirstName);
console.log("LastName: "+person1.LastName);
console.log("OfficeAddress: "+person1["Office Address"]);
console.log("");

var person2=new Person("Himanshu","Tyagi","Delhi");
console.log("FirstName: "+person2.FirstName);
console.log("LastName: "+person2.LastName);
console.log("OfficeAddress: "+person2["Office Address"]);
console.log("");

var person3=new Person("Aviral","Verma","Mumbai");
console.log("FirstName: "+person3.FirstName);
console.log("LastName: "+person3.LastName);
console.log("OfficeAddress: "+person3["Office Address"]);
console.log("");