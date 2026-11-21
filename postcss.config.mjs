import postcssJitProps from 'postcss-jit-props';
import openProps from 'open-props';

export default {
  plugins: [
    postcssJitProps(openProps)
  ]
};
