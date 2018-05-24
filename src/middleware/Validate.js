/**
 * @fileOverview Validate middleware
 *
 * @author Franklin Chieze
 *
 * @requires NPM:validatorjs
 */

import Validator from 'validatorjs';

const signinUserRules = {
  displayName: 'required|string',
  email: 'required|email',
  googleId: 'required|numeric',
  photo: 'string',
};
const signupUserRules = {
  displayName: 'required|string',
  email: 'required|email',
  githubUsername: 'required|string',
  googleId: 'required|numeric',
  photo: 'string',
  slackId: 'required|numeric',
};
const createTeamRules = {
  name: 'required|string',
  description: 'string',
  photo: 'string',
  privacy: 'boolean',
  progress: 'numeric'
};
const createTeamMemberRules = {
  role: 'string',
};

/**
* Middleware for validations
* @class Validate
*/
export default class Validate {
  /**
  * Validate sign in user data
  * @param {object} req express request object
  * @param {object} res express response object
  * @param {object} next the next middleware or controller
  *
  * @returns {any} the next middleware or controller
  */
  async signinUser(req, res, next) {
    const validation = new Validator(req.body, signinUserRules);
    validation.fails(() => res.sendFailure([
      ...validation.errors.get('displayName'),
      ...validation.errors.get('email'),
      ...validation.errors.get('googleId'),
      ...validation.errors.get('photo'),
    ]));
    validation.passes(() => next());
  }

  /**
  * Validate sign up user data
  * @param {object} req express request object
  * @param {object} res express response object
  * @param {object} next the next middleware or controller
  *
  * @returns {any} the next middleware or controller
  */
  async signupUser(req, res, next) {
    const validation = new Validator(req.body, signupUserRules);
    validation.fails(() => res.sendFailure([
      ...validation.errors.get('displayName'),
      ...validation.errors.get('email'),
      ...validation.errors.get('githubUsername'),
      ...validation.errors.get('googleId'),
      ...validation.errors.get('photo'),
      ...validation.errors.get('slackId'),
    ]));
    validation.passes(() => next());
  }

  /**
  * Validate team data
  * @param {object} req express request object
  * @param {object} res express response object
  * @param {object} next the next middleware or controller
  *
  * @returns {any} the next middleware or controller
  */
  async createTeam(req, res, next) {
    const validation = new Validator(req.body, createTeamRules);
    validation.fails(() => res.sendFailure([
      ...validation.errors.get('name'),
      ...validation.errors.get('description'),
      ...validation.errors.get('photo'),
      ...validation.errors.get('privacy'),
      ...validation.errors.get('progress'),
    ]));
    validation.passes(() => next());
  }

  /**
  * Validate team member data
  * @param {object} req express request object
  * @param {object} res express response object
  * @param {object} next the next middleware or controller
  *
  * @returns {any} the next middleware or controller
  */
  async createTeamMember(req, res, next) {
    const validation = new Validator(req.body, createTeamMemberRules);
    validation.fails(() => res.sendFailure([
      ...validation.errors.get('role'),
    ]));
    validation.passes(() => next());
  }
}