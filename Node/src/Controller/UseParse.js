function UseParse(request, callback) {
    let body = ''

    request.on('data', (chunck) => {
        body += chunck
    })

    request.on('end', () => {
        body = JSON.parse(body)
        request.body = body
        console.log(request.body)
        callback();
    })
}

module.exports = UseParse