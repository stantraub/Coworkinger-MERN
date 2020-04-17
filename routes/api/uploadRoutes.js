const express = require('express')
const router = express.Router()
const AWS = require('aws-sdk')
const uuid = require('uuid/v1')
const keys = require('../../config/keys')


const s3 = new AWS.S3({
    accessKeyId: keys.accessKeyId,
    secretAccessKey: keys.secretAccessKey,
    signatureVersion: 'v4',
    region: 'us-west-1'
})

router.get('/space-pic', (req, res) => {
    const key = `${req.query.name}/${uuid()}.jpeg`;

    s3.getSignedUrl('putObject', {
        Bucket: 'coworking-dev',
        ContentType: 'image/jpeg',
        Key: key
    }, (err, url) => res.send({ key, url }))
})

router.get('/edit-photo', (req, res) => {
    const key = `${req.query.username}/${uuid()}.jpeg`;

     s3.getSignedUrl('putObject', {
         Bucket: 'coworking-dev',
         ContentType: 'image/jpeg',
         Key: key
     }, (err, url) => res.send({
         key,
         url
     }))
})

module.exports = router