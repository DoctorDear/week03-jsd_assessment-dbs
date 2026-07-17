// Task 4 Bonus: Supplier Dependency Check
// โบนัสงานที่ 4: ตรวจสอบการพึ่งพาซัพพลายเออร์ (Supplier Dependency Check)

// The manager has just heard that 'Freshest Farm Produce' may be delayed on their next delivery.
// ผู้จัดการเพิ่งได้รับแจ้งว่าซัพพลายเออร์ 'Freshest Farm Produce' อาจส่งสินค้าล่าช้าในรอบถัดไป

// Before deciding whether to source from an alternative supplier, they need to know exactly
// ก่อนที่จะตัดสินใจว่าจะจัดหาวัตถุดิบจากซัพพลายเออร์รายอื่นหรือไม่ พวกเขาจำเป็นต้องทราบแน่ชัดว่า

// which ingredients depend on that supplier, so they can assess the impact on the menu.
// มีวัตถุดิบชนิดใดบ้างที่ต้องพึ่งพาซัพพลายเออร์รายนั้น เพื่อที่พวกเขาจะสามารถประเมินผลกระทบต่อเมนูอาหารได้

// The dataset is identical in MongoDB — the same business insight can be retrieved.
// ชุดข้อมูลนี้เหมือนกันใน MongoDB ซึ่งหมายความว่าจะสามารถได้ข้อมูลเชิงลึกทางธุรกิจแบบเดียวกันได้

// Hint: In the ingredients collection, supplier references are stored as ObjectIds rather than names.
// คำใบ้: ในคอลเลกชัน ingredients การอ้างอิงถึงซัพพลายเออร์จะถูกจัดเก็บเป็น ObjectId แทนการจัดเก็บเป็นชื่อ

// Use an aggregation pipeline with $lookup to join the ingredients collection with the suppliers
// ให้ใช้กระบวนการสรุปผลรวม (aggregation pipeline) ร่วมกับ $lookup เพื่อเชื่อมโยงคอลเลกชัน ingredients เข้ากับคอลเลกชัน suppliers

// collection, then filter where the supplier name is 'Freshest Farm Produce' and return
// จากนั้นให้กรองข้อมูลเฉพาะส่วนที่ชื่อซัพพลายเออร์เป็น 'Freshest Farm Produce' และส่งคืน

// only the ingredient names.
// เฉพาะชื่อของวัตถุดิบ (ingredient names) เท่านั้น


// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// โจทย์อยากรู้ว่า มีรายการใน ingredients collection ไหนบ้างที่ส่งจาก Freshest Farm Produce
// ดังนั้นเราจะต้องดึง collection suppilers มาจับคู่กับ supplier_id ของ collection ingredents โดยเราจะใช้ lookup
// แต่ค่าที่ lookup ส่งมาจะเป็น array เราจะต้องคลาย array ด้วย unwind ทำให้เป็น object จะทำให้เราเรียกข้อมูลด้านในง่ายขึ้น
// เราจะต้อง filter ข้อมูล เพื่อเอาเฉพาะชื่อวัตถุดิบและ suppliers จาก Freshest Farm Produce
// สุดท้ายเราแสดงผลลัพท์โดยมีแค่ field name ของ ingredients

use("chrome-burger-db")

db.ingredients.aggregate([
    {
        $lookup: {
          from: "suppliers",
          localField: "supplier_id",
          foreignField: "_id",
          as: "supplier_info"
        }
    },
    {
        $unwind: "$supplier_info"
    },
    {
        $match: {
            "supplier_info.name": "Freshest Farm Produce"
        }
    },
    {
        $project: {
            _id: 0,
            name: 1
        }
    }
])




