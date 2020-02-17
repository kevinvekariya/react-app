/*** Created on 13/2/20. */
import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ForumIcon from '@material-ui/icons/Forum';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ListIcon from '@material-ui/icons/List';
import DeleteIcon from '@material-ui/icons/Delete';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import MUIDataTable from "mui-datatables";
import Pagination from "@material-ui/lab/Pagination";
import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import logo from '../assets/images/sitelogo.png';
import './HomePage.css';

const columns = [
  {
    name: "name",
    label: "Name",
    options:{
      filter: true,
    }
  },
  {
    name: "campaign",
    label: "Campaign",
    options:{
      filter: true,
    }
  },
  {
    name: "status",
    label: "Status",
    options:{
      filter: true,
    }
  },
  {
    name: "created at",
    label: "Created at",
    options:{
      filter: true,
    }
  },
  {
    name: "",
    label: "",
  }
];

const data = [
  ["Byron Stephens", "LABROKER2", <span className="status status-new">NEW</span>, "12 days ago", <IconButton className="TableDeleteIcon"><DeleteIcon/></IconButton>],
  ["Marcos Sanchez", "LABROKER2", <span className="status status-pending">PENDING</span>, "12 days ago", <IconButton className="TableDeleteIcon"><DeleteIcon/></IconButton>],
  ["Travis Mendoza", "LABROKER2", <span className="status status-cancel">CANCEL</span>, "12 days ago", <IconButton className="TableDeleteIcon"><DeleteIcon/></IconButton>],
  ["Randolph Howell", "LABROKER2", <span className="status status-new">NEW</span>, "12 days ago", <IconButton className="TableDeleteIcon"><DeleteIcon/></IconButton>],
  ["Ruth Wagnor", "LABROKER2", <span className="status status-new">NEW</span>, "12 days ago", <IconButton className="TableDeleteIcon"><DeleteIcon/></IconButton>],
  ["Josefina Sandoval", "LABROKER2", <span className="status status-new">NEW</span>, "12 days ago", <IconButton className="TableDeleteIcon"><DeleteIcon/></IconButton>],
  ["Jacqueline Maclaughlin", "LABROKER2", <span className="status status-new">NEW</span>, "12 days ago", <IconButton className="TableDeleteIcon"><DeleteIcon/></IconButton>],
  ["Violet Patterson", "LABROKER2", <span className="status status-new">NEW</span>, "12 days ago", <IconButton className="TableDeleteIcon"><DeleteIcon/></IconButton>],
  ["Jacquelyn Porter", "LABROKER2", <span className="status status-new">NEW</span>, "12 days ago", <IconButton className="TableDeleteIcon"><DeleteIcon/></IconButton>],
  ["Adrienne Farmer", "LABROKER2", <span className="status status-new">NEW</span>, "12 days ago", <IconButton className="TableDeleteIcon"><DeleteIcon/></IconButton>]
];

const options = {
  filterType: 'checkbox',
  search: false,
  responsive: "scrollMaxHeight",
  filter: false,
  print: false,
  download: false,
  viewColumns: false,
  pagination: false,
  rowsPerPage: 10
};

const useStyles = makeStyles(theme => ({
  mt10: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  pt10: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
    backgroundColor: '#fafafb',
  },
  header: {
    backgroundColor: '#084e8a',
    boxShadow: 'none'
  },
  headernav: {
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap',
    },
  },
  logo: {
    textDecoration: 'none',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      order: 1
    },
  },
  LogoImg: {
    borderRadius: '8px',
    width: '42px',
    height: '100%',
    marginRight: theme.spacing(1),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  // title: {
  //   display: 'none',
  //   [theme.breakpoints.up('sm')]: {
  //     display: 'block',
  //   },
  // },
  search: {
    position: 'relative',
    borderRadius: '10px',
    backgroundColor: fade(theme.palette.common.white, 1),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    fontSize: '14px',
    color: '#92929d',
    fontFamily: 'Poppins',
    fontWeight: '400',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
      whiteSpace: 'nowrap'
    },
  },
  RightNavIcon: {
    color: '#fff',
  },
  AvatarIcon: {
    border: '2px solid #fff',
  },
  sectionMobile: {
    display: 'flex',
    order: 2,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  tabRoot: {
    minWidth: '100px',
    padding: '22px 12px',
    fontSize: '14px',
    fontFamily: 'Poppins',
    fontWeight: '600',
    textTransform: 'capitalize',
    margin: '0 5px',
    opacity: 1,
    [theme.breakpoints.down('md')]: {
      minWidth: 'inherit',
    },
  },
  indicator: {
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
    height: '100%',
    borderRadius: '16px 16px 0 0',
    top: '10px',
  },
  subhead: {
    backgroundColor: '#fff',
    borderBottom: '1px solid #e2e2ea',
    padding: '6px 0',
    marginBottom: theme.spacing(2),
  },
  btnprimary: {
    borderRadius: '10px',
    backgroundColor: '#084e8a',
    textTransform: 'capitalize',
    fontSize: '14px',
    color: '#ffffff',
    fontFamily: 'Poppins',
    fontWeight: '600',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#084e8a',
    },
  },
  listicon: {
    color: '#084e8a'
  },
  gridicon: {
    color: '#d3d7de',
    transform: 'rotate(180deg)'
  },
  searchtitle: {
    fontSize: '24px',
    color: '#171725',
    fontFamily: 'Poppins',
    fontWeight: '600',
  },
  dropdownlist: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      width: '100%',
      display: 'flex'
    },
  },
  dropdownbtn: {
    borderRadius: '10px',
    backgroundColor: '#f1f1f5',
    boxShadow: 'none',
    fontSize: '14px',
    color: '#696974',
    fontFamily: 'Poppins',
    fontWeight: '400',
    textTransform: 'capitalize',
    '&:last-child': {
      marginLeft: theme.spacing(2),
    },
    [theme.breakpoints.down('sm')]: {
      flex: 1
    },
  },
  datafilter: {
    marginBottom: theme.spacing(2),
  },
  title: {
    fontSize: '20px',
    fontFamily: 'Poppins',
    fontWeight: '600',
  },
  headerTabs: {
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      order: 3,
    },
  },
}));

