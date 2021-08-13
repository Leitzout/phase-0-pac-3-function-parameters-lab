function introduction(name){
    return `Hi, my name is ${name}.`;
}

function introducton(name = 'Josh'){
    return (`Hi, my name is ${name}.`);
}

function introductionWithLanguage(name = "Josh" , language = "Ember.js")
{
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional(name = "Gracie" , language = "JavaScript")
{
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
