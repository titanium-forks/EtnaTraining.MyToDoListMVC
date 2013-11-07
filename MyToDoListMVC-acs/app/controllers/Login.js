var acs = require('acs');

function userCreate() {
	acs.createUser($.username.value, $.password.value, function(e) {
		if (e.success) {
			Alloy.Collections.ToDo.reset([]);
			$.Login.close();
			//Alloy.Globals.tabgroup.open();
		} else {
			alert("Error during user creation: " + e.message);
		}
	});
}

function login() {
	acs.loginUser($.username.value, $.password.value, function(e) {
		if (e.success) {
			
			acs.getToDos(function (todolist) {
				//Ti.API.info(todolist);	
				Alloy.Collections.ToDo.reset(todolist);
				$.Login.close();
			});
			
		} else {
			alert("Error during login: " + e.message);
		}
	});
}

function cancelLogin() {
	Alloy.Collections.ToDo.fetch();
	$.Login.close();
}
