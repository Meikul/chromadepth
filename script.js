$(document).ready(function () {
  const minRadius = 100;
  const maxRadius = 150;
  const deltaRadius = maxRadius - minRadius;
  $('.exp').mousemove(function (e) {

    const mouseX = e.pageX / $(document).width();
    const mouseY = e.pageY / $(document).height();

    const radDiffX = mouseX * deltaRadius;
    const radDiffY = mouseY * deltaRadius;

    let rightRad = minRadius + radDiffX;
    let leftRad = maxRadius - radDiffX;
    let downRad = minRadius + radDiffY;
    let upRad = maxRadius - radDiffY;

    const colorRangeX = mouseX * 255;
    const colorRangeY = mouseY * 255;
    const invColorRangeX = 255 - colorRangeX;
    const invColorRangeY = 255 - colorRangeY;

    $('.exp .circle-left').css({width: leftRad, height: leftRad, background: `rgb(${invColorRangeX}, 0, ${colorRangeX})`});
    $('.exp .circle-right').css({width: rightRad, height: rightRad, background: `rgb(${colorRangeX}, 0, ${invColorRangeX})`});
    $('.exp .circle-up').css({width: upRad, height: upRad, background: `rgb(${invColorRangeY}, 0, ${colorRangeY})`});
    $('.exp .circle-down').css({width: downRad, height: downRad, background: `rgb(${colorRangeY}, 0, ${invColorRangeY})`});

    // const specX = spectrum(mouseX);
    // const specY = spectrum(mouseY);

    // const specXOut = spectrum(mouseX + 0.3);

    // $('.exp .circle-left').css({width: leftRad, height: leftRad, background: `rgb(${specX.r}, ${specX.g}, ${specX.b})`});
    // $('.exp .circle-right').css({width: rightRad, height: rightRad, background: `rgb(${specX.b}, ${specX.g}, ${specX.r})`});
    // $('.exp .circle-up').css({width: upRad, height: upRad, background: `rgb(${specY.r}, ${specY.g}, ${specY.b})`});
    // $('.exp .circle-down').css({width: downRad, height: downRad, background: `rgb(${specY.b}, ${specY.g}, ${specY.r})`});
  })
})

function spectrum(t) {
  t = t * 2;
  const tr = (t < 1) ? 1 - t : 0;
  const tg = (t < 1) ? t : 2 - t;
  const tb = (t > 1) ? t - 1 : 0;

  return {
    r: 255 * tr,
    g: 175 * tg,
    b: 255 * tb,
  };
}