// Task 3 Bonus: Staff Performance Review
// โบนัสงานที่ 3: การประเมินผลการปฏิบัติงานของพนักงาน (Staff Performance Review)

// At the end of the month, the owner wants to reward the hardest-working cashiers.
// เมื่อสิ้นสุดเดือน เจ้าของร้านต้องการมอบรางวัลให้กับพนักงานรับเงิน (cashier) ที่ทำงานหนักที่สุด

// To decide fairly, they want to see how many orders each staff member has processed,
// เพื่อการตัดสินใจอย่างยุติธรรม พวกเขาต้องการดูว่าพนักงานแต่ละคนได้ดำเนินรายการ (process) ออร์เดอร์ไปคนละกี่รายการ

// with the busiest staff member appearing at the top of the list.
// โดยพนักงานที่ทำงานยุ่งที่สุด (มีจำนวนออร์เดอร์เยอะที่สุด) ควรแสดงอยู่ที่ด้านบนสุดของรายการ

// The dataset is identical in MongoDB — the same business insight can be retrieved.
// ชุดข้อมูลนี้เหมือนกันใน MongoDB ซึ่งหมายความว่าจะสามารถได้ข้อมูลเชิงลึกทางธุรกิจแบบเดียวกันได้

// Hint: Write an aggregation query on the orders collection to count the number of orders
// คำใบ้: เขียนคิวรีแบบสรุปผลรวม (aggregation query) ในคอลเลกชัน orders เพื่อนับจำนวนออร์เดอร์

// per staff member. Each order embeds the staff member's first and last name directly.
// ต่อพนักงานหนึ่งคน โดยแต่ละออร์เดอร์จะมีการฝัง (embed) ชื่อจริงและนามสกุลของพนักงานคนนั้นไว้โดยตรงอยู่แล้ว

// The result should show each staff member's full name and their total order count,
// ผลลัพธ์ควรแสดงชื่อเต็มของพนักงานแต่ละคน และจำนวนออร์เดอร์รวมของพวกเขา

// ordered by the count in descending order.
// และเรียงลำดับตามจำนวนออร์เดอร์จากมากไปน้อย (descending order)


// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// โจทย์อยากรู้ว่า cashier แต่ละคนทำงานไปคนละกี่ orders และให้เรียงลำดับ cashier ที่ทำรายการมากที่สุด เรียงลงมาก
// เราจะต้องนับว่า cashier แต่ละคนทำไปกี่ orders โดยจะแยกตาม staff ด้วยเก็บจำนวนไว้ใน total_order
// และเรียงลำดับ staff ตาม total_order จากมากสุดลงมาก และแสดงชื่อ นามสกุล จำนวน total_order

use("chrome-burger-db")

db.orders.aggregate([
    {
        $group: {
            _id: "$staff",
            total_order: {$sum: 1}
        }
    },
    {
        $project: {
            "_id": 0, 
           "Full name": { $concat : ["$_id.first_name"," ", "$_id.last_name"]},
            "total order": "$total_order"
        }
    },
    {
        $sort: {
            "total order": -1
        }
    }
])
