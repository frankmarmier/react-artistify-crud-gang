import React from 'react';

// styles
import '../../styles/form.css';

function FormEditAccount() {
  return (
    <form className="form">
      <h3 className="title diy">D.I.Y (Form Edit Profile)</h3>
      <p className="parag">
        The profile update process is incomplete...<br></br>
        Use the provided code and send the state to server with axios.
        <br />
        ---------------------------
      </p>

      <div className="row">
        <div>
          <p>Welcome TOTO </p>
          <h2 className="title medium">Edit your account</h2>
        </div>
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input className="input" id="email" type="email" defaultValue="TOTO" />
        <label htmlFor="username">username</label>
        <input className="input" id="username" type="text" defaultValue="Foo Bar" />
        <label htmlFor="password">old password</label>
        <input
          className="input"
          id="old-password"
          type="password"
          placeholder="your previous password here"
        />
        <label htmlFor="password">new password</label>
        <input
          className="input"
          id="new-pasword"
          type="password"
          placeholder="your new password here"
        />

        <button className="btn">ok</button>
      </div>
    </form>
  );
}

export default FormEditAccount;
