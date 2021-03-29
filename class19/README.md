# Read: 13 - Local Storage

## Content

- [TLDR](#tldr)
- [The Past, Present, and Future of Local Storage for Web Applications](#the-past-present-and-future-of-local-storage-for-web-applications)
  - [A Brief History Of Local Storage Hacks Before HTML5](#a-brief-history-of-local-storage-hacks-before-html5)
  - [Introducing HTML5 Storage](#introducing-html5-storage)
  - [Tracking Changes To The HTML5 Storage Area](#tracking-changes-to-the-html5-storage-area)
  - [Using HTML5 Storage](#using-html5-storage)
  - [Limitations In Current Browsers](#limitations-in-current-browsers)
  - [HTML5 Storage In Action](#html5-storage-in-action)
  - [Beyond Named Key-Value Pairs: Competing Visions](#beyond-named-key-value-pairs-competing-visions)
- [Reference](#reference)

***

## TLDR

One area where native client applications have had an edge over mobile applications is permanent local storage. The operating system usually provides an abstraction layer for saving and accessing application-specific data for native applications. They are limited to around 4 KB of data, which will cause your application to stutter. Microsoft's browser-to-end-all-browser-wars featured Internet Explorer.

HTML Habits and userData behaviors were added in Internet Explorer. Per domain, web pages can store up to 64 KB of data. There is no permissions dialog in Internet Explorer. There is no provision for increasing the volume of available storage.

Flash objects can hold up to 100 KB of data per domain using Local Shared Objects. HTML5 strives to provide a structured API that can be used in different browsers natively and reliably. Many third-party implementations currently have drastically different interfaces and storage limits. HTML5 Storage allows web sites to save named key/value pairs in the client web browser.

This detail is maintained even when you visit the page, remove your browser tab, or exit your browser. It is introduced natively in web browsers, unlike prior efforts at offering permanent local storage, meaning it is usable even though third-party browser extensions are not. The data can be any type supported by JavaScript, including strings, Booleans, integers, or floats. However, the data is actually stored as a string.

When setItems or clearItems explicitly modify things, the storage event is shot on the window entity. It works in any browser that supports the localStorage object, including Internet Explorer 8. The storage event is locked in the same way as any other event you've ever trapped. If you prefer to log the event handlers with JS libraries, you can do so with the event as well.

The storage event can only be used in IE 8, and IE 8 does not support addEvent listener. By default, each origin is given 5 megabytes of storage space. Despite the fact that it is just a recommendation in the HTML5 Storage specification, this is remarkably consistent across browsers. It's important to remember that you're storing strings rather than data in the original format.

There is no method for web developers to require more storage space in any browser. Some browsers allow the user to set a storage limit for each domain. You will miss your gains if you close the browser window in the middle of the session. We can save the progress locally, inside the browser, using HTML5 Storage.

The future of permanent local storage is... well, let's just say it's... interesting. In 2007, Google released Gears, an open source cross-browser plugin that included a SQLite-based embedded database. The development of the Web SQL Database specification was inspired by this early prototype. For specialized, permanent, local storage for web applications, the Indexed Database API is a rival vision.

API, previously known as WebSimpleDB, is now known as API «IndexedDB is a database indexing service. » The specification is located at the very top of the Web SQL Database specification. IndexedDB is a database that doesn't have a formal query language. Each record has a datatype that is defined when the database is built.

## The Past, Present, and Future of Local Storage for Web Applications

One area where native client applications have had an edge over mobile applications is permanent local storage. The operating system usually provides an abstraction layer for saving and accessing application-specific data for native applications. These values could be kept in the register, INI files, XML files, or another location.

Cookies were invented early in the history of the internet and can be used to store tiny volumes of data locally for a long time. They do, though, have three potentially fatal flaws. Any HTTP request requires cookies, which transfer data over the internet in an unencrypted format. They are limited to around 4 KB of data, which will cause your application to stutter.

What we really want is

- a lot of storage space
- on the client
- that persists beyond a page refresh
- and isn’t transmitted to the server

[Back to Content](#content)

### A Brief History Of Local Storage Hacks Before HTML5

Microsoft's browser-to-end-all-browser-wars featured Internet Explorer. D HTML Habits and userData behaviors were added in Internet Explorer. userData was the name of one of these habits.

Per domain, web pages can store up to 64 KB of data. There is no permissions dialog in Internet Explorer. There is no provision for increasing the volume of available storage.

Flash objects can hold up to 100 KB of data per domain using Local Shared Objects. AMASS, a Flash-to-JavaScript bridge created by Brad Neuberg, was an early version. Under the name dojox.storage, he rewrote AMASS and incorporated it into the famous Dojo Toolkit. External Interface has become an order of magnitude smoother and quicker in Flash 8.

Google's dojox.storage gives you a seamless view of both your Adobe Flash, Gears, Adobe AIR, and HTML5 storage. Gears can store an unlimited amount of data per domain after obtaining permission from the user once. Dojox could detect Adobe Flash and Gears and provide a unified interface on top of them.

HTML5 strives to provide a structured API that can be used in different browsers natively and reliably. Its goal is to make dojox.storage more available to anyone on the internet. Many third-party implementations currently have drastically different interfaces and storage limits.

[Back to Content](#content)

### Introducing HTML5 Storage

HTML5 Storage allows web sites to save named key/value pairs in the client web browser. This detail is maintained even when you visit the page, remove your browser tab, or exit your browser. It is introduced natively in web browsers, unlike prior efforts at offering permanent local storage, meaning it is usable even though third-party browser extensions are not. Any related, similarly-named evolving norms confuse the naming situation even more.

```js
function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}
```

```js
if (Modernizr.localstorage) {
  // window.localStorage is available!
} else {
  // no native support for HTML5 storage :(
  // maybe try dojox.storage or a third-party solution
}
```

[Back to Content](#content)

### Using HTML5 Storage

HTML5 Storage is based on named key/value pairs. The data can be any type supported by JavaScript, including strings, Booleans, integers, or floats. However, the data is actually stored as a string.

```js
interface Storage {
  getter any getItem(in DOMString key);
  setter creator void setItem(in DOMString key, in any data);
};
```

[Back to Content](#content)

### Tracking Changes To The HTML5 Storage Area

When `setItems()` or `clearItems()` explicitly modify things, the storage event is shot on the window entity. It works in any browser that supports the localStorage object, including Internet Explorer 8. The storage event is locked in the same way as any other event you've ever trapped. If you prefer to log the event handlers with JS libraries, you can do so with the event as well. The storage event can only be used in IE 8, and IE 8 does not support addEvent listener.

```js
if (window.addEventListener) {
  window.addEventListener("storage", handle_storage, false);
} else {
  window.attachEvent("onstorage", handle_storage);
};
```

[Back to Content](#content)

### Limitations In Current Browsers

By default, each origin is given 5 megabytes of storage space. Despite the fact that it is just a recommendation in the HTML5 Storage specification, this is remarkably consistent across browsers. It's important to remember that you're storing strings rather than data in the original format. The disparity in representation will add up quickly. Each digit in the float is stored as a character, rather than in the normal floating point number format. There is no method for web developers to require more storage space in any browser. Some browsers (such as Opera) allow the user to set a storage limit for each domain. It's purely a user-initiated behavior that you, as a web developer, can't integrate into your program.

[Back to Content](#content)

### HTML5 Storage In Action

You will miss your gains if you close the browser window in the middle of the session. We can save the progress locally, inside the browser, using HTML5 Storage. A live example of how to use the new tool can be found here. It will keep track of your current role in the game, as well as the amount of moves you've made.

```js
function saveGameState() {
    if (!supportsLocalStorage()) { return false; }
    localStorage["halma.game.in.progress"] = gGameInProgress;
    for (var i = 0; i < kNumPieces; i++) {
	localStorage["halma.piece." + i + ".row"] = gPieces[i].row;
	localStorage["halma.piece." + i + ".column"] = gPieces[i].column;
    }
    localStorage["halma.selectedpiece"] = gSelectedPieceIndex;
    localStorage["halma.selectedpiecehasmoved"] = gSelectedPieceHasMoved;
    localStorage["halma.movecount"] = gMoveCount;
    return true;
}
```

The `resumeGame()` method tests whether a state about a game-in-progress is stored locally using HTML5 Storage. If that's the case, it uses the localStorage object to recover certain values. It checks whether there is a game going on and saves the row and column numbers of each piece when the page loads. It also stores information about the current game, such as which piece is chosen and how many moves have been made.

```js
function resumeGame() {
    if (!supportsLocalStorage()) { return false; }
    gGameInProgress = (localStorage["halma.game.in.progress"] == "true");
    if (!gGameInProgress) { return false; }
    gPieces = new Array(kNumPieces);
    for (var i = 0; i < kNumPieces; i++) {
	var row = parseInt(localStorage["halma.piece." + i + ".row"]);
	var column = parseInt(localStorage["halma.piece." + i + ".column"]);
	gPieces[i] = new Cell(row, column);
    }
    gNumPieces = kNumPieces;
    gSelectedPieceIndex = parseInt(localStorage["halma.selectedpiece"]);
    gSelectedPieceHasMoved = localStorage["halma.selectedpiecehasmoved"] == "true";
    gMoveCount = parseInt(localStorage["halma.movecount"]);
    drawBoard();
    return true;
}
```

[Back to Content](#content)

### Beyond Named Key-Value Pairs: Competing Visions

HTML5 Storage is supported by all major browsers, operating systems, and mobile devices. The future of permanent local storage is... well, let's just say it's... interesting. There are opposing views, to be sure. In 2007, Google released Gears, an open source cross-browser plugin that included a SQLite-based embedded database. The development of the Web SQL Database specification was inspired by this early prototype.

```js
openDatabase('documents', '1.0', 'Local document storage', 5*1024*1024, function (db) {
  db.changeVersion('', '1.0', function (t) {
    t.executeSql('CREATE TABLE docids (id, name)');
  }, error);
});
```

For specialized, permanent, local storage for web applications, the Indexed Database API is a rival vision. API, previously known as WebSimpleDB, is now known as API "IndexedDB is a database indexing service. " "This specification has come to a halt: all involved implementors have used the same SQL backend (Sqlite), but we need multiple separate implementations to move on down a standardization route," the spec states.

The definition of the SQL dialect has been left as a simple reference to Sqlite before another implementor is involved in applying this spec, which isn't suitable for a standard, according to the spec. The specification is located at the very top of the Web SQL Database specification.

IndexedDB is a database that doesn't have a formal query language. Each record has a datatype that is defined when the database is built. IndexedDB is only used in a beta edition of Firefox at the time of publishing. Support for Chromium and Google Chrome is being considered by Google.

[Back to Content](#content)

## Reference

Html5doctor.com. (2011). Local Storage - Dive Into HTML5. [online] Available at: [link](http://diveinto.html5doctor.com/storage.html) [Accessed 29 Mar. 2021].

[Back to Content](#content)

***

[⇐ Home Page](../README.md)