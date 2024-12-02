// // import React, { useState } from "react";
// // import {
// //   AppBar,
// //   Box,
// //   Container,
// //   Grid,
// //   Toolbar,
// //   Typography,
// //   Button,
// // } from "@mui/material";
// // import AddIcon from "@mui/icons-material/Add";
// // import NewsChannelCard from "./CreateChannelNewsCard";
// // import CreateChannelModal from "./CreateChannel";
// // import "bootstrap/dist/css/bootstrap.min.css";

// // function App() {
// //   const [open, setOpen] = useState(false);
// //   const [channels, setChannels] = useState([]);

// //   const handleCreateChannel = (channelData) => {
// //     const newChannel = {
// //       id: channels.length + 1,
// //       ...channelData,
// //       followers: Math.floor(Math.random() * 200000) + 50000,
// //     };
// //     setChannels([...channels, newChannel]);
// //     setOpen(false);
// //   };

// //   const handleDeleteChannel = (channelId) => {
// //     setChannels(channels.filter((channel) => channel.id !== channelId));
// //   };

// //   return (
// //     <Box sx={{ flexGrow: 1 }}>
// //       <AppBar position="static" sx={{ backgroundColor: "#1a73e8" }}>
// //         <Toolbar>
// //           <Typography
// //             variant="h5"
// //             component="div"
// //             sx={{ flexGrow: 1, fontWeight: "bold" }}
// //           >
// //             News Provider Dashboard
// //           </Typography>
// //           <Button
// //             variant="contained"
// //             startIcon={<AddIcon />}
// //             onClick={() => setOpen(true)}
// //             sx={{
// //               backgroundColor: "white",
// //               color: "#1a73e8",
// //               "&:hover": {
// //                 backgroundColor: "#f1f3f4",
// //               },
// //             }}
// //           >
// //             Create News Channel
// //           </Button>
// //         </Toolbar>
// //       </AppBar>

// //       <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
// //         <Grid container spacing={3}>
// //           {channels.map((channel) => (
// //             <Grid item xs={12} sm={6} md={4} key={channel.id}>
// //               <NewsChannelCard
// //                 id={channel.id}
// //                 name={channel.name}
// //                 baseUrl={channel.baseUrl}
// //                 logo={channel.logo}
// //                 followers={channel.followers}
// //                 onDelete={handleDeleteChannel}
// //               />
// //             </Grid>
// //           ))}
// //         </Grid>
// //       </Container>

// //       <CreateChannelModal
// //         open={open}
// //         onClose={() => setOpen(false)}
// //         onSubmit={handleCreateChannel}
// //       />
// //     </Box>
// //   );
// // }

// // export default App;


// import React, { useState } from "react";
// import {
//   AppBar,
//   Box,
//   Container,
//   Grid,
//   Toolbar,
//   Typography,
//   Button,
// } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import NewsChannelCard from "./CreateChannelNewsCard";
// import CreateChannelModal from "./CreateChannel";
// import "bootstrap/dist/css/bootstrap.min.css";

// function ProviderPage() {
//   const [open, setOpen] = useState(false);
//   const [channels, setChannels] = useState([]);

//   const handleCreateChannel = (channelData) => {
//     const newChannel = {
//       id: channels.length + 1,
//       ...channelData,
//       followers: Math.floor(Math.random() * 200000) + 50000,
//     };
//     setChannels([...channels, newChannel]);
//     setOpen(false);
//   };

//   const handleDeleteChannel = (channelId) => {
//     setChannels(channels.filter((channel) => channel.id !== channelId));
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" sx={{ backgroundColor: "#1a73e8" }}>
//         <Toolbar>
//           <Typography
//             variant="h5"
//             component="div"
//             sx={{ flexGrow: 1, fontWeight: "bold" }}
//           >
//             News Provider Dashboard
//           </Typography>
//           <Button
//             variant="contained"
//             startIcon={<AddIcon />}
//             onClick={() => setOpen(true)}
//             sx={{
//               backgroundColor: "white",
//               color: "#1a73e8",
//               "&:hover": {
//                 backgroundColor: "#f1f3f4",
//               },
//             }}
//           >
//             Create News Channel
//           </Button>
//         </Toolbar>
//       </AppBar>

