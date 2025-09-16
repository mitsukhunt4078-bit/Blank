class Animal {
  //special function that takes incoming parameters 
constructor (br= "human", name="Nobody", lang="silence"){
  //personal properties 
  this.breed= br
  this.name= name 
  this.language= lang
}
  
//personal function
  talk(){
  //print(this.language);
  }

  expressYourself () {
//String concotenation example
    print("Hello, I'm  " + this.breed + ", I say "+this.language)
}   
  }      

function setup() {
  //create Black Cat 
  let blackCat = new Animal ("cat", "Blacky", "mewwww-wwww-ww");
  //let them talk
 blackCat.talk();
 blackCat.expressYourself();
}