import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicenameService} from '../servicemodel/servicename.service';
@Component({
  selector: 'servicec',
  templateUrl: './servicec.component.html',
  styleUrls: ['./servicec.component.css']
})
export class ServicecComponent  {
  clobj:User=new User();
  userlist:Array<User>=[];
  errorEmail="";
  errorCellPhone="";
  errorFirstName="";
  errorlastName="";
  errorAddress1;
  errorAddress2;

  constructor(private ServicenameService:ServicenameService) {

    this.userlist = ServicenameService.arraylist();}

  
  addUser(){ 
    
    this.stringEmpty();
    this.emailValidation();
    this.Contactvalidation();
    this.servicePush();
    
    
   }
   
   stringEmpty()
   {
     try{
    
    if(this.clobj.firstName=="")
    {
      this.errorFirstName="First name Can't be empty ";
    }
    if(this.clobj.lastName=="")
    {
      this.errorlastName="First name Can't be empty ";
    }
    if(this.clobj. AddressLine1=="")
    {
      this.errorAddress1="Address Line1 Can't be empty ";
    }
    if(this.clobj. AddressLine2=="")
    {
      this.errorAddress2="Address Line2 Can't be empty ";
    }
   
    if(this.clobj.Email=="")
    {
      this.errorEmail="Email can't be empty";
    }
    if(this.clobj.Contact=="")
    {
      this.errorCellPhone="Contact number  Can't be empty ";
    }
    
   //ll
     }
     
  catch(error){
    console.log("error");
  }
   }
   emailValidation()
    {
      try{
      var pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
      if(this.clobj.Email.match(pattern))
      {
        return true;
      }
      else{
        this.errorEmail="Invalid Email address!!";
      }
    }
      catch(error){
  console.log("error");
      }
    }
    Contactvalidation()
   {  
     try{
    var phoneNumber=/[0-9\+\-\ ]/;
    if(this.clobj.Contact.match(phoneNumber)&&this.clobj.Contact.length==10)
    {
  return true;
    }
    else
    {
      this.errorCellPhone="Invalid Contact Number";
    }}
    catch(error){
      console.log("error");
    }
   }
   
   
  
   
   servicePush()
   {
     try{
  this. userlist.push(this.clobj);
  console.log(this.clobj);
   }
   catch(error)
   {
     console.log("error");
   }
  
}
}