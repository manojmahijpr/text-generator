import React, { Component } from 'react'

class ControlPanel extends Component {

    handleSubmit = (e)=> {
        e.preventDefault();
        if(parseInt(e.target.wordLengthLow.value) > parseInt(e.target.wordLengthHigh.value)) {
            alert('low < high constaint invalidated')
            return;
        }
        let obj = {
            types: e.target.selectElementType.value,
            html: e.target.isPlainText.value === 'HTML' ? true : false,
            paras: e.target.NumberOfElements.value,
            range: {
                low:e.target.wordLengthLow.value,
                high:e.target.wordLengthLow.value
            }
        }
        this.props.setUpdates(obj);
    }

    render () {
        return (
            <div className="col-lg-3 controlpanel">
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Select Element Type:</label>
                        <select className="form-control" id="selectElementType" required>
                            <option value="p">Paragraph</option>
                            <option value="ul">Listings (Un-Ordered)</option>
                            <option value="ol">Listings (Ordered)</option>
                        </select>
                    </div>
                    <hr/>
                    <div className="form-group">
                        <label >Select View:</label>
                        <select className="form-control" id="isPlainText" required>
                            <option value="Plain_Text">Plain Text</option>
                            <option value="HTML">HTML</option>
                        </select>
                    </div>
                    <hr/>
                    <div className="form-group">
                        <label >Number of Elements</label>
                        <input className="form-control" id="NumberOfElements" min="1" max="20" type="number" placeholder="Element Number(1-20)" required/>
                    </div>

                    <div className="form-group">
                        <label>Element Words Length(1-100)</label>
                        <div className="form-inline">
                            <input className="form-control col-lg-5" id="wordLengthLow" type="number" min="1" max="99" placeholder="low" required/>
                            <div className="col-lg-2">--</div>
                            <input className="form-control col-lg-5" id="wordLengthHigh" type="number" min="2" max="100" placeholder="high" required/>
                        </div>
                    </div>

                    <div className="form-group">
                        <button className="form-control btn-success">Apply Changes</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default ControlPanel