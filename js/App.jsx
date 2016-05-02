import React 	from 'react';
import Row 		from './components/Row.jsx';
import Actions 	from './components/Actions.jsx';
import Form 	from './components/Form.jsx';
import Dialog 	from './components/Dialog.jsx';
import Entry 	from './backbone/model.js';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
        this.state = {
			collection: this.props.collection,
			isEditable: false,
			checksCount: 0,
			showConfirmationDialog: false,
			isCreatePressed: false
		};
    }

    onToggleAll(e) {

		var collection = this.state.collection;

		collection.each((item)=> {
			item.state.selected = e.target.checked; //set('checked',true);
		});

		this.setState({ collection: collection });
	}

	onToggle(e, id) {
//			var checksCount = this.state.checksCount;
//			checksCount = e.target.checked ? checksCount + 1 : checksCount - 1;
//			this.setState({ checksCount: checksCount });		
		var collection = this.state.collection;

		collection.forEach((item)=> {
			if (item.cid == id) {
				item.state.selected = e.target.checked;
			}
		});

		this.setState({ 'collection': collection });
	}
	onHit(e) {
		alert('x');
	}
	onRename(e) {
		this.state.collection.map((item)=> {
			if (item.state.selected) {
				item.state.editMode = true;
			}
		});
		this.setState({ isEditable: true });
	}

	onCreate(e) {
		//e.target.disabled = true;
		this.setState({ isCreatePressed: true });
		this.setState({ showCreateForm: true });
	}

	onSave(e, obj) {
		// change to state condition
		if (obj.id != undefined) {
			//console.log(obj);
			var collection = this.state.collection;

			collection.forEach((item) =>{
				if (item.cid == obj.id) {
					item.set('title', obj.title);
					item.state.selected = false;
					item.state.editMode = false;
				}
			});

			this.setState({ 'collection': collection });
		} else {
			console.log(obj);
			var collection = this.state.collection;
			collection.add(new Entry(obj));

			this.setState({ 'collection': collection, showCreateForm: false, isCreatePressed: false });
		}
	}

	onDelete(e) {
		this.setState({ showConfirmationDialog: true });
	}
	handleClose(e, obj) {
		//console.log(obj);
		if (obj) {
			console.log(obj);
			var collection = this.state.collection;

			collection.forEach((item)=> {
				if (item.cid == obj.id) {
					item.state.selected = false;
					item.state.editMode = false;
				}
			});

			this.setState({ 'collection': collection });
		} else {
			this.setState({ 'showCreateForm': false, isCreatePressed: false });
		}
	}
	handleDelete(e) {
		var collection = this.state.collection;
		var selectedToBeDeleted = collection.filter((item)=> {
			return item.state.selected;
		});
		collection.remove(selectedToBeDeleted);

		this.setState({ collection: collection, showConfirmationDialog: false });
	}
	closeModal(e) {
		this.setState({ showConfirmationDialog: false });
	}

    render() {
    	var isAnyChecked = this.state.collection.filter( (item) =>{
			return item.state.selected;
		}).length > 0;

		var isAllChecked = this.state.collection.filter( (item)=> {
			return item.state.selected;
		}).length == this.state.collection.length && this.state.collection.length > 0;

		var items = this.state.collection.map((item)=> {
			return item.state.selected && item.state.editMode && this.state.isEditable ? 
			<Form
				key={item.cid}
				id={item.cid}
				title={item.get('title')}
				isChecked={item.state.selected}
				onSave={(e,obj)=>this.onSave(e, obj)}
				FormType= 'Update'
				handleClose={(e, obj)=>this.handleClose(e, obj)}
				isVisible={true}	
			/>
			:
			<Row
				onToggle={(e)=>this.onToggle(e, item.cid)}
				key={item.cid} 
				isChecked={item.state.selected}								
				title={item.get('title')}
				id={item.cid}
			></Row>
		});
        return <div>
        <h1>{this.props.appname}</h1>
        <ul>
        <Actions isRenameDisabled= {isAllChecked || isAnyChecked ? '' : 'disabled'}
							isCreateDisabled= {!this.state.isCreatePressed ? '' : 'disabled'}
							isChecked= {isAllChecked}
							onToggle={e=>this.onToggleAll(e)}
							onRename={e=>this.onRename(e)}
							onCreate={e=>this.onCreate(e)}
							onDelete={e=>this.onDelete(e)}/>
        
        	<Form isVisible={this.state.showCreateForm}
				FormType='New' 
				onSave={(e,obj)=>this.onSave(e, obj)}
				handleClose={e=>this.handleClose(e)} />
			
		{items}

        </ul>
        <Dialog isVisible={this.state.showConfirmationDialog}  onYes={e=>this.handleDelete(e)} onNo={e=>this.closeModal(e)}/>
        </div>;
    }
}

export default App;
