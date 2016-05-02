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
    render() {
        return (<li>            
            <input id={"checkbox-"+this.props.id} className="checkbox-custom" type="checkbox" onChange={e=> this.props.onToggle(e)} checked={this.props.isChecked}/>
            <label htmlFor={"checkbox-"+this.props.id} className="checkbox-custom-label">            
            {this.props.title}</label>
        	</li>);
    }
}

export default Row;

{
/*
<input className="custom-checkbox" type="checkbox" onChange={e=> this.props.onToggle(e)} checked={this.props.isChecked}/>


<input id={"checkbox-"+this.props.id} className="checkbox-custom" 
                type="checkbox" onChange={e=> this.props.onToggle(e)} checked={this.props.isChecked}/>
                <label for={"checkbox-"+this.props.id} className="checkbox-custom-label">x</label>

*/}