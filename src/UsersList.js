import React from 'react';
import './UsersList.css';
function UsersList(props) {

    let usersList = props.usersList;
    let usersLiElements = usersList.map((user) => {

        return <li key={user.id}>{user.name} <span onClick={() => {props.removeUserMethod(user.id);}}>X</span></li>

    });
    // console.log(usersList);

    return (
        <ul className="the-list">
            {usersLiElements}
            {/* <li>Mykhailo <span>X</span></li> */}
            {/* <li>Hans <span>X</span></li> */}
        </ul>
    );

}


export default UsersList;