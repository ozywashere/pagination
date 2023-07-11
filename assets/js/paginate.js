const paginate = (followers) => {
  //items per page
  const itemsPerPage = 12
  //number of pages
  const numberOfPages = Math.ceil(followers.length / itemsPerPage)

  //create new array with the number of pages
  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    //starting index
    const start = index * itemsPerPage
    //return slice of followers
    return followers.slice(start, start + itemsPerPage)
  })
  return newFollowers
}

export default paginate
