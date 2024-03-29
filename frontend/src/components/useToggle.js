// import React from 'react';
// import '../assets/toggle.css'

// const Toggle = () => {

//   return (
//     <div className="toggle">
//       <input
//         type="checkbox"
//         className="checkbox"
//         id="checkbox"

//       />
//       <label htmlFor="checkbox" className="checkbox-label">
//         <i className="fas fa-sun"></i>
//         <i className="fas fa-moon"></i>
//         <span className="ball"></span>
//       </label>
//     </div>
//   );
// };

// export default Toggle;
import React from 'react';
import '../assets/toggle.css';
import { useContext } from 'react';
import { ThemeContext } from '../App';

const Toggle = ( ) => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div >
      <input
        type="checkbox"
        className="checkbox toggle"
        id="checkbox"
        onClick={toggleTheme}
      />
      <label htmlFor="checkbox" className="checkbox-label">
      <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i>
        <span className="ball"></span>
      </label>
    </div>
  );
};

export default Toggle;
