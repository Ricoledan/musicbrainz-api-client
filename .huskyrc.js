module.exports = {
  hooks: {
    'pre-commit': 'npm run lint',
    'commit-msg': 'npm run commit-msg',
    'pre-push': 'npm run test',
  },
}
