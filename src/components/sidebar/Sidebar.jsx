import {
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

import InboxIcon from "@mui/icons-material/MoveToInbox";

const Sidebar = () => {
  return (
    <Grid
      item
      xs={3}
      style={{
        backgroundColor: "#eee",
        padding: "10px",
        height: "calc(100vh - 64px)",
      }}
    >
      <List>
        {["Products", "categories"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

export default Sidebar;
