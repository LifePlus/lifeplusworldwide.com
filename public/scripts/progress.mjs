const masthead = document.getElementById('section-1')
const progress = document.getElementById('progress')
const progressBar = document.getElementById('progress-bar')
const classes = ['-translate-y-full', 'opacity-0']

const handleScroll = throttle(() => {
  const rectangle = masthead.getBoundingClientRect()
  let width = '0%'

  // Bar is visible
  if (rectangle.height + rectangle.top < 0) {
    progress.classList.remove(...classes)

    const winScroll = (document.body.scrollTop || document.documentElement.scrollTop) - rectangle.height
    const height = (document.documentElement.scrollHeight - rectangle.height) - (document.documentElement.clientHeight)

    const scrolled = ((winScroll / height) * 100).toPrecision(5)

    width = `${scrolled}%`
  } else { // Bar is hidden
    progress.classList.add(...classes)
  }

  progressBar.style.width = width
}, 100, { leading: true, trailing: true })

handleScroll()
document.addEventListener('scroll', handleScroll)

function throttle (fn, interval, options) {
  var timeoutId = null;
  var throttledFn = null;
  var leading = (options && options.leading);
  var trailing = (options && options.trailing);

  if (leading == null) {
    leading = true; // default
  }

  if (trailing == null) {
    trailing = !leading; //default
  }

  if (leading == true) {
    trailing = false; // forced because there should be invocation per call
  }

  var cancel = function() {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  var flush = function() {
    var call = throttledFn;
    cancel();

    if (call) {
      call();
    }
  };

  var throttleWrapper = function() {
    var callNow = leading && !timeoutId;
    var context = this;
    var args = arguments;

    throttledFn = function() {
      return fn.apply(context, args);
    };

    if (!timeoutId) {
      timeoutId = setTimeout(function() {
        timeoutId = null;

        if (trailing) {
          return throttledFn();
        }
      }, interval);
    }

    if (callNow) {
      callNow = false;
      return throttledFn();
    }
  };

  throttleWrapper.cancel = cancel;
  throttleWrapper.flush = flush;

  return throttleWrapper;
}