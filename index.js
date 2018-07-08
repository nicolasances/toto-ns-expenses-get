var Promise = require('promise');

var getExpensesDlg = require('./dlg/GetExpensesDelegate');

exports.getExpenses = function(req, res) {
  getExpensesDlg.getExpenses({yearMonth: req.query.yearMonth, maxResults: req.query.maxResults, category: req.query.category, cardId: req.query.cardId, cardMonth: req.query.cardMonth, cardYear: req.query.cardYear, currency: req.query.currency}, {sortDate: req.query.sortDate, sortAmount: req.query.sortAmount, sortYearMonth: req.query.sortYearMonth, sortDesc: req.query.sortDesc}).then(function(result) {
    res.status(200).send(result);
  });
}
