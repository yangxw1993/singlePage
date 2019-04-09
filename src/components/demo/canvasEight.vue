<template>
  <div class="canvas-wrapper">
    <h3>{{msg}}</h3>
    <section>{{section1}}</section>
    <section>{{section2}}</section>
    <div class="canvas-wrapper">
      <canvas id="myCanvas" width="500" height="500"></canvas>
    </div>
  </div>
</template>

<script>
  export default {
    name: "canvasEight",
    data(){
      return{
        msg: 'canvas',
        section1: '先天八卦：乾一正北，兑二西北，离三正西，震四西南，巽五东北，坎六正东，艮七东南，坤八正南,乾三连，坤六断，震仰盂，艮覆碗，离中虚，坎中满，兑上缺，巽下断。',
        section2: '乾三连西北开天，坤六断西南八地。兑上缺西方双泽，巽下断东南无风。艮覆碗东北齐山；震仰孟东方四雷。离中虚南方真火；坎中满北方六水。'
      }
    },
    created: function(){

    },
    mounted: function(){
      this.draw()

    },
    methods:{
      draw(){
        const circle = {
          x: 250, // X 坐标
          y: 250, // Y 坐标
          r: 100, // 半径
          PI: Math.PI,
          color:{
            yin: '#fff',
            yang: '#000'
          }
        };
        let myCanvas = document.getElementById('myCanvas');
        let ctx = myCanvas.getContext('2d');
        // 绘制空心圆

        ctx.beginPath();
        ctx.fillStyle = circle.color.yang;
        ctx.arc(circle.x, circle.y, circle.r, 0, circle.PI * 2);
        ctx.fill();
        ctx.stroke();
        // 绘制半黑半白
        ctx.fillStyle = circle.color.yin;
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.r, circle.PI * 3/2, circle.PI / 2);
        ctx.fill();
        // 小半圆，半黑半白
        ctx.fillStyle = circle.color.yin;
        ctx.beginPath();
        ctx.arc(circle.x, circle.y - circle.r/2, circle.r/2, 0, circle.PI * 2);
        ctx.fill();
        // 小半圆，半黑半白
        ctx.fillStyle = circle.color.yang;
        ctx.beginPath();
        ctx.arc(circle.x, circle.y + circle.r/2, circle.r/2, 0, circle.PI * 2);
        ctx.fill();
        // 绘制黑白里面的黑白球
        ctx.fillStyle = circle.color.yin;
        ctx.beginPath();
        ctx.arc(circle.x, circle.y + circle.r/2, circle.r/8, 0, circle.PI * 2);
        ctx.fill();

        ctx.fillStyle = circle.color.yang;
        ctx.beginPath();
        ctx.arc(circle.x, circle.y - circle.r/2, circle.r/8, 0, circle.PI * 2);
        ctx.fill()
      }
    }
  }
</script>

<style scoped lang="scss">
  .canvas-wrapper{
    h3{
      text-align: center;
    }
    .canvas-wrapper{
      margin: 20px auto;
      width: 500px;
      height: 500px;
    }
    canvas{
      width: 100%;
      height: 100%;
      border: solid 1px #ccc;
      /*background: #ccc;*/
    }
  }
</style>
