// Task 1 Bonus: Sides Menu Board
// โบนัสงานที่ 1: ป้ายเมนูอาหารเคียง (Sides Menu Board)

// The owner wants to update the printed menu board that displays only the side dishes.
// เจ้าของร้านต้องการอัปเดตป้ายเมนูแบบสิ่งพิมพ์ที่แสดงเฉพาะเมนูอาหารเคียง (side dishes) เท่านั้น

// They need a list of every item in the 'Side' category along with its current price,
// พวกเขาต้องการรายการอาหารทุกรายการที่อยู่ในหมวดหมู่ 'Side' พร้อมกับราคาปัจจุบัน

// so the designer can produce an accurate board without having to check each item manually.
// เพื่อให้นักออกแบบสามารถจัดทำป้ายที่ถูกต้องแม่นยำได้โดยไม่ต้องไปตรวจสอบแต่ละรายการด้วยตัวเอง

// The dataset is identical in MongoDB — the same business insight can be retrieved.
// ชุดข้อมูลนี้เหมือนกันใน MongoDB ซึ่งหมายความว่าจะสามารถได้ข้อมูลเชิงลึกทางธุรกิจแบบเดียวกันได้

// Hint: Write a query on the menu_items collection to find the name and price
// คำใบ้: เขียนคิวรี (query) ในคอลเลกชัน menu_items เพื่อค้นหาชื่อ (name) และราคา (price)

// of all documents where the category is 'Side'.
// ของเอกสาร (documents) ทั้งหมดที่มีหมวดหมู่ (category) เป็น 'Side'


// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// โจทย์อยากได้รายการอาหาร เฉพาะ category side
// เมนูอาหารอยู่ใน collection menu_items โดยเราจะหา เฉพาะ field category ที่มีค่าเป็น side เท่านั้น
// 

use("chrome-burger-db")

db.menu_items.find({category: "Side"})