import React, { Component } from "react";
import Child from './Child'

class Getter extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: true, 
        };
    }

    delHeader = () =>{
        this.state({show: false});
    }

    render() {
        let myheader;
        if (this.state.show) {
          myheader = <Child />;
        };

        return < div>  
            {myheader}
            <button type='button' onclick={this.delHeader}>Delete Header</button></div>
    }
}
export default Getter;
