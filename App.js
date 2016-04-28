import React 	from 'react';
import Row 		from './components/Row.js';
import Actions 	from './components/Actions.js';


class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.displayName = 'App';
        
        this.state = {
        	collection 		: this.props.collection, 
        	isAllChecked	: false,
        	isAnyChecked	: false
        };
    }


	onToggleAll(e){
		
		var collection =this.state.collection;

		collection.each( item => {
			item.set('checked',e.target.checked);//set('checked',true);
		}); 

		var isAnyChecked = collection.filter((item)=> {
    		return item.get('checked');
    	}).length > 0;

		this.setState({collection		:collection});
		this.setState({isAllChecked	:e.target.checked});
		this.setState({'isAnyChecked':isAnyChecked});
		console.log(collection);
	}
	onToggle(e, id){		
		var collection = this.state.collection;		
		
		collection.forEach((item)=> {
			if( item.get('id') == id) {
				item.set('checked', e.target.checked);
			}
		});
	
		var isAllChecked = collection.filter((item)=> {
    		return item.get('checked');
    	}).length == this.state.collection.length;
    	
    	var isAnyChecked = collection.filter((item)=> {
    		return item.get('checked');
    	}).length > 0;
    	//var isOneOChecked

		this.setState({'collection':collection});
		this.setState({'isAllChecked':isAllChecked});
		this.setState({'isAnyChecked':isAnyChecked});
	}
    render() {

    	var items 		= this.state.collection.map( item => {
    		
    		return <Row 
    			key={item.get('id')}
    			isChecked= {item.get('checked')}
	    		onToggle = { e => this.onToggle(e, item.get('id'))}
    			title = {item.get('title')}
    		/>
    	});
		console.log('all checked?'+ this.state.isAllChecked);
        return <div>App
        	<table>
        		<thead>
        			<Actions 
        				isDisabled = {this.state.isAllChecked || this.state.isAnyChecked?'':'disabled'}
        				isChecked={this.state.isAllChecked}
        				onToggle={(e) => this.onToggleAll(e)}/>
        		</thead>
        		<tbody>
        		{items}
        		</tbody>
        	</table>
        </div>;
    }
}

export default App;
