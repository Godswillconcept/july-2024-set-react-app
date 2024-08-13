import React, { Component } from 'react'
import logo from './OIP (1).jpg';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Boomplay headset",
            desc: "Boomplay headset with a volume of 100%  with 5000mAh of great bass",
            color: 'Black',
            price: 50000,
        }
    }

    changeTitle = () => {
        this.setState({ title: 'Oraimo headset' });
    };
    changeDesc = () => {
        this.setState({ desc: 'Boomplay headset with a volume of 100%  with 5000mAh of great bass' });
    };
    changePrice = () => {
        this.setState({ price: '47000' });
    };
    // changeContent = () =>{
    //     this.setState({prev});
    // };

    render() {
        const { title, desc, color, price } = this.state
        return (

            <div style={{
                width: '25%',
                padding: '20px',
                margin: '20px',
                marginTop: '60px',
                marginLeft: '40px',
                border: '1px solid #ccc',
                
                borderRadius: '5px',
                float: 'left'
            }}>
                <img src={logo} className="Peter" alt="logo" width='60' style={{ backgroundColor: '#aeaeae', borderRadius: '60%', marginLeft: '39%' }} />
                <hr></hr>
                <h1 style={{
                    fontSize: '20px',
                    marginBottom: '2px',
                    color: 'red',

                }}
                >{title}</h1>

                <p><b>Description: </b>{desc}</p>
                <div style={{   
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: '-25px'
                }}>
                    <p style={{
                        fontSize: '12px',
                        fontFamily: 'Arial',
                        marginBottom: '5px',
                        fontStyle: 'italic',
                        fontWeight: 'bold'
                    }}
                    >
                        Price: {price}
                    </p>
                    <p>Stocks: {this.props.stocks} </p>
                </div>
                <p style={{marginTop: '-10px'}}><b>Color: </b>{color}</p>

                <button style={{
                    cursor: 'pointer',
                    backgroundColor: 'blue',
                    color: '#fff',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    display: 'inline-block',
                    marginRight: '20px',
                }}>Add to cart</button>

                <button style={{
                    cursor: 'pointer',
                    backgroundColor: 'blue',
                    color: '#fff',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    display: 'inline-block',
                    marginRight: '20px',
                }}>WishList</button>
                <button
                    style={{
                        cursor: 'pointer',
                        backgroundColor: 'green',
                        color: '#fff',
                        padding: '10px',
                        borderRadius: '5px',
                        border: 'none',
                        display: 'inline-block',
                        marginRight: '20px',
                    }}
                    onClick={this.changeTitle}>Change Ttile</button>
            </div>
        )
    }
}
export default Product;