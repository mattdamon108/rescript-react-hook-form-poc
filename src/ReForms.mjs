// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as ReactHookForm from "./bindings/ReactHookForm.mjs";

function ReForms$P(Props) {
  var children = Props.children;
  return React.createElement("p", {
              className: "mb-2"
            }, children);
}

var P = {
  make: ReForms$P
};

function pathToString(path) {
  switch (path) {
    case /* NameFirst */0 :
        return "name.first";
    case /* Category */1 :
        return "category";
    case /* AboutYou */2 :
        return "aboutYou";
    
  }
}

var FormTest = {
  pathToString: pathToString
};

function $$default(param) {
  var Form = ReactHookForm.Form(FormTest);
  var match = Curry._1(Form.use, {
        mode: "onSubmit"
      });
  var register = match.register;
  var onSubmit = function (data, _event) {
    console.log(data.name.first);
    
  };
  console.log(match.formState.errors);
  var firstName = register(/* NameFirst */0);
  var category = register(/* Category */1);
  var aboutYou = register(/* AboutYou */2);
  return React.createElement("div", undefined, React.createElement("form", {
                  onSubmit: match.handleSubmit(onSubmit)
                }, React.createElement("input", {
                      ref: firstName.ref,
                      name: firstName.name,
                      onBlur: firstName.onBlur,
                      onChange: firstName.onChange
                    }), React.createElement("input", {
                      ref: category.ref,
                      name: category.name,
                      onBlur: category.onBlur,
                      onChange: category.onChange
                    }), React.createElement("input", {
                      ref: aboutYou.ref,
                      name: aboutYou.name,
                      onBlur: aboutYou.onBlur,
                      onChange: aboutYou.onChange
                    }), React.createElement("input", {
                      type: "submit"
                    })));
}

export {
  P ,
  FormTest ,
  $$default ,
  $$default as default,
  
}
/* react Not a pure module */
