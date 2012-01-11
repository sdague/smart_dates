var DateAutoset = DateAutoset || {};

DateAutoset.saved_time = "12:00PM";

DateAutoset.time_delta = function(time, delta) {
    var timesplit = time.split(":");
    var min = timesplit[1];
    var hour = parseInt(timesplit[0]);
    hour = hour + delta;
    if (hour >= 12) {
        if (min.match(/AM/) == "AM") {
            min = min.replace("AM", "PM");
        } else if (min.match(/PM/)) {
            min = min.replace("PM", "AM");
        }
    }
    if (hour > 12) {
        hour = hour - 12;
    }
    return hour + ":" + min;
};

DateAutoset.register_dates = function(date1, date2) {
    date1.blur(function() {
        date2.val(date1.val());
    });
    date1.change(function() {
        date2.val(date1.val());
    });
};

DateAutoset.register_times = function(time1, time2) {
    var saved_time = "12:00PM";
    time1.focus(function() {
        saved_time = time1.val();
    });

    time1.blur(function() {
        if (time2.val() == saved_time) {
            time2.val(DateAutoset.time_delta(time1.val(), 2));
        }
    });
}