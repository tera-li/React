import constant from "./constant";

export default {
  increase: () => ({ type: constant.INCREASE }),
  decrease: () => ({ type: constant.DECREASE }),
  typeOpen: () => ({ type: constant.TYPE_OPEN }),
  typeClose: () => ({ type: constant.TYPE_CLOSE }),
};
