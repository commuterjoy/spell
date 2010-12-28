About
=====

A 100% client-side spellchecker. 235k words.

Uses Metaphone, Soundex, Caverphone, Porter stemming and Levenshtein distance to determine similar words to a given string.

Uses HTML5 [Workers](http://www.whatwg.org/specs/web-workers/current-work/) to build three [phoneme](http://code.google.com/p/yeti-witch/) dictionaries
on the client, each containing 235k words. It then applies some simple heuristics to the user input to find the nearest match.

View the [demo](http://matt.chadburn.co.uk/projects/spell/).
