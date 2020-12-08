import React, { Component } from 'react'
import './BodyComponent_3.css'

export default class BodyComponent_3 extends Component {
    render() {
        return (
          <div className="body3"> 
            <div className = "contactsMain">
                <div className="maps">
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae0d06f6a0f730c7a5781a5bf72c23485131dd31b58601a1fe56b57702cf3b1c2&amp;source=constructor" width="500" height="400" frameBorder="0"></iframe>
                </div>
                <div className="contacts">
                    <h2 >All contacts</h2>
                    <h4 className="first">Address</h4>
                    <p>Russian Federation Moscow "VDNH"</p>
                    <h4>e-mail</h4>
                    <p>syr94@mail.ru</p>
                    <h4>telephone</h4>
                    <p>+79292150947</p>
                    


                </div>
                
               </div>
               <div className="tailContacts">
                    
               </div>
          </div> 
        )
    }
}
