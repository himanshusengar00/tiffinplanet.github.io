import React, { Component } from 'react';
import './menuAll.css';
import Single from './singleContain/single';
import Inoptions from '../menuAll/inOptions/inOptions';

class menuAll extends Component {
    state = {
        options: [],
        load: "Select From Above",
        showCustomize: false,
        sendData: {}
    }
    openCustomizeHandler = (obj) => {
        this.setState({ showCustomize: true });
    }
    closeCustomizationHandler = () => {
        this.setState({ showCustomize: false });
    }
    loadStateHandler = (name) => {
        this.setState({ load: name, sendData: this.props.data[name] });
    }

    render() {

        let opn = Object.keys(this.props.data).map(data => <Single name={data} click={this.loadStateHandler} key={data} />);
        let custResult = this.state.showCustomize;
        let outPut = (
            <div className="menuAll">
                {opn}
                <Inoptions adding={this.props.adding} selected={this.state.load}
                    data={this.state.sendData}
                    customization={this.openCustomizeHandler}
                    check={opn}
                />
                {custResult}
            </div>
        );
        return (
            <div>
                {outPut}
            </div>

        );
    }
}
export default menuAll;