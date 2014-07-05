#DETECT BROWSER/VERSION
get_browser = ->
  N = navigator.appName
  ua = navigator.userAgent
  tem = undefined
  M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i)
  M[2] = tem[1]  if M and (tem = ua.match(/version\/([\.\d]+)/i)) isnt null
  M = (if M then [
    M[1]
    M[2]
  ] else [
    N
    navigator.appVersion
    "-?"
  ])
  M[0]

get_browser_version = ->
  N = navigator.appName
  ua = navigator.userAgent
  tem = undefined
  M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i)
  M[2] = tem[1]  if M and (tem = ua.match(/version\/([\.\d]+)/i)) isnt null
  M = (if M then [
    M[1]
    M[2]
  ] else [
    N
    navigator.appVersion
    "-?"
  ])
  M[1]

#Detech Mobile
onMobile = false
isMobile =
  Android: ->
    navigator.userAgent.match /Android/i

  BlackBerry: ->
    navigator.userAgent.match /BlackBerry/i

  iOS: ->
    navigator.userAgent.match /iPhone|iPad|iPod/i

  Opera: ->
    navigator.userAgent.match /Opera Mini/i

  Windows: ->
    navigator.userAgent.match /IEMobile/i

  any: ->
    isMobile.Android() or isMobile.BlackBerry() or isMobile.iOS() or isMobile.Opera() or isMobile.Windows()
onMobile = true if isMobile.any()

browser =
  client: get_browser()
  version: () -> get_browser_version().split(".",1).toString()
  mobile: onMobile
  setPageClass: () ->
    $('body').addClass @.client
    $('body').addClass @.client.concat(@.version())

#Doc Ready
$(document).ready () ->
  browser.setPageClass()
