"use client"; 

import {  useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); 

    // Validation เบื้องต้น
    if (password.length < 5) {
      setError('รหัสผ่านต้องมีอย่างน้อย 5 ตัวอักษร');
      return;
    }

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage(data.message || 'เข้าสู่ระบบสำเร็จ');
        localStorage.setItem('token', data.token); 
        router.push('/');
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="รหัสผ่าน"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>เข้าสู่ระบบ</button>
        </form>
        {successMessage && <p className={styles.success}>{successMessage}</p>}
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
