import { Input, ListItemText, Menu, MenuItem, MenuList } from "@mui/material";
import { ChangeEvent, useState } from "react";

import { uploadProfileImage } from "../../api";
import RemoveImageDialog from "../dialog/RemoveImageDialog";

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
  const [openRemoveImageDialog, setOpenRemoveImageDialog] =
    useState<boolean>(false);

  const handleUploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const uploadedImage = files[0];

      const formData = new FormData();
      formData.append("img-upload", uploadedImage);

      await uploadProfileImage(formData);
    }
  };

  return (
    <>
      <Menu open={openImageMenu} onClose={handleClose} anchorEl={anchorElement}>
        <MenuList dense>
          <MenuItem
            sx={{
              cursor: "pointer",
            }}
          >
            <label htmlFor="upload-image">
              <ListItemText>Upload image</ListItemText>
              <Input
                id="upload-image"
                type="file"
                style={{ display: "none" }}
                onChange={handleUploadImage}
              />
            </label>
          </MenuItem>
          <MenuItem onClick={() => setOpenRemoveImageDialog(true)}>
            <ListItemText>Remove image</ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
      <RemoveImageDialog
        openRemoveImageDialog={openRemoveImageDialog}
        setOpenRemoveImageDialog={setOpenRemoveImageDialog}
      />
    </>
  );
};

export default ImageMenu;
