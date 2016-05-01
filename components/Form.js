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
        return (<tr>
        <td><input type="checkbox" checked={this.props.isChecked} onChange= {e=>this.props.onToggle(e)} /></td>
        <td><input type="text" defaultValue={this.props.title} ref={(ref) => this.title = ref}/>
        <button onClick={ (e)=>this.onSave(e) }>Save</button>
        <button onClick={e=>this.onClose(e)}>Cancel</button></td>
        		</tr>);
    }
}

export default Form;