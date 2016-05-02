'use strict';

import Backbone from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import EntryCollection from './backbone/collection.js';
import Entry from './backbone/model.js';

//console.log(Backbone);



var collection = new EntryCollection();


collection.add(new Entry({title:'Yoo!'}));
collection.add(new Entry({title:'Nay!', checked: false}));
collection.add(new Entry({title:'May!'}));

ReactDOM.render(<App appname='Simple Folder View' collection={collection}/>, document.getElementById('app'));