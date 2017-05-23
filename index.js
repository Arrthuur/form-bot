const recastai = require('recastai')

const client = new recastai.request('fda27bc4059a879305764f4bc65abc62', 'en')

client.converseText('hello')
  .then(function(res) {
    if (res.action) { console.log('Action: ', res.action.slug) }
    const reply = res.reply()
    console.log('Reply: ', reply)
  })