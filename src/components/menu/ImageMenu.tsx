import { ListItemText, Menu, MenuItem, MenuList } from "@mui/material";

type ImageMenuProps = {
  openImageMenu: boolean;
  handleClose: () => void;
  anchorElement: HTMLElement | null;
};

const ImageMenu = ({
  openImageMenu,
  handleClose,
  anchorElement,
}: ImageMenuProps) => {
  return (
    <Menu open={openImageMenu} onClose={handleClose} anchorEl={anchorElement}>
      <MenuList dense>
        <MenuItem>
          <ListItemText>Upload image</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Remove image</ListItemText>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ImageMenu;
