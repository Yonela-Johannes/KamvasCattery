
mocha.setup('bdd');
const assert = chai.assert;
const expect = chai.expect;
mocha.checkLeaks();
// mocha.setup({ globals: ['_'] });
mocha.run();

describe('Bookings Function', () => {
    it('should return R135 it the day is Monday and duration is 3 ', () => {
        expect(135).to.be.eq(bookingCost(days[0]))
    })
    it('should return R101.25 if the day Wednesday and the duration is 3', () => {
        expect(101.25).to.be.eq(bookingCost(days[1]))
    })
    it('should return R114.75 if the day Friday and the duration is 3', () => {
        expect(114.75).to.be.eq(bookingCost(days[2]))
    })
})

