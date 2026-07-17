// Task 4: Total Revenue Summary
// งานที่ 4: สรุปรายได้รวม (Total Revenue Summary)

// At the end of the trading period, the owner wants a single figure that shows how much revenue
// เมื่อสิ้นสุดรอบการค้า เจ้าของร้านต้องการตัวเลขเพียงตัวเดียวที่แสดงถึงรายได้ทั้งหมด

// the truck has generated across all recorded orders. This number will be used in their
// ที่รถฟู้ดทรัค (truck) ทำได้จากออร์เดอร์ทั้งหมดที่บันทึกไว้ ตัวเลขนี้จะถูกนำไปใช้ใน

// financial summary report, so the result should be returned as a single value named total_revenue.
// รายงานสรุปผลทางการเงิน ดังนั้นผลลัพธ์ที่ได้ควรส่งกลับมาเป็นค่าเดียวโดยใช้ชื่อว่า total_revenue

// Hint: Write an aggregation query on the orders collection to calculate the total revenue from all orders combined.
// คำใบ้: เขียนคิวรีแบบสรุปผลรวม (aggregation query) บนคอลเลกชัน orders เพื่อคำนวณรายได้ทั้งหมดจากทุกออร์เดอร์รวมกัน

// The result should be a single document with a field named total_revenue.
// ผลลัพธ์ควรเป็นเอกสาร (document) เพียงฉบับเดียวที่มีฟิลด์ชื่อ total_revenue

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// โบนัส: ชุดข้อมูลนี้เหมือนกันกับในฐานข้อมูล PostgreSQL ซึ่งหมายความว่าจะได้ข้อมูลเชิงลึกทางธุรกิจแบบเดียวกัน

// Write the equivalent query for PostgreSQL. See query_task4_bonus.sql
// เขียนคิวรีที่เทียบเท่ากันสำหรับ PostgreSQL ดูเพิ่มเติมที่ไฟล์ query_task4_bonus.sql


// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// ข้อนี้ต้อง aggregation แล้ว เริ่มต้นที่เราจะ query ที่ collection orders เพราะยอดขายทั้งหมดอยู่ในนั้น
// ยอดขายแต่ละ documents คือ field total_price ดังนั้นเราจะต้องรวม total_price ทั้งหมด ให้ออกมา
// เป็นยอดขายรวม ก็คือ field total_revenue โดยทั้งหมดจะต้องใช้วิธีการ aggregation 


