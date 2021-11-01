import React from 'react';
import Spinner from './spinner/spinner';

const forLoad=()=>{
    return(
        <div style={{height:"10vh",width:"70vw",color:"black",margin:"0 auto",padding:"auto"}}>
            <h1 style={{fontFamily:"-moz-initial"}}>Welcome to Tiffin Planet</h1>
            <Spinner/>
        </div>
    );
}

export default forLoad;