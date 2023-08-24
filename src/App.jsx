import { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DownloadingIcon from '@mui/icons-material/Downloading';

// Main function
function App() {
  return (
    <div style ={{backgroundcolor: "rgb(236, 224, 206)", minHeight: "100vh"}}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Welcome to 100x JSON to Excel Converter
            </Typography>
            <Avatar alt="Remy Sharp" src="../public/cat.jpg" sx={{ width: 50, height: 50 }} />
          </Toolbar>
        </AppBar>
      </Box>
      <UploadButton />
    </div>
  );
}

// Uploading the JSON file
function UploadButton() {
  const [jsonText, setJsonText] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setJsonText(reader.result);
    };

    reader.readAsText(file);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Stack direction="column" alignItems="center" spacing={2}>
        <label htmlFor="upload-json">
          <Button variant="contained" component="span">
            Select JSON File
            <UploadFileIcon />
          </Button>

          <input
            id="upload-json"
            hidden
            accept=".json"
            type="file"
            onChange={handleFileUpload}
          />
        </label>
      </Stack>
      {jsonText && <JsonGridView jsonText={jsonText} />}

    </Container>
  );
}

// SHowing the JSON file in a grid container
function JsonGridView({ jsonText }) {
  return (
    <>
      <div style={{ maxHeight: "400px", overflow: "auto", margin: "30px" }}>
        <pre>{jsonText}</pre>
      </div>
      <ConvertButton jsonText={jsonText} />
    </>
  );
}

function ConvertButton({ jsonText }) {
  return (
    <>
      <Button variant="contained" component="span">
        Convert to Excel
        <DownloadingIcon />
      </Button>
    </>
  )
}



  export default App;
