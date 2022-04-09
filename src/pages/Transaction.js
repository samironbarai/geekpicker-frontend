import { api } from "../config/api";
import { useEffect, useState } from "react";

const Transaction = () => {
  const [users, setUsers] = useState([]);
  const [senderUserId, setSenderUserId] = useState(0);
  const [receiverUserId, setReceiverUserId] = useState(0);
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState("");

  const submitTransaction = async () => {
    if (senderUserId === 0 || receiverUserId === 0) {
      alert("Select sender and receiver user");
      return false;
    }

    if (senderUserId === receiverUserId) {
      alert("Sender and receiver can not be same user");
      return false;
    }

    if (amount <= 0) {
      alert("Amount should be more than 0");
      return false;
    }

    // Final form submit
    const response = await api
      .post(
        `transactions`,
        {
          sender_user_id: senderUserId,
          receiver_user_id: receiverUserId,
          amount: amount,
        },
        {
          //headers: {Authorization: `Bearer ${token}`}
        }
      )
      .catch((error) => {
        console.log("Error on submit transaction ", error);
        setMessage(error);
      });

    setMessage(response.data.message);
  };

  const amountHandleChange = (e) => {
    setAmount(e.target.value);
  };

  const receiverHandleChange = (e) => {
    if (e.target.value) {
      setReceiverUserId(e.target.value);
    } else {
      setReceiverUserId(0);
    }
  };

  const senderHandleChange = (e) => {
    if (e.target.value) {
      setSenderUserId(e.target.value);
    } else {
      setSenderUserId(0);
    }
  };

  const getUsers = async () => {
    const response = await api
      .get(`users`, {
        //headers: {Authorization: `Bearer ${token}`}
      })
      .catch((error) => {
        console.log("Error on getting all users conversion ", error);
      });

    setUsers(response.data.users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {message ? (
            <div className="alert alert-success" role="alert">
              {message}
            </div>
          ) : (
            ""
          )}
          <form>
            <div className="mb-3">
              <label htmlFor="sender_user" className="form-label">
                Sender user
              </label>
              <select className="form-select" onChange={senderHandleChange}>
                <option value="">Select user</option>
                {users.map((user) => {
                  return (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="receiver_user" className="form-label">
                Receiver user
              </label>
              <select className="form-select" onChange={receiverHandleChange}>
                <option value="">Select user</option>
                {users.map((user) => {
                  return (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="amount" className="form-label">
                Amount
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                onChange={amountHandleChange}
                value={amount}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={submitTransaction}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
