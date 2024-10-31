import React, { useState } from 'react';
import '../App.css';

const LoginSignupForm = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  return (
    <div className='lg'>
    <h2 className='fw-bold'>Đăng nhập</h2>
    <div className={`login ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
      <div className="form-login sign-up-login">
        <form action="#">
          <h1 className='fw-bold'>Đăng ký tài khoản</h1>
          <div className="social-login">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>sử dụng tài khoản của bạnn</span>
          <input type="text" placeholder="Nhập tên của bạn" />
          <input type="email" placeholder="Nhập email" />
          <input type="password" placeholder="Nhập mật khẩu" />
          <button type="button">Đăng ký</button>
        </form>
      </div>
      
      <div className="form-login sign-in-login">
        <form action="#">
          <h1 className='fw-bold'>Đăng nhập</h1>
          <div className="social-login">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>sử dụng tài khoản của bạn</span>
          <input type="email" placeholder="Nhập email" />
          <input type="password" placeholder="Mật khẩu" />
          <a href="#">Quên mật khẩu</a>
          <button type="button">Đăng nhập</button>
        </form>
      </div>
      
      <div className="overlay-login">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1 className='fw-bold'>Chào mừng bạn trở lại</h1>
            <p className=''>Nhập thông tin của bạn để cập nhập sản phẩm mới nhất</p>
            <button className="ghost" id="signIn" onClick={handleSignInClick}>Đăng nhập</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1 className='fw-bold'>Xin chào, bạn!</h1>
            <p>Nhập thông tin của bạn để cập nhập sản phẩm mới nhất</p>
            <button className="ghost" id="signUp" onClick={handleSignUpClick}>Đăng ký</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default LoginSignupForm;
