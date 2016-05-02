import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Form';
    }
    onSave(e) {

        if (this.props.FormType == 'Update') {
            this.props.onSave(e, { id: this.props.id, title: this.title.value });
        } else if (this.props.FormType == 'New') {
            this.props.onSave(e, { title: this.title.value });
        }
    }
    onClose(e) {

        this.props.handleClose(e, { id: this.props.id ? this.props.id : undefined });
    }
    render() {
        if(!this.props.isVisible) return false;

        return (<li>
        <input type="checkbox" checked={this.props.isChecked} onChange= {e=>this.props.onToggle(e)} id={"checkbox-"+this.props.id} className="checkbox-custom"/>
        <label htmlFor={"checkbox-"+this.props.id} className="checkbox-custom-label"/>
        <input type="text" defaultValue={this.props.title} ref={(ref) => this.title = ref}/>
        <button className="btn btn-primary" onClick={ (e)=>this.onSave(e) }>Save</button>
        <button className="btn btn-secondary" onClick={e=>this.onClose(e)}>Cancel</button>
        		</li>);
    }
}

export default Form;