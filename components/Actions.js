import React from 'react';

class Actions extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Actions';
        this.state = {isChecked: false, isDisabled: 'disabled'};
    }
    componentWillReceiveProps(newProps) {
    	console.log(newProps.isDisabled);
    	console.log('xx');
    	if (newProps.isChecked != this.state.isChecked) {
    		this.setState({
    			isChecked: newProps.isChecked 
  			});
    	}

    	if(newProps.isDisabled != this.state.isDisabled) {
    		this.setState({
    			isDisabled: newProps.isDisabled 
  			});	
    	}
  		/*
  		this.setState({
    		isDisabled: nextProps.isDisabled 
  		});
  		*/
	}
 
    onChange(e) {

    	this.setState({isChecked: e.target.checked});
    	// delegate to parent 
    	this.props.onToggle(e);
    }

    render() {
    	//this.setState({isDisabled: this.props.isDisabled});
    	//console.log(this.props.isDisabled);
        return <tr>
        	<th><input type="checkbox" checked={ this.state.isChecked } onChange={(e) => this.onChange(e)}/></th>
        	<th>
        		<button disabled={this.state.isDisabled}>Rename</button>
        		<button disabled={this.state.isDisabled}>Delete</button>
        		<button>New Folder</button>
        	</th>
        </tr>;
    }
}

export default Actions;
