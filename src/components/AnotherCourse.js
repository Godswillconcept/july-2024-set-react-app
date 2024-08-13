import React from "react";
class Headers extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            favoritecolor: "red",
            title: 'Ajax'
        };
        
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoritecolor: "yellow", title:'Success'})
        }, 5000)
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
            "Before the update, the favorite was " + prevState.favoritecolor;
    }

    componentDidUpdate() {
        document.getElementById("div2").innerHTML =
            "The updated favorite is " + this.state.favoritecolor;
    }
    render() {
        return (
            <div>
                <h1>My Favorite Color is {this.state.favoritecolor}  and {this.state.title}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        );
    }
}
export default Headers

