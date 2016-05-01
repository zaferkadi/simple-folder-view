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
		}

		comparator(itemA, itemB) {
			if (itemA.cid > itemB.cid) return -1;
			if (itemA.cid < itemB.cid) return 1;
			return 0;
		}
	};

export default  Entries;