function bookingCost(booking) {
    let discountFactor = 1;
    let bookingCost = 45 * booking.duration;
    if (booking.check_in_day == "Wednesday") {
        discountFactor = 0.75;

    }
    else if (booking.check_in_day == "Friday") {
        discountFactor = 0.85;
    }
    return bookingCost * discountFactor

}

const days = [
    {
        check_in_day: 'Monday',
        duration: 3,
        cat_name: 'Snowy'
    },
    {
        check_in_day: 'Wednesday',
        duration: 3,
        cat_name: 'Snowy'
    },
    {
        check_in_day: 'Friday',
        duration: 3,
        cat_name: 'Snowy'
    }

]