import { useHostGuard } from "../../services/hooks";

const HostPage = () => {
  useHostGuard();
  return (
    <div>HostPage</div>
  );
}

export default HostPage
