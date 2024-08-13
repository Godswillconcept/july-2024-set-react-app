// import React from 'react'
// class ClassCar extends React.Component{
//     render(){
//         return (<h2>Car - from class component</h2>)
//     }
// }
// export default  ClassCar

import React, {Component} from 'react'
class ClassCar extends Component{
    constructor(props){
        super(props);
        this.state = {
            isAdmin: false,
            age: 29,
            username: 'Mhaztap',
        };
    }
    render(){
        console.log(this.state.age)
        return (
        <>
        <h2>Car - from class component</h2>
        <h4>I am {this.state.age} years old, {this.state.isAdmin ? "an admin" : " a reader"} on Nairaland blog</h4>
        </>
        );
    }
}
export default  ClassCar;