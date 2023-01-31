import '../shared/styles/spinner.css'
import { useAppContext } from "../../contexts/AppProvider";



const Spinner = () => {
  const { currentMode } = useAppContext();
  let changeColor = () => {
    if (currentMode === "light") {
      return "light"
    } else return "dark"
  }
  return (
    <div className={changeColor()}></div>
  );
}


export default Spinner;
