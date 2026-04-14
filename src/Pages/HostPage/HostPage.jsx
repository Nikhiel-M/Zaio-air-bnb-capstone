import { checkHost } from "../../services/hooks";

const HostPage = () => {
  checkHost();
  
  return (
    <div>HostPage</div>
  );
}

export default HostPage