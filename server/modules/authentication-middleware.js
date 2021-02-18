const rejectUnauthenticatedVet = (req, res, next) => {
  if (req.isAuthenticated() && req.user.type_id === 1) {
    next();
  } else {
    res.sendStatus(403);
  }
};

const rejectUnauthenticatedAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.type_id === 2) {
    next();
  } else {
    res.sendStatus(403);
  }
};

const rejectUnauthenticatedResource = (req, res, next) => {
  if (req.isAuthenticated() && req.user.type_id === 3) {
    next();
  } else {
    res.sendStatus(403);
  }
};

const rejectUnauthenticatedVetAdmin = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.sendStatus(403);
  }
};

const rejectUnauthenticatedGeneral = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.sendStatus(403);
  }
};

module.exports = { rejectUnauthenticatedVet, rejectUnauthenticatedAdmin, 
  rejectUnauthenticatedResource,rejectUnauthenticatedGeneral, 
  rejectUnauthenticatedVetAdmin };