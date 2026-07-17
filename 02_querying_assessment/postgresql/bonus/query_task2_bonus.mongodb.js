// Task 2 Bonus: Kitchen Staff Contact List
// โบนัสงานที่ 2: รายชื่อติดต่อของพนักงานในครัว (Kitchen Staff Contact List)

// The manager has a last-minute change to the kitchen prep schedule and needs to notify
// ผู้จัดการมีการเปลี่ยนแปลงตารางเวลาการเตรียมงานในครัวในนาทีสุดท้าย และจำเป็นต้องแจ้งให้

// all cooks as soon as possible. They need the full names of every staff member
// พนักงานปรุงอาหาร (cook) ทุกคนทราบโดยเร็วที่สุด พวกเขาต้องการชื่อ-นามสกุลจริงของพนักงานทุกคน

// whose role is 'Cook' so they can be contacted directly.
// ที่มีบทบาทหน้าที่ (role) เป็น 'Cook' เพื่อที่จะสามารถติดต่อพวกเขาได้โดยตรง

// The dataset is identical in MongoDB — the same business insight can be retrieved.
// ชุดข้อมูลนี้เหมือนกันใน MongoDB ซึ่งหมายความว่าจะสามารถได้ข้อมูลเชิงลึกทางธุรกิจแบบเดียวกันได้

// Hint: Write a query on the staff collection to find the first_name and last_name
// คำใบ้: เขียนคิวรี (query) ในคอลเลกชัน staff เพื่อค้นหา first_name และ last_name

// of all documents where the role is 'Cook'.
// ของเอกสาร (documents) ทั้งหมดที่มีบทบาทหน้าที่ (role) เป็น 'Cook'


// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// โจทย์อยากได้รายชื่อ Cook โดยอยากทราบ ชื่อ นาทสกุล ของทุกคน
// เราจะรู้ได้ว่าใครเป็น cook จาก collection staff ใน column role 
// เราจะมองหาแค่เฉพาะ role ที่เป็น cook เท่านั้น
// เราต้องทำให้ผลลัพท์ออกมาเป็นแค่ ชื่อ นามสกุล ของ cook 

use("chrome-burger-db")

db.staff.find(
    {
        role: "Cook"
    },
    {
        _id: 0,
        first_name: 1,
        last_name: 1
    })
