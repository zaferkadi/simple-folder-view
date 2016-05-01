import React from 'react';

class Row extends React.Component {
    static defaultProps(){
    	isChecked: false
  	}
    constructor(props) {
        super(props);

        this.displayName = 'Row';
        this.state = {
            checked: false,
            title: ''
        };
    }
    onChange(e) {
        //alert('x');
        console.log(this.props);
        this.props.onHit(e);
    }
    render() {
        return (<tr>
        	<td><input type="checkbox" onChange={e=> this.props.onToggle(e)} checked={this.props.isChecked}/></td>
        	<td><span>{this.props.title}</span></td>
        	</tr>);
    }
}

export default Row;