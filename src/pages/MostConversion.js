import {useEffect, useState} from "react";
import {api} from "../config/api";

const MostConversion = () => {

    const [user, setUser] = useState([])

    const getMostConversion = async () => {
        const response = await api.get(`most-conversion`, {
            //headers: {Authorization: `Bearer ${token}`}
        }).catch(error => {
            console.log('Error on getting all users conversion ', error)
        })

        setUser(response.data)
    }

    useEffect(() => {
        getMostConversion()
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
                                <th scope="col">Total Transactions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.amount}</td>
                                <td>{user.total}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MostConversion