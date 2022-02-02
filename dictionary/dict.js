"use strict";
$(document).ready(function () {
    $("#fetchBtn").on('click', function (e) {
        e.preventDefault();
        var word = $('#searchWordText').val();
        $.ajax({
            type: 'POST',
            contentType: "application/json",
            url: '/dictionary',
            data: JSON.stringify({term: word}),
            dataType: 'json'
        }).done(function (data) {
            if (data.payload.length === 0) {
                let noDataMsg = $('#noDataMsg')
                $('#defList').empty()
                noDataMsg.empty()
                noDataMsg.append("Word is not exist")
                noDataMsg.show()
            } else {
                $('#noDataMsg').hide();
                var list = $('#defList')
                list.empty()
                for (var i = 0; i < data.payload.length; i++) {
                    list.append($('<li id="item">')
                        .append(
                            data.payload[i].word +
                            " (" + data.payload[i].wordtype + ")  ::" +
                            data.payload[i].definition
                        )
                    );
                }
            }
        });
    });
})