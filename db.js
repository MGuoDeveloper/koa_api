const mongoose = require('mongoose')

const initDB = () => {
	mongoose.connect(
		'mongodb://rootadmin:mg2019@ds025762.mlab.com:25762/koapi',
		{useNewUrlParser: true}
	)

	mongoose.connection.once('open', () => {
		console.log('connected to database')
	})
}

module.exports = initDB
