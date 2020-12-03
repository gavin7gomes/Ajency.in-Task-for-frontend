import React, { useState } from 'react';
import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: ''
})

const [showForm, setShowForm] = useState('');
const [showAck, setAck] = useState('hide');

const { fname, lname, email, password} = formData;

const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value})

const onSubmit = async(e) => {
    e.preventDefault();
    setShowForm('hide');
    setAck('');
}

  return (
    <section className='hero' onMouseOver={closeSubmenu}>
       <div className={`${showForm} form-div`}>
            <h3 className="">Enter Your Details</h3>
      
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input 
          type="text" 
          placeholder="First Name" 
          name="fname" 
          value={fname}
          onChange={e => onChange(e)}
          
      />
        </div>

      <div className="form-group">
          <input 
          type="text" 
          placeholder="Last Name" 
          name="lname" 
          value={lname}
          onChange={e => onChange(e)}
          
      />
        </div>

        <div className="form-group">
          <input 
          type="email" 
          placeholder="Email Address" 
          name="email" 
          value={email} 
          onChange={e => onChange(e)}
          />

        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            
          />
        </div>
       
        <input 
        type="submit" 
        className="btn btn-primary fg" 
        value="Register" />
      </form>
        </div>

        <div className={`${showAck}`}>
  <h3>Thank you {fname} {lname} for filling up the form</h3>
        </div>
    </section>
  );
};

export default Hero;
