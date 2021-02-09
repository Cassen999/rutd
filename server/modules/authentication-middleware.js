const rejectUnauthenticatedVet = (req, res, next) => {
  // check if logged in
  if (req.isAuthenticated() && req.user.type_id === 1) {
    // They were authenticated! User may do the next thing
    // Note! They may not be Authorized to do all things
    next();
  } else {
    // failure best handled on the server. do redirect here.
    res.sendStatus(403);
  }
};

const rejectUnauthenticatedAdmin = (req, res, next) => {
  // check if logged in
  if (req.isAuthenticated() && req.user.type_id === 2) {
    // They were authenticated! User may do the next thing
    // Note! They may not be Authorized to do all things
    next();
  } else {
    // failure best handled on the server. do redirect here.
    res.sendStatus(403);
  }
};

const rejectUnauthenticatedResource = (req, res, next) => {
  // check if logged in
  if (req.isAuthenticated() && req.user.type_id === 3) {
    // They were authenticated! User may do the next thing
    // Note! They may not be Authorized to do all things
    next();
  } else {
    // failure best handled on the server. do redirect here.
    res.sendStatus(403);
  }
};

const rejectUnauthenticatedVetAdmin = (req, res, next) => {
  // check if logged in
  if (req.isAuthenticated()) {
    // They were authenticated! User may do the next thing
    // Note! They may not be Authorized to do all things
    next();
  } else {
    // failure best handled on the server. do redirect here.
    res.sendStatus(403);
  }
};

const rejectUnauthenticatedGeneral = (req, res, next) => {
  // check if logged in
  if (req.isAuthenticated()) {
    // They were authenticated! User may do the next thing
    // Note! They may not be Authorized to do all things
    next();
  } else {
    // failure best handled on the server. do redirect here.
    res.sendStatus(403);
  }
};

module.exports = { rejectUnauthenticatedVet, rejectUnauthenticatedAdmin, 
  rejectUnauthenticatedResource,rejectUnauthenticatedGeneral, 
  rejectUnauthenticatedVetAdmin };