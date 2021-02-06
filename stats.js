const { Console } = require('console')
const os = require('os')
const { parse } = require('path')

setInterval(() => {
    const { freemem, totalmem } = os

    const total = parseInt(totalmem() / (1024 * 2))
    const mem = parseInt(freemem() / (1024 * 2))
    const percents = parseInt((mem / total) * 100)

    const stats = {
        free: `${mem} MB`,
        total: `${total} MB`,
        usage: `${percents}%`
    }

    console.clear()
    console.log("========= PC STATS =========")
    console.table(stats)
}, 1000)