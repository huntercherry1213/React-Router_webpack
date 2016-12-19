'use Strict';
import React, {Component} from 'react';
import {
    form,
    bsSize,
    placeholder,
    MenuItem,
    FormGroup,
    InputGroup,
    Addon,
    FormControl,
    Button,
    Glyphicon,
    DropdownButton
} from 'react-bootstrap';
import '../../css/custom.css';

class webpackDemo extends Component {
    render() {
        return (
            <form>
                <FormGroup bsSize="large">
                    <FormControl type="text" placeholder="Large text" className="katre"/>
                </FormGroup>
                <FormGroup>
                    <FormControl type="text" placeholder="Normal text"/>
                </FormGroup>
                <FormGroup bsSize="small">
                    <FormControl type="text" placeholder="Small text"/>
                </FormGroup>
            </form>
        )
    }
}
export default webpackDemo;