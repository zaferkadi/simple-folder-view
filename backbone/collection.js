import {Backbone, Collection} from 'backbone';
import Entry from './model.js';

'use strict';

	// Todo Collection
	// ---------------

	// The collection of todos is backed by *localStorage* instead of a remote
	// server.
	class Entries extends Collection {

		constructor(options) {
			super(options);
			this.model = Entry;
			this.comparator= 'order';
		}

		checked() {
			return this.where({checked: true});
		}

		remaining() {
			return this.where({checked: false});
		}

		// We keep the Entrys in sequential order, despite being saved by unordered
		// GUID in the database. This generates the next order number for new items.
		nextOrder() {
			return this.length ? this.last().get('order') + 1 : 1;
		}

		
	};

export default  Entries;