-- Task 2: Kitchen Staff Contact List
-- งานที่ 2: รายชื่อติดต่อของพนักงานในครัว (Kitchen Staff Contact List)
 -- The manager has a last-minute change to the kitchen prep schedule and needs to notify
-- ผู้จัดการมีการเปลี่ยนแปลงตารางเวลาการเตรียมงานในครัวในนาทีสุดท้าย และจำเป็นต้องแจ้งให้
 -- all cooks as soon as possible. They need the full names of every staff member
-- พนักงานปรุงอาหาร (cook) ทุกคนทราบโดยเร็วที่สุด พวกเขาต้องการชื่อ-นามสกุลจริงของพนักงานทุกคน
 -- whose role is 'Cook' so they can be contacted directly.
-- ที่มีบทบาทหน้าที่ (role) เป็น 'Cook' เพื่อที่จะสามารถติดต่อพวกเขาได้โดยตรง
 -- Hint: Write a query to list the first_name and last_name of all staff members whose role is 'Cook'.
-- คำใบ้: เขียนคิวรี (query) เพื่อแสดงรายชื่อ first_name และ last_name ของพนักงานทุกคนที่มีบทบาทเป็น 'Cook'
 -- Bonus: The dataset is identical in the MongoDB database, meaning the same business insight can be retrieved.
-- โบนัส: ชุดข้อมูลนี้เหมือนกันกับในฐานข้อมูล MongoDB ซึ่งหมายความว่าจะได้ข้อมูลเชิงลึกทางธุรกิจแบบเดียวกัน
 -- Write the equivalent query for MongoDB. See query_task2_bonus.mongodb.js
-- เขียนคิวรีที่เทียบเท่ากันสำหรับ MongoDB ดูเพิ่มเติมที่ไฟล์ query_task2_bonus.mongodb.js
 -- ---------------------------------------------------------------
-- Your thinking process (required)
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:
-- โจทย์บอกว่าอยากได้รายชื่อ-นามสกุล cook ทุกคน ดังนั้นเราต้องดูว่าตารางไหนที่มีรายชื่อ staff
-- หลังรู้ว่าอยู่ที่ตาราง staff ก็มองหา column role แล้วเลือกเฉพาะ row ที่เป็น cook
--

SELECT first_name,
       last_name
FROM staff
WHERE role = 'Cook';