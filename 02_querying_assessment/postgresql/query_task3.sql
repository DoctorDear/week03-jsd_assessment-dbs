-- Task 3: Staff Performance Review
-- งานที่ 3: การประเมินผลการปฏิบัติงานของพนักงาน (Staff Performance Review)
 -- At the end of the month, the owner wants to reward the hardest-working cashiers.
-- เมื่อสิ้นสุดเดือน เจ้าของร้านต้องการมอบรางวัลให้กับพนักงานรับเงิน (cashier) ที่ทำงานหนักที่สุด
 -- To decide fairly, they want to see how many orders each staff member has processed,
-- เพื่อการตัดสินใจอย่างยุติธรรม พวกเขาต้องการดูว่าพนักงานแต่ละคนได้ดำเนินรายการ (process) ออร์เดอร์ไปคนละกี่รายการ
 -- with the busiest staff member appearing at the top of the list.
-- โดยพนักงานที่ทำงานยุ่งที่สุด (มีจำนวนออร์เดอร์เยอะที่สุด) ควรแสดงอยู่ที่ด้านบนสุดของรายการ
 -- Hint: Write a query to find the total number of orders processed by each staff member.
-- คำใบ้: เขียนคิวรี (query) เพื่อหาจำนวนออร์เดอร์ทั้งหมดที่ดำเนินการโดยพนักงานแต่ละคน
 -- The result should show the staff member's full name (concatenated) and their total order count,
-- ผลลัพธ์ควรแสดงชื่อ-นามสกุลเต็มของพนักงาน (โดยการต่อข้อความ/concat เข้าด้วยกัน) และจำนวนออร์เดอร์รวมของพวกเขา
 -- ordered by the count in descending order.
-- และเรียงลำดับตามจำนวนออร์เดอร์จากมากไปน้อย (descending order)
 -- Bonus: The dataset is identical in the MongoDB database, meaning the same business insight can be retrieved.
-- โบนัส: ชุดข้อมูลนี้เหมือนกันกับในฐานข้อมูล MongoDB ซึ่งหมายความว่าจะได้ข้อมูลเชิงลึกทางธุรกิจแบบเดียวกัน
 -- Write the equivalent query for MongoDB. See query_task3_bonus.mongodb.js
-- เขียนคิวรีที่เทียบเท่ากันสำหรับ MongoDB ดูเพิ่มเติมที่ไฟล์ query_task3_bonus.mongodb.js
 -- ---------------------------------------------------------------
-- Your thinking process (required)
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:
-- โจทย์อยากได้ว่า cashier แต่ละคน ทำได้กี่ orders เพื่อเรียงลำดับ cashier ที่รับ orders จากมากสุดไปน้อยสุด เรียงจากบนลงล่าง
-- สิ่งที่เราต้องใช้ ข้อมูล ชื่อ-นามสกุล ของ cashier ซึงจะมาจากตาราง staff ส่วนรายการ orders ก็มาจากตาราง orders
-- เพื่อจะ match กันว่า orders ไหน ใครเป็น cashier จะต้องใช้ staff_id เพื่อเชื่อมทั้ง 2 ตาราง
-- ตาราง staff : staff_id, first_name, last_name
-- ตาราง orders : staff_id
-- นอกจากนั้นเราต้องทำ concat เพื่อต่อชื่อ นามสกุล
-- Sql จะรัน FORM JOIN, GROUP BY, SELECT, ORDER BY
-- https://www.w3schools.com/sql/sql_join.asp
 
SELECT staff.first_name || ' ' || staff.last_name AS full_name,
       COUNT(orders.order_id) AS total_orders
FROM staff
JOIN orders ON orders.staff_id = staff.staff_id
GROUP BY staff.staff_id,
         staff.first_name,
         staff.last_name
ORDER BY total_orders DESC;