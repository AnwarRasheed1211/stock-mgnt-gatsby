import * as React from 'react'
import { Link } from 'gatsby'
import subjectList from '../../components/SubjectList';

import { Card, Container, Button, Row, Table } from 'react-bootstrap'

export default function GradePage(props) {
    console.log(props.location)
    const params = new URLSearchParams(props.location.search);
    console.log(params.get("a"))



    const apiUrl = 'https://vercel.com/anwarrasheed1211/stock-mgnt-gatsby/9jozu3CVvkn7uLciWFcbjXqfBaZQ'
    const [Grades, setGrades] = React.useState([])
    const [GradeList, setGradeList] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    const deleteGrade = (id) => {
        if (window.confirm("Are you sure?")) {
            fetch(apiUrl + '/' + id, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(doc => {
                    console.log("Deleted", doc)
                    getGrades()
                })
        }
    }
    

    const getGrades = () => {
        fetch(apiUrl)
            .then(res => res.json())
            .then((data) => {
                console.table(data)
                setGrades(data)
                setLoading(false)
                setGradeList(data.map((grade, index) => {
                    return (
                        <Card key={grade._id} style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{grade.topic}</Card.Title>
                                <Card.Subtitle>{grade.author}</Card.Subtitle>
                                <Card.Text>
                                    {grade.content}
                                </Card.Text>
                                <Button variant="dark">
                                    <Link to={`/blog/edit?id=${grade._id}`}>Edit</Link>
                                </Button>
                                <Button variant="danger" onClick={() => deleteGrade(grade._id)}>Delete</Button>
                            </Card.Body>
                        </Card>)


                }))
            }).catch((err) => {
                console.error(err)
            })
    }

    React.useState(() => {
        getGrades()
    }, [])


    return <Container>
        <h1>Plan your Semester</h1>
        <Link to="/gradeTrucker/addSub">Create New Semester</Link>
        <Row>
            {GradeList}
        </Row>
    </Container>
    
    

    
    
    
}



