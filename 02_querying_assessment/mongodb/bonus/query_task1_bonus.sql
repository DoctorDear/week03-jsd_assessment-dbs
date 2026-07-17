-- Task 1 Bonus: Budget Meal Deal
-- โบนัสงานที่ 1: โปรโมชันชุดอาหารราคาประหยัด (Budget Meal Deal)
 -- The owner wants to introduce a budget-friendly meal deal promotion and needs to identify
-- เจ้าของร้านต้องการแนะนำโปรโมชันชุดอาหารราคาประหยัด และจำเป็นต้องระบุว่า
 -- which menu items could be included. To qualify, an item must be priced under $10.00,
-- เมนูอาหารใดบ้างที่สามารถนำมารวมในโปรโมชันนี้ได้ โดยเงื่อนไขคือ เมนูนั้นต้องมีราคาต่ำกว่า $10.00
 -- so they can offer good value without cutting too deep into margins.
-- เพื่อมอบความคุ้มค่าให้กับลูกค้าโดยไม่ส่งผลกระทบต่อกำไรขั้นต้น (margin) มากเกินไป
 -- The dataset is identical in PostgreSQL — the same business insight can be retrieved.
-- ชุดข้อมูลนี้เหมือนกันใน PostgreSQL ซึ่งหมายความว่าจะสามารถได้ข้อมูลเชิงลึกทางธุรกิจแบบเดียวกันได้
 -- Hint: Write a query to find the name and price of all rows in the MenuItems table
-- คำใบ้: เขียนคิวรี (query) เพื่อหาชื่อ (name) และราคา (price) ของทุกแถว (rows) ในตาราง MenuItems
 -- where the price is less than 10.
-- ที่มีราคา (price) น้อยกว่า 10
 -- ---------------------------------------------------------------
-- Your thinking process (required)
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:
-- เหมือน mongodb ตอนนี้เป็นตาราง ก็ดึงข้อมูลในตาราง MenuItems โดยเลือกเฉพาะแถวที่ column price ต่ำกว่า 10 USD
-- แล้วก็เลือกแสดผลเฉพาะ column name price เท่านั้น

SELECT name,
       price
FROM menuitems
WHERE price < '10'