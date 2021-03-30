let popup = $("#popup-dialogue");

let infoAlert = key => {
    let html = "";
    let info = answers[language].info[key]||answers.en.info[key];
    html += "<button class='popup-close'>×</button>";
    html += "<p>"+info+"</p>";
    popup.html(html);
    popup.css({"max-height":"70%", "max-width":"75%", "padding":"5px"});
}

$(document).on("click", "a.popup-info", function(e) {
    e.preventDefault();
    let key = $(this).attr('key');
    infoAlert(key);
});

$(document).on("click", "button.popup-close", function() {
    popup.css({"max-height":"0%", "max-width":"0%", "padding":"0"});
});