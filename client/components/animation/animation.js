// components/orderSelect/orderSelect.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isType: {
      type: String,
      value: 'bottom' /* bottom为底部往上显示隐藏，center为中部显示隐藏，top为顶部往下显示隐藏 */
    },
    isAutoHide: {              /* 是否自动隐藏 */
      type: Boolean,
      value: false
    },
    isCloseHide: { /* 是否隐藏背景 */
      type: Boolean,
      value: false
    },
    isHide: {
      type: Boolean,
      value: true,
      observer(newVal) {
        this.createAnimation(newVal);
        if (this.timeout) clearTimeout(this.timeout);
        if (this.data.isAutoHide && !newVal) {
          this.timeout = setTimeout(() => {
            this.setData({
              isHide: true
            })
          }, 3000);
        }
      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    animation: null,
    show: false,
    showBg: false
  },
  /**
   * 组件的方法列表
   */
  methods: {
    /* 动画 */
    createAnimation(bool) {
      if (!this.animation) {
        this.animation = wx.createAnimation({
          duration: 400,
          timingFunction: 'ease'
        })
      }
      if (!bool) {
        /* 显示 */
        this.setData({
          show: true
        })
        wx.nextTick(()=>{
          this.setData({
            showBg: true
          })
        })
        this.data.isType != 'center' && this.animation.translateY(0).step();
        this.data.isType === 'center' && this.animation.scale(1).opacity(1).step();
      } else {
        this.setData({
          showBg: false
        })
        /* 隐藏 */
        this.data.isType != 'center' && this.animation.translateY(this.data.isType === 'top' ? '-100%' : '100%').step();
        this.data.isType === 'center' && this.animation.scale(0.3).opacity(0).step();
        setTimeout(() => {
          this.setData({
            show: false
          })
        }, 400);
      }
      wx.nextTick(()=>{
        this.setData({
          animation: this.animation.export()
        })
      })
    },
    /* 关闭 */
    bindClose() {
      if(this.data.isType === 'center') return;
      this.setData({
        isHide: true
      })
    },
    touchmove(ev) {
      console.log(ev);

    }
  }
})
