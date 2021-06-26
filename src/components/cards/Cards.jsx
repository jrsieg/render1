import React, { Component } from 'react';
import Card from './CardUI';
import img1 from '../../images/sketchup_snapshot.jpg';
import img2 from '../../images/Web_Image3.jpg';
import img3 from '../../images/Web_Image2.jpg';

class Cards extends Component {
    render(){
        return(
            <div className="d-flex align-items-baseline bd-highlight mb-3 example-parent">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="Console"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title="Playground"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title="Adventure"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards