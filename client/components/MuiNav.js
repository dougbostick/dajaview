import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  // grow: {
  //   flexGrow: 1,
  // },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    textAlign: 'center',
    margin: '20px',
    fontSize: '2rem',
    color: '#630606',
  },
  options: {
    marginTop: '25px',
    marginBottom: '25px',
    color: '#630606 ',
    textAlign: 'center',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
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
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  rightBar: {
    justifyContent: 'flex-end',
  },
}));

function MuiNav(props) {
  const { auth } = props;
  const classes = useStyles();

  return (
    // <div className='fixed'>
    <div className="contents" style={{position: 'fixed'}}>
      {auth.id ? (
        <div display="flex" flexdirection="row" className="muiNav">
          <div flexgrow={0}>
            <AppBar
              elevation={0}
              position="sticky"
              style={{
                background: 'rgb(253 251 251)',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                marginTop: '50px',
                marginLeft: '90px',
                paddingBottom: '10px',
                borderRadius: '5px'
              }}
            >
              {/* <Typography className={classes.title} variant="h6" noWrap style={{ fontWeight: '300', fontFamily: 'BlinkMacSystemFont'}}>
                <span style={{letterSpacing: '3px'}}>DAJA</span> View
              </Typography> */}
              <img src="/../images/Logo1Red.png" className="logo" style={{margin:'0 auto', height:'250px', width:'250px'}}/>
              <div className={classes.search} style={{alignSelf:'center'}}>
                <div className={classes.searchIcon}>
                  <SearchIcon style={{color: '#630606'}}/>
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }} style= {{border: '1px solid #cbc3c3', borderRadius: '5px'}}
                />
              </div>
              <div className='sideNav-info' style={{display: 'flex', flexDirection: 'column'}}>

              <Button>
                <Link className={classes.options} to={`/profile/${auth?.id}`}>
                  {auth ? (
                    <Avatar src={auth.avatarUrl} style={{ backgroundColor:'linear-gradient(to right, #BF953F, #f7f1b1)', margin: '0 auto 5px' }} />
                  ) : null}{' '}
                  Profile{' '}
                </Link>
              </Button>

              <Button>
                <Link className={classes.options} to="/watchlist">
                  Watch List
                </Link>
              </Button>
              <Button>
                <Link
                  className={classes.options}
                  to={`/friendsList/${auth.id}`}
                >
                  Friends List
                </Link>
              </Button>

              <Button>
                <Link className={classes.options} to="/updateProfile">
                  Update Profile
                </Link>
              </Button>
              </div>
            </AppBar>
          </div>
          {/* <div classname={classes.rightBar} justifyContent="flex-end">
            <AppBar elevation={0} position="sticky">
              <div>Right</div>
              <div>appBar</div>
              <Button className={classes.options}>Messages</Button>
              <Divider />
              <Button className={classes.options}>Watch List</Button>
              <Button className={classes.options}>Watch List</Button>
            </AppBar>
          </div> */}
        </div>
      ) : (
        <div></div>
      )}
    </div>
    // </div>
  );
}

//if we want a right menu

export default connect((state) => state)(MuiNav);
