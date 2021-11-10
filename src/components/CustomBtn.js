import React from 'react';
import {Button} from "react-bootstrap";

function CustomBtn(props) {
    return (
        <>
            <style type="text/css">
            {`
                .btn-flat {
                  background-color: #00a78e;
                  color: white;
                }
            
                .btn-xl {
                  padding: 0.5rem 1.5rem;
                  font-size: 1.25rem;
                }
                
                .btn-xxl {
                  padding: 1rem 1.5rem;
                  font-size: 1.5rem;
                }
            `}
            </style>

            <Button variant="flat" size={props.size}>{props.text}</Button>
        </>
    );
}

export default CustomBtn;