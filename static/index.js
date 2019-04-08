document.addEventListener('DOMContentLoaded', function() {
  window.scroll(0, 0)
  var pages = document.querySelectorAll('section.page'),
    currentPage = 0,
    totalPages = pages.length - 1,
    watchScroll = true

  window.addEventListener('scroll', function() {
    if (watchScroll) {
      if (this.oldScroll < this.scrollY) {
        // currently scrolling down
        if (currentPage < totalPages) {
          handlePageDown()
        }
      } else {
        // currently scrolling up
        if (currentPage > 0) {
          handlePageUp()
        }
      }
    }
    this.oldScroll = this.scrollY
  })

  function handlePageDown() {
    pages[currentPage].classList.add('down-scroll')
    nextPage = currentPage + 1
    resetScroll()
    setCurrentPage(nextPage)
  }

  function handlePageUp() {
    pages[currentPage - 1].classList.remove('down-scroll')
    nextPage = currentPage - 1
    resetScroll()
    setCurrentPage(nextPage)
  }

  function resetScroll() {
    setTimeout(function() {
      watchScroll = false
      window.scroll(0, 10)
    }, 100)
  }

  function setCurrentPage(setPageAs) {
    setTimeout(function() {
      currentPage = setPageAs
      watchScroll = true
    }, 400)
  }
})
