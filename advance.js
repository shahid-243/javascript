     // # 1 apr 2024
    /* 
    * non writable
    * non enumrable
    * object.defineproperties
    * object.getownproperties
    * sealing an object
    * object.preventExtension 
    * object.seal(obj)
    * object.frozen(obj)
    * oject.isExtension(obj)
    * object.isseal(obj)
    * object.isfrozen(obj)
    */


    let obj = {
        firstName :  "Shahid",
        lastName :  "alam",
        fullname : " shahid alam"
    
    }
    //  console.log(obj);
     let descriptors = Object.getOwnPropertyDescriptors(obj) ;       // get all property descriptor
     let descriptor = Object.getOwnPropertyDescriptor(obj,"fullname");   // get specific
     console.log(descriptors);
     console.log(descriptor);
    
    
    // writable
    let obj_1 = {
        firstName :  "Shahid",
        lastName :  "alam",
        age : 23
    
    }
      Object.defineProperty(obj_1 , 'firstName',{writable:false})           // make first name not writable
      obj_1.firstName ="ankit";      // it will give
       console.log(obj_1);     
       // key delete
       delete obj_1.lastName;                               // remove the last name from object
       console.log(obj_1);
    
    // configurable
    
       let obj_ = {
        firstName :  "Shahid",
        lastName :  "alam",
        age : 23
    
    }
    Object.defineProperty(obj_2, 'firstName',{configurable:false}) 
    delete obj_1.lastName;                               // remove the last name from object
    console.log(obj_2);
    
    // enumarable
    let obj_3= {
        firstName :  "Shahid",
        lastName :  "alam",
        age : 23
    
    }
    Object.defineProperty(obj_3, 'firstName',{enumerable:false}) 
    delete obj_1.lastName;                               // does not access the for in value  of first name because enumerable is false
    console.log(obj_3);
    


    // getter 

    let obj_4= {
        firstName :  "Shahid",
        lastName :  "alam",
        age : 23,

        getfirstNaame : function(){
            return this.firstName
        },
        get getfirstNaame(){
            this.firstName
        }
    }
    // .
    console.log(obj_4.firstName);
    // []
    console.log(obj_4['firstName']);
    // method
    console.log(obj_4.getfirstNaame());
    // getter
    console.log(obj_4.getfirstNaame);

    let object= {
        firstName :  "Shahid",
        lastName :  "alam",
        age : 23,

        setfirstNaame : function(value){
             this.firstName = value
        },
        set setfirstNaame(value){
            this.firstName = value
        }
    }

     // .
     object.firstName = "ankit"
     // []
    object['firstName'] = " sarwar"
     // method
     object.getfirstNaame() = " aman"
     // getter
     object.getfirstNaame(value) =" rahul"