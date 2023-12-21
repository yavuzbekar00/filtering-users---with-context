import React, { useContext } from 'react';
import './Users.css';
import { MainContext } from '../../Context/Context';

function Users() {
    const { users, value, gender, setGender } = useContext(MainContext);

    if (!users) {
        return <div>Kullanıcılar yüklenemedi!</div>;
    }

    const filteredUsers = users.filter(
        (user) =>
            user.firstName.toLowerCase().includes(value.toLowerCase()) ||
            user.lastName.toLowerCase().includes(value.toLowerCase())
    );

    const displayUsers = gender === 'all'
        ? filteredUsers
        : filteredUsers.filter(user => user.gender === gender);

    return (
        <div>
            <div className='gender'>
                <div>
                    All Gender
                    <input
                        defaultChecked
                        value="all"
                        onChange={(e) => setGender(e.target.value)}
                        type='radio'
                        name='gender'
                    />
                </div>
                <div>
                    Male
                    <input
                        value="male"
                        onChange={(e) => setGender(e.target.value)}
                        type='radio'
                        name='gender'
                    />
                </div>
                <div>
                    Female
                    <input
                        value="female"
                        onChange={(e) => setGender(e.target.value)}
                        type='radio'
                        name='gender'
                    />
                </div>
            </div>
            {displayUsers.length === 0 ? (
                <div>Aradığınız kullanıcı bulunamadı!</div>
            ) : (
                displayUsers.map((user) => (
                    <div className='user-contain' key={user.id}>
                        <div className='user-image'>
                            <img src={user.image} alt='user'></img>
                        </div>
                        <div className='user-name'>
                            <div>{user.firstName}</div>
                            <div>{user.lastName}</div>
                        </div>
                        <div className='user-mail'>
                            <div>{user.email}</div>
                            <div>{user.phone}</div>
                        </div>
                        <div className='user-age'>
                            <div>{user.age}</div>
                            <div>{user.gender}</div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default Users;
