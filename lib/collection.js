import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
export const Students = new Mongo.Collection('students');

Meteor.methods({
  'students.insert'(name,email,telephone,bday){
    
    Students.insert({
      name,
      email,
      telephone,
      bday
    });
  },
  'students.remove'(student){
    check(student._id,String);
    Students.remove(student._id);
  }
});
