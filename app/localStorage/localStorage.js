module.exports = {
    // create a new Recipe in local storage with key:name and steps as a array of strings
    createRecipes: function(name, steps) {
        var stepsArray = steps.split(",");
        localStorage.setItem(name, JSON.stringify(stepsArray));
    },

    // returns object with recipe 
    accessRecipes: function() {
        var recipeObj = {};
        for (var i = 0; i < localStorage.length; i++) {
            recipeObj[localStorage.key(i)] = JSON.parse(localStorage.getItem(localStorage.key(i)));
        }
        return recipeObj;
    }
}