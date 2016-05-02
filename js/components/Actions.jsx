import React from 'react';

class Actions extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Actions';
        this.state = { isChecked: false, isRenameDisabled: 'disabled', isCreateDisabled: 'disabled' };
    }

    componentDidMount() {
            this.setState({ isCreateDisabled: this.props.isCreateDisabled });
    }

    componentWillReceiveProps(newProps) {

        if (newProps.isChecked != this.state.isChecked) {
            this.setState({
                isChecked: newProps.isChecked
            });
        }

        if (newProps.isRenameDisabled != this.state.isRenameDisabled) {
            this.setState({
                isRenameDisabled: newProps.isRenameDisabled
            });
        }

        if (newProps.isCreateDisabled != this.state.isCreateDisabled) {
            this.setState({
                isCreateDisabled: newProps.isCreateDisabled
            });
        }
    }
    onChange(e) {

        this.setState({ isChecked: e.target.checked });
        // delegate to parent
        this.props.onToggle(e);
    }
    render() {
        return (<li>
            <input id="toggleAll" type="checkbox" className="checkbox-custom" checked={this.state.isChecked} onChange={(e)=>this.onChange(e)}/>
            <label htmlFor="toggleAll" className="checkbox-custom-label"/>
            <button className='btn btn-primary' disabled= {this.state.isRenameDisabled} onClick={(e)=>this.props.onRename(e)}>Rename</button>
            <button className='btn btn-primary' disabled= {this.state.isRenameDisabled} onClick={(e)=>this.props.onDelete(e)}>Delete</button>
            <button className='btn btn-primary' disabled= {this.state.isCreateDisabled} onClick={(e)=>this.props.onCreate(e)}>New Folder</button>
            </li>);
    }
}

export default Actions;