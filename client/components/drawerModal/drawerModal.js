// components/drawerModal/drawerModal.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShow:{
      type: Boolean,
      value: false,
      observer(newVal){
        console.log(newVal);
        this.animations(newVal);
      }
    }
  },

  data: {
    show: false,
    showBg: false,
    animationData: null
  },

  methods: {
    hideModal() {
      this.setData({
        isShow: false
      })
    },

    /**
     * 动画处理
     */
    animations(bool) {

      // 创建动画
      if (!this.animation) {
        this.animation = wx.createAnimation({
          duration: 400,
          timingFunction: 'ease',
        })
      }

      // show
      if (bool) {
        this.setData({
          show: true
        })
        this.animation.translateY(0).step();
        // 背景过渡，防止动画效果过于突兀
        wx.nextTick(()=>{
          this.setData({
            showBg: bool
          })
        })
      } else {
        this.setData({
          showBg: false
        })
        this.animation.translateY('100%').step();
        // hide
        this.time && (clearTimeout(this.time));
        this.time = setTimeout(() => {
          this.setData({
            show: false
          })
        }, 400)
      }
      setTimeout(() => {
        this.setData({
          animationData: this.animation.export()
        })
      }, 0)
      // wx.nextTick(()=>{
      //   // 导出动画
      //   this.setData({
      //     animationData: this.animation.export()
      //   })
      // })
    }
  }
})
