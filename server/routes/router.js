const router = require("express").Router();

// Service router
const serviceRouter = require("./service");

router.use("/", serviceRouter);

// Scheduling router

const schedulingRouter = require("./scheduling");

router.use("/", schedulingRouter);

// Calendar router

const calendarRouter = require("./calendar");

router.use("/", calendarRouter);

// GAuth router

const gAuthRouter = require("./gAuth");

router.use("/", gAuthRouter);

module.exports = router;
