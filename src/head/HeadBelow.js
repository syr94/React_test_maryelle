import { Title } from '@material-ui/icons';
import React, { Component } from 'react'
import { useState } from 'react'
import HeadComp_1 from './HeadComp_1'
import HeadComp_2 from './HeadComp_2'
import HeadComp_3 from './HeadComp_3'

export default class HeadBelow extends Component {
    constructor(props) {
        super(props);
        this.title = this.title.bind(this);
    }
    
    title = () =>{
        switch(useState[0]) {
            case 0:  
              return <HeadComp_1 />
              
          
            case 1:  // if (x === 'value2')
              return <HeadComp_2 />

            case 2:  // if (x === 'value2')
              return <HeadComp_3 />
          
            default:
              return <HeadComp_1 />
          }
    }
    render() {
        
        
        return (
            <div className = "head_below">
                {this.title()}
            </div>
        )
    }
}
