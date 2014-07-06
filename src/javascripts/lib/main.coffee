define("javascripts/lib/main.min",
[
  "browserDetect"
],
(
  BrowserDetect
) ->

  setTimeout ( ->
    $(window).scrollTop 0, 0
  ), 0

  $(window).resize () ->
    console.log "Window Resized"
)

