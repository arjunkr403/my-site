import Sidebar from '../sidebar/sidebar';
import './nav.scss';

const Navbar = () => {
  return (
    <div className='nav'>
        <Sidebar/>
      <div className="wrapp">
        <div className="social">
            <a href="https://github.com/arjunkr403" target="_blank"><img src="/github.png" alt="" /></a>
            <a href="https://www.linkedin.com/in/arjunkrsharma/" target='_blank'><img src="/linkedin.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
