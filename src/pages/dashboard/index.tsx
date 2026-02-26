  import Application from "./components/applications";
  import AreaInstalledCard from "./components/areaInstalledCard"
  import Currentdownload from "./components/currentdownload"
  import Invoices from "./components/Invoices";
  import Users from "./components/users"
  import { Grid ,Box} from "@mui/material";

  const DashbroardBox = () => {
    return (
      <Box sx={{maxWidth: 1470 , mx:"auto"}}> 
        <Grid container  columnSpacing={3} rowSpacing={3}>
            <Users />
          <Grid  size={4}>
            <Currentdownload />
          </Grid>
          <Grid  size={8}>
            <AreaInstalledCard />
          </Grid>
          <Grid size={7.5}>
            <Invoices />
          </Grid>
          <Grid  size={4.5}>
            <Application/>
          </Grid>
        </Grid>
      </Box>
    )
  }

  export default DashbroardBox