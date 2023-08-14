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
    <Grid item xs={3}>
      <List>
        {["Products", "categories"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

export default Sidebar;
