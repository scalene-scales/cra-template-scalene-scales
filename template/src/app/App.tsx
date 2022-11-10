import "app/App.css";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <>
      <CssBaseline enableColorScheme />
      <div className="App">
        <header className="App-header">
          <AppBar position="sticky">
            <Typography
              variant="h3"
              component="div"
              align="center">
              TODO
            </Typography>
          </AppBar>
          <List>
            <ListItem>
              <ListItemText primary="Update the public/manifest.json" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Update the app/App.tsx" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Update the app/App.test.tsx" />
            </ListItem>
          </List>
        </header>
      </div>
    </>
  );
}

export default App;
