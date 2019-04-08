document.addEventListener('DOMContentLoaded', function() {
  var slideDurationSetting = 800,
    currentSlideNumber = 0,
    totalSlideNumber = document.getElementsByClassName('page').length,
    ticking = false

  window.onscroll = throttle(function() {
    if (!ticking) {
      if (this.oldScroll > this.scrollY) {
        ticking = true
        if (currentSlideNumber !== 0) {
          currentSlideNumber--
          previousItem()
        }
        slideDurationTimeout(slideDurationSetting)
      } else {
        ticking = true
        if (currentSlideNumber !== totalSlideNumber - 1) {
          currentSlideNumber++
          nextItem()
        }
        slideDurationTimeout(slideDurationSetting)
      }
    }
    window.scrollTo(0, 1)
    this.oldScroll = this.scrollY
  }, 100)

  function slideDurationTimeout(slideDuration) {
    setTimeout(function() {
      ticking = false
    }, slideDuration)
  }

  function nextItem() {
    const $previousSlide = document.getElementsByClassName('page')[
      currentSlideNumber - 1
    ]
    $previousSlide.classList.remove('up-scroll')
    $previousSlide.classList.add('down-scroll')
  }

  function previousItem() {
    const $currentSlide = document.getElementsByClassName('page')[
      currentSlideNumber
    ]
    $currentSlide.classList.remove('down-scroll')
    $currentSlide.classList.add('up-scroll')
  }
})
