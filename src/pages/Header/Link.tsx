import { Link } from 'react-router-dom';
import './Link-style.css'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'

const Menu = () => {
    return (
        <nav>
            <Breadcrumb>
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to='/home'>
                Home
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to='/'>
                Login
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to='/search'>
                Search
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>Contact</BreadcrumbLink>
            </BreadcrumbItem>
            </Breadcrumb>
        </nav>
    );
}

export default Menu;

