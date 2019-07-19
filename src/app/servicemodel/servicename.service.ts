import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicenameService {
  userlist = [{ firstName: 'Anil', lastName: 'Arun',AddressLine1: 'J',AddressLine2: 'P',Contact: '3354353454', Email: 'anilgmail.com' },

  { firstName: 'minu', lastName: 'jose', AddressLine1: 'J',AddressLine2: 'P',Contact: '6677898979', Email: 'anil@gmail.com' },

  { firstName: 'meera', lastName: 'Arun',AddressLine1: 'J',AddressLine2: 'P', Contact: '324353454', Email: 'jose@gmail.com' },

 { firstName: 'neethu', lastName: 'Arun', AddressLine1: 'J',AddressLine2: 'P',Contact: '568787989', Email: 'anil@gmail.com' },

  { firstName: 'ajay', lastName: 'mithun', AddressLine1: 'J',AddressLine2: 'P',Contact: '3354387879', Email: 'jose@gmail.com' }

  ];
  constructor() { }
  arraylist(){
    return this.userlist;
  }
}
