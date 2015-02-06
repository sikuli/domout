# domout

[![Build Status](https://travis-ci.org/sikuli/domout.svg?branch=tests)](https://travis-ci.org/sikuli/domout)

> A console.log() that renders in your browser. 

The console is great - dynamic, powerful, and easy to use. However, when developing 
for the web it can be difficult to figure out if your beautifully created web-ready 
objects will render properly, or just show your user a jumble of technical text. 


## Why
- Treat your browser like a console!
- Render data on the fly.
- Sort and separate async operations in a reasonable way.
- Debug specific elements on page. 

## install
Simple as 
```sh
npm install [-g] domout
```

## Usage

Log "hello world" to a web page shown live in a browser.

```javascript
var domout = require('domout');
domout.log('hello world');
```
![hello](assets/helloworld.png)
---

Log multiple lines in the append mode (default)

```javascript
var domout = require('domout')
domout.log('first line')
domout.log('second line')
domout.log('third line')
```

![append](assets/append.png)
---

Use colors via Chalk

```javascript
var domout = require('domout'),
	chalk = require('chalk')

domout.log(chalk.red('red'))
domout.log(chalk.green('green'))
```
![chalk](assets/chalk.png)
---

Redirect `console` to `domout`

```javascript
var domout = require('domout')
console = domout.console(console)

// all existing console.log now go to the browser
console.log('hello world')
```
---

Given a set of async tasks running in parallel, log to a different `DIV` per task

```javascript
var async = require('async'),
    domout = require('domout');


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
            domout.$('result').log(result)
        } else {
            domout.$('result').log(result)
        }
    }
)
```
---
## Templates 
grid, log, console, etc. are all templates - these should be easily extendable. We plan on having user created templates in the next version.
