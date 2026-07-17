// Task 3: Stock Replenishment Check
// งานที่ 3: ตรวจสอบการเติมสินค้าคงคลัง (Stock Replenishment Check)

// Before placing the weekly supply order, the manager wants to avoid over-ordering ingredients
// ก่อนที่จะสั่งวัตถุดิบรายสัปดาห์ ผู้จัดการต้องการหลีกเลี่ยงการสั่งซื้อวัตถุดิบที่ยังมีปริมาณคงคลังมากเกินไป

// that are already well-stocked. They need a list of every ingredient with a stock level
// ที่ยังมีตุนอยู่ในคลังเป็นอย่างดีอยู่แล้ว พวกเขาต้องการรายการของวัตถุดิบทุกชนิดที่มีระดับสต็อกสินค้า (stock level)

// of 100 or more so those can be deprioritised in this week's order.
// ตั้งแต่ 100 ชิ้นขึ้นไป เพื่อที่จะสามารถลดความสำคัญในการสั่งซื้อวัตถุดิบกลุ่มนี้ในสัปดาห์นี้ได้

// Hint: Write a query to find all ingredients in the ingredients collection that have a stock_level of 100.00 or more.
// คำใบ้: เขียนคิวรี (query) เพื่อค้นหาวัตถุดิบทั้งหมดในคอลเลกชัน ingredients ที่มี stock_level ตั้งแต่ 100.00 ขึ้นไป

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// โบนัส: ชุดข้อมูลนี้เหมือนกันกับในฐานข้อมูล PostgreSQL ซึ่งหมายความว่าจะได้ข้อมูลเชิงลึกทางธุรกิจแบบเดียวกัน

// Write the equivalent query for PostgreSQL. See query_task3_bonus.sql
// เขียนคิวรีที่เทียบเท่ากันสำหรับ PostgreSQL ดูเพิ่มเติมที่ไฟล์ query_task3_bonus.sql


// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
// 
// Your thinking:
// เข้าไปดูก่อนเลยว่า schema ของ ingredient เป็นยังไง แล้วดู field stock_level 
// ให้หา field stock_level ที่มากกว่าตั้งแต่ 100 โดยใช้ operator เหมือน task 1 
//

use("chrome-burger-db")

db.ingredients.find({stock_level: {$gte: 100}})