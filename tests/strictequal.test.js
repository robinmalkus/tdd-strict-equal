var describe = require ('mocha').describe
var it = require('mocha').it
var trueequal = require('../equal')
var expect = require('chai').expect

describe('equal', () => {
    describe('trueequal',() => {
        it('return true if the value strictly equal to each other',) =>{
            // setup test data
            var testData = [2,3,4]

            // call the function from our outside file
            var equal = trueequal(testData)

            // assert what should be true
            expect(equal).
            expect(equal).to.equal(2,3,4)

        })

    })     
    
})