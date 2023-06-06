

function Message(){
    const name = 'rimaz';
    return (
        <div>
            <img className="message" src="/src/assets/react.svg" alt="" />
            <h1>My Name is: {name}</h1>
        </div>
    );
}

export default Message;