export default function HomePage() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(0);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit">
          <CalendarTodayIcon />
        </IconButton>
        <p>Calender</p>
      </MenuItem>

      <MenuItem>
        <IconButton color="inherit">
          <ForumIcon />
        </IconButton>
        <p>Chat</p>
      </MenuItem>

      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <NotificationsIcon />
        </IconButton>
        <p>Notifications</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Avatar className={classes.AvatarIcon} alt="User Images" src="https://www.w3schools.com/howto/img_avatar.png" />
        </IconButton>
        <p>Profile</p>
      </MenuItem>

    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.headernav}>
          <a href="#" className={classes.logo}>
            <img src={logo} alt="Logo" className={classes.LogoImg} />
            <Typography className={classes.title} variant="h6" noWrap>
              Company
            </Typography>
          </a>
          <Grid item className={classes.headerTabs}>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" classes={{indicator: classes.indicator}}
                  variant="scrollable"
                  scrollButtons="on">
              <Tab className={classes.tabRoot} label="Prospects" {...a11yProps(0)} />
              <Tab className={classes.tabRoot} label="Pipeline" {...a11yProps(1)} />
              <Tab className={classes.tabRoot} label="Campaigns" {...a11yProps(2)} />
              <Tab className={classes.tabRoot} label="Users" {...a11yProps(3)} />
              <Tab className={classes.tabRoot} label="Lead Round Robin" {...a11yProps(4)} />
              <Tab className={classes.tabRoot} label="Commissions" {...a11yProps(5)} />
            </Tabs>
          </Grid>
          <div className={classes.sectionDesktop}>
            <IconButton className={classes.RightNavIcon}>
              <CalendarTodayIcon />
            </IconButton>
            <IconButton className={classes.RightNavIcon}>
              <ForumIcon />
            </IconButton>
            <IconButton aria-label="show 17 new notifications" className={classes.RightNavIcon}>
                <NotificationsIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              className={classes.RightNavIcon}
            >
              <Avatar className={classes.AvatarIcon} alt="User Images" src="https://www.w3schools.com/howto/img_avatar.png" />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Grid className={classes.subhead}>
        <Container fixed>
          <Grid item xs={12} direction="row" container justify="space-between" alignItems="center">
            <Grid item>
              <Button variant="contained" className={classes.btnprimary}>
                + Add filter
              </Button>
            </Grid>
            <Grid item>
              <IconButton className={classes.listicon}>
                <ListIcon/>
              </IconButton>
              <IconButton className={classes.gridicon}>
                <EqualizerIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <Grid item>
        <Container fixed>
          <Grid item xs={12} direction="row" container justify="space-between" alignItems="center" className={classes.datafilter}>
            <Grid item>
              <Grid item>
                <span className={classes.searchtitle}>620 Prospects</span>
              </Grid>
            </Grid>
            <Grid item container md justify="flex-end">
              <Grid item className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search prospects…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Grid>
              <Grid item className={classes.dropdownlist}>
                <Button
                  variant="contained"
                  color="default"
                  className={classes.dropdownbtn}
                  endIcon={<ExpandMoreIcon />}
                >
                  Bulk Edit(0/620)
                </Button>

                <Button
                  variant="contained"
                  color="default"
                  className={classes.dropdownbtn}
                  endIcon={<ExpandMoreIcon />}
                >
                  Actions
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className="MuldataTableGrid">
            <MUIDataTable
              data={data}
              columns={columns}
              options={options}
              className="MuldataTable"
            />
          </Grid>
          <Grid item xs={12} className={classes.pt10}>
            <Pagination count={9} shape="rounded" color="primary" className="pagination-style"
              size="small"/>
          </Grid>


          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </Container>
      </Grid>

      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
