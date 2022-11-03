# Comandos utilizados

## Modo fork y modo cluster
`node server.js`
`node server.js -m CLUSTER`

## Uso de nodemon
`nodemon server.js`
`nodemon server.js -m CLUSTER`
`tasklist /fi "imagename eq node.exe"`

## Uso de forever
`forever start server.js -w`
`forever start server.js -w -m CLUSTER`
`forever list`
`tasklist /fi "imagename eq node.exe"`

## Uso de pm2
`pm2 start server.js --watch`
`pm2 start server.js --watch -i max`
`pm2 list`
`tasklist /fi "imagename eq node.exe"`

## Nginx proxy
`pm2 start server.js -i max`
`".\nginx.exe"`