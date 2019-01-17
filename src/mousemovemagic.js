/**
 * @author Malte Zoudlik ma.z0u
 * @description Mobile Friendly Mouse Moving Carrousel
 * @param {String} selector
 * @param {Int} percentageOffset
 */

 var Mousemover = function(selector, percentageOffset) {
    var	container = document.querySelector(selector),
        images = container.children,
        fullWidth = getFullWidth(images),
        visibleWidth = container.clientWidth,
        percentageOffset = (percentageOffset == "undefined") ? 0 : percentageOffset,
        minLeftPos = 0 - percentageOffset,
        maxRightPos = 100 + percentageOffset;

    window.addEventListener('resize', function() {
        visibleWidth = container.clientWidth;
        fullWidth = getFullWidth(images);
    });
    
    function moveImages(e, init) {
        if (init === true) {
            var offset = (fullWidth - visibleWidth) * ((((0 / visibleWidth * 100) * (maxRightPos - minLeftPos) / 100) + minLeftPos) / 100);
        } else {
            var offset = (fullWidth - visibleWidth) * ((((e.pageX / visibleWidth * 100) * (maxRightPos - minLeftPos) / 100) + minLeftPos) / 100);
        }
        [].forEach.call(images, function(img) {
            img.style.transform = "translateX("+ -offset +"px)";
        });
    }
    function getFullWidth(elements) {
        var width = 0;
        [].forEach.call(elements, function(elm) {
            width += elm.clientWidth;
        });
        return width;
    }
		this.kill = function() {
			container.removeEventListener('mousemove', moveImages);
			container.classList.add('mmmKilled');
		}
		this.init = function() {
			container.addEventListener('mousemove', moveImages);
			container.classList.remove('mmmKilled');
		}
    moveImages(window, true);
    container.addEventListener('mousemove', moveImages);
};