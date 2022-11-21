import React, { useEffect, useState } from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

function App() {
    const [users, setUsers] = useState([])
    const [invites, setInvites] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [success, setSuccess] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        fetch('https://reqres.in/api/users')
            .then(res => res.json())
            .then(json => setUsers(json.data))
            .catch(error => console.warn(error))
            .finally(() => setIsLoading(false))
    }, [])

    const onChangeSearchValue = (event) => {
        setSearchValue(event.target.value)
    }

    const onClickSendInvites = () => {
        setSuccess(true)
    }

    const onClickInvite = (id) => {
        if (invites.includes(id)) {
            setInvites(prev => prev.filter(_id => _id !== id))
        } else {
            setInvites(prev => [...prev, id])
        }
    }

    return (
        <div className="App">
            {
                success
                    ? <Success count={invites.length} />
                    : (
                        <Users
                            onChangeSearchValue={onChangeSearchValue}
                            searchValue={searchValue}
                            items={users}
                            isLoading={isLoading}
                            invites={invites}
                            onClickInvite={onClickInvite}
                            onClickSendInvites={onClickSendInvites}
                        />
                    )
            }
        </div>
    );
}

export default App;
