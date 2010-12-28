About
=====

A 100% client-side spellchecker. 235k words.

Uses Metaphone, Soundex, Caverphone, Porter stemming and Levenshtein distance to determine similar words to a given string.

Uses HTML5 [Workers](http://www.whatwg.org/specs/web-workers/current-work/) to build three [phoneme](http://code.google.com/p/yeti-witch/) dictionaries
on the client, each containing 235k words. It then applies some simple heuristics to the user input to find the nearest match.

View the [demo](http://matt.chadburn.co.uk/projects/spell/).

Todo
====

* Optimise the phoneme generation (esp. Caverphone) to sub-second build times.
* Add support for more complex words case insensitivity, hyphenated, nouns etc.
* Write some unit tests to see how the [aspell test results](http://aspell.net/test/cur/batch0.tab) compare.
* IE9 benchmarks

Benchmarking
============

It's not ready for production use as in all but Chrome the dictionaries take too long to build. Here's some unscientific tests on a 2.6 Ghz Duo Core / 4 GB RAM MacBook Pro.

Chrome
------

> 234936 words in the dictionary
> soundex loaded in 2.075 seconds
> metaphone loaded in 3.541 seconds
> caverphone loaded in 6.535 seconds

Safari
------

> 234936 words in the dictionary
> soundex loaded in 4.05 seconds
> metaphone loaded in 4.573 seconds
> caverphone loaded in 8.616 seconds

Firefox
-------

> 234936 words in the dictionary
> soundex loaded in 12.078 seconds
> metaphone loaded in 11.622 seconds
> caverphone loaded in 17.108 seconds


