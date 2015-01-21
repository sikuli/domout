var async = require('async'),
    domout = require('domout')


domout.load('<div id="1"></div><div id="2"></div><div id="3"></div><div id="result"></div>')

// assume each job object has an id=1, 2, 3 respectively
var jobs = [job1, job2, job3]

async.map(jobs,

    function(job, callback) {

        var log = domout.$(job.id).log

        log('start')

        // doing the job
        log('status 25%')

        // doing the job
        log('status 50%')

        // doing the job
        log('status 75%')

        // doing the job
        log('done')

        callback(null, 'done')
    },
    function(err, result) {
        if (err) {
            domout.$('result').error(result)
        } else {
            domout.$('result').log(result)
        }
    }
)