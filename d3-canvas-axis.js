const drawXAxis = (ctx, scale) =>  {
    let height = this.state.height/2, 
        tick_height = 6,
        text_width = 6
    let x_tick = scale.ticks(10), 

    x_tickFormat = scale.tickFormat(12)
    
    x_tick.forEach((d) => {

        ctx.beginPath()
        ctx.moveTo(scale(d), height)
        ctx.lineTo(scale(d), height+ tick_height)
        ctx.stroke() 

    })

    ctx.fillStyle = '#fff'
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    x_tick.forEach((d) => {
      ctx.fillText(x_tickFormat(d),scale(d)- text_width, height+ tick_height*3);
    });

}

const drawYAxis = (ctx, scale) => {
    let width = this.visMargin, 
        tick_height = 6,
        text_width = 6
    // console.log(scale.range())
    scale.domain().forEach((d) => {

        ctx.beginPath()
        ctx.moveTo(width, scale(d))
        ctx.lineTo(width + tick_height, scale(d))
        ctx.stroke() 

    })

    ctx.fillStyle = '#fff'
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    scale.domain().forEach((d) => {
      ctx.fillText(d, width + tick_height, scale(d));
    });

}