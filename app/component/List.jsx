var React = require('react');
var Accordion = require('react-bootstrap').Accordion;
var Panel = require('react-bootstrap').Panel;
var storage = require('storage');
var CustPanel = require('CustPanel');
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;
var Button = require('react-bootstrap').Button;
var CustModal = require('CustModal');
var emitter = require('app/component/modalEmitter.js');



var List = React.createClass({

    getInitialState: function () {
        let currentStorage = storage.accessRecipes();
        return {
            showModal: false,
            currentStorage: currentStorage,
            modalMode: "add"   
    }
}, 
    componentDidMount: function (){
        console.log(this.state.currentStorage);
        // storage.createRecipes("test7","sebek,romek,pati");
        // console.log(storage.accessRecipes());
    },

    componentWillMount: function () {
        emitter.addListener('refresh', function () {
            console.log("test");
            this.forceUpdate()}.bind(this));
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
        let {modalMode} = this.state;
        let recipes = storage.accessRecipes();

        if (recipes) {
        
            var panels;
            panels = recipes.map((recipe, index) => {
                return (
                    <CustPanel recipe={recipe} key={index} eventKey={index}/>
                );
            });
        }


        return (
            <div>
                <Accordion>
                    {panels}
                </Accordion>
                <Button bsStyle="primary" bsSize="large" onClick={this.open}>Add Recipe</Button>
                <CustModal show={this.state.showModal} onCloseModal={this.close} mode={modalMode} />
            </div>
        );
    }
});

module.exports = List;