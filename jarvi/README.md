WebGL-Spectrogram
=================

## Get running in 5 minutes

First, check out WebGL-Spectrogram and launch it locally:

```bash
git clone https://github.com/bastibe/WebGL-Spectrogram.git
cd WebGL-Spectrogram
```

We have some installation commands that utilize `brew`, `yum`, and `apt-get`
based on your system and package manager preference.

All Python packages are install using `pip` from the `requirements.txt` file. 
If you wish to install via another method i.e. `conda`, all the packages and 
versions can be found in `requirements.txt`.

The commands below install common packages for OSX or Linux and run the server.

Note: You need to use `sudo` if you are not working in a 
[virtualenv](http://docs.python-guide.org/en/latest/dev/virtualenvs/).

If you are not using OSX, the `apt-get` manger is used by default. 

To use `yum` to install packages instead, run `make installdeps RPM=1`.

```bash
make installdeps
make run
```

A webpage should now open and you can select the file `example.wav` to generate
a sample spectrogram.

## About

This is a small local web app that displays a spectrogram of an audio signal in
the browser using WebGL. It is known to work with Firefox and Chrome, though
performance is best in Firefox.

The spectrogram display can be zoomed and panned smoothly and has a
configurable FFT length. The amplitude range can be adjusted on the fly as
well. It can open any local `.wav` or `.flac` file.

![screenshot](https://raw.githubusercontent.com/bastibe/WebGL-Spectrogram/master/screenshot.png)

`server.py` contains a small web server written in Python and Tornado that
responds to messages on `ws://localhost:XXXX/spectrogram`, where `XXXX` is a
random port in the local range. Currently, it supports two kinds of messages:
One that requests a spectrogram from a file name, and another that requests a
spectrogram from a file content attached to the message. It responds to these
messages with a message containing a full spectrogram for the given audio file.

`communications.js` contains the Javascript implementation of the messaging
protocol.

`specsize.js` contains a helper class for storing the extent of a
spectro-temporal display.

`spectrogram.js` contains Javascript code that can load audio files and request
spectrograms from the server, and draw those spectrograms using WebGL. It also
contains a time and frequency scale and a small indicator that shows the cursor
position in time/frequency coordinates.

`main.html` contains the website used to display the spectrogram.

The messaging protocol is JSON-based, easily extensible and supports
transmission of textual or binary data.
