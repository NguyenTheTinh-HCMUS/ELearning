const mongoose=require('mongoose')
const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    HoTen:String,
    Email:{
        type: String,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    Password:{
        type: String,
        required: true
    },
    NgaySinh:Date,
    DiaChi:String,
    Avt:String,
    NgayTao: {
        type: Date,
        default: new Date()
    }
    ,
    Role:{
        type: String,
        default: 'KhachHang'
    }
}, {collection:'User'});

module.exports = mongoose.model('User', userSchema);