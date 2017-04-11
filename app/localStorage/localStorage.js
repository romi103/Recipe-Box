function Recipe(name, steps) {
    this.name = name;
    this.steps = steps.split(",");
}

//defalult recipe - if storage is empty
if (localStorage.length == 0) {
    let newRecipe = new Recipe("Pizza", "water,flour,tomato");
    localStorage.setItem("Pizza", JSON.stringify(newRecipe));
}

module.exports = {

    createRecipes: function(name, steps) {
        let newRecipe = new Recipe(name, steps);
        localStorage.setItem(name, JSON.stringify(newRecipe));
    },

    accessRecipes: function() {
        let recipeArray = [];
        for (var i = 0; i < localStorage.length; i++) {
            let recipeObj = {};
            let itemValue = JSON.parse(localStorage.getItem(localStorage.key(i)));
            recipeArray.push(itemValue);
        }
        return recipeArray;
    },

    deleteRecipe: function(key) {
        localStorage.removeItem(key);

    }
}