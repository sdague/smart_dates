var SmartDates = SmartDates || {};

SmartDates.register_dates = function(date1, date2, format) {
    var date1start = Date.parse(date1.val());

    date1.change(function() {
        var date2now = Date.parse(date2.val());
        var date1now = Date.parse(date1.val());

        var interval = date2now.valueOf() - date1start.valueOf();
        // alert("Date1start: " + date1start + "\nDate2now: " + date2now +  "\nDate1now: " + date1now + "\nInterval: " + interval);
        date2.val(date1now.clone().addMilliseconds(interval).toString(format));
        date1start = Date.parse(date1.val());
    });
};

SmartDates.register_times = function(time1, time2, format) {
    var time1start = Date.parse(time1.val());

    time1.change(function() {
        var time2now = Date.parse(time2.val());
        var time1now = Date.parse(time1.val());

        // if we started at the same point
        if (time2now.valueOf() == time1start.valueOf()) {
            time2.val(time1now.clone().addHours(2).toString(format));
            time1start = Date.parse(time1.val());
        }
        else {
            var interval = time2now.valueOf() - time1start.valueOf();
            // alert("Time1start: " + time1start + "\nTime2now: " + time2now +  "\nTime1now: " + time1now + "\nInterval: " + interval);
            time2.val(time1now.clone().addMilliseconds(interval).toString(format));
            time1start = Date.parse(time1.val());
        }
    });
}