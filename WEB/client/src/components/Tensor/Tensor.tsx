"use client";
import { useEffect, useState } from "react";

const Tensor = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // ตรวจสอบ origin ของ message ถ้าต้องการความปลอดภัย
      // if (event.origin !== 'http://your-iframe-origin.com') return;

      const data = event.data; // ข้อมูลที่ได้รับจาก iframe
      if (data && data.message) {
        setMessage(data.message); // อัปเดตค่า state
      }
    };

    // เพิ่ม event listener
    window.addEventListener("message", handleMessage);

    // ลบ event listener เมื่อ component ถูกทำลาย
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div>
      s
      <iframe
        src="testtext.html" // ระบุ URL หรือ path ของ iframe.html
        className="w-full"
        title="Iframe"
      ></iframe>
      <div>
        <h1>Message from iframes:</h1>
        <p>{message}</p> {/* แสดงข้อความที่ได้รับ */}
      </div>
    </div>
  );
};

export default Tensor;
