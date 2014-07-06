define("javascripts/lib/main.min",
[
  "browserDetect"
],
(
  BrowserDetect
) ->
  $(window).resize () ->
    console.log "Window Resized"
)

