var SmartDates = SmartDates || {};

SmartDates.register_dates = function(date1, date2) {
    date1.blur(function() {
        date2.val(date1.val());
    });
    date1.change(function() {
        date2.val(date1.val());
    });
};

SmartDates.register_times = function(time1, time2) {
    var time1start = Date.parse(time1.val());
    time1.focus(function() {
        time1start = Date.parse(time1.val());
    });

    time1.change(function() {
        var time2now = Date.parse(time2.val());
        var time1now = Date.parse(time1.val());

        // if we started at the same point
        if (time2now.valueOf() == time1start.valueOf()) {
            time2.val(time1now.clone().addHours(2).toString("hh:mmtt"));
            time1start = Date.parse(time1.val());
        }
        else {
            var interval = time2now.valueOf() - time1start.valueOf();
            // alert("Time1start: " + time1start + "\nTime2now: " + time2now +  "\nTime1now: " + time1now + "\nInterval: " + interval);
            time2.val(time1now.clone().addMilliseconds(interval).toString("hh:mmtt"));
            time1start = Date.parse(time1.val());
        }
    });
}