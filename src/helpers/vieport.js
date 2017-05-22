import MobileDetect from 'mobile-detect'

export function isMobile(){
  var md = new MobileDetect(window.navigator.userAgent)
  return md.mobile() !== null && md.tablet() !== 'iPad' && md.is('iPhone')
}
