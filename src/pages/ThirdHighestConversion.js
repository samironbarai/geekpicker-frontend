import {useEffect, useState} from "react";
import {api} from "../config/api";

const ThirdHighestConversion = () => {

    const [users, setUsers] = useState([])
    const [user, setUser] = useState({})
    const [optionVal, setOptionVal] = useState(0)

    const handleChange = (e) => {
        if (e.target.value) {
            setOptionVal(e.target.value)
        } else {
            setOptionVal(0)
        }
    }

    const getThirdHighestConversion = async () => {
        if (optionVal !== 0) {
            const response = await api.get(`third-highest-conversion/${optionVal}`, {
                //headers: {Authorization: `Bearer ${token}`}
            }).catch(error => {
                console.log('Error on getting third highest conversion ', error)
            })

            setUser(response.data)
        }
    }

    const getUsers = async () => {
        const response = await api.get(`users`, {
            //headers: {Authorization: `Bearer ${token}`}
        }).catch(error => {
            console.log('Error on getting all users conversion ', error)
        })

        setUsers(response.data.users)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="user" className="form-label">Sender user</label>
                            <select className="form-select" onChange={handleChange}>
                                <option value="">Select user</option>
                                {users.map((user) => {
                                    return <option key={user.id} value={user.id}>{user.name}</option>
                                })}
                            </select>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={getThirdHighestConversion}>Submit
                        </button>
                    </form>

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={user.id}>
                                <td>{user.total}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ThirdHighestConversion