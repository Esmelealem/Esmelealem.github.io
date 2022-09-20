
/*Create an object called Teacher derived from the Person class, and implement a method called teach which receives 
a string called subject, and returns:[teacher's name]
 is now teaching [subject]Here is code for Person and an example of a Student function constructor.*/
var Person =function(){};
Person.prototype.initialize =function(name, age){
    this.name = name;this.age = age;
}
Person.prototype.describe =function(){
    returnthis.name +", "+this.age +" years old.";
}
var Student =function(){
};
Student.prototype =new Person();
Student.prototype.learn =function(subject){ 
       console.log(this.name +" just learned "+ subject);
    }
    var me =new Student();
    me.initialize("John",25);
    me.learn("Inheritance");

    let Teacher={
        __proto__:Person,
        teach(subject){
            return this.Person.teach.subject;

        }
    } 
// or
var Teacher2= function(){};
Teacher2.prototype=new Person();
Teacher2.prototype.teach=function(subject)
{
    return this.subject;
}