import {Button, Card} from "react-bootstrap";

const BlogList = (blogs ) => {

    console.log(blogs.blogs.articles)
    return (
        <div className="blog-list">
     {        blogs.blogs.articles.map((blog,id)=>{
                    return(
                        <Card style={{ width: '25rem'}} key={id}>
                            <Card.Img  src={blog.urlToImage} alt={""} />
                            <Card.Body>
                                <Card.Title>{blog.title}</Card.Title>
                                <Card.Text>
                             {blog.description}
                                </Card.Text>
                                {/*<Card.Link href={blog.url}>Another Link</Card.Link>*/}
                                <Button variant="light" ><Card.Link href={blog.url}>Another Link</Card.Link></Button>
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </div>
    );
}

export default BlogList;