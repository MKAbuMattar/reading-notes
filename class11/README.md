# Read: 05 - HTML Images; CSS Color & Texts

## Content

- [HTML & CSS](#html--css)
  - [Images](#images)
  - [Color](#color)
  - [Text](#text)
- [JPEG vs PNG vs GIF](#jpeg-vs-png-vs-gif)
  - [Compression](#compression)
    - [JPEG Compression](#jpeg-compression)
    - [PNG Compression](#png-compression)
    - [GIF Compression](#gif-compression)
  - [Transparency](#transparency)
    - [JPEG Transparency](#jpeg-transparency)
    - [PNG Transparency](#png-transparency)
    - [GIF Transparency](#gif-transparency)
  - [Colours](#colours)
  - [Animation](#animation)
- [Reference](#reference)

***

## HTML & CSS

### Images

There are many explanations that an image should be shown on a website. You may have a logo, a snapshot, a picture, a diagram, or a illustration.

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Images</title>
</head>

<body>
  <img src="./img/profile.jpg" alt="My Profile">
</body>

</html>
```

`<img>` The img> element is used to insert an image into the page. This is a non-existent function (which means there is no closing tag). It must exhibit the following two characteristics: `src` This instructs the browser about where to search for the image file. This is typically a relative URL to a picture on your own website. `alt` This gives you a text summary of the picture, which you can read if you can't see it.

[Back to Content](#content)

### Color

This part has been discussed previously at [Read: 06b - Design web pages with CSS](../class06/README.md)

### Text

This part has been discussed previously at [Read: 02 - HTML Text, CSS Introduction, and Basic JavaScript Instructions](../class08/README.md/#text)

## JPEG vs PNG vs GIF

The content below is an excerpt from the article. [1](#001)

Only the three most widely used image formats in websites and smartphone apps will be discussed in this article. Together, these three formats account for more than 95% of all photographs loaded on websites. Each of them differs significantly from the others, making each one ideal for a particular use case.

[Back to Content](#content)

### Compression

The size of an image is largely determined by the format and encoding used. There are two types of compression: lossless and lossy. It is possible to restore the original image from the compressed image using lossless compression. Lossy compression causes permanent data loss at the expense of decreased consistency. Compression artifact refers to the apparent loss of image clarity or distortion.

[Back to Content](#content)

#### JPEG Compression

JPG compression operates by averaging out the colors of pixels in close proximity. It can achieve compression ratios of 1:10 with no discernible output loss. It works well in portraits and drawings of natural scenes with seamless color and intensity variations.

[Back to Content](#content)

#### PNG Compression

PNG (Portable Network Graphics) is a lossless image format that uses the DEFLATE compression algorithm. There are no data losses or compression artifacts in the image during compression. PNG is not a reasonable option for saving or transferring high-resolution digital images.

[Back to Content](#content)

#### GIF Compression

If the image incorporates animations, gif images are typically used. The encoding of PNG files is around 5–25% better than that of GIF files. GIF is also available on all big smartphones.

[Back to Content](#content)

### Transparency

The term "transparency" refers to something that is absolutely imperceptible. Logos and icons are commonly expected to be placed on backgrounds of different colors. The of these logos should be desired.

[Back to Content](#content)

#### JPEG Transparency

Since photographs don't endorse accountability, they can't be included in these circumstances.

[Back to Content](#content)

#### PNG Transparency

Transparency can be achieved in photographs in two ways: by adding an alpha channel that makes partial transparency or by declaring a single color clear (index transparency). The edges fade seamlessly into the background thanks to partial clarity. Only index transparency is supported by PNG8 images (discussed in the "Colours" section below), while alpha channel transparency is supported by PNG24 images.

[Back to Content](#content)

#### GIF Transparency

Transparency is allowed in photographs by declaring a single color in the color palette as transparent (index transparency). The edges (especially rounded or over-detailed edges) suffer from a poor jagged effect due to the lack of partial transparency. Though this can be mitigated to some degree with dithering, GIF is unsuitable for images with transparent backgrounds, particularly with improved PNG support.

[Back to Content](#content)

### Colours

JPEG pictures have a color range of about 16 million. This is what makes them perfect for preserving natural-scene images. PNG files are divided into two types: PNG8 and PNG24. PNG8 can store up to 256 colors, while PNG24 can store up to 16 million. The number of colors in a GIF image is limited to 256. If index transparency is used, one of these 256 colors is rendered translucent, while the other 255 remain opaque.

[Back to Content](#content)

### Animation

Only GIF supports animation within these three formats. Because of this, the GIF format is ideal for delivering entertaining advertisements and banners. The use of GIF format for memes has increased recently, thanks to companies including Tumblr, 9Gag, and Giphy. These are some of the main distinctions between JPEG, PNG, and GIF, the three most common image formats for the web.

[Back to Content](#content)

## Reference

##### 001

Rahul Nanwani (2016). JPEG vs PNG vs GIF — which image format to use and when? [online] Medium. [Available at:](https://blog.imagekit.io/jpeg-vs-png-vs-gif-which-image-format-to-use-and-when-c8913ae3e01d) [Accessed 16 Mar. 2021].

[Back to Content](#content)

***

[⇐ Home Page](../README.md)