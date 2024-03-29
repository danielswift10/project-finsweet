import { arrowRight, shapesLeft } from "../Assets";
import { layout } from "../styles";
const Button = ({title, type}) => {
    return ( 
        <button type={type} className={`lg:h-[64px] w-[197px] relative h-[55px]  lg:w-[219px] hover:scale-[1.03] outline-none ${layout.button}`}>
            <p>{title}</p>
            <img src={arrowRight} alt="arrow-right" />
            <img src={shapesLeft} className="absolute top-0 left-0 w-[23px] h-[23px] md:w-[28px] md:h-[28px] " alt="shapes-left" />
        </button>
     );
}
 
export default Button;