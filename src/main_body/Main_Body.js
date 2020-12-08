import React, { Component } from 'react'
import './main_body.css'
import BodyComponent_1 from './BodyComponent_1'
import BodyComponent_2 from './BodyComponent_2'
import BodyComponent_3 from './BodyComponent_3'
import { useState } from 'react'
import HeadBelow from './../head/HeadBelow'

export default class Main_Body extends Component {
    constructor(props) {
        super(props);
        this.components = this.components.bind(this);
    }
    
    components = () =>{
        switch(useState[0]) {
            case 0:  
              return <BodyComponent_1 />
              
          
            case 1:  // if (x === 'value2')
              return <BodyComponent_2 />

            case 2:  // if (x === 'value2')
              return <BodyComponent_3 />
          
            default:
              return <BodyComponent_1 />
          }
    }

    render() {
        return (
            <div className="main_body">
                {this.components()}
            </div>
        )
    }
}
