const express = require('express')

const app = express()

const users = [
  {
    id: 1,
    name: 'Zach'
  },
  {
    id: 2,
    name: 'Thea'
  }
]

app.get('/users', (request, response) => {
  response.status(200).json(users)
})

app.get('/users/:id', (request, response) => {
  const id = parseInt(request.params.id)

  // try to find a user with that id
  const user = users.find(user => user.id === id)

  // if that user doesn't exist, send "not found"
  if (!user) {
    response.status(404).json({
      reason:
        'User does not exist in the database. Maybe they deleted their account?'
    })
  }

  // if that user does exist, send it back
  else {
    response.status(200).json(user)
  }
})

app.listen(6789)

console.log('Listening on port 6789')
