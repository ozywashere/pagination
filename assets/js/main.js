import fetchFollowers from './fetchFollowers.js'
import displayFollowers from './displayFollowers.js'
import paginate from './paginate.js'
import displayButtons from './displayButtons.js'

const title = document.querySelector('h1')
const btnContainer = document.querySelector('.btn-container')

let index = 0
let pages = []

const init = async () => {
  const followers = await fetchFollowers()
  title.textContent = 'Pagination'
  pages = paginate(followers)
  setupUI()
}
const setupUI = () => {
  displayFollowers(pages[index])
  displayButtons(btnContainer, pages, index)
}
//event listeners for buttons
btnContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-container')) return
  if (e.target.classList.contains('btn')) {
    index = parseInt(e.target.dataset.index)
  }
  if (e.target.classList.contains('next-btn') || 'fa-chevron-right') {
    index++
    if (index > pages.length - 1) {
      index = 0
    }
  }
  if (e.target.classList.contains('prev-btn')) {
    index--
    if (index < 0) {
      index = pages.length - 1
    }
  }
  setupUI()
})
//load initial items
window.addEventListener('DOMContentLoaded', init)
