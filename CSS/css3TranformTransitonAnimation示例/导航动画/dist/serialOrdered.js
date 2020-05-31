@import "mixins/mixins";
@import "common/var";

%size {
  width: 100%;
  height: 100%;
}

@include b(image) {
  position: relative;
  display: inline-block;
  overflow: hidden;

  @include e(inner) {
    @extend %size;
    vertical-align: top;

    @include m(center) {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
    }
  }

  @include e(placeholder) {
    @extend %size;
    background: $--background-color-base;
  }

  @include e(error) {
    @extend %size;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    background: $--background-color-base;
    color: $--color-text-placeholder;
    vertical-align: middle;
  }

  @include e(preview) {
    cursor: pointer;
  }
}


@include b(image-viewer) {


  @include e(wrapper) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  @include e(btn) {
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    opacity: .8;
    cursor: pointer;
    box-sizing: border-box;
    user-select: none;
  }

  @include e(close) {
    top: 40px;
    right: 40px;
    width: 40px;
    height: 40px;
    font-size: 40px;
  }

  @include e(canvas) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @include e(actions) {
    left: 50%;
    bottom: 30px;
    transform: translateX(-50%);
    width: 282px;
    height: 44px;
    padding: 0 23px;
    background-color: #606266;
    border-color: #fff;
    border-radius: 22px;

    @include e(actions__inner) {
      width: 100%;
      height: 100%;
      text-align: j