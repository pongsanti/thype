var $ = require('jquery')

let typee = {
  state: 0,
  text: null
}

let typeeRequest = (callback) => {
  $.get('/typee')
    .done((data, textStatus, jqXHR) => {
      callback(textStatus, data)
    })
    .fail((jqXHR, textStatus, errorThrown) => {
      callback(textStatus, errorThrown)
    })
}

module.exports = { state: typee, request: typeeRequest }
