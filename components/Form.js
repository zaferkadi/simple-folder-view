import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Form';
    }
    onSave(e) {
    	
    	if(this.props.FormType == 'Update') {
    		this.props.onSave(e, {id:this.props.id, title: this.title.value});
    	}else if(this.props.FormType == 'New'){
    		this.props.onSave(e, {title:this.title.value});
    	}
    	
    }
    render() {
        return <tr>
        	<td>
        	<input type="checkbox" 
        		onChange={e=> this.props.onToggle(e)} 
        		checked={this.props.isChecked }
        		/>
        	</td>
        	<td>
        	<input defaultValue={this.props.title} type="text" ref={(ref) => this.title = ref}/>
        	<button onClick={(e)=>this.onSave(e)}>Save</button>
        	<button onClick={(e)=>this.props.handleClose(e)}>Cancel</button>
        	</td>
        </tr>;;
    }
}

export default Form;
