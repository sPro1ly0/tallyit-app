let _timeoutId;
let _idleCallback = null;
let _notIdleEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
let _THIRTY_MINUTES_IN_MS = 30 * 60 * 1000;

const IdleService = {
  setIdleCallback(idleCallback) {
    // store callback to call when user goes idle
    _idleCallback = idleCallback;
  },
  // user interacts with the page
  resetIdleTimer() {
    // remove any timeouts when user interacts
    clearTimeout(_timeoutId);
    // queue the callback to happen 5 minutes from now
    _timeoutId = setTimeout(_idleCallback, _THIRTY_MINUTES_IN_MS);
  },
  registerIdleTimerResets() {
    // register the resetIdleTimer for events when user interacts with page
    _notIdleEvents.forEach(event => {
      console.log(event);
      document.addEventListener(event, IdleService.resetIdleTimer, true);    
    });
  },
  unRegisterIdleResets() {
    // remove any queued callback and events that will queue callbacks
    clearTimeout(_timeoutId);
    _notIdleEvents.forEach(event => 
      document.removeEventListener(event, IdleService.resetIdleTimer, true)    
    );
  }
};

export default IdleService;