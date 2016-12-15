$(document).ready(
    function () {
        $("#button").click(
            function () {
                var add = $("input").val();
                $("ol").append("<li>" + add + "</li>");
            });

        $("input").bind('keypress', function (e) {
            if (e.keyCode == 13) {
                e.preventDefault();
                $("#button").click();
                $(document).ready(function () {
                    $('input').val('');
                });
            }
        });

        $(document).on("dblclick", "li", function () {
            $(this).fadeOut("slow");
        });

    }
);