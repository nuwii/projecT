import React from 'react';
import  { Dimmer, Loader, Image, Segment, Icon } from "semantic-ui-react";

const Fallback = () => {
    return (
        <div>
            <Segment style={{height:"100vh"}}>
                <Dimmer active>
                    <Loader/>
                </Dimmer>
                <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png"/>{" "}
            </Segment>
        </div>
    )
}

export default Fallback