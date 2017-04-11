var React = require('react');
var ReactDOM = require('react-dom');
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;
var Button = require('react-bootstrap').Button;
var storage = require('storage');
var emitter = require('app/component/modalEmitter.js');
var CustModal = require('CustModal');


var Controls = React.createClass({
    getInitialState: function () {
        let currentStorage = storage.accessRecipes();
        return {
            showModal: false,
            modalMode: "edit"
        }
    },

    close: function () {
        this.setState({
            showModal: false
        });
    },

    onDelete: function () {
        let deleteButton = ReactDOM.findDOMNode(this.refs.deleteButton);
        let recipeKey = deleteButton.dataset.key;
        storage.deleteRecipe(recipeKey);
        emitter.emit('refresh'); 
        
    },

    onEditRecipe: function() {
        this.setState({
            showModal: true
        });
    },
    

    render: function () {
        var {recipe} = this.props;
        
        return (
            <div style={{marginTop: "10px"}}>
                <ButtonToolbar>
                    <Button bsStyle="primary" bsSize="small" data-key={recipe.name} ref="deleteButton" onClick={this.onDelete}>Delete</Button>
                    <Button bsSize="small" onClick={this.onEditRecipe}>Edit</Button>
                </ButtonToolbar>
                <CustModal show={this.state.showModal} onCloseModal={this.close} mode={this.state.modalMode} recipe={recipe} />
            </div>
                );
    }
});

module.exports = Controls;