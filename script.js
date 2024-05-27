document.addEventListener("DOMContentLoaded", function () {
    function positionArrow(arrowId, startElemId, endElemId) {
        const startElem = document.getElementById(startElemId);
        const endElem = document.getElementById(endElemId);
        const arrow = document.getElementById(arrowId);

        const startRect = startElem.getBoundingClientRect();
        const endRect = endElem.getBoundingClientRect();

        const startX = startRect.right + window.pageXOffset - 5; // Adjust offset
        const startY = startRect.top + (startRect.height / 2) + window.pageYOffset;
        const endX = endRect.left + window.pageXOffset + 5; // Adjust offset
        const endY = endRect.top + (endRect.height / 2) + window.pageYOffset;

        arrow.setAttribute('x1', startX);
        arrow.setAttribute('y1', startY);
        arrow.setAttribute('x2', endX);
        arrow.setAttribute('y2', endY);
    }

    function positionAllArrows() {
        positionArrow('arrow1', 'img1', 'img2');
        positionArrow('arrow2', 'img2', 'img3');
        positionArrow('arrow3', 'img3', 'img4');
    }

    positionAllArrows();

    window.addEventListener("resize", function () {
        positionAllArrows();
    });

});
