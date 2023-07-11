const url = 'https://dummyjson.com/users'

// fetch data
const fetchFollowers = async () => {
  const response = await fetch(url)
  const data = await response.json()
  const users = Object.values(data)[0]
  return users
}

export default fetchFollowers
