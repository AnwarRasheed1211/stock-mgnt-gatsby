

import * as React from 'react'
import { Link } from 'gatsby'
import {Card, Container, Button, Row} from 'react-bootstrap'

export default funcation GradePage(props) {
    console.log(props.location) 
    const params = new URLSearchParams(props.location.search);
    console.log(params.get("a"))


    



}