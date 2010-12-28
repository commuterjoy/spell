Array.prototype.diff = function(a) {
    return this.filter(function(i) {return (a.indexOf(i));});
};

// @return Boolean Is the given word in our dictionary?
function isWord(word){
	return (dictionary.indexOf(word) >= 0) ? true : false;
}

// @return Array A list of matching Caverphone words
function spellAsCaverphone(word){
	var wordAsCaverphone = new String(word).caverphone()
	var cvphn = []
	caverphone.forEach(function(element, index, array){  
		if (wordAsCaverphone == element){
			cvphn.push(dictionary[index]);
		};  
	});
	return cvphn;
}

// @return Array A list of matching Soundex words
function spellAsSoundex(word){
	var wordAsSoundex = new String(word).soundexRefined();
	var sndx = []
	soundex.forEach(function(element, index, array){  
		if (wordAsSoundex == element){
			sndx.push(dictionary[index]);
		};  
	});
	return sndx;
}

// @return Array A list of matching Metaphone words
function spellAsMetaphone(word){
	var wordAsMetaphone = new String(word).metaphone();
	var mtphn = []
	metaphone.forEach(function(element, index, array){  
		if (wordAsMetaphone == element){
			mtphn.push(dictionary[index]);
		};  
	});
	return mtphn;
}
