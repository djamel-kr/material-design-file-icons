<p align="center">
  <img src="https://www.dl.dropboxusercontent.com/s/hg6p3zd2vm23h6l/logo.png?dl=0" alt="Material Design Icons logo" width="72">
</p>

<h2 align="center">MD File Icons</h3>

<p align="center">
  Material Design Icons Based On CSS
</p>

## Quick start

- [Download the latest release.](https://github.com/djamel-kr/md-file-icons/archive/v1.0.0.zip)
- Clone the repo: `git clone https://github.com/djamel-kr/md-file-icons.git`
- Install with [npm](https://www.npmjs.com/): `npm install md-file-icons`

## Structure

```text
md-file-icons/
└── dist/
    └── md-file-icons.css
```

## Documentation

Import CSS file 
 ```html 
<link rel="stylesheet" href="path_folder/md-file-icons/dist/md-file-icons.css"/>
``` 
 
Add the class `.md-file`
 ```html 
<div class="md-file"></div>
```

![](https://www.dl.dropboxusercontent.com/s/rszhm9voo3230un/file.png?dl=0)

Add an inner text to the element
  ```html 
<div class="md-file">TXT</div>
```
![](https://www.dl.dropboxusercontent.com/s/yp8q1sjea145pkn/file-text.PNG?dl=0)
  
You can use an icon, check [Fontawesome] 
 ```html 
<div class="md-file"><i class="fas fa-music"></i></div>
```
![](https://www.dl.dropboxusercontent.com/s/53v2qpj94cmu16l/file-icon.PNG?dl=0)

For different sizes, use these classes
  ```css 
.md-file-sm | default | .md-file-lg | .md-file-xl
```
![](https://www.dl.dropboxusercontent.com/790nno6rqytkixu/file-sizes.PNG?dl=0)

For different colors, use these classes
  ```css 
.md-file-red
.md-file-pink
.md-file-purple
.md-file-deep-purple
.md-file-indigo
.md-file-blue
.md-file-light-blue
.md-file-cyan
.md-file-teal
.md-file-green
.md-file-light-green
.md-file-lime
.md-file-yellow
.md-file-amber
.md-file-orange
.md-file-deep-orange
.md-file-brown
.md-file-grey
.md-file-blue-grey
  ```
  ![](https://www.dl.dropboxusercontent.com/s/usmupq8qkwl4bmx/file-color.PNG?dl=0)
  
## LICENSE
  
  - Copyright (c) 2019 The MD File Icons Author - [MIT License]
 
 [Fontawesome]: https://fontawesome.com
 [MIT License]: https://github.com/djamel-kr/md-file-icons/blob/master/LICENSE 
