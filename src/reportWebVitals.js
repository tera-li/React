const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getLCP(onPerfEntry);  // 视窗最大可见图片或者文本块的渲染时间：Dom最长的渲染时间，表示页面速度指标
      getFID(onPerfEntry);  // 用户与页面首次交互时的响应延迟：点击事件等，交互响应反馈速度指标
      getCLS(onPerfEntry);  // 累计位移偏移（突然插入一块图片，或动态插入一块内容）从而影响用户体验：页面的稳定指标
      getTTFB(onPerfEntry); // 网站接收到服务器返回页面字节，收到第一个字节的时间：网站响应时间
      getFCP(onPerfEntry);  // 页面第一次绘制像素的时间
    });
  }
};

export default reportWebVitals;
