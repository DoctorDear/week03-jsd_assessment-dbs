-- Task 4: Supplier Dependency Check
-- งานที่ 4: ตรวจสอบการพึ่งพาซัพพลายเออร์ (Supplier Dependency Check)
 -- The manager has just heard that 'Freshest Farm Produce' may be delayed on their next delivery.
-- ผู้จัดการเพิ่งได้รับแจ้งว่าซัพพลายเออร์ 'Freshest Farm Produce' อาจส่งสินค้าล่าช้าในรอบถัดไป
 -- Before deciding whether to source from an alternative supplier, they need to know exactly
-- ก่อนที่จะตัดสินใจว่าจะจัดหาวัตถุดิบจากซัพพลายเออร์รายอื่นหรือไม่ พวกเขาจำเป็นต้องทราบแน่ชัดว่า
 -- which ingredients depend on that supplier, so they can assess the impact on the menu.
-- มีวัตถุดิบชนิดใดบ้างที่ต้องพึ่งพาซัพพลายเออร์รายนั้น เพื่อที่พวกเขาจะสามารถประเมินผลกระทบต่อเมนูอาหารได้
 -- Hint: Write a query to find the names of all ingredients supplied by 'Freshest Farm Produce'.
-- คำใบ้: เขียนคิวรี (query) เพื่อหาชื่อของวัตถุดิบทั้งหมดที่จัดส่งโดย 'Freshest Farm Produce'
 -- Bonus: The dataset is identical in the MongoDB database, meaning the same business insight can be retrieved.
-- โบนัส: ชุดข้อมูลนี้เหมือนกันกับในฐานข้อมูล MongoDB ซึ่งหมายความว่าจะได้ข้อมูลเชิงลึกทางธุรกิจแบบเดียวกัน
 -- Write the equivalent query for MongoDB. See query_task4_bonus.mongodb.js
-- เขียนคิวรีที่เทียบเท่ากันสำหรับ MongoDB ดูเพิ่มเติมที่ไฟล์ query_task4_bonus.mongodb.js
 -- ---------------------------------------------------------------
-- Your thinking process (required)
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:
-- โจทย์อยากรู้ว่าวัตถุดิบรายการไหนบ้างที่จัดส่งโดย Freshest Farm Produce
-- เราต้องใช้ตาราง ingredients และ suppliers มาเชื่อมโยงข้อมูลกัน (ผ่าน supplier_id)
-- เราอยากได้แค่ result คือชื่อวัตถุดิบ ซึ่งจะมาจาก column name ในตาราง ingredients ที่มี supplier_id คือ Freshest Farm Produce เท่านั้น
-- FROM JOIN, WHERE, SELECT
--

SELECT ingredients.name
FROM ingredients
JOIN suppliers ON suppliers.supplier_id = ingredients.supplier_id
WHERE suppliers.name = 'Freshest Farm Produce';