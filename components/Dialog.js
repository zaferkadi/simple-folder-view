import React from 'react';

class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Dialog';
    }
    render() {
        if(!this.props.isVisible) return false;
        return (<div className="modal">
        			<div className="modal-content modal-content--medium">
        				<div className="modal-body">
        					<p>Are you sure you want to delete the selected files?</p>
        					<div>
        						<button onClick={(e)=>this.props.onYes(e)}>Yes</button>
        						<button onClick={(e)=>this.props.onNo(e)}>No</button>
        					</div>
        				</div>
        			</div>
        		</div>);
    }
}

export default Dialog;