const AWS = require('aws-sdk')
const uuid = require('uuid/v1')
const keys = require('../../config/keys_dev')


const s3 = new AWS.S3({
    accessKeyId: keys.accessKeyId,
    secretAccessKey: keys.secretAccessKey,
    signatureVersion: 'v4',
    region: 'us-west-1'
})

module.exports = app => {
    app.get('/api/upload', (req, res) => {
        const key = `5e76dc27c8490b86368584ac/${uuid()}.jpeg`;

        s3.getSignedUrl('putObject', {
            Bucket: 'coworking-dev',
            ContentType: 'image/jpeg',
            Key: key
        }, (err, url) => res.send({key, url}))
    })
}