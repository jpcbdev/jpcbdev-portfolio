new SmoothScroll();

function SmoothScroll(el) {
    var t = this,
        h = document.documentElement;
    el = el || window;
    t.rAF = false;
    t.target = 0;
    t.scroll = 0;
    t.animate = function () {
        t.scroll += (t.target - t.scroll) * 0.1;
        if (Math.abs(t.scroll.toFixed(5) - t.target) <= 0.47131) {
            cancelAnimationFrame(t.rAF);
            t.rAF = false;
        }
        if (el == window) scrollTo(0, t.scroll);
        else el.scrollTop = t.scroll;
        if (t.rAF) t.rAF = requestAnimationFrame(t.animate);
    };
    el.onmousewheel = function (e) {
        e.preventDefault();
        e.stopPropagation();
        var scrollEnd = (el == window) ? h.scrollHeight - h.clientHeight : el.scrollHeight - el.clientHeight;
        t.target += (e.wheelDelta > 0) ? -70 : 70;
        if (t.target < 0) t.target = 0;
        if (t.target > scrollEnd) t.target = scrollEnd;
        if (!t.rAF) t.rAF = requestAnimationFrame(t.animate);
    };
    el.onscroll = function () {
        if (t.rAF) return;
        t.target = (el == window) ? pageYOffset || h.scrollTop : el.scrollTop;
        t.scroll = t.target;
    };
}