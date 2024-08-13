const Body = () => {
    const myArray = ['Camry', 'Micra'];

    var isAdmin = true;
    let value;
    if (!isAdmin) {
        value = 'Admin';
    } else {
        value = 'Client'
    } 
    let content = <h2>{value}</h2>
    return (
        <>
            <h4>New Body New Body New Body</h4>
            {myArray.map((el) => (<p>I have {el} in my garage </p>))}
            <h3>The current user is {!isAdmin ? 'Admin' : 'Client'}</h3>
            {content}
            hello
        </>
    );
}
export default Body