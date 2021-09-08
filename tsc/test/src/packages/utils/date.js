const Utils = {
    isLeapYear: function (y) {
        return (y % 4 == 0 && y % 100 != 0) || y % 400 == 0;
    },
    getWhatDay: function (year, month, day) {
        const date = new Date(year + '/' + month + '/' + day);
        const index = date.getDay();
        const dayNames = [
            '星期日',
            '星期一',
            '星期二',
            '星期三',
            '星期四',
            '星期五',
            '星期六'
        ];
        return dayNames[index];
    },
    getMonthPreDay: function (year, month) {
        const date = new Date(year + '/' + month + '/01');
        let day = date.getDay();
        if (day == 0) {
            day = 7;
        }
        return day;
    },
    getMonthDays: function (year, month) {
        if (/^0/.test(month)) {
            month = month.split('')[1];
        }
        return [
            0,
            31,
            this.isLeapYear(Number(year)) ? 29 : 28,
            31,
            30,
            31,
            30,
            31,
            31,
            30,
            31,
            30,
            31
        ][month];
    },
    getNumTwoBit: function (n) {
        n = Number(n);
        return (n > 9 ? '' : '0') + n;
    },
    date2Str: function (date, split) {
        split = split || '-';
        const y = date.getFullYear();
        const m = this.getNumTwoBit(date.getMonth() + 1);
        const d = this.getNumTwoBit(date.getDate());
        return [y, m, d].join(split);
    },
    getDay: function (i) {
        i = i || 0;
        let date = new Date();
        const diff = i * (1000 * 60 * 60 * 24);
        date = new Date(date.getTime() + diff);
        return this.date2Str(date);
    },
    compareDate: function (date1, date2) {
        const startTime = new Date(date1.replace('-', '/').replace('-', '/'));
        const endTime = new Date(date2.replace('-', '/').replace('-', '/'));
        if (startTime >= endTime) {
            return false;
        }
        return true;
    },
    isEqual: function (date1, date2) {
        const startTime = new Date(date1).getTime();
        const endTime = new Date(date2).getTime();
        if (startTime == endTime) {
            return true;
        }
        return false;
    }
};
export default Utils;
