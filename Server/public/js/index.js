


$("#contact-form").on("submit", function (event) {
    const submitPath = event.target.action;
    event.preventDefault();
    const name = $("#name").val();
    const address = $("#address").val();
    const message = $("#message").val();

    $.ajax(submitPath, {
        method: "POST",
        data: {
            name,
            address,
            message
        },
        success: function (data) {
            // console.log(data);

            const message = data.message;

            $("#message-elem")[0].innerText = message;

            setTimeout(() => {
                $("#message-elem")[0].innerText = "";
            }, 5000);

        }
    })

})