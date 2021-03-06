var mongoose = require('mongoose');
var PortfolioSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    cash: {
        type: Number,
        required: true,
        default: 0,
        trim: true
    },
    comment: {
        type: String,
        required: true,
        trim: true
    },
    stocks: [], // array of {stock_name, count} = > {buy/sell, stock name, price, count, date} 
    likes: {
        type: Number,
        required: true,
        default: 0,
        trim: true
    },
    date: {
        type: Date,
        required: true,
        trim: true
    }
});
var Portfolio = mongoose.model('Portfolio', PortfolioSchema);
module.exports = Portfolio;