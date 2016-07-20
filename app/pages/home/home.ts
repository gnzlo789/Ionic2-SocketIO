/// <reference path="../../../typings/index.d.ts" />
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navController: NavController) {
	console.log("constructor entra");
	var io = require('socket.io-client');
	var socket = io.connect("http://127.0.0.1:5000/test");

	console.log("var socket pasa");
	console.log(socket);

	socket.on('my event', (msg) => {
		console.log("Nuevo my event");
		console.log(msg);
	});
	socket.on('my response', (msg) => {
		console.log("Nuevo my response");
		console.log(msg);
	});
	socket.on('message', (msg) => {
		console.log("Nuevo message");
		console.log(msg);
	});
  }
}
