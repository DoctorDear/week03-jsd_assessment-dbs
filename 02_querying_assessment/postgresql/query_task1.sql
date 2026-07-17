-- Task 1: Sides Menu Board
-- งานที่ 1: ป้ายเมนูอาหารเคียง (Sides Menu Board)
 -- The owner wants to update the printed menu board that displays only the side dishes.
-- เจ้าของร้านต้องการอัปเดตป้ายเมนูแบบสิ่งพิมพ์ที่แสดงเฉพาะเมนูอาหารเคียง (side dishes) เท่านั้น
 -- They need a list of every item in the 'Side' category along with its current price,
-- พวกเขาต้องการรายการอาหารทุกรายการที่อยู่ในหมวดหมู่ 'Side' พร้อมกับราคาปัจจุบัน
 -- so the designer can produce an accurate board without having to check each item manually.
-- เพื่อให้นักออกแบบสามารถจัดทำป้ายที่ถูกต้องแม่นยำได้โดยไม่ต้องไปตรวจสอบแต่ละรายการด้วยตัวเอง
 -- Hint: Write a query to find the name and price of all menu items that are in the 'Side' category.
-- คำใบ้: เขียนคิวรี (query) เพื่อหาชื่อ (name) และราคา (price) ของเมนูอาหารทั้งหมดที่อยู่ในหมวดหมู่ 'Side'
 -- Bonus: The dataset is identical in the MongoDB database, meaning the same business insight can be retrieved.
-- โบนัส: ชุดข้อมูลนี้เหมือนกันกับในฐานข้อมูล MongoDB ซึ่งหมายความว่าจะได้ข้อมูลเชิงลึกทางธุรกิจแบบเดียวกัน
 -- Write the equivalent query for MongoDB. See query_task1_bonus.mongodb.js
-- เขียนคิวรีที่เทียบเท่ากันสำหรับ MongoDB ดูเพิ่มเติมที่ไฟล์ query_task1_bonus.mongodb.js
 -- ---------------------------------------------------------------
-- Your thinking process (required)
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:
-- SQL คือตาราง ดังนั้นเราจะมองทุกอย่างเป็น column กับ row
-- โจทย์บอกว่า อยากได้รายการอาหารทั้งหมด ที่เป็นหมวดหมู่ Side หมายความว่า เราต้องดูที่ Column Catagory แล้วเลือกมาเฉพาะ Row ที่เป็น Side
-- นอกจากนั้นโจทย์ขอแค่ ชื่อ กับ ราคา ดังนั้น เราก็จะ query ให้ได้ results แค่ 2 column นี้

SELECT name,
       price
FROM menuitems
WHERE category = 'Side';