import React from 'react';

class Row extends React.Component {
	static defaultProps(){
    	isChecked: false
  	}

    constructor(props) {
        super(props);
        this.displayName = 'Row';
        //this.props.isChecked = false;
        
        this.state = {
        	checked: false,
        	title:''
        }

    }
    onChange(e){
    	//var item = this.state.item;
    	//item.set('checked', event.target.checked);
    	//this.setState({item: item});

    	//this.setState({checked: event.target.checked});
    	//this.props.onToggle(e);
    }
    
    render() {
    	//console.log(this.state.checked);
    	//var fields = this.props.showEdit?<input type="text" value={this.props.title}/>:<span>{this.props.title}</span>;
    	//console.log(this.props.showEdit);
        return <tr>
        	<td>
        	<input type="checkbox" 
        		onChange={e=> this.props.onToggle(e)} 
        		checked={this.props.isChecked }
        		/>
        	</td>
        	<td>
        	<span>{this.props.title}</span>
        	</td>
        </tr>;
    }
}

export default Row;
