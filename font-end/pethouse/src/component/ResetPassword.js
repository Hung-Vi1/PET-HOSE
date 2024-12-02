import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

function ResetPassword() {
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const password = e.target.password.value;
        const passwordConfirmation = e.target.passwordConfirmation.value;

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/ResetPassword', {
                password,
                password_confirmation: passwordConfirmation,
                token, // Gửi token qua body
            });

            alert(response.data.message);
        } catch (error) {
            alert(error.response.data.message || 'Có lỗi xảy ra');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="password" name="password" placeholder="Mật khẩu mới" required />
            <input type="password" name="passwordConfirmation" placeholder="Xác nhận mật khẩu" required />
            <button type="submit">Đổi mật khẩu</button>
        </form>
    );
}

export default ResetPassword;
