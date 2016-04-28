import Backbone from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import EntryCollection from './backbone/collection.js';
import Entry from './backbone/model.js';

//console.log(Backbone);



var collection = new EntryCollection();

collection.on("add", function(entry) {
	var size =collection.length;
	entry.set('id',size);
});

collection.add(new Entry({title:'Yoo!'}));
collection.add(new Entry({title:'Nay!', checked: false}));
collection.add(new Entry({title:'May!'}));

ReactDOM.render(<App collection={collection}/>, document.getElementById('app'));


