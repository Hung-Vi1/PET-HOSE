import React, { useState } from 'react';
import '../App.css';

const LoginSignupForm = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [signupError, setSignupError] = useState('');
  const [signupSuccess, setSignupSuccess] = useState('');

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/dangki', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          Hovaten: name,
          Email: email,
          Matkhau: password,
          SDT: phone,
          Diachi: address,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setSignupSuccess('Đăng ký thành công! Vui lòng đăng nhập.');
        setSignupError(''); // Clear any previous error messages
      } else if (response.status === 422) {
        const errorData = await response.json();
        console.error('Lỗi xác thực:', errorData);
        setSignupError('Đăng ký không thành công. Vui lòng kiểm tra lại thông tin.');
      } else {
        setSignupError('Đăng ký không thành công. Vui lòng thử lại.');
      }
    } catch (error) {
      console.error('Lỗi:', error);
      setSignupError('Đã xảy ra lỗi. Vui lòng thử lại.');
    }
  };

  return (
    <div className='lg'>
      <h2 className='fw-bold'>Sign in/up Form</h2>
      <div className={`login ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
        
        {/* Form Đăng Ký */}
        <div className="form-login sign-up-login">
          <form onSubmit={handleSignUpSubmit}>
            <h1 className='fw-bold'>Tạo tài khoản</h1>
            <input
              type="text"
              placeholder="Tên"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Số điện thoại"
              value={phone}
onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Địa chỉ"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <button type="submit">Đăng Ký</button>
            {signupError && <p style={{ color: 'red' }}>{signupError}</p>}
            {signupSuccess && <p style={{ color: 'green' }}>{signupSuccess}</p>}
          </form>
        </div>

        {/* Form Đăng Nhập */}
        <div className="form-login sign-in-login">
          <form action="#">
            <h1 className='fw-bold'>Đăng Nhập</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Mật khẩu" />
            <a href="#">Quên mật khẩu?</a>
            <button type="button">Đăng Nhập</button>
          </form>
        </div>

        <div className="overlay-login">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className='fw-bold'>Chào Mừng Trở Lại!</h1>
              <p>Để kết nối với chúng tôi, vui lòng đăng nhập với thông tin cá nhân của bạn</p>
              <button className="ghost" id="signIn" onClick={handleSignInClick}>Đăng Nhập</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className='fw-bold'>Xin Chào, Bạn!</h1>
              <p>Nhập thông tin cá nhân của bạn và bắt đầu hành trình với chúng tôi</p>
              <button className="ghost" id="signUp" onClick={handleSignUpClick}>Đăng Ký</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupForm;