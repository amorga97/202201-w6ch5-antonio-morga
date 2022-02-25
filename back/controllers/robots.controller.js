import * as crud from '../services/robots-crud.js';
import { robotsConnect } from '../services/db.js';

const Robot = await robotsConnect();

export const getAllRobots = async (req, resp) => {
    crud.getAllRobots(Robot).then((data) => {
        resp.json(data);
    });
};

export const getRobot = async (req, resp) => {
    crud.getRobot(req.params.id, Robot).then((data) => {
        resp.json(data);
    });
};

export const insertRobot = async (req, resp) => {
    crud.insertRobot(req.body, Robot).then((data) => {
        resp.json(data);
    });
};

export const updateRobot = async (req, resp) => {
    crud.updateRobot(req.params.id, req.body, Robot).then((data) => {
        resp.json(data);
    });
};

export const deleteRobot = async (req, resp) => {
    crud.deleteRobot(req.params.id, Robot).then((data) => {
        resp.json(data);
    });
};
