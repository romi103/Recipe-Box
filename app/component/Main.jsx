var React = require('react');
var List = require('List');


var Main = (props) => {
    return (
        <div>
            <div>
                <div>
                    <p>Main.jsx Rendered</p>
                    <List />
                    {/*{props.children}*/}
                </div>
            </div>
           
        </div>
    );
}

module.exports = Main;