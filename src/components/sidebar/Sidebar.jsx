import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
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
