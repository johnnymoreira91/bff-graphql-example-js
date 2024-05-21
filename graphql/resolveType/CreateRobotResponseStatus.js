module.exports = {
  __resolveType(obj) {
    if (obj.robot) {
      return 'CreateRobotResponse';
    }

    if (obj.status) {
      return 'GraphqlError';
    }

    return null;
  }
}