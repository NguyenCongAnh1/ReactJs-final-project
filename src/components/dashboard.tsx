import { Button, Col, Row } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Footer from "./footer";
import { TiShoppingCart } from "react-icons/ti";
import { useContext, useState } from "react";
import { CartContext } from "../store/contextApi/cartContext";



const Dashboard = () => {
    const cartContextInSearch = useContext(CartContext);
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();
    const handleSubmit = () => {
        cartContextInSearch?.search(searchInput);
        navigate('/home')
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid" style={{ marginLeft: '15vh' }}>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/home">
                                    Home
                                </a>
                            </li>
                        </ul>
                        <Link to="./cart" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <TiShoppingCart size="2em" style={{ margin: '10px' }} />
                        </Link>
                        <Form>
                            <Row style={{ minWidth: '340px', marginRight: '60px' }}>
                                <Col xs="auto">
                                    <input
                                        className="form-control me-2"
                                        type="text"
                                        placeholder="Search"
                                        aria-label="Search"
                                        name="searchInput"
                                        onChange={handleChange}
                                    />

                                </Col>
                                <Col xs="auto">
                                    <Button onClick={handleSubmit}>Search</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </nav>
            <Outlet />
            <div className='footer'>
                <Footer />
            </div>
        </div>
    )

};

export default Dashboard;