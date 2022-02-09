// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as ReactHookForm from "react-hook-form";

function modifyRecord(origin, name, value){
    return { ...origin, [name]: value }
  }
;

var $$Error = {};

var Register = {};

function Form(FieldValues) {
  var use = function (config) {
    var r = ReactHookForm.useForm(Caml_option.some(config), undefined);
    var register = function (path) {
      return r.register(Curry._1(FieldValues.pathToString, path));
    };
    return modifyRecord(r, "register", register);
  };
  return {
          use: use
        };
}

var WatchValues = {};

export {
  $$Error ,
  Register ,
  Form ,
  WatchValues ,
  
}
/*  Not a pure module */
