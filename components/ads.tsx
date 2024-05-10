function EnableGoogleAdsense() {
  const head = document.getElementsByTagName('head')[0]
  const scriptElement = document.createElement(`script`)
  scriptElement.type = `text/javascript`
  scriptElement.async = true
  scriptElement.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6076347298102292`
  scriptElement.crossOrigin = 'anonymous'
  head.appendChild(scriptElement)
}

export default EnableGoogleAdsense
