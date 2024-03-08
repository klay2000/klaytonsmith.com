import GHLogo from './gh-logo.svg';
import Arrow from './arrow.svg';
import './GHWrapper.css';

export const GHWrapper = () => {
  return (
    <div className="GHWrapper">
      <a href="https://github.com/klay2000" className="GHLink"><img className='GHLogo' src={GHLogo} alt="GitHub Logo"/></a>
      <img className="GHImg" src={Arrow} alt="Arrow" />
    </div>
  );
}