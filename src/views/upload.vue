<template>
  <div class="box">
    <h1>Upload</h1>

    <div class="btn-box">
      <input class="input" type="file" accept="image/*" ref="file" @change="changeFile">
      <button class="btn">上传图片</button>
      <button class="btn" @click="changeSize(1)">放大</button>
      <button class="btn" @click="changeSize(0)">缩小</button>
      <button class="btn" @click="saveImg">保存图片</button>
    </div>

    <div class="img-view" @touchstart="touchstart" @touchmove="touchmove">
      <canvas :width="canvasSize" :height="canvasSize" ref="canvas"></canvas>
      <div ref="mask" class="mask" :style="{width:maskSize + 'px', height: maskSize + 'px'}"></div>
    </div>
    <img v-if="splitImg" :src="splitImg" />
  </div>
</template>

<script>
  export default {
    name: "upload",
    data(){
      return{
        canvasSize: 400,
        imageWidth: 0,
        imageHeight:0,
        imgX:0,
        imgY:0,
        maskSize: 250,
        splitImg: ''
      }
    },
    methods: {
      saveImg(){
        const {myImage, maskSize} = this
        console.dir(this.$refs.mask)
        const {offsetLeft, offsetTop, clientHeight, clientWidth} = this.$refs.mask
        if(!myImage) return;

      //  获取制定区域的像素
        let imageData = this.CTX.getImageData(offsetLeft, offsetTop, clientWidth, clientHeight);
        let canvas2 = document.createElement('canvas'),
          canvasCtx = canvas2.getContext('2d');
        canvas2.width = canvas2.height = maskSize;
        // 像素点填充canvas
        canvasCtx.putImageData(imageData, 0, 0, 0,0,maskSize, maskSize);
        // 生成图片 base64
        this.splitImg = canvas2.toDataURL('image/png');
      },
      touchstart(e){
        console.dir(e)
        const {clientX, clientY} = e.changedTouches[0];
        this.startX = clientX;
        this.startY = clientY;
      },
      touchmove(e){
        const {clientX, clientY} = e.changedTouches[0];
        const {startX, startY} = this
        const changeX = clientX - startX;
        const changeY = clientY - startY;
        if(Math.ceil(changeX) > 10 || Math.ceil(changeY) > 10){
          this.imgX += changeX;
          this.imgY += changeY;
          this.drawImage();
          this.startX = clientX;
          this.startY = clientY;
        }
      },
      changeFile(){
        let file = this.$refs.file.files[0];
        console.dir(this.$refs.file)
        if(!file) return;
        // FileReader
        let fileExample = new FileReader();
        fileExample.readAsDataURL(file);
        fileExample.onload = e => {
          console.dir(e)
        // 创建新图片
          this.myImage = new Image();
          this.myImage.src = e.target.result;
          const {width, height} = this.myImage;
          console.log(width,'**', height)
          this.myImage.onload = _ => {
            // image's width and height
            const {width, height} = this.myImage;
            // 安装图片比例计算宽gao
            let scale = 1;
            const {canvasSize} = this;
            if(width > height){
              scale = width/canvasSize;
              this.imageWidth = canvasSize;
              this.imageHeight = height/scale;
            }else{
              scale = height/canvasSize;
              this.imageHeight = canvasSize;
              this.imageWidth = width/scale
            }
            console.log(this.imageWidth, '**', this.imageHeight,'**', scale)

            // this.imageWidth = width;
            // this.imageHeight = height
            this.drawImage();
          }
        }
      },
      changeSize(flag){
        let {imageWidth, imageHeight} = this;
        const scale = imageWidth/imageHeight, scaleW = 20, scaleH = scaleW/scale;
        console.log(this.imageWidth,this.imageHeight)

        if(flag){
          this.imageWidth += scaleW;
          this.imageHeight += scaleH
        }else{
          this.imageWidth -= scaleW;
          this.imageHeight -= scaleH
        }
        console.log(this.imageWidth,this.imageHeight)
        this.drawImage();
      },
      drawImage(){
        this.CTX = this.$refs.canvas.getContext('2d');
        let {CTX, myImage, imageWidth, imageHeight, canvasSize} = this
        CTX.clearRect(0,0, canvasSize, canvasSize);
        // console.log(imageWidth, imageHeight );
        CTX.drawImage(myImage, 0, 0, imageWidth, imageHeight )
      }
    }
  }
</script>

<style lang="less" scoped>
.btn-box{
  position: relative;
  .btn{
    width: 100px;
    height:40px;
  }
  .input{
    position: absolute;
    left: 0;
    top: 0;
    width: 100px;
    height: 40px;
    z-index: 2;
    opacity: 0;

  }
}
.img-view{
  position: relative;
  .mask{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    border: solid 1px #ccc;
  }
  canvas{
    width: 400px;
    height: 400px;
    border: solid 1px #ccc;
  }
}
</style>
