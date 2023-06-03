import React from "react";
import ReactDOM  from "react-dom";
import AppFunction from "./AppFunction";
import AppClass from "./AppClass";
ReactDOM.render(
<React.Fragment>
<h1>This is Class Component</h1>
<AppClass/>
<h1>This is Functional Component</h1>
<AppFunction/>
</React.Fragment>
,document.getElementById("root"))