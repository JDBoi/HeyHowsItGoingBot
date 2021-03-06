const BaseSoundCommand = require('../../base_image_command')

class Frankie extends BaseSoundCommand {
  constructor(client) {
    super(client, {
      name: 'frankie',
      group: 'sounds',
      memberName: 'frankie',
      description: 'Frankie L. Sagna at your service'
    })
    this.fileNames = ['frankie.jpg']
  }
}

module.exports = Frankie