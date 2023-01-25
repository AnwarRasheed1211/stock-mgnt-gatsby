import * as React from 'react'
import { Card, Container, Button, Row } from 'react-bootstrap'

export default function BlogPage() {

    const apiUrl = 'https://sample-blog-express-78qzajv5h-mchayapol.vercel.app/api/blogs'

    const [blogs, setBlogs] = React.useState([])
    const [blogList, setBlogList] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    React.useState(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then((data) => {
                console.table(data)
                setBlogs(data)
                setLoading(false)
                setBlogList(data.map((blog, index) => {
                    return (
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{blog.topic}</Card.Title>
                                <Card.Subtitle>{blog.author}</Card.Subtitle>
                                <Card.Text>
                                    {blog.content}
                                </Card.Text>
                                <Button variant="dark">Read / Edit</Button>
                            </Card.Body>
                        </Card>)


                }))
            }).catch((err) => {
                console.error(err)
            })
    }, [])


    return <Container><h1>Blog</h1>
        <Row>
            {blogList}
        </Row>
    </Container>
}