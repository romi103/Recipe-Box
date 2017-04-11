var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-bootstrap').Modal;
var ModalHeader = require('react-bootstrap').ModalHeader;
var ModalTitle = require('react-bootstrap').ModalTitle;
var ModalBody = require('react-bootstrap').ModalBody;
var ModalFooter = require('react-bootstrap').ModalFooter;
var Button = require('react-bootstrap').Button;
var Form = require('react-bootstrap').Form;
var FormGroup = require('react-bootstrap').FormGroup;
var Col = require('react-bootstrap').Col;
var FormControl = require('react-bootstrap').FormControl;
var ControlLabel = require('react-bootstrap').ControlLabel;
var storage = require('storage');
var emitter = require('app/component/modalEmitter.js');

var CustModal = React.createClass({

    onCloseModal: function () {
            this.props.onCloseModal();

    },

    onRecipeSave: function () {
        var name = ReactDOM.findDOMNode(this.refs.name);
        var ingri = ReactDOM.findDOMNode(this.refs.ingri);
        storage.createRecipes(name.value, ingri.value);
        emitter.emit('refresh'); 
        this.onCloseModal();
    },

    render: function () {
        var { show, mode, recipe} = this.props;
        return (
            <div>
                <Modal show={show} onHide={this.onCloseModal}>
                <ModalHeader closeButton>
                    <ModalTitle>{mode == "edit" ? "Edit Recipe" : "Add Recipe"}</ModalTitle>
                </ModalHeader>
                <ModalBody>
                        <Form horizontal>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Recipe
                                </Col>
                                <Col sm={10}>
                                    <FormControl defaultValue={mode == "edit" ? recipe.name : ""} type="text" ref="name" placeholder="Recipe Name" />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Ingridients
                                </Col>
                                <Col sm={10}>
                                    <FormControl defaultValue={mode == "edit" ? recipe.steps.join(",") : ""} type="textarea" ref="ingri" placeholder="Enter,Ingridients,Comaseparated" />
                                </Col>
                            </FormGroup>
                        </Form>
                </ModalBody>
                <ModalFooter>
                        <Button onClick={this.onCloseModal}>Close</Button>
                        <Button bsStyle="primary" type="submit" onClick={this.onRecipeSave}>Save</Button>
                </ModalFooter>
            </Modal>
            </div>
        );
    }
});

module.exports = CustModal;