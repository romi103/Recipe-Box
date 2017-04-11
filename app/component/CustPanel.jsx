var React = require('react');
var Panel = require('react-bootstrap').Panel;
var Controls = require('Controls');



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
                    <h2>Ingridients</h2>
                    <hr />
                    {panel}
                    <Controls recipe={recipe}/>
            </Panel>
            );
    }

});

module.exports = CustPanel;