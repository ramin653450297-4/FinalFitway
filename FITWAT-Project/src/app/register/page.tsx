"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: ''
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();

  // ฟังก์ชันสำหรับการอัพเดตฟิลด์จากการกรอกข้อมูล
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    // ตรวจสอบว่ามีฟิลด์ใดว่างอยู่หรือไม่
    const { email, password, firstName, lastName, phoneNumber } = formData;
    if (!email || !password || !firstName || !lastName || !phoneNumber) {
      setError('กรุณากรอกข้อมูลให้ครบ');
      setSuccessMessage('');
      return;
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('สมัครสมาชิกสำเร็จ');
        setError('');
        setTimeout(() => {
          router.push('/');
        }, 2000);
      } else {
        const data = await response.json();
        setError(data.message || 'การลงทะเบียนล้มเหลว');
        setSuccessMessage('');
      }
    } catch {
      setError('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง');
      setSuccessMessage('');
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.formContainer}>
        <form onSubmit={handleRegister}>
          <h1>สมัครสมาชิก</h1>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="อิเมล"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="รหัสผ่าน"
          />
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="ชื่อ"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="นามสกุล"
          />
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="เบอร์โทรศัพท์"
          />
          <button type="submit">สมัครสมาชิก</button>
          {/* แสดง error ด้านล่างปุ่ม */}
          {error && <p className={styles.error}>{error}</p>}
        </form>
        {successMessage && <p className={styles.success}>{successMessage}</p>}
      </div>
    </div>
  );
};

export default RegisterPage;
