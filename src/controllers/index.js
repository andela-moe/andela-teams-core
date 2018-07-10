/**
 * @fileOverview index file for controllers
 *
 * @author Franklin Chieze
 *
 * @requires ./Auth
 * @requires ./Members
 * @requires ./Teams
 * @requires ./Users
 */

import Auth from './Auth';
import Members from './Members';
import Teams from './Teams';
import Users from './Users';

export default {
  Auth,
  Members,
  Teams,
  Users
};
