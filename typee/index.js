var path = require('path')
var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {
  res.json({typee: "ผืนผ้าใบ 'สี่มิติ' กว้างใหญ่ไพศาล จากก้นบ่อน้ำแห้งเงียบสงัด ไปถึงกระดิ่งเลื่อนหิมะกรุ๋งกริ๋งในไซเบอร์สเปซ จากกล่องน้ำหอมในถังขยะ ย้อนเวลากลับไปถึงการแล่หนังมนุษย์ทั้งเป็นในแมนจูเรีย และการสังหารหมู่เฟอะฟะในสวนสัตว์ซินเกียง จิตรกรแต้มเหตุการณ์ทีละจุด ทีละสี ที่นั่นบ้าง ที่นี่บ้าง เลอะเลือนมืดมนเหมือนเดินหลงทางในเขาวงกต"})
})

module.exports = router