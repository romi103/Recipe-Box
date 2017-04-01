var React = require('react');
var Accordion = require('react-bootstrap').Accordion;
var Panel = require('react-bootstrap').Panel;
var storage = require('storage');
var CustPanel = require('CustPanel');
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;
var Button = require('react-bootstrap').Button;
var CustModal = require('CustModal');


var List = React.createClass({

    getInitialState: function () {
        return {showModal: false}
    },

   
    componentDidMount: function (){
        // storage.createRecipes("test7","sebek,romek,pati");
        // console.log(storage.accessRecipes());
    },


    open: function () {
        this.setState({
            showModal: true
        });
    },

    close: function (){
        this.setState({
            showModal: false
        });
    },

    render: function () {
        let recipes = storage.accessRecipes();
        if (recipes) {
        
            let panels;
            panels = recipes.map((recipe, index) => {
                return (
                    <CustPanel recipe={recipe} key={index + 1} eventKey={index + 1}/>
                );
            });
        }

        return (
            <div>
                <Accordion>
                    {panels}
                </Accordion>
                <Button bsStyle="primary" bsSize="large" onClick={this.open}>Add Recipe</Button>
                <CustModal show={this.state.showModal} onCloseModal={this.close}/>
            </div>
        );
    }
});

module.exports = List;