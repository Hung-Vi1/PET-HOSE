import { useState, useEffect } from "react";

function GioHang() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // Lấy giỏ hàng từ sessionStorage khi component được mount
        const savedCart = sessionStorage.getItem("cart");
        setCart(savedCart ? JSON.parse(savedCart) : []);
    }, []);

    // Hàm thay đổi số lượng sản phẩm và cập nhật giỏ hàng
    const handleQuantityChange = (index, quantity) => {
        const updatedCart = [...cart];
        
        // Nếu số lượng mới là 0, xóa sản phẩm khỏi giỏ hàng
        if (quantity <= 0) {
            updatedCart.splice(index, 1);
        } else {
            // Cập nhật số lượng nếu lớn hơn 0
            updatedCart[index].quantity = quantity;
        }
        
        setCart(updatedCart);
        sessionStorage.setItem("cart", JSON.stringify(updatedCart)); // Cập nhật lại sessionStorage
    };

    // Hàm xoá sản phẩm khỏi giỏ hàng
    const handleRemoveProduct = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
        sessionStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    // Tính tổng cộng cho từng sản phẩm
    const calculateTotalPrice = (price, quantity) => price * quantity;

    // Tính tổng giá trị giỏ hàng
    const calculateCartTotal = () => {
        return cart.reduce((total, item) => total + item.gia * item.quantity, 0);
    };

    return (
        <section className="cart-page py-5">
            <div className="container">
                <h2 className="title text-center mb-4">Giỏ hàng của bạn</h2>
                {cart.length === 0 ? (
                    <p className="text-center">Giỏ hàng hiện đang trống.</p>
                ) : (
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Tên sản phẩm</th>
                                <th scope="col">Hình ảnh</th>
                                <th scope="col">Giá</th>
                                <th scope="col">Số lượng</th>
                                <th scope="col">Tổng cộng</th>
                                <th scope="col">Xóa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.ten_san_pham}</td>
                                    <td>
                                        <img 
                                            src={`image/product/${item.hinh_anh}`} 
                                            alt={item.ten_san_pham} 
                                            style={{ width: "100px", height: "auto" }}
                                        />
                                    </td>
                                    <td>{item.gia} đ</td>
                                    <td>
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            min="0"
                                            onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                                            className="form-control"
                                        />
                                    </td>
                                    <td>{calculateTotalPrice(item.gia, item.quantity)} đ</td>
                                    <td>
                                        <button 
                                            onClick={() => handleRemoveProduct(index)} 
                                            className="btn btn-danger btn-sm"
                                        >
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="6" className="text-right font-weight-bold">Tổng giá trị giỏ hàng</td>
                                <td className="font-weight-bold">{calculateCartTotal()} đ</td>
                            </tr>
                        </tfoot>
                    </table>
                )}
            </div>
        </section>
    );
}

export default GioHang;
