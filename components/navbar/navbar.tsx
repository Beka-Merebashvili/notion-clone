import ActionButtons from "./_components/action-buttons";
import Logo from "./_components/logo";
import { Menu } from "./_components/menu";

const Navbar = () => {
  return (
    <div className="flex items-center">
      <Logo />
      <Menu />
      <ActionButtons />
    </div>
  );
};

export default Navbar;
