import {useEffect, useState} from "react";
import {api} from "../config/api";

const AllUsersConversion = () => {

    const [users, setUsers] = useState([])

    const fetchAllUsersConversion = async () => {
        const response = await api.get(`all-users-conversion`, {
            //headers: {Authorization: `Bearer ${token}`}
        }).catch(error => {
            console.log('Error on getting all users conversion ', error)
        })

        setUsers(response.data)
    }

    useEffect(() => {
        fetchAllUsersConversion()
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.user.name}</td>
                                        <td>{user.amount}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AllUsersConversion