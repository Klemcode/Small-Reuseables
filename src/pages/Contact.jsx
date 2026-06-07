import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFriend, decreaseCount, increaseCount, increaseCountByFive, increaseCountByNum, removeFriend, editFriend } from "../Redux/appSlice";


const Contact = () => {
  const count = useSelector((state) => state.app.count);
  const firsttName = useSelector((state) => state.app.firsttName);
  const ore=useSelector((state)=>state.app.friends)
  const lasttName = useSelector((state) => state.app.lasttName);

  const app = useSelector((state) => state.app);
  const [number, setnumber] = useState(0)
  const [friends, setfriends] = useState('')

  const [editName, setEditName] = useState("");
const [editIndex, setEditIndex] = useState(null);

    const dispatch = useDispatch();
    
// // console.log(app);
// console.log("app:", app);
// console.log("friends:", ore);
// console.log("isArray:", Array.isArray(ore));

  return (
    <>
      <h1>{count}</h1>
      <h1>{firsttName}</h1>
      <p>{lasttName}</p>
      
      <input type="number" placeholder="input num" onChange={(e)=>setnumber(e.target.value)}/> <br />

      <button className="btn btn-success" onClick={()=>dispatch(increaseCount())}>+</button>
    
     <button className="btn btn-primary" onClick={()=>dispatch(increaseCountByFive())}>+5</button>
    
    <button className="btn btn-danger" onClick={()=>dispatch(decreaseCount())}>-</button>
    
    <button className="btn btn-danger" onClick={()=>dispatch(increaseCountByNum(Number(number)))}>+{number}</button>
     
   <hr />
   <input
  type="text"
  value={friends}
  onChange={(e) => setfriends(e.target.value)}
  placeholder="Add a friend"
/>
   
   <button
  className="btn btn-dark"
  onClick={() => {
    dispatch(addFriend(friends));
    setfriends("");
  }}
>
  Add Friend
</button> 

  <hr />
{ore.map((item, index) => (
  <div key={index} className="mb-2">
    <span>{index +1}. </span>
    <span>{item}</span>
    <button
      className="btn btn-warning ms-2"
      data-bs-toggle="modal"
      data-bs-target="#editModal"
      onClick={() => {
        setEditIndex(index);
        setEditName(item);
      }}
    >
      Edit
    </button>

    <button
      className="btn btn-danger ms-2"
      onClick={() => dispatch(removeFriend(index))}
    >
      Delete
    </button>
  </div>
))}

<div
  className="modal fade"
  id="editModal"
  tabIndex="-1"
  aria-hidden="true"
>
  <div className="modal-dialog">
    <div className="modal-content">

      <div className="modal-header">
        <h5 className="modal-title">Edit Friend</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
        ></button>
      </div>

      <div className="modal-body">
        <input
          type="text"
          className="form-control"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
        />
      </div>

      <div className="modal-footer">
        <button
          className="btn btn-primary"
          data-bs-dismiss="modal"
          onClick={() =>
            dispatch(
              editFriend({
                index: editIndex,
                name: editName,
              })
            )
          }
        >
          Save Changes
        </button>
      </div>

    </div>
  </div>
</div>

    </>
  );
};

export default Contact;