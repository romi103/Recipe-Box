var React = require('react');
var Accordion = require('react-bootstrap').Accordion;
var Panel = require('react-bootstrap').Panel;
var storage = require('storage');




var List = React.createClass({

    fetchLocalStorage: function () {
        
    },

    componentDidMount: function (){
        // for (var i = 0; i < localStorage.length; i++) {
        //     console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
        // }
        console.log(storage.accessRecipes());
    },

    render: function () {
        return (
            <div>
                <Accordion>
                    <Panel header="Collapsible Group Item #1" eventKey="1">
                        <Panel> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon off</Panel>
                        <Panel> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon off</Panel>
                      
                    </Panel>
                    <Panel header="Collapsible Group Item #2" eventKey="2">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon off
                    </Panel>
                </Accordion>
            </div>
        );
    }
});

module.exports = List;