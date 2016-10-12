# fis-parser-babel6

fis parser babel6

## Usage

```js
/**
 * fis
 */

 fis.config.set('project.fileType.text', 'es');
 fis.config.set('modules.parser.es', 'babel6');
 fis.config.set('roadmap.ext.es', 'js');

 /**
  * fis3
  */

 fis.set('project.fileType.text', 'es');
 fis.match('server/**.es', {
     parser: fis.plugin('babel6'),
     rExt: 'js'
 });
```
