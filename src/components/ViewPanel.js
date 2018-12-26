import React, { Component } from 'react';

class ViewPanel extends Component {

    constructor (props) {
        super(props)
        this.state = {
            text: 'fetching...',
            html: false
        }
    }
    

    componentWillReceiveProps({newText, isHtml}) {

       const text = isHtml ? newText : this.getText(newText)
       this.setState({
           text:text,
           html:isHtml
       })
       
    }

    getText =(text)=> {
        var tmpDiv = document.createElement("DIV");
        tmpDiv.innerHTML = text;
        window.tmpDiv = tmpDiv
        return tmpDiv.textContent || tmpDiv.innerText || '';
    }


    render() {
        return (
            <div className="col-lg-8 viewpanel">
                <div className="form-group container">
                    <div
                        id="textareaViewPanel"
                        style={{
                            height: '610px',
                            resize: 'none',
                            background:'#fff',
                        }}
                        readOnly
                        className="form-control"
                        
                    >{this.state.text}</div>
                </div>
            </div>
        );
    }
}

export default ViewPanel;