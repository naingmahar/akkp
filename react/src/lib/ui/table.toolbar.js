import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import { InputBase, Grid, Input, InputAdornment, TextField, FormControl, InputLabel, OutlinedInput } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {useToolbarStyles} from './table.style'
import Dialog from './dialog'

export const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  const { numSelected,formUi } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <Grid container spacing={0}>
          <Grid item xs={1}>
            <Typography className={classes.title} variant="h6" id="tableTitle">
              Sites
            </Typography>
          </Grid>
          <Grid item xs={2}> 
            <FormControl fullWidth className={classes.margin} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={" "}
                className={classes.textField}
                endAdornment={<InputAdornment position="end"> <SearchIcon /></InputAdornment>}
                labelWidth={60}
              />
            </FormControl>
          </Grid>
          <Grid item xs={1}>
            {open && <Dialog data={{title:"Add Site",form:formUi}}  onClose={()=>setOpen(false)}  />}
            <IconButton type="submit" className={classes.iconButton} onClick={()=>setOpen(true)} >
              <AddBoxOutlinedIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>

      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <div hidden><Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
        </div>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};