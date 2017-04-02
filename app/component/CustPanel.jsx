var React = require('react');
var Panel = require('react-bootstrap').Panel;
var Controls = require('Controls');
var CustModal = require('CustModal');


var CustPanel = React.createClass({
    render: function () {

        var {recipe, ...other} = this.props;
        

            var panel;
            panel = recipe.steps.map((step, index) => {
                return (
                    <Panel key={index}>
                        {step}
                    </Panel>
                );
            });

        return (
            <Panel header={recipe.name} {...other} bsStyle="success">
                    <h2>Ingridients {console.log(recipe)}</h2>
                    <hr />
                    {panel}
                    <Controls recipeKey={recipe.name}/>
            </Panel>
            );
    }

});

module.exports = CustPanel;