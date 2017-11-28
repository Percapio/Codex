$ ->
  $('body').on 'click', '.js-modal-open', (event) ->
    event.preventDefault()
    $('.modal').addClass 'is-open'
    return
  $('body').on 'click', '.js-modal-close', (event) ->
    event.preventDefault()
    $('.modal').removeClass 'is-open'
    return
  return