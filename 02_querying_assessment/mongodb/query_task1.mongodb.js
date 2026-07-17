// Task 1: Budget Meal Deal
// งานที่ 1: โปรโมชันชุดอาหารราคาประหยัด (Budget Meal Deal)

// The owner wants to introduce a budget-friendly meal deal promotion and needs to identify
// เจ้าของร้านต้องการแนะนำโปรโมชันชุดอาหารราคาประหยัด และจำเป็นต้องระบุว่า

// which menu items could be included. To qualify, an item must be priced under $10.00,
// เมนูอาหารใดบ้างที่สามารถนำมารวมในโปรโมชันนี้ได้ โดยเงื่อนไขคือ เมนูนั้นต้องมีราคาต่ำกว่า $10.00

// so they can offer good value without cutting too deep into margins.
// เพื่อมอบความคุ้มค่าให้กับลูกค้าโดยไม่ส่งผลกระทบต่อกำไรขั้นต้น (margin) มากเกินไป

// Hint: Write a query to find all menu items in the menu_items collection that have a price less than 10.00.
// คำใบ้: เขียนคิวรี (query) เพื่อค้นหาเมนูอาหารทั้งหมดในคอลเลกชัน menu_items ที่มีราคา (price) น้อยกว่า 10.00

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// โบนัส: ชุดข้อมูลนี้เหมือนกันกับในฐานข้อมูล PostgreSQL ซึ่งหมายความว่าจะได้ข้อมูลเชิงลึกทางธุรกิจแบบเดียวกัน

// Write the equivalent query for PostgreSQL. See query_task1_bonus.sql
// เขียนคิวรีที่เทียบเท่ากันสำหรับ PostgreSQL ดูเพิ่มเติมที่ไฟล์ query_task1_bonus.sql


// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// เริ่มต้นต้องลองเขาไปดู document ใน collection menu_items ว่า มีหน้าตาแบบไหน
// จากโจทย์ เราต้องหาเมนูที่ราคาต่ำกว่า 10 usd ดังนั้น document ที่ field price ต่ำกว่า 10 usd คือสิ่งที่เราต้อง query
// https://www.mongodb.com/docs/manual/reference/operator/query/lt/

use("chrome-burger-db")

db.menu_items.find({ price: { $lt: 10 } });



