import React, { useState } from 'react';

const MyForm = () => {
    const [user, setUser] = useState({
        fname: '',
        lname: '',
        email: '',
        tel: '',
        gender: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const {fname, lname, gender, tel, email,password} = user;
        if (user.email === ' ' || user.tel === ' ' || user.fname === ' ' || user.gender === ' ' || user.lname === ' ' || user.password === ' ') {
            return;
            alert("Please fill the necessary details")
        }
        alert(`The registered user details is: ${fname} ${lname}, ${email},  ${tel}, ${gender} and ${password !== null ? '**************' : '--------------'}`)
        console.log(user);
        
        setUser({
            fname: '',
            lname: '',
            email: '',
            tel: '',
            gender: '',
            password: ''
        })
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((user) => ({ ...user, [name]: value }));
        console.log(user)
    }

    return (<form onSubmit={handleSubmit}>
        <div className="form-control">
            <label htmlFor="fname">First Name</label>
            <input onChange={handleChange} value={user.fname} type="text" name='fname' id='fname' />
        </div>
        <div className="form-control">
            <label htmlFor="lname">Last Name</label>
            <input onChange={handleChange} value={user.lname} type="text" name='lname' id='lname' />
        </div>
        <div className="form-control">
            <label htmlFor="email">Email</label>
            <input onChange={handleChange} value={user.email} type="email" name='email' id='email' />
        </div>
        <div className="form-control">
            <label htmlFor="password">Password</label>
            <input onChange={handleChange} value={user.password} type="password" name='password' id='password' />
        </div>
        <div className="form-control">
            <label htmlFor="tel">Phone</label>
            <input onChange={handleChange} value={user.tel} type="tel" name='tel' id='tel' />
        </div>
        <div >
            <label htmlFor="gender">Gender</label>
            <select value={user.gender} type="gender" name='gender' id='gender' onChange={handleChange}>
                <option>Select</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='female'>Other</option>
            </select>

        </div>
        <button type='submit' value='submit' className=''>Submit</button>
    </form>)
}

export default MyForm;