import Animation from '../../resourse/svg/Blocks@1x-1.0s-300px-300px.svg';
import './tetris.scss';

export const Tetris = () => {
  return (
    <div className="tetris">
      <div className="tetris__animation">
        <img src={Animation} alt="Tetris Animation" />
      </div>
      <div className='tetris__btns'>
        <button className='tetris__btn'>&#10508;</button>
        <button className='tetris__btn'>&#10561;</button>
        <button className='tetris__btn'>&#10509;</button>
      </div>
    </div>
  )
}