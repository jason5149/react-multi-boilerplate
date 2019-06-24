const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'appName',
        message: '请输入项目名',
      },
    ];

    return this.prompt(prompts).then(answers => {
      this.answers = answers;
    });
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false,
    });
  }

  end() {
    this.log('\n', chalk.bold('您可以启动项目了！'));
  }
}