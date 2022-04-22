const weeklyWage = (band, weeklyHours) => {
    const getWeeklyHours = weeklyHours.split(',')
    let count = 0
    let weeklyWage = 0
    for (let i = 0; i < getWeeklyHours.length; i++) {
        let sortedWeeklyHours = getWeeklyHours[i]

        if (band == 'A') {
            count += parseInt(sortedWeeklyHours)
            weeklyWage = count * 23
        }
        else if (band == 'B') {
            count += parseInt(sortedWeeklyHours)
            weeklyWage = count * 37
        }
        else if (band == 'C') {
            count += parseInt(sortedWeeklyHours)
            weeklyWage = count * 51
        }
    }
    return getWeeklyHours.length == 7 ? weeklyWage : "missing day"
};

