const Usher = ({ name, phone, email, gender, address, bvn, passKey }) => {
    const showDate = (y) => {
        const date = new Date();
        alert(date)
        alert(y.date)
    }

    const displayTagName = (x,y) =>{
        alert(x)
        alert(y.type);
    }

    const greetUser = () =>{
        alert('Goodbye user')
    }
    return (
        <>
        <h4 style={{ marginTop: '70px' }} onMouseEnter={displayTagName} onMouseMove={greetUser}>
            my name is {name} and my phone number is {phone}, my email is {email}, I live at {address}, see my  bvn:{bvn},dont be confused I am a {gender} gender. This is my passkey{passKey}
        </h4>
        <button onClick={showDate}>Show date</button>
        
        </>

    );
};
export default Usher;