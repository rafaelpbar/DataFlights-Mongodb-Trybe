db.voos.findOne({"litrosCombustivel": {$lt: 1000}},
{"_id": false, "vooId": true, "litrosCombustivel": true
});
