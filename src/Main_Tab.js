import React, { Component } from 'react'
import { useState } from 'react'
import Main_Body from './main_body/Main_Body'
import HeadBelow from './head/HeadBelow'
import CenteredTabs from './head/CenteredTabs'
import './head/Head.css'

export default class Main_Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 0
        }
        this.updateData = this.updateData.bind(this);
    }

    updateData = () => {
        this.setState({tab: useState[0] })
        console.log(useState[0])
    }
    
    render() {

        return (
            <div>
                        <div className = "head_middle">
                            <button onClick={this.updateData}>asd</button>
                            <div className = "label">
                                <h2 className = "name">Maryelle</h2>
                             </div>
                            <div className="menu">
                                <CenteredTabs />
                            </div>
                     </div>
                     <HeadBelow />
                     <Main_Body  />
            </div>
        )
     }
}
