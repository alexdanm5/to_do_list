import './singIn.scss'

const SingIn = () => {

    return (
        <form className="sing__form">
            <input className="sing__input sing__user" required type="text" name="name" placeholder='Your name'/>
            <input className="sing__input sing__password" required type="password" name="password" placeholder='Your password'/>
            <button className="sing__btn">Ok</button>
        </form>
    )
}

export default SingIn;