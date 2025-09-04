import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Account = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
  });
  const [signUpData, setSignUpData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    console.log('Sign in attempt:', signInData);
    setModalMessage('Sign in successful!');
    setShowModal(true);
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (signUpData.password !== signUpData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Sign up attempt:', signUpData);
    setModalMessage('Account created successfully!');
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleGoogleAuth = () => {
    window.open('https://accounts.google.com/o/oauth2/auth?redirect_uri=https://www.tesla.com/teslaaccount/owner-xp/auth/callback&response_type=code&client_id=YOUR_GOOGLE_CLIENT_ID&scope=openid email profile', '_blank');
  };

  const handleFacebookAuth = () => {
    window.open('https://www.facebook.com/v18.0/dialog/oauth?client_id=YOUR_FACEBOOK_APP_ID&redirect_uri=https://www.tesla.com/teslaaccount/owner-xp/auth/callback&scope=email', '_blank');
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#' }}>
      <div className="card" style={{ width: '400px', border: 'none', borderRadius: '12px' }}>
        <div className="card-body ">
          <h5 className="card-title text-center" style={{ color: '#333', fontFamily: 'Arial, sans-serif' }}>{isSignIn ? 'Sign In' : 'Create Account'}</h5>
          <div className="d-flex justify-content-between mb-3">
            <button className={`btn ${isSignIn ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setIsSignIn(true)}>Sign In</button>
            <button className={`btn ${!isSignIn ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setIsSignIn(false)}>Sign Up</button>
          </div>

          {isSignIn ? (
            <form onSubmit={handleSignInSubmit}>
              <div className="mb-3 ">
                <label htmlFor="signInEmail" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="signInEmail" name="email" value={signInData.email} onChange={handleSignInChange} required style={{ border: 'none', borderBottom: '2px solid #007bff' }} />
              </div>
              <div className="mb-3">
                <label htmlFor="signInPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="signInPassword" name="password" value={signInData.password} onChange={handleSignInChange} required style={{ border: 'none', borderBottom: '2px solid #007bff' }} />
              </div>
              <button type="submit" className="btn btn-primary w-100">Sign In</button>
            </form>
          ) : (
            <form onSubmit={handleSignUpSubmit}>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" className="form-control" id="firstName" name="firstName" value={signUpData.firstName} onChange={handleSignUpChange} required style={{ border: 'none', borderBottom: '2px solid #007bff' }} />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastName" name="lastName" value={signUpData.lastName} onChange={handleSignUpChange} required style={{ border: 'none', borderBottom: '2px solid #007bff' }} />
              </div>
              <div className="mb-3">
                <label htmlFor="signUpEmail" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="signUpEmail" name="email" value={signUpData.email} onChange={handleSignUpChange} required style={{ border: 'none', borderBottom: '2px solid #007bff' }} />
              </div>
              <div className="mb-3">
                <label htmlFor="signUpPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="signUpPassword" name="password" value={signUpData.password} onChange={handleSignUpChange} required style={{ border: 'none', borderBottom: '2px solid #007bff' }} />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={signUpData.confirmPassword} onChange={handleSignUpChange} required style={{ border: 'none', borderBottom: '2px solid #007bff' }} />
              </div>
              <button type="submit" className="btn btn-primary w-100">Create Account</button>
            </form>
          )}

          <div className="text-center mt-3">
            <p>or</p>
            <button className="btn btn-outline-danger" onClick={handleGoogleAuth}>Continue with Google</button>
            <button className="btn btn-outline-primary" onClick={handleFacebookAuth}>Continue with Facebook</button>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="modal show" style={{ display: 'block' }} onClick={closeModal}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Success</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <p>{modalMessage}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
