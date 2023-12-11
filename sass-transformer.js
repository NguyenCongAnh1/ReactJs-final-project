// sass-transformer.js
import sass from 'sass';

export default {
  process(src, filename) {
    const result = sass.renderSync({
      data: src,
      file: filename,
      outputStyle: 'compressed',
    });
    return {
      code: result.css.toString(),
    };
  },
};
