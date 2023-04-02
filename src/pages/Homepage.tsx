import React, { useState } from 'react';
import { Button, DatePicker, Space, version, message } from "antd";
import 'antd/dist/reset.css';
const Homepage = () => {
  const [date, setDate] = useState(null);
  const handleChange = (value:any) => {
    message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    setDate(value);
  };
  return (
    <div>
      <h1>antd version: {version}</h1>
      <Space>
        {/* select chọn ngày giờ */}
        <DatePicker />
        <Button type="primary">Primary Button</Button>
      </Space>
      <div style={{ width: 400, margin: '100px auto' }}>
        <DatePicker onChange={handleChange} />
        <div style={{ marginTop: 16 }}>
          Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
        </div>
      </div>
    </div>
  )
}

export default Homepage