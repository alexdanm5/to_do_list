import Header from "./header/Header";
import NavBar from "./navBar/NavBar";
import Content from './content/Content'

import './profile.scss';

const Profile = ({getResOut}) => {
    return (
        <section className='profile'>
            <Header onAction={getResOut}/>
            <div className='profile__wrapper'>
                <NavBar/>
                <Content/>
            </div>
        </section>
    )
}

export default Profile;