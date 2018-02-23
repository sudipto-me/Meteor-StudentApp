import { Template } from 'meteor/templating';
import {Students} from '../lib/collection.js';

import './main.html';
Template.body.helpers ({
  students(){
    return Students.find({});
  }
});

Template.add.events({
  'submit .add-form':function(){
    event.preventDefault();

    //Get input values
    const target = event.target;
    const name = target.name.value;
    const email = target.email.value;
    const telephone = target.telephone.value;
    const bday = target.bday.value;
    Meteor.call('students.insert',name,email,telephone,bday);
    $('.modal').modal('hide');
    return false;
  }
});

Template.student.events({
  'click .delete-note':function(){
    // Students.remove(this._id);
    Meteor.call('students.remove',this);
    return false;
  }
});
