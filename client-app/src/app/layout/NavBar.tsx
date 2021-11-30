
import React from 'react';
import { Button, Container, Menu, Image, Dropdown } from 'semantic-ui-react';

interface Props {
    
    openForm: () => void;
   
}
export default function NavBar(props: Props) {
    const {openForm} = props;
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src='/assets/logo.png' alt='logo' style={{ marginRight: '10px' }} />
                    Reactivities
                </Menu.Item>
                
                <>
                <Menu.Item  to='/activities' name='Activities' />
                <Menu.Item  to='/errors' name='Errors' />
                <Menu.Item>
                    <Button onClick={openForm} positive content='Create Activity' />
                </Menu.Item>
                {/* <Menu.Item position='right'>
                    <Image src={'/assets/user.png'} avatar spaced='right' />
                    <Dropdown pointing='top left' >
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to={`/profiles/${user?.username}`} 
                                text='My Profile' icon='user' />
                            <Dropdown.Item onClick={logout} text='Logout' icon='power' />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item> */}
                </>
               
            </Container>
        </Menu>
    )
}