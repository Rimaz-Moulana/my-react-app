
// import { Fragment } from "react";
import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
}
function ListGroup() {
    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];

    // let selectedIndex = 0;

    //Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);
    // arr[0] //variable (selectedIndex)
    // arr[1] // updater function


    // items = [];

    //Event handler
    const handleClick = (event: MouseEvent) => console.log(event);

    if (items.length === 0)
        return <p>No item found</p>

    return (
        <>
            <h1>List</h1>
            <ul className="list-group">
                {items.map(((item, index) => <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                    key={item}
                    // onClick={(event) => console.log(event)}
                    // onClick={handleClick}
                    onClick={() => { setSelectedIndex(index); }}
                >{item}</li>))}
            </ul>
        </>
    );
}

export default ListGroup;
