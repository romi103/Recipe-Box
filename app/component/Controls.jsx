var React = require('react');
var ReactDOM = require('react-dom');
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;
var Button = require('react-bootstrap').Button;
var storage = require('storage');
var emitter = require('app/component/modalEmitter.js');


var Controls = React.createClass({

    onDelete: function () {
        let deleteButton = ReactDOM.findDOMNode(this.refs.deleteButton);
        let recipeKey = deleteButton.dataset.key;
        console.log(recipeKey);
        storage.deleteRecipe(recipeKey);
        emitter.emit('refresh'); 
        
    },

    

    render: function () {
        var {recipeKey} = this.props;
        

        return (
                <ButtonToolbar>
                    <Button bsStyle="primary" bsSize="small" data-key={recipeKey} ref="deleteButton" onClick={this.onDelete}>Delete</Button>
                    <Button bsSize="small">Edit</Button>
                </ButtonToolbar>
                );
    }

});

module.exports = Controls;