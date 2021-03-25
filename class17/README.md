# Read: 11 - Assorted Topics

## Content

- [HTML & CSS](#html--css)
  - [Images](#images)
  - [Practical Information](#practical-information)
- [Video and Audio APIs](#video-and-audio-apis)
  - [TLDR](#tldr)
- [Reference](#reference)

***

## HTML & CSS

### Images

The width and height properties in CSS can be used to adjust the size of an image. Since the HTML and CSS code always loads before the files, specifying image sizes makes pages load faster. Telling the browser how much room to leave for an image causes the remainder of the website to render without having to wait for the image to download.

[Back to Content](#content)

### Practical Information

Any website should be created with the target user in mind, rather than just for you or the site creator. It's a good idea to ask any questions about the types of users who may be involved in your pages. In fact, it is unlikely to be of interest to anyone. And if the platform has a broad appeal, the demographics should be considered.

Make a list of the reasons why people will visit your website. The imaginary guests you created in the previous phase can now be assigned tasks. Gordon, for example, wants to buy a tennis racquet for his girlfriend from your website. Molly needs to know if a doggie daycare facility is appropriate for her. When Jasper visited Sydney, Australia, he had a poor hotel encounter.

Note: All this helps in attracting users to the site because of the presence of the media, but you need to coordinate them well depending on UI/UX design roles

[Back to Content](#content)

## Video and Audio APIs

The content below is an excerpt from the article. [001](#001)

## TLDR

HTML5 comes with elements for embedding rich media in documents - and - which in turn come with their own APIs for controlling playback, seeking, etc. As we showed in Video and audio content, a typical implementation looks like this: This creates a video player inside the browser like so: You can review what all the HTML features do in the article linked above; for our purposes here, the most interesting attribute is , which enables the default set of playback controls. Just for fun, we are providing two reporting mechanisms - a containing the elapsed time in minutes and seconds, and an extra that we will use to create a horizontal indicator bar that gets longer as the time elapses. If it is paused, we set the data-icon attribute value on the play button to "u", which is a "paused" icon, and invoke the `HTMLMediaElement.play()` method to play the media. If we didn't do this last step, the video would just keep rewinding forever. Add the following `addEventListener()` line just below the others: Now to define the `setTime()` function.

[Back to Content](#content)

## Reference

### 001

Mozilla.org. (2021). Video and Audio APIs - Learn web development | MDN. [online] Available at: [link](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs) [Accessed 25 Mar. 2021].

[Back to Content](#content)

***

[⇐ Home Page](../README.md)