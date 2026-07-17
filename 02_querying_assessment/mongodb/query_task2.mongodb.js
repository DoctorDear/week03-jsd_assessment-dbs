// Task 2: Shift Activity Report
// งานที่ 2: รายงานการปฏิบัติงานในกะ (Shift Activity Report)

// Jane Doe has an upcoming performance review and the manager wants to look at her order history
// เจน โด (Jane Doe) กำลังจะรับการประเมินผลการปฏิบัติงาน และผู้จัดการต้องการดูประวัติการรับออร์เดอร์ของเธอ

// ahead of the meeting. They only need to see when each order was placed and what it was worth —
// ก่อนการประชุม โดยพวกเขาต้องการเห็นแค่ว่าแต่ละออร์เดอร์ถูกสั่งเมื่อใดและมีมูลค่าเท่าใดเท่านั้น

// no other details are required for this particular review.
// ไม่จำเป็นต้องใช้รายละเอียดอื่น ๆ สำหรับการประเมินนี้

// Hint: Write a query to find all orders handled by the staff member "Jane Doe".
// คำใบ้: เขียนคิวรี (query) เพื่อค้นหาออร์เดอร์ทั้งหมดที่จัดการโดยพนักงานชื่อ "Jane Doe"

// Your query should only return the order_date and total_price fields for these orders.
// คิวรีของคุณควรส่งกลับเฉพาะฟิลด์ order_date และ total_price สำหรับออร์เดอร์เหล่านี้เท่านั้น

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// โบนัส: ชุดข้อมูลนี้เหมือนกันกับในฐานข้อมูล PostgreSQL ซึ่งหมายความว่าจะได้ข้อมูลเชิงลึกทางธุรกิจแบบเดียวกัน

// Write the equivalent query for PostgreSQL. See query_task2_bonus.sql
// เขียนคิวรีที่เทียบเท่ากันสำหรับ PostgreSQL ดูเพิ่มเติมที่ไฟล์ query_task2_bonus.sql


// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// จากโจทย์ field ที่โจทย์ hint ให้นั้นอยู่ใน colletction order ดังนั้นเราไปดูว่ามี schema เป็นยังไง
// แต่ละ field มี data type เป็นยังไง 
// เราจะเข้าไป find ใน collection order โดยมีเงื่อนไขคือ เราจะหา order ที่มี jane doe เป็น staff
// แล้วให้ return มาเฉพาะ Field order_date กับ total_price เท่านั้น 
// https://www.geeksforgeeks.org/mongodb/mongodb-projection/


use("chrome-burger-db")

db.orders.find(
    {
        "staff.first_name": "Jane" ,
        "staff.last_name": "Doe", 
    },
    {
        _id: 0,
        order_date: 1,
        total_price: 1,
    }    

)