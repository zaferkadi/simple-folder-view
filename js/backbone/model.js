import {Backbone, Model} from 'backbone';

'use strict';


class Entry extends Model {
	defaults() {
		return {
			title: ''
	//		type: EntryType.file
		}
	}
	constructor(props){
		super(props);
		this.state = {
			selected: false,
			editMode: false
		};
	}
}

export default Entry;