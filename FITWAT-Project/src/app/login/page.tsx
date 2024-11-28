"use client"; 

import {  useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();

  // ฟังก์ชัน handleChange สำหรับจัดการข้อมูลฟอร์ม
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ฟังก์ชัน handleLogin สำหรับจัดการการล็อกอิน
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation รหัสผ่าน
    if (formData.password.length < 4) {
      setError('รหัสผ่านต้องมีอย่างน้อย 4 ตัวอักษร');
      return;
    }

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // ส่ง formData แทนแยกเป็น email/password
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem('userEmail', formData.email);

        setSuccessMessage(data.message || 'เข้าสู่ระบบสำเร็จ');

        // ส่งข้อมูลไปยังหน้า Home หลังจากเข้าสู่ระบบสำเร็จ
        router.push(`/?email=${encodeURIComponent(formData.email)}`);
      } else {
        const data = await response.json();
        setError(data.message || 'เข้าสู่ระบบล้มเหลว');
      }
    } catch {
      setError('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง');
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <form onSubmit={handleLogin} className={styles.form}>
          <h1 className={styles.title}>เข้าสู่ระบบ</h1>
          <input
            type="email"
            name="email"
            placeholder="อีเมล"
            value={formData.email}
            onChange={handleChange} // เรียก handleChange เมื่อผู้ใช้กรอกข้อมูล
            className={styles.input}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="รหัสผ่าน"
            value={formData.password}
            onChange={handleChange} // เรียก handleChange เมื่อผู้ใช้กรอกข้อมูล
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>เข้าสู่ระบบ</button>
        </form>
      </div>
        {successMessage && <p className={styles.success}>{successMessage}</p>}
        {error && <p className={styles.error}>{error}</p>}
      </div>
  );
};

export default LoginPage;