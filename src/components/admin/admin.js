import React from 'react';
import {Button,Row} from 'react-bootstrap';
import style from "./adminStyle.module.css"

function Admin() {

    return (
        <div className={style.formContent}>
        <h2 className={style.title}>Welcome Admin</h2>
        <div className="text-center mb-5 mt-3">   
        <Button variant="primary" size="lg">
            check webusage
        </Button>
        </div>  
        <div className="text-center mb-3 mt-3">   
        <Button variant="primary" size="lg">
            check order history
        </Button>
        </div>    
        </div>
    )


}

export default Admin