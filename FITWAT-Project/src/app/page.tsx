"use client";
import styles from "./page.module.css";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Home() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  if(email){
    return (
<>
           <div className={styles.page}>
            <header className={styles.header}>
              <nav className={styles.nav}>
                <div className={styles.navContainer}>
                  <div className={styles.logo}>
                    {/* Use Next.js Image component */}
                    <Image
                      src="/images/LOGO.png"
                      alt="FITWAY Logo"
                      width={91}
                      height={93}
                    />
                  </div>
                  <p className={styles.welcomeMessage}>ยินดีต้อนรับเข้าสู่ระบบ</p>
                  <ul className={styles.navList}>
                    <li><Link href="#">คํานวณสารอาหาร</Link></li>
                    <li><Link href="#">แบ่งปันความคิดเห็น</Link></li>
                    <li><Link href="#">อุปกรณ์/อาหารเสริม</Link></li>
                    <li><Link href="#">จัดตารางการกิน/ออกกําลังกาย</Link></li>
                  </ul>
                  <div className={styles.navAuth}>
                    <div className={styles.navUser}>
                      {email && <p> {email}</p>}
                    </div>
                    <div className={styles.navLogout}>
                    <Link href="/">
                      ออกจากระบบ
                  </Link>
                    </div>
                  </div>
                </div>
              </nav>

              <div className={styles.container}>
                <div className={styles.headerInfo}>
                  <div className={styles.headerTitle}>
                    <h1>
                      <span className={styles.fit}>FIT</span>{" "}
                      <span className={styles.way}>WAY</span>
                    </h1>
                    <h3>HEALTHY AND BODY WELL</h3>
                  </div>
                  <div className={styles.headerContent}>
                    <p>
                      สัมผัสประสบการณ์ที่ดีที่สุดในด้านฟิตเนสและสุขภาพที่ FIT WAY
                      ยกระดับการดูแลสุขภาพของคุณด้วยระบบคำนวณสารอาหารที่แม่นยำ
                      และจัดการการกิน และการออกกําลังกายออนไลน์ที่ง่ายและสะดวก
                      ครบทุกฟังก์ชันในที่เดียว!
                    </p>
                  </div>
                </div>
              </div>
            </header>

            <div className={styles.healty}>
              <div className={styles.container}>
                <div className={styles.healtyTitle}>
                  <h1>ไม่ว่าจะอยู่ที่ไหนคุณก็สามารถมีสุขภาพที่ดีได้</h1>
                </div>
                <div className={styles.healtyImg}>
                  {/* Use Next.js Image component */}
                  <Image
                    src="/images/Group.svg"
                    alt="Healthy Image"
                    width={1200} // Adjust size as necessary
                    height={416}
                  />
                </div>
                <div className={styles.healtyContent}>
                  <p>
                    “การออกกำลังกายและควบคุมการกินที่บ้านเพื่อให้ได้ผลลัพธ์ในการลดน้ำหนัก
                    และสร้างสุขภาพที่ดีไม่ใช่เรื่องยากอย่างที่คิด แม้ว่าหลายคนจะเชื่อว่าการไปยิมหรือฟิตเนสเป็นสิ่งจำเป็นสำหรับการออกกำลังกายที่มีประสิทธิภาพ
                    แต่ความจริงแล้ว การทำกิจกรรมเหล่านี้ที่บ้านก็สามารถนำไปสู่ผลลัพธ์ที่น่าพึงพอใจได้เช่นกัน”
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.comment}>
              <div className={styles.container}>
                <div className={styles.commentTitle}>
                  <h1>แบ่งปันความคิดเห็น</h1>
                </div>

                <div className={styles.commentContainer}>
                  {/* First Comment */}
                  <div className={styles.commentBox}>
                  <div className={styles.imgcomment}>
                    <Image
                      src="/images/userM.svg"
                      alt="User comment"
                      width={50}
                      height={50}
                    />
                    </div>
                  <div className={styles.commentContent}>
                      <h3>เป้าหมาย : เพิ่มกล้ามเนื้อ</h3>
                      <p>
                        “ตลอดระยะเวลา 6 เดือน ผมได้ปรับการกินตามที่เว็บได้ คำนวณค่า
                        TDEE และสารอาหารที่เหมาะสมให้ ผมได้ซื้ออุปกรณ์ออกกำลังกาย
                        เพื่อออกกำลังกายควบคู่ กับการกิน รู้สึกว่าพุงไม่ย้วยเหมือนเมื่อก่อน
                        และไม่หิวบ่อยในระหว่างวัน ผมแฮปปี้กับมันมากๆ”
                      </p>
                    </div>
                  </div>

                  {/* Second Comment */}
                  <div className={styles.commentBox}>
                  <div className={styles.imgcomment}>
                    <Image
                      src="/images/userF.svg"
                      alt="User comment"
                      width={50}
                      height={50}
                    />
                    </div>
                    <div className={styles.commentContent}>
                      <h3>เป้าหมาย : ลดไขมัน</h3>
                      <p>
                        “3 เดือนที่ผ่านมา ฉันหันมากินตามเว็บแนะนำ รู้สึกได้มา
                        พุงหมาน้อยของฉันมันค่อยๆลดลงไป ตออนี้ฉันตัดสินใจ
                        แล้วว่าจะสมัครแพคเกจต่อไปเรื่อยๆ จนกว่าฉันจะได้หุ่น
                        ที่ฉันต้องการ”
                      </p>
                    </div>
                  </div>

                  {/* Third Comment */}
                  <div className={styles.commentBox}>
                  <div className={styles.imgcomment}>
                    <Image
                      src="/images/userM.svg"
                      alt="User comment"
                      width={50}
                      height={50}
                    />
                    </div>
                    <div className={styles.commentContent}>
                      <h3>เป้าหมาย : รักษากล้ามเนื้อ</h3>
                      <p>
                        “ตลอดระยะเวลา 6 เดือน ผมได้ปรับการกินตามที่เว็บได้
                        คำนวณค่า TDEE และสารอาหารที่เหมาะสมให้ 
                        ผมได้ซื้ออุปกรณ์ออกกำลังกาย เพื่อออกกำลังกายควบคู่
                        กับการกิน รู้สึกว่าพุงไม่ย้วยเหมือนเมื่อก่อน และไม่หิวบ่อยในระหว่างวัน ผมแฮปปี้กับมันมากๆ”
                      </p>
                    </div>
                  </div>

                  {/* Fourth Comment */}
                  <div className={styles.commentBox}>
                  <div className={styles.imgcomment}>
                    <Image
                      src="/images/userF.svg"
                      alt="User comment"
                      width={50}
                      height={50}
                    />
                    </div>
                    <div className={styles.commentContent}>
                      <h3>เป้าหมาย : เพิ่มกล้ามเนื้อ</h3>
                      <p>
                        “ฉันเป็นคนผอมมาก อยากมีซิกแพคเหมือนไอดอลที่ฉัน
                        ติดตาม และก็ได้มาเจอเว็บนี้ ฉันลองโปร 3 เดือน 
                        ตอนนี้น้ำหนักฉันเพิ่มขึ้นแล้ว ต่อไปฉันจะปั้นซิกแพค
                        ให้ได้เลย!!!!”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr style={{ border: "none", borderTop: "1px solid #4682B4", width: "70%", margin: "20px auto"}} />
            <div className={styles.containerPack}>
            <div className={styles.packageContainer}>
              <div className={styles.package}>
                <div className={styles.packageContent}>
                  <h3 style={{color: "#4682B4", fontSize: "26px"}}>แพ็กเกจพิเศษสำหรับสมาชิกที่ FIT WAY</h3>
                  <p>เพื่อตอบโจทย์ความต้องการในการดูแลสุขภาพและการออกกำลังกายที่เหมาะสมสำหรับทุกคนไม่ว่าคุณจะเป็นผู้เริ่มต้นหรือผู้ที่มีประสบการณ์ด้านฟิตเนสแล้วก็สามารถเลือกแพ็กเกจที่ตรงกับเป้าหมายของคุณได้</p>
                  <div className={styles.navRegister}>
                    <Link href="#">สมัครทันที</Link>
                  </div>
                </div>
                </div>
                <div className={styles.imgpackage}>
                  <Image
                      src="/images/Pag.svg"
                      alt="PG"
                      width={418}
                      height={312}
                  />
                </div>
              </div>

              <div className={styles.packageContainer}>
              <div className={styles.package}>
                <div className={styles.packageContent}>
                  <h3 style={{color: "#4682B4", fontSize: "26px"}}>คํานวณสารอาหาร</h3>
                  <p>มีระบบหาค่า TDEE และ BMR ยกระดับการดูแลสุขภาพของคุณด้วยระบบคำนวณสารอาหารที่แม่นยำ ฟรี! และจัดการการกินออนไลน์ที่ง่ายและสะดวก</p>
                  <div className={styles.navRegister}>
                    <Link href="#">ทดลอง</Link>
                  </div>
                </div>
              </div>
              <div className={styles.imgpackage}>
                <Image
                  src="/images/tdee.svg"
                  alt="Tdee"
                  width={418}
                  height={312}
                />
              </div>
            </div>

              <div className={styles.Products}>
                <Image
                  src="/images/Products.svg"
                  alt="Products"
                  width={1200}
                  height={508}
                />
              <div className={styles.ProductsContent}>
              <Link href="#" className={styles.button}>ดูสินค้าเพิ่มเติม</Link>
                <p>
                  เตรียมตัวให้พร้อมสำหรับการออกกำลังกายที่บ้านด้วยอุปกรณ์ฟิตเนสที่คัดสรรมาอย่างดี
                  ช่วยให้คุณสามารถออกกำลังกายได้เต็มประสิทธิภาพ และดูแลสุขภาพด้วยอาหารเสริมที่ช่วยเติมเต็มสารอาหารสำคัญสำหรับการออกกำลังกาย
                </p>
              </div>
        </div>

              <h1 className={styles.end}>พร้อมเริ่มต้นดูแลสุขภาพของคุณรึยัง?</h1>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <h1>FIT WAY</h1>
          <p>ติดต่อเรา
          โทร 02 123 45678 <br />
          FIT WAY 55, Bldg. 55A, 3rd Fl., Suite 301, Soi Pradipat 17, Pradipat Rd., Phyatai, Bangkok, 10400</p>
        <hr style={{ border: "none", borderTop: "1px solid #ffff", width: "70%", margin: "20px auto"}} />
          <p>ติดต่อเรา</p>
          <div className={styles.socialIcons}>
            <Link href="#" legacyBehavior>
              <a><FaFacebook /></a>
            </Link>
            <Link href="#" legacyBehavior>
              <a><FaInstagram /></a>
            </Link>
            <Link href="#" legacyBehavior>
              <a><FaYoutube /></a>
            </Link>
            <Link href="#" legacyBehavior>
              <a><FaTwitter /></a>
            </Link>
          </div>
          <p>&copy; Copyright 2023 © fitway.com</p>
        </div>
      </div>

    </div>
          </>
    );
  } else {
    // User is not logged in
    return (
      <>
           <div className={styles.page}>
            <header className={styles.header}>
              <nav className={styles.nav}>
                <div className={styles.navContainer}>
                  <div className={styles.logo}>
                    {/* Use Next.js Image component */}
                    <Image
                      src="/images/LOGO.png"
                      alt="FITWAY Logo"
                      width={91}
                      height={93}
                    />
                  </div>
                  <p className={styles.welcomeMessage}>สมัครสมาชิกสำเร็จ!</p>
                  <ul className={styles.navList}>
                    <li><Link href="#">คํานวณสารอาหาร</Link></li>
                    <li><Link href="#">แบ่งปันความคิดเห็น</Link></li>
                    <li><Link href="#">อุปกรณ์/อาหารเสริม</Link></li>
                    <li><Link href="#">จัดตารางการกิน/ออกกําลังกาย</Link></li>
                  </ul>
                  <div className={styles.navAuth}>
                    <div className={styles.navRegister}>
                      <Link href="/register">สมัครสมาชิก</Link>
                    </div>
                    <div className={styles.navLogin}>
                      <Link href="/login">เข้าสู่ระบบ</Link>
                    </div>
                  </div>
                </div>
              </nav>

              <div className={styles.container}>
                <div className={styles.headerInfo}>
                  <div className={styles.headerTitle}>
                    <h1>
                      <span className={styles.fit}>FIT</span>{" "}
                      <span className={styles.way}>WAY</span>
                    </h1>
                    <h3>HEALTHY AND BODY WELL</h3>
                  </div>
                  <div className={styles.headerContent}>
                    <p>
                      สัมผัสประสบการณ์ที่ดีที่สุดในด้านฟิตเนสและสุขภาพที่ FIT WAY
                      ยกระดับการดูแลสุขภาพของคุณด้วยระบบคำนวณสารอาหารที่แม่นยำ
                      และจัดการการกิน และการออกกําลังกายออนไลน์ที่ง่ายและสะดวก
                      ครบทุกฟังก์ชันในที่เดียว!
                    </p>
                  </div>
                </div>
              </div>
            </header>

            <div className={styles.healty}>
              <div className={styles.container}>
                <div className={styles.healtyTitle}>
                  <h1>ไม่ว่าจะอยู่ที่ไหนคุณก็สามารถมีสุขภาพที่ดีได้</h1>
                </div>
                <div className={styles.healtyImg}>
                  {/* Use Next.js Image component */}
                  <Image
                    src="/images/Group.svg"
                    alt="Healthy Image"
                    width={1200} // Adjust size as necessary
                    height={416}
                  />
                </div>
                <div className={styles.healtyContent}>
                  <p>
                    “การออกกำลังกายและควบคุมการกินที่บ้านเพื่อให้ได้ผลลัพธ์ในการลดน้ำหนัก
                    และสร้างสุขภาพที่ดีไม่ใช่เรื่องยากอย่างที่คิด แม้ว่าหลายคนจะเชื่อว่าการไปยิมหรือฟิตเนสเป็นสิ่งจำเป็นสำหรับการออกกำลังกายที่มีประสิทธิภาพ
                    แต่ความจริงแล้ว การทำกิจกรรมเหล่านี้ที่บ้านก็สามารถนำไปสู่ผลลัพธ์ที่น่าพึงพอใจได้เช่นกัน”
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.comment}>
              <div className={styles.container}>
                <div className={styles.commentTitle}>
                  <h1>แบ่งปันความคิดเห็น</h1>
                </div>

                <div className={styles.commentContainer}>
                  {/* First Comment */}
                  <div className={styles.commentBox}>
                  <div className={styles.imgcomment}>
                    <Image
                      src="/images/userM.svg"
                      alt="User comment"
                      width={50}
                      height={50}
                    />
                    </div>
                  <div className={styles.commentContent}>
                      <h3>เป้าหมาย : เพิ่มกล้ามเนื้อ</h3>
                      <p>
                        “ตลอดระยะเวลา 6 เดือน ผมได้ปรับการกินตามที่เว็บได้ คำนวณค่า
                        TDEE และสารอาหารที่เหมาะสมให้ ผมได้ซื้ออุปกรณ์ออกกำลังกาย
                        เพื่อออกกำลังกายควบคู่ กับการกิน รู้สึกว่าพุงไม่ย้วยเหมือนเมื่อก่อน
                        และไม่หิวบ่อยในระหว่างวัน ผมแฮปปี้กับมันมากๆ”
                      </p>
                    </div>
                  </div>

                  {/* Second Comment */}
                  <div className={styles.commentBox}>
                  <div className={styles.imgcomment}>
                    <Image
                      src="/images/userF.svg"
                      alt="User comment"
                      width={50}
                      height={50}
                    />
                    </div>
                    <div className={styles.commentContent}>
                      <h3>เป้าหมาย : ลดไขมัน</h3>
                      <p>
                        “3 เดือนที่ผ่านมา ฉันหันมากินตามเว็บแนะนำ รู้สึกได้มา
                        พุงหมาน้อยของฉันมันค่อยๆลดลงไป ตออนี้ฉันตัดสินใจ
                        แล้วว่าจะสมัครแพคเกจต่อไปเรื่อยๆ จนกว่าฉันจะได้หุ่น
                        ที่ฉันต้องการ”
                      </p>
                    </div>
                  </div>

                  {/* Third Comment */}
                  <div className={styles.commentBox}>
                  <div className={styles.imgcomment}>
                    <Image
                      src="/images/userM.svg"
                      alt="User comment"
                      width={50}
                      height={50}
                    />
                    </div>
                    <div className={styles.commentContent}>
                      <h3>เป้าหมาย : รักษากล้ามเนื้อ</h3>
                      <p>
                        “ตลอดระยะเวลา 6 เดือน ผมได้ปรับการกินตามที่เว็บได้
                        คำนวณค่า TDEE และสารอาหารที่เหมาะสมให้ 
                        ผมได้ซื้ออุปกรณ์ออกกำลังกาย เพื่อออกกำลังกายควบคู่
                        กับการกิน รู้สึกว่าพุงไม่ย้วยเหมือนเมื่อก่อน และไม่หิวบ่อยในระหว่างวัน ผมแฮปปี้กับมันมากๆ”
                      </p>
                    </div>
                  </div>

                  {/* Fourth Comment */}
                  <div className={styles.commentBox}>
                  <div className={styles.imgcomment}>
                    <Image
                      src="/images/userF.svg"
                      alt="User comment"
                      width={50}
                      height={50}
                    />
                    </div>
                    <div className={styles.commentContent}>
                      <h3>เป้าหมาย : เพิ่มกล้ามเนื้อ</h3>
                      <p>
                        “ฉันเป็นคนผอมมาก อยากมีซิกแพคเหมือนไอดอลที่ฉัน
                        ติดตาม และก็ได้มาเจอเว็บนี้ ฉันลองโปร 3 เดือน 
                        ตอนนี้น้ำหนักฉันเพิ่มขึ้นแล้ว ต่อไปฉันจะปั้นซิกแพค
                        ให้ได้เลย!!!!”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr style={{ border: "none", borderTop: "1px solid #4682B4", width: "70%", margin: "20px auto"}} />
            <div className={styles.containerPack}>
            <div className={styles.packageContainer}>
              <div className={styles.package}>
                <div className={styles.packageContent}>
                  <h3 style={{color: "#4682B4", fontSize: "26px"}}>แพ็กเกจพิเศษสำหรับสมาชิกที่ FIT WAY</h3>
                  <p>เพื่อตอบโจทย์ความต้องการในการดูแลสุขภาพและการออกกำลังกายที่เหมาะสมสำหรับทุกคนไม่ว่าคุณจะเป็นผู้เริ่มต้นหรือผู้ที่มีประสบการณ์ด้านฟิตเนสแล้วก็สามารถเลือกแพ็กเกจที่ตรงกับเป้าหมายของคุณได้</p>
                  <div className={styles.navRegister}>
                    <Link href="#">สมัครทันที</Link>
                  </div>
                </div>
                </div>
                <div className={styles.imgpackage}>
                  <Image
                      src="/images/Pag.svg"
                      alt="PG"
                      width={418}
                      height={312}
                  />
                </div>
              </div>

              <div className={styles.packageContainer}>
              <div className={styles.package}>
                <div className={styles.packageContent}>
                  <h3 style={{color: "#4682B4", fontSize: "26px"}}>คํานวณสารอาหาร</h3>
                  <p>มีระบบหาค่า TDEE และ BMR ยกระดับการดูแลสุขภาพของคุณด้วยระบบคำนวณสารอาหารที่แม่นยำ ฟรี! และจัดการการกินออนไลน์ที่ง่ายและสะดวก</p>
                  <div className={styles.navRegister}>
                    <Link href="#">ทดลอง</Link>
                  </div>
                </div>
              </div>
              <div className={styles.imgpackage}>
                <Image
                  src="/images/tdee.svg"
                  alt="Tdee"
                  width={418}
                  height={312}
                />
              </div>
            </div>

              <div className={styles.Products}>
                <Image
                  src="/images/Products.svg"
                  alt="Products"
                  width={1200}
                  height={508}
                />
              <div className={styles.ProductsContent}>
              <Link href="#" className={styles.button}>ดูสินค้าเพิ่มเติม</Link>
                <p>
                  เตรียมตัวให้พร้อมสำหรับการออกกำลังกายที่บ้านด้วยอุปกรณ์ฟิตเนสที่คัดสรรมาอย่างดี
                  ช่วยให้คุณสามารถออกกำลังกายได้เต็มประสิทธิภาพ และดูแลสุขภาพด้วยอาหารเสริมที่ช่วยเติมเต็มสารอาหารสำคัญสำหรับการออกกำลังกาย
                </p>
              </div>
        </div>

              <h1 className={styles.end}>พร้อมเริ่มต้นดูแลสุขภาพของคุณรึยัง?</h1>
      </div>
      <div className={styles.promotionContainer}>
        <div className={styles.promotion}>
          <h3>ค่าบริการรายเดือน</h3>
          <h2>199</h2>
          <p>ลด 10% เหลือ 179 บาท</p>
          <ul>
            <li>ระบบคำนวณสารอาหารขั้นพื้นฐาน</li>
            <li>แผนการออกกำลังกายเบื้องต้น</li>
            <li>เคล็ดลับการจัดการการกินสำหรับผู้เริ่มต้น</li>
            <li>คลังความรู้ด้านโภชนาการและการออกกำลังกาย</li>
          </ul>
          <button>คลิกเลย</button>
        </div>
        <div className={styles.promotion}>
          <h3>ค่าบริการ 3 เดือน</h3>
          <h2>399</h2>
          <p>ลด 15% เหลือ 339 บาท</p>
          <ul>
            <li>ฟีเจอร์คำนวณสารอาหารที่ละเอียด
            แม่นยำยิ่งขึ้น</li>
            <li>แผนการออกกำลังกายเฉพาะสำหรับคุณ</li>
            <li>การสนับสนุนจากผู้เชี่ยวชาญ
            ด้านโภชนาการ</li>
            <li>ส่วนลดพิเศษสำหรับอุปกรณ์
            ออกกำลังกายเสริม</li>
          </ul>
          <button>คลิกเลย</button>
        </div>
        <div className={styles.promotion}>
          <h3>ค่าบริการ 6 เดือน</h3>
          <h2>599</h2>
          <p>ลด 20% เหลือ 479 บาท</p>
          <ul>
            <li>แผนการออกกำลังกายเฉพาะสำหรับคุณ</li>
            <li>เข้าถึงทุกคลังความรู้บริการ คำปรึกษาสุขภาพ</li>
            <li>สิทธิ์พิเศษโปรแกรมโภชนาการ
            ระดับพรีเมียม</li>
            <li>ส่วนลดพิเศษสำหรับอุปกรณ์
            ออกกำลังกายเสริม</li>
          </ul>
          <button>คลิกเลย</button>
        </div>
    </div>

      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <h1>FIT WAY</h1>
          <p>ติดต่อเรา
          โทร 02 123 45678 <br />
          FIT WAY 55, Bldg. 55A, 3rd Fl., Suite 301, Soi Pradipat 17, Pradipat Rd., Phyatai, Bangkok, 10400</p>
        <hr style={{ border: "none", borderTop: "1px solid #ffff", width: "70%", margin: "20px auto"}} />
          <p>ติดต่อเรา</p>
          <div className={styles.socialIcons}>
            <Link href="#" legacyBehavior>
              <a><FaFacebook /></a>
            </Link>
            <Link href="#" legacyBehavior>
              <a><FaInstagram /></a>
            </Link>
            <Link href="#" legacyBehavior>
              <a><FaYoutube /></a>
            </Link>
            <Link href="#" legacyBehavior>
              <a><FaTwitter /></a>
            </Link>
          </div>
          <p>&copy; Copyright 2023 © fitway.com</p>
        </div>
      </div>

    </div>
          </>
    );
  }
}