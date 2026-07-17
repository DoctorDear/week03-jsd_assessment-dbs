-- Task 2 Bonus: Shift Activity Report
-- โบนัสงานที่ 2: รายงานการปฏิบัติงานในกะ (Shift Activity Report)
 -- Jane Doe has an upcoming performance review and the manager wants to look at her order history
-- เจน โด (Jane Doe) กำลังจะรับการประเมินผลการปฏิบัติงาน และผู้จัดการต้องการดูประวัติการรับออร์เดอร์ของเธอ
 -- ahead of the meeting. They only need to see when each order was placed and what it was worth —
-- ก่อนการประชุม โดยพวกเขาต้องการเห็นแค่ว่าแต่ละออร์เดอร์ถูกสั่งเมื่อใดและมีมูลค่าเท่าใดเท่านั้น
 -- no other details are required for this particular review.
-- ไม่จำเป็นต้องใช้รายละเอียดอื่น ๆ สำหรับการประเมินนี้
 -- The dataset is identical in PostgreSQL — the same business insight can be retrieved.
-- ชุดข้อมูลนี้เหมือนกันใน PostgreSQL ซึ่งหมายความว่าจะสามารถได้ข้อมูลเชิงลึกทางธุรกิจแบบเดียวกันได้
 -- Hint: Write a query to find the order_date and total_price from the Orders table
-- คำใบ้: เขียนคิวรี (query) เพื่อค้นหา order_date และ total_price จากตาราง Orders
 -- for all orders handled by Jane Doe. You will need to join with the Staff table
-- สำหรับทุกออร์เดอร์ที่จัดการโดย Jane Doe คุณจำเป็นต้องทำการเชื่อมโยงตาราง (JOIN) กับตาราง Staff
 -- to filter by the staff member's name.
-- เพื่อกรองข้อมูลด้วยชื่อของพนักงานคนดังกล่าว
 -- ---------------------------------------------------------------
-- Your thinking process (required)
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:
-- โจทย์อยากได้รายการ order ที่ Jane Doe เป็นคนจัดการ
-- โจทย์ใบ้แล้ว่าให้เราเชื่อมตาราง order กับ staff โดยจะ join ด้วย staff_id
-- เราจะแสดงผลเฉพาะ column order_date กับ total_price โดยจะต้องมี staff_id เป็นของ Jane Doe เท่านั้น
 
SELECT order_date, 
       total_price 
FROM Orders
JOIN staff ON staff.staff_id = Orders.staff_id 
WHERE staff.first_name = 'Jane' 
    AND staff.last_name = 'Doe';