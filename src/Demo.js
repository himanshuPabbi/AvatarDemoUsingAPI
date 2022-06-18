import React, { Component } from 'react'
import ReactDOM  from 'react-dom'
import './Demo.css'
/*
class Demo extends Component
{
    //render function is called to show 

    render(){
        return<>
        <div className="main_div">
        <h1>Hello {this.props.name}</h1>
        </div>
        </>
    }
}
*/

function Demo({name})
{
    return(
        <>
        <div className='main_div'>
        <h1>Hello {name}</h1>
        </div>
        </>
    )
}

export default Demo;