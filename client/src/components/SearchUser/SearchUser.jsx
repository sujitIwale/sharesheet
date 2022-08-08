import React, { useRef, useState } from "react";
import Loader from "../../components/shared/Loader/Loader";
import Alert from "../shared/Alert/Alert";
import ShareButton from "../shared/Buttons/ShareButton";
import SearchInput from "./SearchInput";
import "./SearchUser.css";

const getSelectedUsers = (users) => {
  let data = [];
  users.forEach((u) => data.push(u));
  return data;
};

const SearchUser = ({ searchUsers, addUserToSheet, sheetData, user }) => {
  const [Users, setUsers] = useState(null);
  const [SelectedUsers, setSelectedUsers] = useState(new Set());
  const [Status, setStatus] = useState({ loading: false, msg: undefined });
  const timer = useRef();

  const addUser = async () => {
    if (SelectedUsers.size <= 0) {
      setStatus({ ...Status, msg: 'Please Select a User' })
      setTimeout(() => {
        setStatus({ ...Status, msg: null })
      }, 1800)
      return;
    }
    const data = [];
    SelectedUsers.forEach((u) => data.push(u._id));
    setStatus({ ...Status, loading: true });
    const res = await addUserToSheet(data);
    if (res.usersAdded) {
      Status.msg = "Users added to sheet";
      setSelectedUsers(new Set());
      setUsers([]);
    }
    setStatus({ ...Status, loading: false });
    setTimeout(() => {
      setStatus({ ...Status, msg: undefined });
    }, 2000);
  };

  const search = async (value) => {
    if (value === "") {
      setUsers([]);
      return value;
    }
    const users = await searchUsers(value);
    setUsers(users);
  };

  const onChangeHandler = (e, setValue) => {
    clearTimeout(timer.current);
    let { value } = e.target;
    setValue(value);
    value = value.trim();
    if (value === "") {
      setUsers([]);
      return;
    }
    timer.current = setTimeout(() => {
      // console.log("making request", value);
      search(value);
    }, 2000);
  };

  const removeUser = (user) => {
    SelectedUsers.delete(user);
    setSelectedUsers(new Set(SelectedUsers));
  };

  const checkBoxChangeHandler = (e, user) => {
    // console.log(e);
    if (e.target.checked) {
      SelectedUsers.add(user);
      setSelectedUsers(new Set(SelectedUsers));
      return;
    }
    removeUser(user);
  };

  return (
    <div className='search-user'>
      {Status.msg && <Alert message={Status.msg} type='success' />}
      {Status.loading ? <Loader /> : <>
        <div className='search-form'>
          <div className='search-container'>
            {SelectedUsers.size > 0 && (
              <div className='items'>
                {getSelectedUsers(SelectedUsers).map((u) => (
                  <span className='item'>
                    <img
                      alt='user-profile'
                      src={u.image}
                      className='item-user-profile'
                    />
                    <h4>{u.email}</h4>
                    <i
                      className='fas fa-times remove-btn'
                      onClick={() => removeUser(u)}
                    ></i>
                  </span>
                ))}
              </div>
            )}
            <SearchInput onChange={onChangeHandler} />
          </div>
        </div>
        {Users && Array.isArray(Users) && (
          <ul className='users-list'>
            {Users.map((u, i) => {
              if (
                sheetData.users.includes(u._id) ||
                sheetData.ownerId === u._id
              ) {
                return null;
              }
              return (
                <li className='users-list-element' key={i}>
                  <div className='flex row align-center'>
                    <img
                      alt='user-profile'
                      src={u.image}
                      className='user-profile'
                    />
                    <div>
                      <h4>{u.name}</h4>
                      <h4>{u.email}</h4>
                    </div>
                  </div>
                  <input
                    type='checkbox'
                    onChange={(e) => checkBoxChangeHandler(e, u)}
                    checked={SelectedUsers.has(u)}
                  />
                </li>
              );
            })}
          </ul>
        )}
        <div className='searchuser-footer'>
          <ShareButton onClick={addUser} />
        </div>
      </>}

    </div>
  );
};

export default SearchUser;
