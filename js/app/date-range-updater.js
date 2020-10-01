$(document).ready(function () {
    $("#start-month").change(function () {
        var month = $(this).val();
        $("#end-month").val(month); // Set start month to be equal to the end
    })

    $("#start-year").change(function () {
        var year = $(this).val();
        var endYear = $("#end-year")
        if (endYear.val() === "Select") {
            endYear.val(year);
        }

        var currEndYear = parseInt(endYear.val());
        var currYear = parseInt(year);

        if (currEndYear > currYear) { // Add the missing end years if current start year is before end
            var diffYears = currEndYear - currYear;

            for (var i = 1; i <= diffYears; i++) {
                var optYear = currEndYear - i;
                if ($("#end-year option[value='" + optYear.toString() + "']").length === 0) {
                    endYear.prepend($('<option>', {
                        value: optYear.toString(),
                        text: optYear.toString(),
                    }))
                }
            }
        }

        if (currEndYear < currYear) {
            endYear.val(year); // Set the end year to be equal to the start year
        }

        $("#end-year option").each(function () { // Remove all values before the current end year
            var optYear = parseInt($(this).val())
            if (optYear < currYear || $(this).val() === "Select") {
                $(this).remove();
            }
        })
    })

    $("#start-year-grouped").change(function () {
        var year = $(this).val();
        var endYearGrouped = $("#end-year-grouped")

        if (endYearGrouped.val() === "Select") {
            endYearGrouped.val(year);
        }

        var currEndYear = parseInt(endYearGrouped.val());
        var currYear = parseInt(year);

        // Add the missing end years if current start year is before end
        if (currEndYear > currYear) {
            var diffYears = currEndYear - currYear;

            for (var i = 1; i <= diffYears; i++) {
                var optYear = currEndYear - i;
                if ($("#end-year-grouped option[value='" + optYear.toString() + "']").length === 0) {
                    endYearGrouped.prepend($('<option>', {
                        value: optYear.toString(),
                        text: optYear.toString(),
                    }))
                }
            }
        }

        if (currEndYear < currYear) {
            // Set the end year to be equal to the start year
            endYearGrouped.val(year);
        }

        // Remove all values before the current end year
        $("#end-year-grouped option").each(function () {
            var optYear = parseInt($(this).val())
            if (optYear < currYear || $(this).val() === "Select") {
                $(this).remove();
            }
        })
    })
});