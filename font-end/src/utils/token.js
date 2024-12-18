// src/utils/token.js
import CryptoJS from "crypto-js";

const secretKey = "vOhUNGvI"; // Thay bằng secret key của bạn

export const getDecodedToken = () => {
  // Lấy token đã mã hóa từ sessionStorage
  let encryptedToken = sessionStorage.getItem("token");

  let token;
  try {
    const decryptedToken = CryptoJS.AES.decrypt(encryptedToken, secretKey);
    token = decryptedToken.toString(CryptoJS.enc.Utf8);

    if (!token) {
      throw new Error("Token không hợp lệ");
    }
  } catch (error) {
    console.error("Lỗi giải mã token:", error);
    alert("Token không hợp lệ hoặc đã bị hỏng!");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    
    return null;
  }

  const cleanToken = token.replace(/^"|"$/g, "");
  return cleanToken;
};
