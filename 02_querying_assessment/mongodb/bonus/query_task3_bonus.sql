-- Task 3 Bonus: Stock Replenishment Check
-- โบนัสงานที่ 3: ตรวจสอบการเติมสินค้าคงคลัง (Stock Replenishment Check)
-- Before placing the weekly supply order, the manager wants to avoid over-ordering ingredients
-- ก่อนที่จะสั่งวัตถุดิบรายสัปดาห์ ผู้จัดการต้องการหลีกเลี่ยงการสั่งซื้อวัตถุดิบที่ยังมีปริมาณคงคลังมากเกินไป
-- that are already well-stocked. They need a list of every ingredient with a stock level
-- ที่ยังมีตุนอยู่ในคลังเป็นอย่างดีอยู่แล้ว พวกเขาต้องการรายการของวัตถุดิบทุกชนิดที่มีระดับสต็อกสินค้า (stock level)
-- of 100 or more so those can be deprioritised in this week's order.
-- ตั้งแต่ 100 ชิ้นขึ้นไป เพื่อที่จะสามารถลดความสำคัญในการสั่งซื้อวัตถุดิบกลุ่มนี้ในสัปดาห์นี้ได้
-- The dataset is identical in PostgreSQL — the same business insight can be retrieved.
-- ชุดข้อมูลนี้เหมือนกันใน PostgreSQL ซึ่งหมายความว่าจะสามารถได้ข้อมูลเชิงลึกทางธุรกิจแบบเดียวกันได้
-- Hint: Write a query to find the name of all rows in the Ingredients table
-- คำใบ้: เขียนคิวรี (query) เพื่อหาชื่อ (name) ของทุกแถว (rows) ในตาราง Ingredients
-- where the stock_level is greater than or equal to 100.
-- ที่มีระดับสต็อกสินค้า (stock_level) มากกว่าหรือเท่ากับ 100
 -- ---------------------------------------------------------------
-- Your thinking process (required)
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:
-- ดูว่ารายการในตาราง ingredients อันไหนที่ columm storck level มีค่ามากกว่าตั้งแต่ 100 
-- ก็ให้แสดงผลออกมา 
 
SELECT name
FROM ingredients 
where stock_level >= '100';