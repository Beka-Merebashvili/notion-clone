interface DropDownMenuProps {
    onClose: () => void;
  }
  
  const DropdownMenu: React.FC<DropDownMenuProps> = ({ onClose }) => {
    const handleLinkClick = () => {
      onClose();
    };
    return ( <div>this is menu</div> );
}
 
export default DropdownMenu;