//       <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//         <Grid container spacing={3}>
//           {channels.map((channel) => (
//             <Grid item xs={12} sm={6} md={4} key={channel.id}>
//               <NewsChannelCard
//                 id={channel.id}
//                 name={channel.name}
//                 baseUrl={channel.baseUrl}
//                 logo={channel.logo}
//                 followers={channel.followers}
//                 onDelete={handleDeleteChannel}
//               />
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       <CreateChannelModal
//         open={open}
//         onClose={() => setOpen(false)}
//         onSubmit={handleCreateChannel}
//       />
//     </Box>
//   );
// }

// export default ProviderPage;



// import React, { useState } from "react";
// import {
//   AppBar,
//   Box,
//   Container,
//   Grid,
//   Toolbar,
//   Typography,
//   Button,
// } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import NewsChannelCard from "./CreateChannelNewsCard";
// import CreateChannelModal from "./CreateChannel";
// import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   const [open, setOpen] = useState(false);
//   const [channels, setChannels] = useState([]);

//   const handleCreateChannel = (channelData) => {
//     const newChannel = {
//       id: channels.length + 1,
//       ...channelData,
//       followers: Math.floor(Math.random() * 200000) + 50000,
//     };
//     setChannels([...channels, newChannel]);
//     setOpen(false);
//   };

//   const handleDeleteChannel = (channelId) => {
//     setChannels(channels.filter((channel) => channel.id !== channelId));
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" sx={{ backgroundColor: "#1a73e8" }}>
//         <Toolbar>
//           <Typography
//             variant="h5"
//             component="div"
//             sx={{ flexGrow: 1, fontWeight: "bold" }}
//           >
//             News Provider Dashboard
//           </Typography>
//           <Button
//             variant="contained"
//             startIcon={<AddIcon />}
//             onClick={() => setOpen(true)}
//             sx={{
//               backgroundColor: "white",
//               color: "#1a73e8",
//               "&:hover": {
//                 backgroundColor: "#f1f3f4",
//               },
//             }}
//           >
//             Create News Channel
//           </Button>
//         </Toolbar>
//       </AppBar>

//       <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//         <Grid container spacing={3}>
//           {channels.map((channel) => (
//             <Grid item xs={12} sm={6} md={4} key={channel.id}>
//               <NewsChannelCard
//                 id={channel.id}
//                 name={channel.name}
//                 baseUrl={channel.baseUrl}
//                 logo={channel.logo}
//                 followers={channel.followers}
//                 onDelete={handleDeleteChannel}
//               />
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       <CreateChannelModal
//         open={open}
//         onClose={() => setOpen(false)}
//         onSubmit={handleCreateChannel}
//       />
//     </Box>
//   );
// }

// export default App;


import React, { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import NewsChannelCard from "./CreateChannelNewsCard";
import CreateChannelModal from "./CreateChannel";
import "bootstrap/dist/css/bootstrap.min.css";

function ProviderPage() {
  const [open, setOpen] = useState(false);
  const [channels, setChannels] = useState([]);

  const handleCreateChannel = (channelData) => {
    const newChannel = {
      id: channels.length + 1,
      ...channelData,
      followers: Math.floor(Math.random() * 200000) + 50000,
    };
    setChannels([...channels, newChannel]);
    setOpen(false);
  };

  const handleDeleteChannel = (channelId) => {
    setChannels(channels.filter((channel) => channel.id !== channelId));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#1a73e8" }}>
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            News Provider Dashboard
          </Typography>
        </Toolbar>
      </AppBar>


      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {channels.map((channel) => (
            <Grid item xs={12} sm={6} md={4} key={channel.id}>
              <NewsChannelCard
                id={channel.id}
                name={channel.name}
                baseUrl={channel.baseUrl}
                logo={channel.logo}
                followers={channel.followers}
                onDelete={handleDeleteChannel}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      <CreateChannelModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleCreateChannel}
      />
    </Box>
  );
}

export default ProviderPage;
