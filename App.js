import React 	from 'react';
import Row 		from './components/Row.js';
import Actions 	from './components/Actions.js';
import Form 	from './components/Form.js';
import Entry 	from './backbone/model.js';

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.displayName = 'App';
        
        this.state = {
        	collection 		: this.props.collection,
        	isEditable 		: false
        	//isAnyChecked	: false
        };
    }


	onToggleAll(e){
		
		var collection =this.state.collection;
		
		collection.each( item => {
			item.set('checked',e.target.checked);//set('checked',true);
		});

		this.setState({collection:collection});
		
		
	}
	onToggle(e, id) {		
		var collection = this.state.collection;		
		
		collection.forEach((item)=> {
			if( item.get('id') == id) {
				item.set('checked', e.target.checked);
			}
		});

		this.setState({'collection':collection});
	}
	onRename(e) {
		this.setState({isEditable: true});		
	}
	onCreate(e) {
		e.target.disabled = true;
		this.setState({'showCreateForm': true});
	}
	
	onSave(e, obj){
		// change to state condition
		if(obj.id != undefined) {
			console.log(obj);
			var collection = this.state.collection;		
		
			collection.forEach((item)=> {
				if( item.get('id') == obj.id) {
					item.set('title', obj.title);
					item.set('checked', false);
				}
			});

			this.setState({'collection':collection});
		}else {
			console.log(obj);
			var collection =this.state.collection;
			collection.add(new Entry(obj));
			this.setState({'collection':collection});
		}
		//console.log("ID "+ id);
	}

    render() {

    	var isAnyChecked = this.state.collection.filter((item)=> {
    		return item.get('checked');
    	}).length > 0;

    	var isAllChecked = this.state.collection.filter((item)=> {
    		return item.get('checked');
    	}).length == this.state.collection.length;


    	var items 		= this.state.collection.map( item => {    		
    		return (item.get('checked') && this.state.isEditable?
    			<Form 
    			key={item.get('id')}
    			id={item.get('id')}
				title = {item.get('title')}
				isChecked= {item.get('checked')}
				onSave={(e, obj) => this.onSave(e, obj)}
				FormType='Update'
				handleClose={(e)=> this.handleClose(e)}
    			/>:
    			<Row 
    			key={item.get('id')}
    			isChecked= {item.get('checked')}
	    		onToggle = { (e) => this.onToggle(e, item.get('id'))}
    			title = {item.get('title')}
    		/>)
    	});
		
    	var createForm = this.state.showCreateForm ? <Form FormType='New' onSave={(e, obj) => this.onSave(e, obj)} handleClose={(e)=> this.handleClose(e)}/> : null;

        return <div>App
        	<table>
        		<thead>
        			<Actions 
        				isDisabled = {isAllChecked || isAnyChecked? '' : 'disabled'}
        				isChecked={isAllChecked}
        				onToggle={(e) => this.onToggleAll(e)}
						onRename={(e) => this.onRename(e)}
						onCreate={(e) => this.onCreate(e)}
        				/>
        		</thead>
        		<tbody>
        		{createForm}
        		{items}
        		
        		</tbody>
        		<tfoot>

        		</tfoot>
        	</table>
        </div>;
    }
}

export default App;
