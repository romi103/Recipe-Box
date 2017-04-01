var React = require('react');
var Panel = require('react-bootstrap').Panel;


var CustPanel = React.createClass({
    render: function () {

        var {recipe, ...other} = this.props;
        
        // if (recipe) {

            var panel;
            panel = recipe.steps.map((step, index) => {
                return (
                    <Panel key={index + 1}>
                        {step}
                    </Panel>
                );
            });

        // }

        return (
            
            
            <Panel header={recipe.name} {...other} bsStyle="success">
                    <h2>Ingridients</h2>
                    <hr />
                    {panel}
            </Panel>
            );
    }

});

module.exports = CustPanel;