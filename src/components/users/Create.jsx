import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify'
import { UserValidationData } from '../../UserValidation';

export default function Create() {
  let [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  })
  let [loader, setLoader] = useState(false);
  let [user, setUser] = useState({
    name: '',
    email: '',
    password: '',

  })
  let [errorBack, setErrorBack] = useState('');

  let [age, setAge] = useState(0);
  const changeAge = (e) => {
    e.preventDefault();
    setAge(e.target.value);

  }
  const changData = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
    console.log(user)
  }
  const sendData = async (e) => {
    e.preventDefault()
    setLoader(true);
    if (Object.keys(UserValidationData(user)).length > 0) {

      setErrors(UserValidationData(user));
    }
    else {

      const { data } = await axios.post("https://crud-users-gold.vercel.app/users/", user).catch((err) => {
        setErrorBack(err.response.data.message)
        setErrors([]);
        setLoader(false);
      });
      console.log(data);
      if (data.message == 'success') {
        toast("user added");
        setLoader(false);
      }
    }




  }
  if (loader) {
    return (
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <span className="fs-5 d-none d-sm-inline">Menu</span>
            </a>
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
              <li className="nav-item">
                <a href="#" className="nav-link align-middle px-0">
                  <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline">Home</span>
                </a>
              </li>
              <li>
                <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-speedometer2" /> <span className="ms-1 d-none d-sm-inline">Dashboard</span> </a>
                <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                  <li className="w-100">
                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1 </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2 </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-table" /> <span className="ms-1 d-none d-sm-inline">Orders</span></a>
              </li>
              <li>
                <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                  <i className="fs-4 bi-bootstrap" /> <span className="ms-1 d-none d-sm-inline">Bootstrap</span></a>
                <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                  <li className="w-100">
                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1</a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-grid" /> <span className="ms-1 d-none d-sm-inline">Products</span> </a>
                <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                  <li className="w-100">
                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 1</a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 2</a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 3</a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-people" /> <span className="ms-1 d-none d-sm-inline">Customers</span> </a>
              </li>
            </ul>
            <hr />
            <div className="dropdown pb-4">
              <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="hugenerd" width={30} height={30} className="rounded-circle" />
                <span className="d-none d-sm-inline mx-1">loser</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                <li><a className="dropdown-item" href="#">New project...</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col py-3">
          {errorBack && <p className='text-danger'>{errorBack}</p>}
          <form onSubmit={sendData}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" name='email' value={user.email} onChange={() => changData(event)} />
              {errors.email && <p className='text-danger'>{email.name}</p>}

            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" name='password' value={user.password} onChange={() => changData(event)} />
              {errors.password && <p className='text-danger'>{errors.password}</p>}

            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">username</label>
              <input type="text" className="form-control" id="username" name='name' value={user.name} onChange={() => changData(event)} />
              {errors.name && <p className='text-danger'>{errors.name}</p>}

            </div>
            <div className="mb-3">

              <input type="submit" className="form-control" value='add user' />
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}
