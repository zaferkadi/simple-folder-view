import {Backbone, Model} from 'backbone';

'use strict';


class Entry extends Model {
	defaults() {
		return {
			title: '',
			checked: false
	//		type: EntryType.file
		}
	}
}

export default Entry;