import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Password = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email không hợp lệ")
        .required("Vui lòng nhập email"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await fetch("http://localhost:8000/api/guiemail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            Email: values.email,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Gửi email thất bại");
        }

        setIsEmailSent(true);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="forgot-password-container">
      <h1>Quên Mật Khẩu</h1>
      {isEmailSent ? (
        <p>Đã gửi email cấp lại mật khẩu. Vui lòng kiểm tra hộp thư đến của bạn.</p>
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <input
            type="email"
            placeholder="Nhập email của bạn"
            {...formik.getFieldProps("email")}
            required
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-danger">{formik.errors.email}</div>
          )}
          <button type="submit" disabled={formik.isSubmitting}>
            {formik.isSubmitting ? "Đang gửi..." : "Gửi Email"}
          </button>
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
        </form>
      )}
    </div>
  );
};

export default Password;