const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
    const prompts = [
      {
        type: 'list',
        name: 'appName',
        message: '请选择模板',
        choices: ['react-antd-mobx-webpack', 'react-mobx-webpack', 'react-typescript-mobx-webpack'],
      },
    ];

    return this.prompt(prompts).then(answers => {
      console.log(answers);
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